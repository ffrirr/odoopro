#!/usr/bin/env python3
import json
import subprocess
import os

def create_bento_script():
    commands = []

    # Canvas Desktop 1440 x 1400
    commands.append({
        "as": "canvas",
        "command": "node.create",
        "params": {
            "type": "frame",
            "name": "Desktop 1440 - OdooPro Bento Landing",
            "x": 0, "y": 0, "width": 1440, "height": 1400,
            "props": {"fill": "#0B0F19"}
        }
    })

    # =========================================================================
    # 1. TOP NAVIGATION BAR (Fixed h: 72)
    # =========================================================================
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Navbar BG", "parent": {"$ref": "canvas"},
            "x": 0, "y": 0, "width": 1440, "height": 72,
            "props": {"fill": "#0E1320", "stroke": "#232E42", "strokeBottomWeight": 1}
        }
    })
    # Logo
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Nav Logo Box", "parent": {"$ref": "canvas"},
            "x": 130, "y": 18, "width": 36, "height": 36,
            "props": {"fill": "#714B67", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Nav Logo OP", "parent": {"$ref": "canvas"},
            "x": 138, "y": 26, "text": "OP",
            "props": {"fontSize": 16, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Nav Brand Text", "parent": {"$ref": "canvas"},
            "x": 176, "y": 24, "text": "OdooPro",
            "props": {"fontSize": 20, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    # Nav Links
    nav_links = [
        {"x": 480, "t": "Kurikulum"},
        {"x": 580, "t": "Simulasi Ujian"},
        {"x": 700, "t": "Audiobook Studio"},
        {"x": 840, "t": "Spaced Repetition"},
        {"x": 980, "t": "Harga & Voucher"}
    ]
    for nl in nav_links:
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"Nav Link {nl['t']}", "parent": {"$ref": "canvas"},
                "x": nl["x"], "y": 28, "text": nl["t"],
                "props": {"fontSize": 14, "fill": "#CBD5E1"}
            }
        })
    # Nav CTA Button
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Nav CTA BTN", "parent": {"$ref": "canvas"},
            "x": 1140, "y": 16, "width": 170, "height": 40,
            "props": {"fill": "#00D2D3", "cornerRadius": 20}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Nav CTA Text", "parent": {"$ref": "canvas"},
            "x": 1162, "y": 28, "text": "Mulai Belajar Gratis",
            "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#0B0F19"}
        }
    })

    # =========================================================================
    # 2. SECTION HEADER (y: 104)
    # =========================================================================
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Header Tag BG", "parent": {"$ref": "canvas"},
            "x": 600, "y": 104, "width": 240, "height": 26,
            "props": {"fill": "#714B6730", "stroke": "#714B67", "cornerRadius": 13}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Header Tag Text", "parent": {"$ref": "canvas"},
            "x": 612, "y": 110, "text": "BENTO-POWERED LEARNING SYSTEM",
            "props": {"fontSize": 11, "fontStyle": "Bold", "fill": "#E2D9F3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Main Header Title", "parent": {"$ref": "canvas"},
            "x": 340, "y": 142,
            "text": "Satu Platform Modular Menuju Sertifikasi Odoo 19",
            "props": {"fontSize": 32, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Main Header Sub", "parent": {"$ref": "canvas"},
            "x": 360, "y": 186,
            "text": "321 bank soal terverifikasi, simulator ujian Pearson VUE, dan algoritma memori SuperMemo SM-2",
            "props": {"fontSize": 14, "fill": "#94A3B8"}
        }
    })

    # =========================================================================
    # 3. BENTO GRID - ROW 1 (y: 230, Height: 300)
    # Container width: 1180px (x: 130 to 1310)
    # =========================================================================
    # Card 1: Hero Main (Width: 770px)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Bento 1 Hero BG", "parent": {"$ref": "canvas"},
            "x": 130, "y": 230, "width": 770, "height": 300,
            "props": {"fill": "#161E2E", "stroke": "#2B384E", "cornerRadius": 20}
        }
    })
    # Cyan accent stripe
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Bento 1 Accent", "parent": {"$ref": "canvas"},
            "x": 130, "y": 230, "width": 770, "height": 4,
            "props": {"fill": "#00D2D3", "cornerRadius": 2}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Bento 1 Pill", "parent": {"$ref": "canvas"},
            "x": 160, "y": 256, "width": 160, "height": 22,
            "props": {"fill": "#00D2D315", "stroke": "#00D2D340", "cornerRadius": 11}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 1 Pill Text", "parent": {"$ref": "canvas"},
            "x": 172, "y": 260, "text": "🎯 100% EXAM ALIGNED",
            "props": {"fontSize": 10, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 1 Headline", "parent": {"$ref": "canvas"},
            "x": 160, "y": 292,
            "text": "Kuasai Seluruh Skenario Fungsional Odoo 19",
            "props": {"fontSize": 24, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 1 Desc 1", "parent": {"$ref": "canvas"},
            "x": 160, "y": 328,
            "text": "Bukan sekadar bank soal statis. Uji pemahaman transaksi akuntansi perpetual,",
            "props": {"fontSize": 14, "fill": "#CBD5E1"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 1 Desc 2", "parent": {"$ref": "canvas"},
            "x": 160, "y": 350,
            "text": "perhitungan landed cost, multi-step routing inventory, hingga alur manufaktur BOM.",
            "props": {"fontSize": 14, "fill": "#CBD5E1"}
        }
    })
    # Mini stats row inside Card 1
    stats_pills = [
        {"x": 160, "v": "321 Soal", "l": "Bank Terverifikasi"},
        {"x": 330, "v": "70% Skor", "l": "Ambang Lulus Resmi"},
        {"x": 500, "v": "6 Modul", "l": "Kurikulum Lengkap"}
    ]
    for sp in stats_pills:
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": f"Pill BG {sp['v']}", "parent": {"$ref": "canvas"},
                "x": sp["x"], "y": 390, "width": 150, "height": 52,
                "props": {"fill": "#1A2232", "stroke": "#232E42", "cornerRadius": 10}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"Pill Val {sp['v']}", "parent": {"$ref": "canvas"},
                "x": sp["x"] + 14, "y": 398, "text": sp["v"],
                "props": {"fontSize": 15, "fontStyle": "Bold", "fill": "#00D2D3"}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"Pill Lbl {sp['v']}", "parent": {"$ref": "canvas"},
                "x": sp["x"] + 14, "y": 420, "text": sp["l"],
                "props": {"fontSize": 10, "fill": "#94A3B8"}
            }
        })
    # Hero CTA inside Card 1
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Bento 1 BTN", "parent": {"$ref": "canvas"},
            "x": 160, "y": 462, "width": 210, "height": 44,
            "props": {"fill": "#00D2D3", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 1 BTN Text", "parent": {"$ref": "canvas"},
            "x": 182, "y": 476, "text": "⚡ Coba Simulasi Ujian Cepat",
            "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#0B0F19"}
        }
    })

    # Card 2: Readiness Metric Box (Width: 390px, x: 920)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Bento 2 BG", "parent": {"$ref": "canvas"},
            "x": 920, "y": 230, "width": 390, "height": 300,
            "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 20}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 2 Tag", "parent": {"$ref": "canvas"},
            "x": 950, "y": 256, "text": "INDEX KESIAPAN RIIL",
            "props": {"fontSize": 11, "fontStyle": "Bold", "fill": "#94A3B8"}
        }
    })
    # Giant score display
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 2 Score", "parent": {"$ref": "canvas"},
            "x": 950, "y": 284, "text": "78%",
            "props": {"fontSize": 56, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 2 Status", "parent": {"$ref": "canvas"},
            "x": 1100, "y": 306, "text": "SIAP UJIAN ✅",
            "props": {"fontSize": 15, "fontStyle": "Bold", "fill": "#10B981"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 2 Sub", "parent": {"$ref": "canvas"},
            "x": 1100, "y": 330, "text": "Ambang Lulus: 70%",
            "props": {"fontSize": 12, "fill": "#94A3B8"}
        }
    })
    # Progress Track & Fill
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Bento 2 Track", "parent": {"$ref": "canvas"},
            "x": 950, "y": 364, "width": 330, "height": 8,
            "props": {"fill": "#232E42", "cornerRadius": 4}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Bento 2 Fill", "parent": {"$ref": "canvas"},
            "x": 950, "y": 364, "width": 257, "height": 8,
            "props": {"fill": "#00D2D3", "cornerRadius": 4}
        }
    })
    # Target marker
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Bento 2 Marker", "parent": {"$ref": "canvas"},
            "x": 1181, "y": 360, "width": 3, "height": 16,
            "props": {"fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 2 Marker Text", "parent": {"$ref": "canvas"},
            "x": 1140, "y": 384, "text": "Target 70%",
            "props": {"fontSize": 10, "fill": "#94A3B8"}
        }
    })
    # Exam countdown reminder
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Bento 2 Box", "parent": {"$ref": "canvas"},
            "x": 950, "y": 414, "width": 330, "height": 84,
            "props": {"fill": "#1A2232", "stroke": "#2D3B54", "cornerRadius": 10}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 2 VUE Title", "parent": {"$ref": "canvas"},
            "x": 966, "y": 428, "text": "Voucher Pearson VUE Terjadwal",
            "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 2 VUE Days", "parent": {"$ref": "canvas"},
            "x": 966, "y": 452, "text": "⏱️ Sisa 21 Hari Lagi Menuju Hari Ujian",
            "props": {"fontSize": 12, "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 2 VUE Trend", "parent": {"$ref": "canvas"},
            "x": 966, "y": 472, "text": "Progres: +5% akurasi dari evaluasi tryout terakhir",
            "props": {"fontSize": 11, "fill": "#10B981"}
        }
    })

    # =========================================================================
    # 4. BENTO GRID - ROW 2 (y: 550, Height: 240, 3 Equal Columns w: 373)
    # =========================================================================
    col_w = 373
    gap = 20

    # Card 3: Spaced Repetition (x: 130)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Bento 3 SM2 BG", "parent": {"$ref": "canvas"},
            "x": 130, "y": 550, "width": col_w, "height": 240,
            "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 20}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Bento 3 Badge", "parent": {"$ref": "canvas"},
            "x": 154, "y": 574, "width": 140, "height": 22,
            "props": {"fill": "#F59E0B20", "cornerRadius": 4}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 3 Badge Text", "parent": {"$ref": "canvas"},
            "x": 164, "y": 578, "text": "SPACED REPETITION",
            "props": {"fontSize": 10, "fontStyle": "Bold", "fill": "#F59E0B"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 3 Val", "parent": {"$ref": "canvas"},
            "x": 154, "y": 608, "text": "18 Kartu Due",
            "props": {"fontSize": 24, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 3 Desc 1", "parent": {"$ref": "canvas"},
            "x": 154, "y": 644, "text": "Algoritma SuperMemo SM-2 melacak",
            "props": {"fontSize": 13, "fill": "#CBD5E1"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 3 Desc 2", "parent": {"$ref": "canvas"},
            "x": 154, "y": 666, "text": "daya ingat dan menjadwalkan review tepat",
            "props": {"fontSize": 13, "fill": "#CBD5E1"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 3 Desc 3", "parent": {"$ref": "canvas"},
            "x": 154, "y": 688, "text": "sebelum materi terlupakan.",
            "props": {"fontSize": 13, "fill": "#CBD5E1"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 3 CTA", "parent": {"$ref": "canvas"},
            "x": 154, "y": 734, "text": "Mulai Sesi Drill 5 Menit →",
            "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#F59E0B"}
        }
    })

    # Card 4: Audiobook Studio (x: 523)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Bento 4 Audio BG", "parent": {"$ref": "canvas"},
            "x": 523, "y": 550, "width": col_w, "height": 240,
            "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 20}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Bento 4 Badge", "parent": {"$ref": "canvas"},
            "x": 547, "y": 574, "width": 140, "height": 22,
            "props": {"fill": "#00D2D320", "cornerRadius": 4}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 4 Badge Text", "parent": {"$ref": "canvas"},
            "x": 557, "y": 578, "text": "AUDIOBOOK STUDIO",
            "props": {"fontSize": 10, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 4 Val", "parent": {"$ref": "canvas"},
            "x": 547, "y": 608, "text": "4.8 Jam Audio",
            "props": {"fontSize": 24, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 4 Desc 1", "parent": {"$ref": "canvas"},
            "x": 547, "y": 644, "text": "Belajar on-the-go tanpa layar saat",
            "props": {"fontSize": 13, "fill": "#CBD5E1"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 4 Desc 2", "parent": {"$ref": "canvas"},
            "x": 547, "y": 666, "text": "commuting. Penjelasan konsep mendalam",
            "props": {"fontSize": 13, "fill": "#CBD5E1"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 4 Desc 3", "parent": {"$ref": "canvas"},
            "x": 547, "y": 688, "text": "dengan audio voice profesional.",
            "props": {"fontSize": 13, "fill": "#CBD5E1"}
        }
    })
    # Waveform visualization mock
    wave_bars = [12, 24, 18, 32, 28, 16, 22, 36, 14, 26, 30, 20, 15, 28, 34, 18]
    for wi, wh in enumerate(wave_bars):
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": f"Wave {wi}", "parent": {"$ref": "canvas"},
                "x": 547 + wi * 8, "y": 744 - wh // 2, "width": 4, "height": wh,
                "props": {"fill": "#00D2D3", "cornerRadius": 2}
            }
        })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Wave Status", "parent": {"$ref": "canvas"},
            "x": 690, "y": 734, "text": "▶ Play Bab 4",
            "props": {"fontSize": 12, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })

    # Card 5: Consistency Streak (x: 916)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Bento 5 Streak BG", "parent": {"$ref": "canvas"},
            "x": 916, "y": 550, "width": col_w, "height": 240,
            "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 20}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Bento 5 Badge", "parent": {"$ref": "canvas"},
            "x": 940, "y": 574, "width": 140, "height": 22,
            "props": {"fill": "#714B6730", "cornerRadius": 4}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 5 Badge Text", "parent": {"$ref": "canvas"},
            "x": 950, "y": 578, "text": "KONSISTENSI BELAJAR",
            "props": {"fontSize": 10, "fontStyle": "Bold", "fill": "#E2D9F3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 5 Val", "parent": {"$ref": "canvas"},
            "x": 940, "y": 608, "text": "🔥 14 Hari Streak",
            "props": {"fontSize": 24, "fontStyle": "Bold", "fill": "#F59E0B"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 5 Desc 1", "parent": {"$ref": "canvas"},
            "x": 940, "y": 644, "text": "Komitmen belajar konsisten 15 menit",
            "props": {"fontSize": 13, "fill": "#CBD5E1"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 5 Desc 2", "parent": {"$ref": "canvas"},
            "x": 940, "y": 666, "text": "setiap hari menaikkan peluang lulus",
            "props": {"fontSize": 13, "fill": "#CBD5E1"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 5 Desc 3", "parent": {"$ref": "canvas"},
            "x": 940, "y": 688, "text": "sertifikasi hingga 3.2x lipat.",
            "props": {"fontSize": 13, "fill": "#CBD5E1"}
        }
    })
    # 7-day streak dots
    days_labels = ["S", "S", "R", "K", "J", "S", "M"]
    for di, dl in enumerate(days_labels):
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": f"Dot BG {di}", "parent": {"$ref": "canvas"},
                "x": 940 + di * 42, "y": 724, "width": 32, "height": 32,
                "props": {"fill": "#10B981" if di < 6 else "#00D2D3", "cornerRadius": 16}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"Dot Lbl {di}", "parent": {"$ref": "canvas"},
                "x": 950 + di * 42, "y": 732, "text": "✓",
                "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#0B0F19"}
            }
        })

    # =========================================================================
    # 5. BENTO GRID - ROW 3 (y: 810, Height: 330, 2 Asymmetric Columns)
    # Card 6 (Interactive Simulator): w: 680 | Card 7 (Modules Mastery): w: 480
    # =========================================================================
    # Card 6: Interactive Exam Simulator Preview (x: 130)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Bento 6 Exam BG", "parent": {"$ref": "canvas"},
            "x": 130, "y": 810, "width": 680, "height": 330,
            "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 20}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 6 Header", "parent": {"$ref": "canvas"},
            "x": 160, "y": 834, "text": "Simulasi Ujian Realtime & Feedback Instan",
            "props": {"fontSize": 18, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 6 Timer", "parent": {"$ref": "canvas"},
            "x": 670, "y": 834, "text": "⏱️ 47:35 Menit",
            "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    # Question Stem
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Q Stem Box", "parent": {"$ref": "canvas"},
            "x": 160, "y": 866, "width": 620, "height": 52,
            "props": {"fill": "#1A2232", "stroke": "#2B384E", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Q Stem Text", "parent": {"$ref": "canvas"},
            "x": 174, "y": 880,
            "text": "Soal #14: Pada metode Automated Valuation FIFO Odoo 19, akun apa yang di-kredit saat Goods Receipt?",
            "props": {"fontSize": 12, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    # Option 1 (Default)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Opt 1 BG", "parent": {"$ref": "canvas"},
            "x": 160, "y": 928, "width": 620, "height": 40,
            "props": {"fill": "#1A2232", "stroke": "#232E42", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Opt 1 Text", "parent": {"$ref": "canvas"},
            "x": 180, "y": 940, "text": "A.  Accounts Payable (Vendor Liability)",
            "props": {"fontSize": 13, "fill": "#CBD5E1"}
        }
    })
    # Option 2 (Selected Active State)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Opt 2 BG", "parent": {"$ref": "canvas"},
            "x": 160, "y": 978, "width": 620, "height": 44,
            "props": {"fill": "#00D2D315", "stroke": "#00D2D3", "strokeWeight": 2, "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Opt 2 Text", "parent": {"$ref": "canvas"},
            "x": 180, "y": 992,
            "text": "B.  Stock Interim Account (Received) — Terpilih ✓",
            "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Opt 2 Badge", "parent": {"$ref": "canvas"},
            "x": 680, "y": 992, "text": "BENAR 100%",
            "props": {"fontSize": 11, "fontStyle": "Bold", "fill": "#10B981"}
        }
    })
    # Option 3 (Hover state)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Opt 3 BG", "parent": {"$ref": "canvas"},
            "x": 160, "y": 1032, "width": 620, "height": 40,
            "props": {"fill": "#1F2B3E", "stroke": "#00D2D380", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Opt 3 Text", "parent": {"$ref": "canvas"},
            "x": 180, "y": 1044, "text": "C.  Cost of Goods Sold (COGS)",
            "props": {"fontSize": 13, "fill": "#CBD5E1"}
        }
    })
    # Option 4
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Opt 4 BG", "parent": {"$ref": "canvas"},
            "x": 160, "y": 1082, "width": 620, "height": 40,
            "props": {"fill": "#1A2232", "stroke": "#232E42", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Opt 4 Text", "parent": {"$ref": "canvas"},
            "x": 180, "y": 1094, "text": "D.  Inventory Loss Account",
            "props": {"fontSize": 13, "fill": "#CBD5E1"}
        }
    })

    # Card 7: 4 Core Modules Mastery (Width: 480px, x: 830)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Bento 7 Mod BG", "parent": {"$ref": "canvas"},
            "x": 830, "y": 810, "width": 480, "height": 330,
            "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 20}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 7 Title", "parent": {"$ref": "canvas"},
            "x": 856, "y": 834, "text": "Target Penguasaan 4 Pilar Modul",
            "props": {"fontSize": 18, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 7 Sub", "parent": {"$ref": "canvas"},
            "x": 856, "y": 858, "text": "Bobot penilaian resmi ujian Pearson VUE",
            "props": {"fontSize": 12, "fill": "#94A3B8"}
        }
    })
    # 4 Module rows
    bento_mods = [
        {"y": 884, "t": "Accounting & Invoicing", "p": 92, "c": "#10B981", "b": "Mastered"},
        {"y": 942, "t": "Sales, CRM & Point of Sale", "p": 74, "c": "#00D2D3", "b": "In Progress"},
        {"y": 1000, "t": "Inventory, Logistics & MRP", "p": 58, "c": "#F59E0B", "b": "Needs Focus"},
        {"y": 1058, "t": "Purchasing & 3-Way Match", "p": 88, "c": "#10B981", "b": "Mastered"}
    ]
    for bm in bento_mods:
        bmy = bm["y"]
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"Mod T {bm['t']}", "parent": {"$ref": "canvas"},
                "x": 856, "y": bmy, "text": bm["t"],
                "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#F8FAFC"}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"Mod Pct {bm['t']}", "parent": {"$ref": "canvas"},
                "x": 1210, "y": bmy, "text": f"{bm['p']}%",
                "props": {"fontSize": 13, "fontStyle": "Bold", "fill": bm["c"]}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": f"Mod Track {bm['t']}", "parent": {"$ref": "canvas"},
                "x": 856, "y": bmy + 22, "width": 428, "height": 6,
                "props": {"fill": "#232E42", "cornerRadius": 3}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": f"Mod Fill {bm['t']}", "parent": {"$ref": "canvas"},
                "x": 856, "y": bmy + 22, "width": int(428 * bm["p"] / 100), "height": 6,
                "props": {"fill": bm["c"], "cornerRadius": 3}
            }
        })

    # =========================================================================
    # 6. BENTO GRID - ROW 4 (y: 1160, Height: 180, Full-Width Call to Action)
    # =========================================================================
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Bento 8 CTA BG", "parent": {"$ref": "canvas"},
            "x": 130, "y": 1160, "width": 1180, "height": 180,
            "props": {"fill": "#161E2E", "stroke": "#2B384E", "cornerRadius": 20}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 8 Tag", "parent": {"$ref": "canvas"},
            "x": 480, "y": 1184, "text": "🎯 GARANSI KESIAPAN KELULUSAN 100%",
            "props": {"fontSize": 11, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 8 Title", "parent": {"$ref": "canvas"},
            "x": 380, "y": 1210,
            "text": "Mulai Latihan Sekarang & Raih Gelar Konsultan Resmi",
            "props": {"fontSize": 24, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bento 8 Sub", "parent": {"$ref": "canvas"},
            "x": 410, "y": 1244,
            "text": "Akses 321 bank soal terverifikasi, simulator ujian Pearson VUE, dan audio modul lengkap.",
            "props": {"fontSize": 13, "fill": "#94A3B8"}
        }
    })
    # Final CTA Button
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Final CTA BTN", "parent": {"$ref": "canvas"},
            "x": 570, "y": 1274, "width": 280, "height": 46,
            "props": {"fill": "#00D2D3", "cornerRadius": 23}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Final CTA Text", "parent": {"$ref": "canvas"},
            "x": 606, "y": 1288, "text": "Mulai Belajar Sekarang (Gratis)",
            "props": {"fontSize": 14, "fontStyle": "Bold", "fill": "#0B0F19"}
        }
    })

    return commands

if __name__ == "__main__":
    script_data = create_bento_script()
    os.makedirs("designs", exist_ok=True)
    json_path = "designs/build_bento_landing.json"
    figcraft_path = "designs/odoopro-bento-landing.figcraft"
    png_path = "designs/odoopro-bento-landing.png"
    svg_path = "designs/odoopro-bento-landing.svg"

    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(script_data, f, indent=2)
    print(f"Generated {len(script_data)} FigCraft commands in {json_path}")

    # Build FigCraft file
    cmd_run = ["figcraft-cli", "run", json_path, "--out", figcraft_path]
    print("Building Bento Landing in FigCraft...")
    res = subprocess.run(cmd_run, capture_output=True, text=True)
    if res.returncode != 0:
        print("ERROR:")
        print(res.stderr)
        print(res.stdout)
        exit(1)
    print("FigCraft build successful!")

    # Render PNG
    cmd_render = ["figcraft-cli", "render", figcraft_path, "-o", png_path, "--scale", "1.5"]
    print("Rendering high-res Bento PNG...")
    res_render = subprocess.run(cmd_render, capture_output=True, text=True)
    print(res_render.stdout)

    # Export SVG
    cmd_export = ["figcraft-cli", "export", figcraft_path, "-o", "designs/", "--format", "svg"]
    print("Exporting SVG...")
    res_export = subprocess.run(cmd_export, capture_output=True, text=True)
    print(res_export.stdout)
