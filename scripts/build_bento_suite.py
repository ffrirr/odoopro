#!/usr/bin/env python3
import json
import subprocess
import os

def build_bento_suite():
    commands = []

    # =========================================================================
    # FRAME 1: DESKTOP 1440 - BENTO WITH HOVER HIGHLIGHTS (0, 0)
    # =========================================================================
    commands.append({
        "as": "d_bento",
        "command": "node.create",
        "params": {
            "type": "frame",
            "name": "Desktop 1440 - Bento Grid (Live States)",
            "x": 0, "y": 0, "width": 1440, "height": 1420,
            "props": {"fill": "#0B0F19"}
        }
    })

    # Top Navbar
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Nav BG", "parent": {"$ref": "d_bento"},
            "x": 0, "y": 0, "width": 1440, "height": 72,
            "props": {"fill": "#0E1320", "stroke": "#232E42", "strokeBottomWeight": 1}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Logo Box", "parent": {"$ref": "d_bento"},
            "x": 130, "y": 18, "width": 36, "height": 36,
            "props": {"fill": "#714B67", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Logo Text", "parent": {"$ref": "d_bento"},
            "x": 138, "y": 26, "text": "OP",
            "props": {"fontSize": 16, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Brand", "parent": {"$ref": "d_bento"},
            "x": 176, "y": 24, "text": "OdooPro",
            "props": {"fontSize": 20, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    nav_links = [
        {"x": 480, "t": "Kurikulum"}, {"x": 580, "t": "Simulasi Ujian"},
        {"x": 700, "t": "Audiobook"}, {"x": 830, "t": "Flashcards"}, {"x": 960, "t": "Voucher VUE"}
    ]
    for nl in nav_links:
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"NL {nl['t']}", "parent": {"$ref": "d_bento"},
                "x": nl["x"], "y": 28, "text": nl["t"], "props": {"fontSize": 14, "fill": "#CBD5E1"}
            }
        })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Nav BTN", "parent": {"$ref": "d_bento"},
            "x": 1140, "y": 16, "width": 170, "height": 40,
            "props": {"fill": "#00D2D3", "cornerRadius": 20}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Nav BTN Text", "parent": {"$ref": "d_bento"},
            "x": 1162, "y": 28, "text": "Mulai Belajar Gratis",
            "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#0B0F19"}
        }
    })

    # Header
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Header Tag BG", "parent": {"$ref": "d_bento"},
            "x": 590, "y": 104, "width": 260, "height": 26,
            "props": {"fill": "#714B6730", "stroke": "#714B67", "cornerRadius": 13}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Header Tag Text", "parent": {"$ref": "d_bento"},
            "x": 602, "y": 110, "text": "BENTO MODULAR LEARNING ECOSYSTEM",
            "props": {"fontSize": 10, "fontStyle": "Bold", "fill": "#E2D9F3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Main Title", "parent": {"$ref": "d_bento"},
            "x": 340, "y": 142, "text": "Satu Platform Modular Menuju Sertifikasi Odoo 19",
            "props": {"fontSize": 32, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Main Sub", "parent": {"$ref": "d_bento"},
            "x": 360, "y": 186,
            "text": "321 bank soal terverifikasi, simulator ujian Pearson VUE, dan spaced repetition SM-2",
            "props": {"fontSize": 14, "fill": "#94A3B8"}
        }
    })

    # Bento Row 1
    # Card 1 (Hero Main)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "C1 Hero", "parent": {"$ref": "d_bento"},
            "x": 130, "y": 230, "width": 770, "height": 300,
            "props": {"fill": "#161E2E", "stroke": "#2B384E", "cornerRadius": 20}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "C1 Accent", "parent": {"$ref": "d_bento"},
            "x": 130, "y": 230, "width": 770, "height": 4, "props": {"fill": "#00D2D3", "cornerRadius": 2}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C1 Head", "parent": {"$ref": "d_bento"},
            "x": 160, "y": 280, "text": "Kuasai Seluruh Skenario Fungsional Odoo 19",
            "props": {"fontSize": 24, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C1 Sub", "parent": {"$ref": "d_bento"},
            "x": 160, "y": 318,
            "text": "Uji pemahaman alur bisnis nyata: akuntansi perpetual, landed cost, BOM manufaktur, dan rekonsiliasi bank.",
            "props": {"fontSize": 14, "fill": "#CBD5E1"}
        }
    })
    # Mini stats in Card 1
    pills = [{"x": 160, "v": "321 Soal", "l": "Bank Terverifikasi"}, {"x": 330, "v": "70% Skor", "l": "Ambang Lulus"}, {"x": 500, "v": "6 Modul", "l": "Kurikulum Lengkap"}]
    for p in pills:
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": f"Pill {p['v']}", "parent": {"$ref": "d_bento"},
                "x": p["x"], "y": 380, "width": 150, "height": 52,
                "props": {"fill": "#1A2232", "stroke": "#232E42", "cornerRadius": 10}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"PV {p['v']}", "parent": {"$ref": "d_bento"},
                "x": p["x"] + 14, "y": 388, "text": p["v"], "props": {"fontSize": 15, "fontStyle": "Bold", "fill": "#00D2D3"}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"PL {p['v']}", "parent": {"$ref": "d_bento"},
                "x": p["x"] + 14, "y": 410, "text": p["l"], "props": {"fontSize": 10, "fill": "#94A3B8"}
            }
        })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "C1 BTN", "parent": {"$ref": "d_bento"},
            "x": 160, "y": 456, "width": 210, "height": 44,
            "props": {"fill": "#00D2D3", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C1 BTN Text", "parent": {"$ref": "d_bento"},
            "x": 182, "y": 470, "text": "⚡ Coba Simulasi Ujian Cepat",
            "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#0B0F19"}
        }
    })

    # Card 2 (Hover State Highlighted with Cyan Border & Glow)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "C2 Hover Card", "parent": {"$ref": "d_bento"},
            "x": 920, "y": 226, "width": 390, "height": 304,
            "props": {
                "fill": "#192436",
                "stroke": "#00D2D3",
                "strokeWeight": 1.5,
                "cornerRadius": 20
            }
        }
    })
    # Badge showing Hover Active
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "C2 Hover Pill", "parent": {"$ref": "d_bento"},
            "x": 1170, "y": 242, "width": 120, "height": 22,
            "props": {"fill": "#00D2D3", "cornerRadius": 11}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C2 Hover Text", "parent": {"$ref": "d_bento"},
            "x": 1184, "y": 246, "text": "HOVER STATE 👆",
            "props": {"fontSize": 10, "fontStyle": "Bold", "fill": "#0B0F19"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C2 Tag", "parent": {"$ref": "d_bento"},
            "x": 950, "y": 256, "text": "INDEX KESIAPAN RIIL",
            "props": {"fontSize": 11, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C2 Score", "parent": {"$ref": "d_bento"},
            "x": 950, "y": 284, "text": "78%",
            "props": {"fontSize": 56, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C2 Status", "parent": {"$ref": "d_bento"},
            "x": 1100, "y": 306, "text": "SIAP UJIAN ✅",
            "props": {"fontSize": 15, "fontStyle": "Bold", "fill": "#10B981"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C2 Sub", "parent": {"$ref": "d_bento"},
            "x": 1100, "y": 330, "text": "Ambang Lulus: 70%",
            "props": {"fontSize": 12, "fill": "#CBD5E1"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "C2 Track", "parent": {"$ref": "d_bento"},
            "x": 950, "y": 364, "width": 330, "height": 8, "props": {"fill": "#232E42", "cornerRadius": 4}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "C2 Fill", "parent": {"$ref": "d_bento"},
            "x": 950, "y": 364, "width": 257, "height": 8, "props": {"fill": "#00D2D3", "cornerRadius": 4}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "C2 Box", "parent": {"$ref": "d_bento"},
            "x": 950, "y": 414, "width": 330, "height": 84,
            "props": {"fill": "#1E2A3C", "stroke": "#00D2D350", "cornerRadius": 10}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C2 VUE Title", "parent": {"$ref": "d_bento"},
            "x": 966, "y": 428, "text": "Voucher Pearson VUE Terjadwal",
            "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C2 VUE Days", "parent": {"$ref": "d_bento"},
            "x": 966, "y": 452, "text": "⏱️ Sisa 21 Hari Lagi Menuju Hari Ujian",
            "props": {"fontSize": 12, "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C2 VUE Trend", "parent": {"$ref": "d_bento"},
            "x": 966, "y": 472, "text": "Elevasi Hover: transform -4px & cyan glow 20px",
            "props": {"fontSize": 11, "fill": "#10B981"}
        }
    })

    # Bento Row 2 (3 Columns)
    col_w = 373
    # Card 3 (SM-2)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "C3 SM2", "parent": {"$ref": "d_bento"},
            "x": 130, "y": 550, "width": col_w, "height": 240,
            "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 20}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C3 T", "parent": {"$ref": "d_bento"},
            "x": 154, "y": 574, "text": "SPACED REPETITION SM-2",
            "props": {"fontSize": 11, "fontStyle": "Bold", "fill": "#F59E0B"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C3 V", "parent": {"$ref": "d_bento"},
            "x": 154, "y": 604, "text": "18 Kartu Due",
            "props": {"fontSize": 24, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C3 Sub", "parent": {"$ref": "d_bento"},
            "x": 154, "y": 640, "text": "Review adaptif menagih memori sebelum terlupakan.",
            "props": {"fontSize": 13, "fill": "#CBD5E1"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C3 Link", "parent": {"$ref": "d_bento"},
            "x": 154, "y": 734, "text": "Mulai Sesi Drill 5 Menit →",
            "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#F59E0B"}
        }
    })

    # Card 4 (Audiobook)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "C4 Audio", "parent": {"$ref": "d_bento"},
            "x": 523, "y": 550, "width": col_w, "height": 240,
            "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 20}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C4 T", "parent": {"$ref": "d_bento"},
            "x": 547, "y": 574, "text": "AUDIOBOOK STUDIO",
            "props": {"fontSize": 11, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C4 V", "parent": {"$ref": "d_bento"},
            "x": 547, "y": 604, "text": "4.8 Jam Audio",
            "props": {"fontSize": 24, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C4 Sub", "parent": {"$ref": "d_bento"},
            "x": 547, "y": 640, "text": "Belajar on-the-go tanpa layar saat commuting.",
            "props": {"fontSize": 13, "fill": "#CBD5E1"}
        }
    })
    wave_bars = [12, 24, 18, 32, 28, 16, 22, 36, 14, 26, 30, 20, 15, 28, 34, 18]
    for wi, wh in enumerate(wave_bars):
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": f"W {wi}", "parent": {"$ref": "d_bento"},
                "x": 547 + wi * 8, "y": 744 - wh // 2, "width": 4, "height": wh,
                "props": {"fill": "#00D2D3", "cornerRadius": 2}
            }
        })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "W Play", "parent": {"$ref": "d_bento"},
            "x": 690, "y": 734, "text": "▶ Play Bab 4",
            "props": {"fontSize": 12, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })

    # Card 5 (Streak)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "C5 Streak", "parent": {"$ref": "d_bento"},
            "x": 916, "y": 550, "width": col_w, "height": 240,
            "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 20}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C5 T", "parent": {"$ref": "d_bento"},
            "x": 940, "y": 574, "text": "KONSISTENSI BELAJAR",
            "props": {"fontSize": 11, "fontStyle": "Bold", "fill": "#E2D9F3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C5 V", "parent": {"$ref": "d_bento"},
            "x": 940, "y": 604, "text": "🔥 14 Hari Streak",
            "props": {"fontSize": 24, "fontStyle": "Bold", "fill": "#F59E0B"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C5 Sub", "parent": {"$ref": "d_bento"},
            "x": 940, "y": 640, "text": "15 menit konsisten tiap hari menaikkan peluang lulus 3.2x.",
            "props": {"fontSize": 13, "fill": "#CBD5E1"}
        }
    })
    for di in range(7):
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": f"Dot {di}", "parent": {"$ref": "d_bento"},
                "x": 940 + di * 42, "y": 724, "width": 32, "height": 32,
                "props": {"fill": "#10B981" if di < 6 else "#00D2D3", "cornerRadius": 16}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"Dot T {di}", "parent": {"$ref": "d_bento"},
                "x": 950 + di * 42, "y": 732, "text": "✓",
                "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#0B0F19"}
            }
        })

    # Bento Row 3 (Exam Simulator & Modules)
    # Card 6
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "C6 Exam", "parent": {"$ref": "d_bento"},
            "x": 130, "y": 810, "width": 680, "height": 330,
            "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 20}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C6 Title", "parent": {"$ref": "d_bento"},
            "x": 160, "y": 834, "text": "Simulasi Ujian Realtime & Interaksi Jawaban",
            "props": {"fontSize": 18, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C6 Time", "parent": {"$ref": "d_bento"},
            "x": 670, "y": 834, "text": "⏱️ 47:35 Menit",
            "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    # Question text
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "C6 QBox", "parent": {"$ref": "d_bento"},
            "x": 160, "y": 866, "width": 620, "height": 52,
            "props": {"fill": "#1A2232", "stroke": "#2B384E", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C6 QText", "parent": {"$ref": "d_bento"},
            "x": 174, "y": 880,
            "text": "Soal #14: Pada metode Automated Valuation FIFO Odoo 19, akun apa yang di-kredit saat Goods Receipt?",
            "props": {"fontSize": 12, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    # Option 1 (Default)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "C6 O1", "parent": {"$ref": "d_bento"},
            "x": 160, "y": 928, "width": 620, "height": 40,
            "props": {"fill": "#1A2232", "stroke": "#232E42", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C6 O1T", "parent": {"$ref": "d_bento"},
            "x": 180, "y": 940, "text": "A.  Accounts Payable (Vendor Liability) — [Default State]",
            "props": {"fontSize": 12, "fill": "#CBD5E1"}
        }
    })
    # Option 2 (Selected Active)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "C6 O2", "parent": {"$ref": "d_bento"},
            "x": 160, "y": 978, "width": 620, "height": 44,
            "props": {"fill": "#00D2D315", "stroke": "#00D2D3", "strokeWeight": 2, "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C6 O2T", "parent": {"$ref": "d_bento"},
            "x": 180, "y": 992, "text": "B.  Stock Interim Account (Received) — [Selected Active State] ✓",
            "props": {"fontSize": 12, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    # Option 3 (Hover State Highlight)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "C6 O3", "parent": {"$ref": "d_bento"},
            "x": 160, "y": 1032, "width": 620, "height": 42,
            "props": {"fill": "#1F2B3E", "stroke": "#00D2D380", "strokeWeight": 1.5, "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C6 O3T", "parent": {"$ref": "d_bento"},
            "x": 180, "y": 1046, "text": "C.  Cost of Goods Sold (COGS) — [Hover State 👆 Cyan Glow]",
            "props": {"fontSize": 12, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    # Option 4
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "C6 O4", "parent": {"$ref": "d_bento"},
            "x": 160, "y": 1084, "width": 620, "height": 40,
            "props": {"fill": "#1A2232", "stroke": "#232E42", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C6 O4T", "parent": {"$ref": "d_bento"},
            "x": 180, "y": 1096, "text": "D.  Inventory Loss Account — [Default State]",
            "props": {"fontSize": 12, "fill": "#CBD5E1"}
        }
    })

    # Card 7 (Modules Mastery)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "C7 Mod", "parent": {"$ref": "d_bento"},
            "x": 830, "y": 810, "width": 480, "height": 330,
            "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 20}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C7 Title", "parent": {"$ref": "d_bento"},
            "x": 856, "y": 834, "text": "Target Penguasaan 4 Pilar Modul",
            "props": {"fontSize": 18, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    b_mods = [
        {"y": 884, "t": "Accounting & Invoicing", "p": 92, "c": "#10B981"},
        {"y": 942, "t": "Sales, CRM & Point of Sale", "p": 74, "c": "#00D2D3"},
        {"y": 1000, "t": "Inventory, Logistics & MRP", "p": 58, "c": "#F59E0B"},
        {"y": 1058, "t": "Purchasing & 3-Way Match", "p": 88, "c": "#10B981"}
    ]
    for bm in b_mods:
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"BMT {bm['t']}", "parent": {"$ref": "d_bento"},
                "x": 856, "y": bm["y"], "text": bm["t"], "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#F8FAFC"}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"BMP {bm['t']}", "parent": {"$ref": "d_bento"},
                "x": 1210, "y": bm["y"], "text": f"{bm['p']}%", "props": {"fontSize": 13, "fontStyle": "Bold", "fill": bm["c"]}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": f"BMTR {bm['t']}", "parent": {"$ref": "d_bento"},
                "x": 856, "y": bm["y"] + 22, "width": 428, "height": 6, "props": {"fill": "#232E42", "cornerRadius": 3}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": f"BMFL {bm['t']}", "parent": {"$ref": "d_bento"},
                "x": 856, "y": bm["y"] + 22, "width": int(428 * bm["p"] / 100), "height": 6, "props": {"fill": bm["c"], "cornerRadius": 3}
            }
        })

    # Card 8 (Final Bottom CTA)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "C8 CTA", "parent": {"$ref": "d_bento"},
            "x": 130, "y": 1160, "width": 1180, "height": 180,
            "props": {"fill": "#161E2E", "stroke": "#2B384E", "cornerRadius": 20}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C8 Tag", "parent": {"$ref": "d_bento"},
            "x": 480, "y": 1184, "text": "🎯 GARANSI KESIAPAN KELULUSAN 100%",
            "props": {"fontSize": 11, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C8 Title", "parent": {"$ref": "d_bento"},
            "x": 380, "y": 1210, "text": "Mulai Latihan Sekarang & Raih Gelar Konsultan Resmi",
            "props": {"fontSize": 24, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "C8 BTN", "parent": {"$ref": "d_bento"},
            "x": 570, "y": 1264, "width": 280, "height": 46,
            "props": {"fill": "#00D2D3", "cornerRadius": 23}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "C8 BTN Text", "parent": {"$ref": "d_bento"},
            "x": 606, "y": 1278, "text": "Mulai Belajar Sekarang (Gratis)",
            "props": {"fontSize": 14, "fontStyle": "Bold", "fill": "#0B0F19"}
        }
    })

    # =========================================================================
    # FRAME 2: MOBILE 390 - BENTO REFLOW VERTICAL STACK (x: 1520, y: 0)
    # =========================================================================
    commands.append({
        "as": "m_bento",
        "command": "node.create",
        "params": {
            "type": "frame",
            "name": "Mobile 390 - Bento Responsive Reflow",
            "x": 1520, "y": 0, "width": 390, "height": 1640,
            "props": {"fill": "#0B0F19"}
        }
    })

    # Mobile Header (60px)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "MB Header", "parent": {"$ref": "m_bento"},
            "x": 0, "y": 0, "width": 390, "height": 60,
            "props": {"fill": "#0E1320", "stroke": "#232E42", "strokeBottomWeight": 1}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "MB Logo", "parent": {"$ref": "m_bento"},
            "x": 16, "y": 14, "width": 32, "height": 32, "props": {"fill": "#714B67", "cornerRadius": 6}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB Logo T", "parent": {"$ref": "m_bento"},
            "x": 23, "y": 21, "text": "OP", "props": {"fontSize": 14, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB Brand", "parent": {"$ref": "m_bento"},
            "x": 56, "y": 20, "text": "OdooPro", "props": {"fontSize": 17, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "MB Streak Pill", "parent": {"$ref": "m_bento"},
            "x": 278, "y": 14, "width": 96, "height": 32, "props": {"fill": "#1A2232", "stroke": "#232E42", "cornerRadius": 16}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB Streak T", "parent": {"$ref": "m_bento"},
            "x": 290, "y": 22, "text": "🔥 14 Hari", "props": {"fontSize": 11, "fontStyle": "Bold", "fill": "#F59E0B"}
        }
    })

    # Mobile Card 1: Hero Reflow (w: 358, h: 220)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "MB C1", "parent": {"$ref": "m_bento"},
            "x": 16, "y": 76, "width": 358, "height": 220,
            "props": {"fill": "#161E2E", "stroke": "#2B384E", "cornerRadius": 16}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB C1 Tag", "parent": {"$ref": "m_bento"},
            "x": 32, "y": 94, "text": "🎯 100% EXAM ALIGNED", "props": {"fontSize": 10, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB C1 Title", "parent": {"$ref": "m_bento"},
            "x": 32, "y": 116, "text": "Sertifikasi Odoo 19 Fungsional", "props": {"fontSize": 18, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB C1 Desc", "parent": {"$ref": "m_bento"},
            "x": 32, "y": 142, "text": "321 bank soal terverifikasi, latihan alur jurnal akuntansi, landed cost, dan BOM.", "props": {"fontSize": 12, "fill": "#CBD5E1"}
        }
    })
    # Mobile Touch Button (44px min tap target)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "MB C1 BTN", "parent": {"$ref": "m_bento"},
            "x": 32, "y": 234, "width": 326, "height": 44, "props": {"fill": "#00D2D3", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB C1 BTN T", "parent": {"$ref": "m_bento"},
            "x": 114, "y": 248, "text": "⚡ Coba Simulasi Ujian Gratis", "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#0B0F19"}
        }
    })

    # Mobile Card 2: Readiness Radar (w: 358, h: 180)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "MB C2", "parent": {"$ref": "m_bento"},
            "x": 16, "y": 312, "width": 358, "height": 180,
            "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 16}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB C2 Tag", "parent": {"$ref": "m_bento"},
            "x": 32, "y": 328, "text": "INDEX KESIAPAN RIIL", "props": {"fontSize": 10, "fontStyle": "Bold", "fill": "#94A3B8"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB C2 Val", "parent": {"$ref": "m_bento"},
            "x": 32, "y": 350, "text": "78%", "props": {"fontSize": 42, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB C2 Stat", "parent": {"$ref": "m_bento"},
            "x": 140, "y": 362, "text": "SIAP UJIAN ✅ (Target 70%)", "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#10B981"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB C2 Days", "parent": {"$ref": "m_bento"},
            "x": 140, "y": 384, "text": "⏱️ Sisa 21 Hari ke Pearson VUE", "props": {"fontSize": 12, "fill": "#CBD5E1"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "MB C2 Track", "parent": {"$ref": "m_bento"},
            "x": 32, "y": 418, "width": 326, "height": 6, "props": {"fill": "#232E42", "cornerRadius": 3}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "MB C2 Fill", "parent": {"$ref": "m_bento"},
            "x": 32, "y": 418, "width": int(326 * 0.78), "height": 6, "props": {"fill": "#00D2D3", "cornerRadius": 3}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB C2 Sub", "parent": {"$ref": "m_bento"},
            "x": 32, "y": 444, "text": "73 soal butuh pengulangan minggu ini untuk menjaga daya ingat.", "props": {"fontSize": 11, "fill": "#94A3B8"}
        }
    })

    # Mobile 2-Column Mini Bento (Cards 3 & 5 side by side: w: 173)
    # SM-2 Box
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "MB SM2", "parent": {"$ref": "m_bento"},
            "x": 16, "y": 508, "width": 173, "height": 130,
            "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 14}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB SM2 T", "parent": {"$ref": "m_bento"},
            "x": 28, "y": 522, "text": "SPACED REPETITION", "props": {"fontSize": 9, "fontStyle": "Bold", "fill": "#F59E0B"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB SM2 V", "parent": {"$ref": "m_bento"},
            "x": 28, "y": 544, "text": "18 Kartu", "props": {"fontSize": 20, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB SM2 S", "parent": {"$ref": "m_bento"},
            "x": 28, "y": 576, "text": "Wajib diulang hari ini", "props": {"fontSize": 11, "fill": "#CBD5E1"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB SM2 Link", "parent": {"$ref": "m_bento"},
            "x": 28, "y": 604, "text": "Drill 5 Mnt →", "props": {"fontSize": 11, "fontStyle": "Bold", "fill": "#F59E0B"}
        }
    })

    # Audio Box
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "MB Aud", "parent": {"$ref": "m_bento"},
            "x": 201, "y": 508, "width": 173, "height": 130,
            "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 14}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB Aud T", "parent": {"$ref": "m_bento"},
            "x": 213, "y": 522, "text": "AUDIO STUDIO", "props": {"fontSize": 9, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB Aud V", "parent": {"$ref": "m_bento"},
            "x": 213, "y": 544, "text": "4.8 Jam", "props": {"fontSize": 20, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB Aud S", "parent": {"$ref": "m_bento"},
            "x": 213, "y": 576, "text": "Belajar saat commute", "props": {"fontSize": 11, "fill": "#CBD5E1"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB Aud Link", "parent": {"$ref": "m_bento"},
            "x": 213, "y": 604, "text": "▶ Play Bab 4", "props": {"fontSize": 11, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })

    # Mobile Card 6: Interactive Exam Simulator (w: 358, h: 320)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "MB C6 Exam", "parent": {"$ref": "m_bento"},
            "x": 16, "y": 654, "width": 358, "height": 320,
            "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 16}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB C6 Head", "parent": {"$ref": "m_bento"},
            "x": 32, "y": 672, "text": "Simulasi Ujian Realtime", "props": {"fontSize": 15, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB C6 Tim", "parent": {"$ref": "m_bento"},
            "x": 270, "y": 672, "text": "⏱️ 47:35", "props": {"fontSize": 12, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    # Question text
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB Q1", "parent": {"$ref": "m_bento"},
            "x": 32, "y": 700, "text": "Soal #14: Di Odoo 19 FIFO Perpetual Valuation,",
            "props": {"fontSize": 12, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB Q2", "parent": {"$ref": "m_bento"},
            "x": 32, "y": 718, "text": "akun apa yang di-kredit saat Goods Receipt?",
            "props": {"fontSize": 12, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    # Mobile Options (min 44px tap targets)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "MB Opt 1", "parent": {"$ref": "m_bento"},
            "x": 32, "y": 744, "width": 326, "height": 44,
            "props": {"fill": "#1A2232", "stroke": "#232E42", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB Opt 1T", "parent": {"$ref": "m_bento"},
            "x": 48, "y": 758, "text": "A.  Accounts Payable (Vendor)", "props": {"fontSize": 12, "fill": "#CBD5E1"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "MB Opt 2", "parent": {"$ref": "m_bento"},
            "x": 32, "y": 796, "width": 326, "height": 44,
            "props": {"fill": "#00D2D315", "stroke": "#00D2D3", "strokeWeight": 1.5, "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB Opt 2T", "parent": {"$ref": "m_bento"},
            "x": 48, "y": 810, "text": "B.  Stock Interim Account (Received) ✓", "props": {"fontSize": 12, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "MB Opt 3", "parent": {"$ref": "m_bento"},
            "x": 32, "y": 848, "width": 326, "height": 44,
            "props": {"fill": "#1A2232", "stroke": "#232E42", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB Opt 3T", "parent": {"$ref": "m_bento"},
            "x": 48, "y": 862, "text": "C.  Cost of Goods Sold (COGS)", "props": {"fontSize": 12, "fill": "#CBD5E1"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB Feedback", "parent": {"$ref": "m_bento"},
            "x": 32, "y": 912, "text": "Jawaban Benar! Akun interim menampung penerimaan fisik sebelum Vendor Bill.",
            "props": {"fontSize": 11, "fill": "#10B981"}
        }
    })

    # Mobile Card 7: 4 Pillars Modules (w: 358, h: 280)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "MB C7 Mods", "parent": {"$ref": "m_bento"},
            "x": 16, "y": 990, "width": 358, "height": 280,
            "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 16}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB C7 Head", "parent": {"$ref": "m_bento"},
            "x": 32, "y": 1010, "text": "Penguasaan 4 Pilar Modul", "props": {"fontSize": 15, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    mb_mods = [
        {"y": 1042, "t": "Accounting & Finance", "p": 92, "c": "#10B981"},
        {"y": 1098, "t": "Sales, CRM & POS", "p": 74, "c": "#00D2D3"},
        {"y": 1154, "t": "Inventory, Logistics & MRP", "p": 58, "c": "#F59E0B"},
        {"y": 1210, "t": "Purchasing & 3-Way Match", "p": 88, "c": "#10B981"}
    ]
    for mm in mb_mods:
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"MMT {mm['t']}", "parent": {"$ref": "m_bento"},
                "x": 32, "y": mm["y"], "text": mm["t"], "props": {"fontSize": 12, "fontStyle": "Bold", "fill": "#F8FAFC"}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"MMP {mm['t']}", "parent": {"$ref": "m_bento"},
                "x": 324, "y": mm["y"], "text": f"{mm['p']}%", "props": {"fontSize": 12, "fontStyle": "Bold", "fill": mm["c"]}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": f"MMTR {mm['t']}", "parent": {"$ref": "m_bento"},
                "x": 32, "y": mm["y"] + 20, "width": 326, "height": 4, "props": {"fill": "#232E42", "cornerRadius": 2}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": f"MMFL {mm['t']}", "parent": {"$ref": "m_bento"},
                "x": 32, "y": mm["y"] + 20, "width": int(326 * mm["p"] / 100), "height": 4, "props": {"fill": mm["c"], "cornerRadius": 2}
            }
        })

    # Mobile Card 8: Bottom Call to Action (w: 358, h: 180)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "MB C8 CTA", "parent": {"$ref": "m_bento"},
            "x": 16, "y": 1286, "width": 358, "height": 180,
            "props": {"fill": "#161E2E", "stroke": "#2B384E", "cornerRadius": 16}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB C8 Tag", "parent": {"$ref": "m_bento"},
            "x": 80, "y": 1308, "text": "🎯 GARANSI LULUS SERTIFIKASI", "props": {"fontSize": 10, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB C8 Tit", "parent": {"$ref": "m_bento"},
            "x": 48, "y": 1332, "text": "Raih Gelar Konsultan Resmi", "props": {"fontSize": 18, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "MB C8 BTN", "parent": {"$ref": "m_bento"},
            "x": 32, "y": 1386, "width": 326, "height": 46, "props": {"fill": "#00D2D3", "cornerRadius": 23}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "MB C8 BTN T", "parent": {"$ref": "m_bento"},
            "x": 104, "y": 1400, "text": "Mulai Belajar Sekarang (Gratis)", "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#0B0F19"}
        }
    })

    # Mobile Bottom Nav (Thumb zone: h: 72)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "MB Nav Bar", "parent": {"$ref": "m_bento"},
            "x": 0, "y": 1568, "width": 390, "height": 72,
            "props": {"fill": "#0E1320", "stroke": "#232E42", "strokeTopWeight": 1}
        }
    })
    b_tabs = [
        {"x": 24, "icon": "⚡", "label": "Bento", "active": True},
        {"x": 102, "icon": "📖", "label": "Materi", "active": False},
        {"x": 180, "icon": "📝", "label": "Ujian", "active": False},
        {"x": 258, "icon": "🎧", "label": "Audio", "active": False},
        {"x": 336, "icon": "👤", "label": "Profil", "active": False},
    ]
    for bt in b_tabs:
        col = "#00D2D3" if bt["active"] else "#94A3B8"
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"MB Tab I {bt['label']}", "parent": {"$ref": "m_bento"},
                "x": bt["x"], "y": 1582, "text": bt["icon"], "props": {"fontSize": 16}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"MB Tab L {bt['label']}", "parent": {"$ref": "m_bento"},
                "x": bt["x"] - 4, "y": 1604, "text": bt["label"],
                "props": {"fontSize": 10, "fontStyle": "Bold" if bt["active"] else "normal", "fill": col}
            }
        })

    return commands

if __name__ == "__main__":
    script_data = build_bento_suite()
    os.makedirs("designs", exist_ok=True)
    json_path = "designs/build_bento_suite.json"
    figcraft_path = "designs/odoopro-bento-suite.figcraft"

    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(script_data, f, indent=2)
    print(f"Generated {len(script_data)} FigCraft commands")

    # Run FigCraft build
    cmd_run = ["figcraft-cli", "run", json_path, "--out", figcraft_path]
    print("Building Bento Suite in FigCraft...")
    res = subprocess.run(cmd_run, capture_output=True, text=True)
    if res.returncode != 0:
        print("ERROR:")
        print(res.stderr)
        print(res.stdout)
        exit(1)
    print("Bento Suite build successful!")

    # Export individual frames to PNG
    cmd_export = ["figcraft-cli", "export", figcraft_path, "-o", "designs/", "--format", "png", "--scale", "1.5"]
    print("Exporting Bento Suite frames to PNG...")
    res_export = subprocess.run(cmd_export, capture_output=True, text=True)
    print(res_export.stdout)
