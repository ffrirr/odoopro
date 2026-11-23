#!/usr/bin/env python3
import json
import subprocess
import os

def create_ui_script():
    commands = []
    
    # Root Desktop Frame
    commands.append({
        "as": "canvas",
        "command": "node.create",
        "params": {
            "type": "frame",
            "name": "Desktop 1440 - OdooPro Learning Platform",
            "x": 0,
            "y": 0,
            "width": 1440,
            "height": 960,
            "props": {
                "fill": "#0B0F19"
            }
        }
    })
    
    # ─── SIDEBAR BACKGROUND ───
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Sidebar BG",
            "parent": {"$ref": "canvas"},
            "x": 0, "y": 0, "width": 260, "height": 960,
            "props": {
                "fill": "#141A26",
                "stroke": "#232E42",
                "strokeRightWeight": 1
            }
        }
    })
    
    # Brand Logo Box
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Logo Box",
            "parent": {"$ref": "canvas"},
            "x": 24, "y": 24, "width": 38, "height": 38,
            "props": {
                "fill": "#714B67",
                "cornerRadius": 8
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Logo Text",
            "parent": {"$ref": "canvas"},
            "x": 32, "y": 32,
            "text": "OP",
            "props": {
                "fontSize": 18,
                "fontStyle": "Bold",
                "fill": "#00D2D3"
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Brand Title",
            "parent": {"$ref": "canvas"},
            "x": 72, "y": 24,
            "text": "OdooPro",
            "props": {
                "fontSize": 20,
                "fontStyle": "Bold",
                "fill": "#F8FAFC"
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Brand Subtitle",
            "parent": {"$ref": "canvas"},
            "x": 72, "y": 48,
            "text": "CERTIFICATION ENGINE",
            "props": {
                "fontSize": 9,
                "fontStyle": "Bold",
                "fill": "#94A3B8"
            }
        }
    })
    
    # Divider
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Sidebar Divider",
            "parent": {"$ref": "canvas"},
            "x": 24, "y": 78, "width": 212, "height": 1,
            "props": {"fill": "#232E42"}
        }
    })
    
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Section Label",
            "parent": {"$ref": "canvas"},
            "x": 24, "y": 96,
            "text": "WORKSPACE",
            "props": {
                "fontSize": 11,
                "fontStyle": "Bold",
                "fill": "#64748B"
            }
        }
    })
    
    # ─── SIDEBAR NAV ITEMS ───
    # 1. Dashboard (Active)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Nav Dashboard BG",
            "parent": {"$ref": "canvas"},
            "x": 16, "y": 120, "width": 228, "height": 42,
            "props": {
                "fill": "#1E2738",
                "cornerRadius": 8
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Nav Dashboard Indicator",
            "parent": {"$ref": "canvas"},
            "x": 16, "y": 120, "width": 4, "height": 42,
            "props": {
                "fill": "#00D2D3",
                "cornerRadius": 2
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Nav Dashboard Label",
            "parent": {"$ref": "canvas"},
            "x": 36, "y": 132,
            "text": "⚡  Dashboard",
            "props": {
                "fontSize": 14,
                "fontStyle": "Bold",
                "fill": "#00D2D3"
            }
        }
    })
    
    # 2. Learning Path
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Nav Learning Path",
            "parent": {"$ref": "canvas"},
            "x": 36, "y": 178,
            "text": "📖  Learning Path",
            "props": {
                "fontSize": 14,
                "fill": "#CBD5E1"
            }
        }
    })
    
    # 3. Practice Exams
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Nav Practice Exams",
            "parent": {"$ref": "canvas"},
            "x": 36, "y": 224,
            "text": "📝  Simulasi Ujian",
            "props": {
                "fontSize": 14,
                "fill": "#CBD5E1"
            }
        }
    })
    # Badge for Practice Exams
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Nav Badge Exams BG",
            "parent": {"$ref": "canvas"},
            "x": 184, "y": 220, "width": 48, "height": 20,
            "props": {
                "fill": "#00D2D325",
                "cornerRadius": 4
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Nav Badge Exams Text",
            "parent": {"$ref": "canvas"},
            "x": 192, "y": 224,
            "text": "321 Q",
            "props": {
                "fontSize": 10,
                "fontStyle": "Bold",
                "fill": "#00D2D3"
            }
        }
    })
    
    # 4. Audiobook Studio
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Nav Audiobook",
            "parent": {"$ref": "canvas"},
            "x": 36, "y": 270,
            "text": "🎧  Audiobook Studio",
            "props": {
                "fontSize": 14,
                "fill": "#CBD5E1"
            }
        }
    })
    
    # 5. Flashcards
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Nav Flashcards",
            "parent": {"$ref": "canvas"},
            "x": 36, "y": 316,
            "text": "🗂️  Flashcard SM-2",
            "props": {
                "fontSize": 14,
                "fill": "#CBD5E1"
            }
        }
    })
    # Badge for Flashcards
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Nav Badge Flashcards BG",
            "parent": {"$ref": "canvas"},
            "x": 182, "y": 312, "width": 50, "height": 20,
            "props": {
                "fill": "#F59E0B25",
                "cornerRadius": 4
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Nav Badge Flashcards Text",
            "parent": {"$ref": "canvas"},
            "x": 189, "y": 316,
            "text": "18 Due",
            "props": {
                "fontSize": 10,
                "fontStyle": "Bold",
                "fill": "#F59E0B"
            }
        }
    })
    
    # 6. Analytics
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Nav Analytics",
            "parent": {"$ref": "canvas"},
            "x": 36, "y": 362,
            "text": "📊  Analitik Skor",
            "props": {
                "fontSize": 14,
                "fill": "#CBD5E1"
            }
        }
    })
    
    # ─── SIDEBAR BOTTOM CARDS ───
    # Exam Countdown Card
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Countdown Card BG",
            "parent": {"$ref": "canvas"},
            "x": 16, "y": 732, "width": 228, "height": 96,
            "props": {
                "fill": "#1A2232",
                "stroke": "#232E42",
                "cornerRadius": 12
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Countdown Tag",
            "parent": {"$ref": "canvas"},
            "x": 30, "y": 746,
            "text": "PEARSON VUE VOUCHER",
            "props": {
                "fontSize": 9,
                "fontStyle": "Bold",
                "fill": "#00D2D3"
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Countdown Days",
            "parent": {"$ref": "canvas"},
            "x": 30, "y": 764,
            "text": "21 Hari Menuju Ujian",
            "props": {
                "fontSize": 15,
                "fontStyle": "Bold",
                "fill": "#F8FAFC"
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Countdown Sub",
            "parent": {"$ref": "canvas"},
            "x": 30, "y": 786,
            "text": "Kesiapan: 78% (Target min. 70%)",
            "props": {
                "fontSize": 11,
                "fill": "#94A3B8"
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Countdown Progress Track",
            "parent": {"$ref": "canvas"},
            "x": 30, "y": 808, "width": 200, "height": 6,
            "props": {
                "fill": "#232E42",
                "cornerRadius": 3
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Countdown Progress Fill",
            "parent": {"$ref": "canvas"},
            "x": 30, "y": 808, "width": 156, "height": 6,
            "props": {
                "fill": "#00D2D3",
                "cornerRadius": 3
            }
        }
    })
    
    # User Profile Card
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "User Card BG",
            "parent": {"$ref": "canvas"},
            "x": 16, "y": 844, "width": 228, "height": 64,
            "props": {
                "fill": "#0E1320",
                "stroke": "#232E42",
                "cornerRadius": 10
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "User Avatar",
            "parent": {"$ref": "canvas"},
            "x": 28, "y": 856, "width": 40, "height": 40,
            "props": {
                "fill": "#714B67",
                "cornerRadius": 20
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "User Initials",
            "parent": {"$ref": "canvas"},
            "x": 38, "y": 867,
            "text": "FR",
            "props": {
                "fontSize": 14,
                "fontStyle": "Bold",
                "fill": "#F8FAFC"
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "User Name",
            "parent": {"$ref": "canvas"},
            "x": 78, "y": 858,
            "text": "Feri Irawan",
            "props": {
                "fontSize": 14,
                "fontStyle": "Bold",
                "fill": "#F8FAFC"
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "User Role",
            "parent": {"$ref": "canvas"},
            "x": 78, "y": 880,
            "text": "Odoo 19 Specialist",
            "props": {
                "fontSize": 11,
                "fill": "#94A3B8"
            }
        }
    })
    
    # ─── TOP NAVBAR ───
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Header BG",
            "parent": {"$ref": "canvas"},
            "x": 260, "y": 0, "width": 1180, "height": 72,
            "props": {
                "fill": "#0E1320",
                "stroke": "#232E42",
                "strokeBottomWeight": 1
            }
        }
    })
    # Search Box
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Search Box",
            "parent": {"$ref": "canvas"},
            "x": 292, "y": 16, "width": 400, "height": 40,
            "props": {
                "fill": "#141A26",
                "stroke": "#232E42",
                "cornerRadius": 8
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Search Placeholder",
            "parent": {"$ref": "canvas"},
            "x": 312, "y": 28,
            "text": "🔍  Cari materi, 321 soal, jurnal akuntansi, BOM...",
            "props": {
                "fontSize": 13,
                "fill": "#64748B"
            }
        }
    })
    # Streak Pill
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Streak Pill",
            "parent": {"$ref": "canvas"},
            "x": 860, "y": 18, "width": 140, "height": 36,
            "props": {
                "fill": "#1A2232",
                "stroke": "#232E42",
                "cornerRadius": 18
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Streak Text",
            "parent": {"$ref": "canvas"},
            "x": 876, "y": 27,
            "text": "🔥 14 Hari Streak",
            "props": {
                "fontSize": 12,
                "fontStyle": "Bold",
                "fill": "#F59E0B"
            }
        }
    })
    # Readiness Pill
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Readiness Pill",
            "parent": {"$ref": "canvas"},
            "x": 1014, "y": 18, "width": 144, "height": 36,
            "props": {
                "fill": "#00D2D315",
                "stroke": "#00D2D340",
                "cornerRadius": 18
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Readiness Text",
            "parent": {"$ref": "canvas"},
            "x": 1030, "y": 27,
            "text": "🎯 78% Kesiapan",
            "props": {
                "fontSize": 12,
                "fontStyle": "Bold",
                "fill": "#00D2D3"
            }
        }
    })
    # Primary Quick Exam Action
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Quick Action BTN",
            "parent": {"$ref": "canvas"},
            "x": 1172, "y": 18, "width": 160, "height": 36,
            "props": {
                "fill": "#00D2D3",
                "cornerRadius": 8
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Quick Action Text",
            "parent": {"$ref": "canvas"},
            "x": 1194, "y": 27,
            "text": "⚡ Simulasi Ujian",
            "props": {
                "fontSize": 12,
                "fontStyle": "Bold",
                "fill": "#0B0F19"
            }
        }
    })
    
    # ─── HERO CARD ───
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Hero Card BG",
            "parent": {"$ref": "canvas"},
            "x": 292, "y": 96, "width": 1116, "height": 160,
            "props": {
                "fill": "#161E2E",
                "stroke": "#2B384E",
                "cornerRadius": 16
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Hero Accent Stripe",
            "parent": {"$ref": "canvas"},
            "x": 292, "y": 96, "width": 1116, "height": 4,
            "props": {
                "fill": "#00D2D3",
                "cornerRadius": 2
            }
        }
    })
    # Hero Tag
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Hero Tag BG",
            "parent": {"$ref": "canvas"},
            "x": 320, "y": 116, "width": 168, "height": 22,
            "props": {
                "fill": "#714B6735",
                "stroke": "#714B67",
                "cornerRadius": 11
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Hero Tag Text",
            "parent": {"$ref": "canvas"},
            "x": 330, "y": 120,
            "text": "ODOO 19 OFFICIAL PREP",
            "props": {
                "fontSize": 10,
                "fontStyle": "Bold",
                "fill": "#E2D9F3"
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Hero Title",
            "parent": {"$ref": "canvas"},
            "x": 320, "y": 146,
            "text": "Sertifikasi Odoo 19: Functional Consultant Mastery",
            "props": {
                "fontSize": 20,
                "fontStyle": "Bold",
                "fill": "#F8FAFC"
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Hero Subtitle",
            "parent": {"$ref": "canvas"},
            "x": 320, "y": 174,
            "text": "321 bank soal terverifikasi · Spaced repetition adaptif · 73 soal butuh pengulangan minggu ini",
            "props": {
                "fontSize": 13,
                "fill": "#CBD5E1"
            }
        }
    })
    # Hero CTA 1
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Hero CTA 1 BG",
            "parent": {"$ref": "canvas"},
            "x": 320, "y": 204, "width": 200, "height": 36,
            "props": {
                "fill": "#00D2D3",
                "cornerRadius": 8
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Hero CTA 1 Text",
            "parent": {"$ref": "canvas"},
            "x": 340, "y": 214,
            "text": "Lanjutkan Belajar (Accounting)",
            "props": {
                "fontSize": 12,
                "fontStyle": "Bold",
                "fill": "#0B0F19"
            }
        }
    })
    # Hero CTA 2
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Hero CTA 2 BG",
            "parent": {"$ref": "canvas"},
            "x": 532, "y": 204, "width": 180, "height": 36,
            "props": {
                "fill": "#232E42",
                "stroke": "#32405A",
                "cornerRadius": 8
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Hero CTA 2 Text",
            "parent": {"$ref": "canvas"},
            "x": 552, "y": 214,
            "text": "Simulasi Tryout 50 Soal",
            "props": {
                "fontSize": 12,
                "fontStyle": "Bold",
                "fill": "#F8FAFC"
            }
        }
    })
    # Hero Right Score Widget
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Hero Score Box",
            "parent": {"$ref": "canvas"},
            "x": 1238, "y": 116, "width": 144, "height": 120,
            "props": {
                "fill": "#1A2232",
                "stroke": "#2D3B54",
                "cornerRadius": 12
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Hero Score Value",
            "parent": {"$ref": "canvas"},
            "x": 1272, "y": 132,
            "text": "78%",
            "props": {
                "fontSize": 32,
                "fontStyle": "Bold",
                "fill": "#00D2D3"
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Hero Score Label",
            "parent": {"$ref": "canvas"},
            "x": 1252, "y": 178,
            "text": "KESIAPAN UJIAN",
            "props": {
                "fontSize": 9,
                "fontStyle": "Bold",
                "fill": "#94A3B8"
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Hero Score Trend",
            "parent": {"$ref": "canvas"},
            "x": 1262, "y": 200,
            "text": "+5% minggu ini",
            "props": {
                "fontSize": 10,
                "fontStyle": "Bold",
                "fill": "#10B981"
            }
        }
    })
    
    # ─── KPI METRIC ROW (4 CARDS) ───
    metrics = [
        {"x": 292, "title": "TOTAL SOAL DIKUASAI", "val": "248 / 321", "sub": "77% kurikulum selesai", "sub_col": "#10B981"},
        {"x": 577, "title": "RATA-RATA TRYOUT", "val": "82.4%", "sub": "Target lulus: min 70%", "sub_col": "#00D2D3"},
        {"x": 862, "title": "AUDIOBOOK STUDI", "val": "4.8 Jam", "sub": "6 playlist bab diselesaikan", "sub_col": "#CBD5E1"},
        {"x": 1147, "title": "SPACED REPETITION", "val": "18 Kartu", "sub": "Perlu diulang hari ini", "sub_col": "#F59E0B"},
    ]
    for m in metrics:
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle",
                "name": f"KPI {m['title']}",
                "parent": {"$ref": "canvas"},
                "x": m["x"], "y": 276, "width": 261, "height": 96,
                "props": {
                    "fill": "#141A26",
                    "stroke": "#232E42",
                    "cornerRadius": 12
                }
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text",
                "name": f"KPI Title {m['title']}",
                "parent": {"$ref": "canvas"},
                "x": m["x"] + 18, "y": 292,
                "text": m["title"],
                "props": {
                    "fontSize": 10,
                    "fontStyle": "Bold",
                    "fill": "#94A3B8"
                }
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text",
                "name": f"KPI Val {m['title']}",
                "parent": {"$ref": "canvas"},
                "x": m["x"] + 18, "y": 312,
                "text": m["val"],
                "props": {
                    "fontSize": 22,
                    "fontStyle": "Bold",
                    "fill": "#F8FAFC"
                }
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text",
                "name": f"KPI Sub {m['title']}",
                "parent": {"$ref": "canvas"},
                "x": m["x"] + 18, "y": 344,
                "text": m["sub"],
                "props": {
                    "fontSize": 11,
                    "fill": m["sub_col"]
                }
            }
        })
        
    # ─── SECTION 3: TWO COLUMNS (y: 392) ───
    # Left Header
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Modules Header",
            "parent": {"$ref": "canvas"},
            "x": 292, "y": 396,
            "text": "Modul Pembelajaran & Learning Path",
            "props": {
                "fontSize": 18,
                "fontStyle": "Bold",
                "fill": "#F8FAFC"
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Modules Subheader",
            "parent": {"$ref": "canvas"},
            "x": 292, "y": 422,
            "text": "Progres penguasaan per area fungsional Odoo 19",
            "props": {
                "fontSize": 12,
                "fill": "#94A3B8"
            }
        }
    })
    
    # Right Header
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Exam Header",
            "parent": {"$ref": "canvas"},
            "x": 1002, "y": 396,
            "text": "Aktivitas Simulasi Ujian",
            "props": {
                "fontSize": 18,
                "fontStyle": "Bold",
                "fill": "#F8FAFC"
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Exam Subheader",
            "parent": {"$ref": "canvas"},
            "x": 1002, "y": 422,
            "text": "Histori tryout dan latihan terjadwal",
            "props": {
                "fontSize": 12,
                "fill": "#94A3B8"
            }
        }
    })
    
    # ─── 4 LEARNING MODULE CARDS ───
    module_data = [
        {
            "y": 448, "icon": "📊", "title": "Accounting & Financial Management",
            "meta": "68 / 74 Soal dikuasai · Jurnal, Rekonsiliasi Bank, Multi-currency",
            "pct": 92, "pct_text": "92%", "color": "#10B981", "badge": "Mastered", "badge_col": "#10B981"
        },
        {
            "y": 556, "icon": "💼", "title": "Sales, CRM & Point of Sale",
            "meta": "45 / 61 Soal dikuasai · Lead Pipeline, Pricelist, Quotation Matrix",
            "pct": 74, "pct_text": "74%", "color": "#00D2D3", "badge": "In Progress", "badge_col": "#00D2D3"
        },
        {
            "y": 664, "icon": "📦", "title": "Inventory, Logistics & Manufacturing (MRP)",
            "meta": "38 / 65 Soal dikuasai · Lot/Serial, Reordering Rules, Landed Cost, BOM",
            "pct": 58, "pct_text": "58%", "color": "#F59E0B", "badge": "Needs Focus", "badge_col": "#F59E0B"
        },
        {
            "y": 772, "icon": "🛒", "title": "Purchasing, RFQ & Three-Way Matching",
            "meta": "42 / 48 Soal dikuasai · Vendor Bills, Purchase Agreement, Dropshipping",
            "pct": 88, "pct_text": "88%", "color": "#10B981", "badge": "Mastered", "badge_col": "#10B981"
        }
    ]
    
    for mod in module_data:
        my = mod["y"]
        # Card BG
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle",
                "name": f"Module {mod['title']}",
                "parent": {"$ref": "canvas"},
                "x": 292, "y": my, "width": 686, "height": 96,
                "props": {
                    "fill": "#141A26",
                    "stroke": "#232E42",
                    "cornerRadius": 12
                }
            }
        })
        # Icon Box
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle",
                "name": "Icon Box",
                "parent": {"$ref": "canvas"},
                "x": 310, "y": my + 18, "width": 42, "height": 42,
                "props": {
                    "fill": "#1A2232",
                    "cornerRadius": 8
                }
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text",
                "name": "Icon Emoji",
                "parent": {"$ref": "canvas"},
                "x": 322, "y": my + 30,
                "text": mod["icon"],
                "props": {"fontSize": 16}
            }
        })
        # Title & Meta
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text",
                "name": "Mod Title",
                "parent": {"$ref": "canvas"},
                "x": 366, "y": my + 18,
                "text": mod["title"],
                "props": {
                    "fontSize": 15,
                    "fontStyle": "Bold",
                    "fill": "#F8FAFC"
                }
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text",
                "name": "Mod Meta",
                "parent": {"$ref": "canvas"},
                "x": 366, "y": my + 40,
                "text": mod["meta"],
                "props": {
                    "fontSize": 12,
                    "fill": "#94A3B8"
                }
            }
        })
        # Progress Bar Track & Fill
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle",
                "name": "Progress Track",
                "parent": {"$ref": "canvas"},
                "x": 366, "y": my + 68, "width": 460, "height": 6,
                "props": {
                    "fill": "#232E42",
                    "cornerRadius": 3
                }
            }
        })
        fill_width = int(460 * mod["pct"] / 100)
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle",
                "name": "Progress Fill",
                "parent": {"$ref": "canvas"},
                "x": 366, "y": my + 68, "width": fill_width, "height": 6,
                "props": {
                    "fill": mod["color"],
                    "cornerRadius": 3
                }
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text",
                "name": "Progress Text",
                "parent": {"$ref": "canvas"},
                "x": 836, "y": my + 64,
                "text": mod["pct_text"],
                "props": {
                    "fontSize": 12,
                    "fontStyle": "Bold",
                    "fill": mod["color"]
                }
            }
        })
        # Badge
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle",
                "name": "Badge BG",
                "parent": {"$ref": "canvas"},
                "x": 884, "y": my + 16, "width": 80, "height": 22,
                "props": {
                    "fill": f"{mod['badge_col']}20",
                    "cornerRadius": 4
                }
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text",
                "name": "Badge Text",
                "parent": {"$ref": "canvas"},
                "x": 894, "y": my + 20,
                "text": mod["badge"],
                "props": {
                    "fontSize": 10,
                    "fontStyle": "Bold",
                    "fill": mod["badge_col"]
                }
            }
        })
        
    # ─── RIGHT COLUMN CARDS ───
    # Card 1: Tryout Terakhir (y: 448, h: 204)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Mock Exam Result Box",
            "parent": {"$ref": "canvas"},
            "x": 1002, "y": 448, "width": 406, "height": 204,
            "props": {
                "fill": "#141A26",
                "stroke": "#232E42",
                "cornerRadius": 12
            }
        }
    })
    # Status Badge
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Status Badge BG",
            "parent": {"$ref": "canvas"},
            "x": 1024, "y": 466, "width": 116, "height": 22,
            "props": {
                "fill": "#10B98120",
                "cornerRadius": 4
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Status Badge Text",
            "parent": {"$ref": "canvas"},
            "x": 1032, "y": 470,
            "text": "STATUS: LULUS ✅",
            "props": {
                "fontSize": 10,
                "fontStyle": "Bold",
                "fill": "#10B981"
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Exam Name",
            "parent": {"$ref": "canvas"},
            "x": 1024, "y": 498,
            "text": "Full Mock Exam #4 (50 Soal)",
            "props": {
                "fontSize": 15,
                "fontStyle": "Bold",
                "fill": "#F8FAFC"
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Exam Meta",
            "parent": {"$ref": "canvas"},
            "x": 1024, "y": 520,
            "text": "Waktu tempuh: 42 mnt / 60 mnt · Kemarin, 21:30 WIB",
            "props": {
                "fontSize": 12,
                "fill": "#94A3B8"
            }
        }
    })
    # Score Subbox
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Score Subbox",
            "parent": {"$ref": "canvas"},
            "x": 1024, "y": 546, "width": 362, "height": 52,
            "props": {
                "fill": "#1A2232",
                "stroke": "#2B384E",
                "cornerRadius": 8
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Score Large Val",
            "parent": {"$ref": "canvas"},
            "x": 1042, "y": 558,
            "text": "84",
            "props": {
                "fontSize": 24,
                "fontStyle": "Bold",
                "fill": "#10B981"
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Score Denom",
            "parent": {"$ref": "canvas"},
            "x": 1076, "y": 564,
            "text": "/ 100 Poin (Passing grade Odoo: 70)",
            "props": {
                "fontSize": 12,
                "fill": "#CBD5E1"
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Exam Detail Link",
            "parent": {"$ref": "canvas"},
            "x": 1024, "y": 618,
            "text": "Lihat Pembahasan Detail Soal →",
            "props": {
                "fontSize": 12,
                "fontStyle": "Bold",
                "fill": "#00D2D3"
            }
        }
    })
    
    # Card 2: Quick Flashcard Drill (y: 664, h: 204)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Flashcard Drill Box",
            "parent": {"$ref": "canvas"},
            "x": 1002, "y": 664, "width": 406, "height": 204,
            "props": {
                "fill": "#141A26",
                "stroke": "#232E42",
                "cornerRadius": 12
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Drill Tag BG",
            "parent": {"$ref": "canvas"},
            "x": 1024, "y": 682, "width": 140, "height": 22,
            "props": {
                "fill": "#F59E0B20",
                "cornerRadius": 4
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Drill Tag Text",
            "parent": {"$ref": "canvas"},
            "x": 1032, "y": 686,
            "text": "SPACED REPETITION",
            "props": {
                "fontSize": 10,
                "fontStyle": "Bold",
                "fill": "#F59E0B"
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Drill Title",
            "parent": {"$ref": "canvas"},
            "x": 1024, "y": 714,
            "text": "18 Kartu Siap Diulang Hari Ini",
            "props": {
                "fontSize": 15,
                "fontStyle": "Bold",
                "fill": "#F8FAFC"
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Drill Desc",
            "parent": {"$ref": "canvas"},
            "x": 1024, "y": 738,
            "text": "Algoritma SuperMemo SM-2 mendeteksi daya ingat melemah pada materi Valuation FIFO vs AVCO & Automated Inventory.",
            "props": {
                "fontSize": 12,
                "fill": "#CBD5E1"
            }
        }
    })
    # Button Drill
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Drill BTN",
            "parent": {"$ref": "canvas"},
            "x": 1024, "y": 802, "width": 362, "height": 44,
            "props": {
                "fill": "#714B67",
                "cornerRadius": 8
            }
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text",
            "name": "Drill BTN Text",
            "parent": {"$ref": "canvas"},
            "x": 1104, "y": 816,
            "text": "Mulai Review Flashcard (5 Menit)",
            "props": {
                "fontSize": 13,
                "fontStyle": "Bold",
                "fill": "#F8FAFC"
            }
        }
    })
    
    return commands

if __name__ == "__main__":
    script_data = create_ui_script()
    os.makedirs("designs", exist_ok=True)
    json_path = "designs/build_odoopro_ui.json"
    figcraft_path = "designs/odoopro-learning-platform.figcraft"
    png_path = "designs/odoopro-learning-platform.png"
    svg_path = "designs/odoopro-learning-platform.svg"
    
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(script_data, f, indent=2)
    print(f"Generated {len(script_data)} FigCraft commands in {json_path}")
    
    # Run figcraft-cli
    cmd_run = ["figcraft-cli", "run", json_path, "--out", figcraft_path]
    print("Executing FigCraft build...")
    res = subprocess.run(cmd_run, capture_output=True, text=True)
    if res.returncode != 0:
        print("ERROR running figcraft-cli:")
        print(res.stderr)
        print(res.stdout)
        exit(1)
    print("FigCraft build completed successfully!")
    
    # Render PNG
    cmd_render = ["figcraft-cli", "render", figcraft_path, "-o", png_path, "--scale", "1.5"]
    print("Rendering high-res PNG...")
    res_render = subprocess.run(cmd_render, capture_output=True, text=True)
    print(res_render.stdout)
    
    # Export SVG
    cmd_export = ["figcraft-cli", "export", figcraft_path, "-o", "designs/", "--format", "svg"]
    print("Exporting SVG...")
    res_export = subprocess.run(cmd_export, capture_output=True, text=True)
    print(res_export.stdout)
