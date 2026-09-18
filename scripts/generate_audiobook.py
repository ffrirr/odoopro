#!/usr/bin/env python3
"""
OdooPro Bilingual Audiobook Generator
Generates dual-voice (Indonesian + English) neural audio files (.mp3)
for Odoo 19 certification questions using Microsoft Edge TTS.

- Indonesian Speaker (e.g. id-ID-ArdiNeural): Question number, topic, transitions, and explanations.
- English Speaker (e.g. en-US-BrianNeural): Official English questions and multiple-choice options.
"""

import os
import sys
import json
import re
import asyncio
import subprocess
import argparse
from pathlib import Path
import edge_tts

ROOT_DIR = Path(__file__).resolve().parent.parent
DATA_JS = ROOT_DIR / "data.js"
AUDIO_DIR = ROOT_DIR / "audio"
MANIFEST_FILE = AUDIO_DIR / "manifest.json"

DEFAULT_VOICE_ID = "id-ID-ArdiNeural"
DEFAULT_VOICE_EN = "en-US-BrianNeural"
LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H"]


def clean_text(text: str) -> str:
    """Clean markdown, html, URLs, and code snippets for TTS speech synthesis."""
    if not text:
        return ""
    t = re.sub(r"<[^>]+>", "", text)
    t = re.sub(r"https?://\S+", "", t)
    t = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", t)
    t = t.replace("`", "")
    t = t.replace('"', "")
    t = re.sub(r"\s+", " ", t).strip()
    return t


def build_bilingual_segments(q: dict, topic_nama: str) -> list:
    """
    Build structured bilingual narration segments.
    Returns a list of dicts: [{'lang': 'id'|'en', 'text': '...'}]
    """
    q_id = q["id"]
    soal = clean_text(q["soal"])
    pilihan = q.get("pilihan", [])
    jawaban_idx = q.get("jawaban", 0)
    penjelasan = clean_text(q.get("penjelasan", ""))

    correct_letter = LETTERS[jawaban_idx] if 0 <= jawaban_idx < len(LETTERS) else str(jawaban_idx + 1)
    correct_text = clean_text(pilihan[jawaban_idx]) if 0 <= jawaban_idx < len(pilihan) else ""

    # Build options text in English
    options_en_parts = []
    for i, opt in enumerate(pilihan):
        letter = LETTERS[i] if i < len(LETTERS) else str(i + 1)
        options_en_parts.append(f"Option {letter}: {clean_text(opt)}.")
    options_en = " ".join(options_en_parts)

    segments = [
        # 1. Header & Intro (ID)
        {
            "lang": "id",
            "text": f"Soal nomor {q_id}. Topik {topic_nama}. Pertanyaan:"
        },
        # 2. English Question Prompt (EN)
        {
            "lang": "en",
            "text": soal
        },
        # 3. Transition to Options (ID)
        {
            "lang": "id",
            "text": "Pilihan jawaban:"
        },
        # 4. English Options (EN)
        {
            "lang": "en",
            "text": options_en
        },
        # 5. Announcing Correct Answer (ID)
        {
            "lang": "id",
            "text": f"Jawaban yang tepat adalah pilihan {correct_letter}:"
        },
        # 6. Correct Option Text (EN)
        {
            "lang": "en",
            "text": correct_text
        },
        # 7. Indonesian In-depth Explanation (ID)
        {
            "lang": "id",
            "text": f"Pembahasan: {penjelasan}"
        }
    ]

    return segments


def load_data():
    """Load topics and questions from data.js using node."""
    cmd = [
        "node",
        "-e",
        "import('./data.js').then(m => console.log(JSON.stringify({topics: m.TOPICS, questions: m.QUESTIONS})))"
    ]
    res = subprocess.run(cmd, cwd=str(ROOT_DIR), capture_output=True, text=True, check=True)
    return json.loads(res.stdout)


async def synthesize_segment(text: str, voice: str, rate: str) -> bytes:
    """Synthesize a single text segment using edge_tts Communicate and return audio bytes."""
    comm = edge_tts.Communicate(text=text, voice=voice, rate=rate)
    buf = bytearray()
    async for chunk in comm.stream():
        if chunk["type"] == "audio":
            buf.extend(chunk["data"])
    return bytes(buf)


async def generate_single_audio(q: dict, topic_nama: str, voice_id: str, voice_en: str, rate: str, force: bool, sem: asyncio.Semaphore):
    """Generate a combined dual-voice MP3 for a single question."""
    async with sem:
        q_id = q["id"]
        out_file = AUDIO_DIR / f"q_{q_id}.mp3"

        if not force and out_file.exists() and out_file.stat().st_size > 10000:
            return {"id": q_id, "file": f"audio/q_{q_id}.mp3", "size": out_file.stat().st_size, "skipped": True}

        segments = build_bilingual_segments(q, topic_nama)

        for attempt in range(3):
            try:
                audio_parts = []
                for seg in segments:
                    v = voice_id if seg["lang"] == "id" else voice_en
                    part_bytes = await synthesize_segment(seg["text"], v, rate)
                    audio_parts.append(part_bytes)

                combined_bytes = b"".join(audio_parts)

                if len(combined_bytes) > 5000:
                    with open(out_file, "wb") as f:
                        f.write(combined_bytes)

                    size_kb = len(combined_bytes) // 1024
                    print(f"  [OK] Soal #{q_id} ({topic_nama}) -> {out_file.name} ({size_kb} KB) [Bilingual ID+EN]")
                    return {
                        "id": q_id,
                        "file": f"audio/q_{q_id}.mp3",
                        "size": len(combined_bytes),
                        "skipped": False
                    }
                else:
                    raise ValueError("Audio size too small")

            except Exception as err:
                print(f"  [RETRY {attempt+1}/3] Soal #{q_id} error: {err}")
                await asyncio.sleep(2 * (attempt + 1))

        print(f"  [FAILED] Soal #{q_id} after 3 attempts.")
        return {"id": q_id, "file": None, "error": "TTS generation failed"}


async def main_async(args):
    AUDIO_DIR.mkdir(parents=True, exist_ok=True)

    data = load_data()
    topics_map = {t["id"]: t["nama"] for t in data["topics"]}
    questions = data["questions"]

    # Filtering
    if args.id:
        questions = [q for q in questions if q["id"] == args.id]
    elif args.topic:
        questions = [q for q in questions if q["topic"].lower() == args.topic.lower()]
    elif args.range:
        start, end = map(int, args.range.split("-"))
        questions = [q for q in questions if start <= q["id"] <= end]

    total = len(questions)
    if total == 0:
        print("Tidak ada soal yang cocok dengan filter.")
        return

    print(f"=== OdooPro Dual-Voice (Bilingual) Audiobook Generator ===")
    print(f"Total soal target : {total}")
    print(f"Voice ID (Indo)   : {args.voice_id}")
    print(f"Voice EN (Inggris): {args.voice_en}")
    print(f"Speed Rate        : {args.rate}")
    print(f"Audio Directory   : {AUDIO_DIR}")
    print("=========================================================")

    sem = asyncio.Semaphore(args.concurrency)
    tasks = []
    for q in questions:
        t_nama = topics_map.get(q["topic"], q["topic"].title())
        tasks.append(generate_single_audio(q, t_nama, args.voice_id, args.voice_en, args.rate, args.force, sem))

    results = await asyncio.gather(*tasks)

    # Update manifest
    manifest = {
        "updatedAt": subprocess.check_output(["date", "-Iseconds"]).decode().strip(),
        "mode": "bilingual",
        "voice_id": args.voice_id,
        "voice_en": args.voice_en,
        "rate": args.rate,
        "totalQuestions": len(data["questions"]),
        "audios": {}
    }

    if MANIFEST_FILE.exists():
        try:
            with open(MANIFEST_FILE, "r", encoding="utf-8") as f:
                old_m = json.load(f)
                manifest["audios"] = old_m.get("audios", {})
        except Exception:
            manifest["audios"] = {}

    success_count = 0
    for r in results:
        if r and r.get("file"):
            manifest["audios"][str(r["id"])] = {
                "file": r["file"],
                "size": r["size"],
                "mode": "bilingual"
            }
            success_count += 1

    with open(MANIFEST_FILE, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)

    print(f"\nGenerasi bilingual selesai! {success_count}/{total} soal berhasil diproses.")
    print(f"Manifest tersimpan di: {MANIFEST_FILE}")


def main():
    parser = argparse.ArgumentParser(description="Generate OdooPro Bilingual Audiobook using edge-tts")
    parser.add_argument("--all", action="store_true", help="Generate for all questions")
    parser.add_argument("--topic", type=str, help="Filter by topic ID (e.g. introduction, sales, accounting)")
    parser.add_argument("--range", type=str, help="Filter by question ID range (e.g. 1-10)")
    parser.add_argument("--id", type=int, help="Generate a single question by ID")
    parser.add_argument("--voice-id", type=str, default=DEFAULT_VOICE_ID, help=f"Indonesian voice (default: {DEFAULT_VOICE_ID})")
    parser.add_argument("--voice-en", type=str, default=DEFAULT_VOICE_EN, help=f"English voice (default: {DEFAULT_VOICE_EN})")
    parser.add_argument("--rate", type=str, default="+0%", help="TTS playback rate change (default: +0%)")
    parser.add_argument("--force", action="store_true", help="Overwrite existing audio files")
    parser.add_argument("--concurrency", type=int, default=3, help="Concurrent TTS requests (default: 3)")

    args = parser.parse_args()

    if not (args.all or args.topic or args.range or args.id):
        print("Pilih minimal satu filter: --all, --topic <id>, --range <start-end>, atau --id <number>")
        print("Contoh: python scripts/generate_audiobook.py --range 1-5 --force")
        sys.exit(1)

    asyncio.run(main_async(args))


if __name__ == "__main__":
    main()
