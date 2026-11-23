#!/usr/bin/env python3
"""
Generate FigCraft JSON script for OdooPro Brilliant Edition
Combines Brilliant.org active learning DNA with Emil Kowalski design engineering polish.
"""
import json

commands = []

def add_node(node_type, name, x, y, width=None, height=None, text=None, props=None, parent="canvas", as_id=None):
    params = {
        "type": node_type,
        "name": name,
        "x": x,
        "y": y,
        "parent": {"$ref": parent} if parent else None
    }
    if width is not None:
        params["width"] = width
    if height is not None:
        params["height"] = height
    if text is not None:
        params["text"] = text
    if props:
        params["props"] = props
        
    cmd = {"command": "node.create", "params": params}
    if as_id:
        cmd["as"] = as_id
    commands.append(cmd)

# 1. Canvas Root (1440 x 1950)
commands.append({
    "as": "canvas",
    "command": "node.create",
    "params": {
        "type": "frame",
        "name": "Desktop 1440 - OdooPro Brilliant Edition",
        "x": 0,
        "y": 0,
        "width": 1440,
        "height": 1950,
        "props": {
            "fill": "#0B0F19"
        }
    }
})

# 2. Navbar
add_node("rectangle", "Navbar BG", 0, 0, 1440, 72, props={
    "fill": "#0E1320",
    "stroke": "#232E42",
    "strokeBottomWeight": 1
})

# Brand Logo
add_node("rectangle", "Nav Brand Badge", 80, 18, 36, 36, props={
    "fill": "#714B67",
    "cornerRadius": 10
})
add_node("text", "Nav Brand Monogram", 88, 24, text="⚡", props={
    "fontSize": 18,
    "fill": "#29CC57"
})
add_node("text", "Nav Brand Name", 126, 24, text="Odoo", props={
    "fontSize": 20,
    "fontStyle": "Bold",
    "fill": "#F8FAFC"
})
add_node("text", "Nav Brand Accent", 182, 24, text="Pro", props={
    "fontSize": 20,
    "fontStyle": "Bold",
    "fill": "#29CC57"
})

# Nav Links
nav_items = [
    ("Jalur Belajar", 360),
    ("Simulator Ujian", 480),
    ("Audiobook (321 Soal)", 620),
    ("Spaced Repetition", 800),
    ("Leaderboard", 950)
]
for title, pos_x in nav_items:
    add_node("text", f"Nav {title}", pos_x, 26, text=title, props={
        "fontSize": 14,
        "fontStyle": "Medium",
        "fill": "#94A3B8"
    })

# Nav Action Pill
add_node("rectangle", "Nav CTA Pill", 1180, 16, 180, 40, props={
    "fill": "#29CC57",
    "cornerRadius": 20
})
add_node("text", "Nav CTA Text", 1215, 27, text="Mulai Gratis →", props={
    "fontSize": 13,
    "fontStyle": "Bold",
    "fill": "#0B0F19"
})

# 3. Hero Section (Y: 110 to 650)
# Eyebrow Tag
add_node("rectangle", "Hero Eyebrow Tag", 80, 120, 350, 32, props={
    "fill": "rgba(41, 204, 87, 0.12)",
    "stroke": "rgba(41, 204, 87, 0.35)",
    "strokeWeight": 1,
    "cornerRadius": 16
})
add_node("text", "Hero Eyebrow Text", 96, 128, text="⚡ PLATFORM SERTIFIKASI ODOO 19 · SIMULASI NYATA", props={
    "fontSize": 11,
    "fontStyle": "Bold",
    "fill": "#29CC57",
    "letterSpacing": 0.5
})

# H1 Display Headline
add_node("text", "Hero H1 Line 1", 80, 172, text="Kuasai Ujian Sertifikasi Odoo", props={
    "fontSize": 44,
    "fontStyle": "Bold",
    "fill": "#F8FAFC",
    "lineHeight": 52
})
add_node("text", "Hero H1 Line 2", 80, 228, text="Lewat Praktik Interaktif.", props={
    "fontSize": 44,
    "fontStyle": "Bold",
    "fill": "#29CC57",
    "lineHeight": 52
})
add_node("text", "Hero H1 Line 3", 80, 284, text="Bukan Sekadar Menghafal.", props={
    "fontSize": 44,
    "fontStyle": "Bold",
    "fill": "#94A3B8",
    "lineHeight": 52
})

# Subheadline Prosa
add_node("text", "Hero Subhead", 80, 356, text="Tutor visual dan simulator workflow interaktif: Akuntansi, Inventory, MRP,\nCRM, hingga Python ORM & QWeb Report. 321 soal berstandar Pearson VUE\ndengan penjelasan mendalam berbasis first-principles.", props={
    "fontSize": 16,
    "fill": "#CBD5E1",
    "lineHeight": 26
})

# Action Cluster (Primary & Secondary Button with Tactile Physics)
add_node("rectangle", "Hero Primary CTA", 80, 440, 230, 52, props={
    "fill": "#29CC57",
    "cornerRadius": 14
})
add_node("text", "Hero Primary CTA Text", 112, 456, text="Mulai Tes Diagnostik ⚡", props={
    "fontSize": 15,
    "fontStyle": "Bold",
    "fill": "#0B0F19"
})

add_node("rectangle", "Hero Secondary CTA", 330, 440, 210, 52, props={
    "fill": "#141A26",
    "stroke": "#232E42",
    "strokeWeight": 1,
    "cornerRadius": 14
})
add_node("text", "Hero Secondary CTA Text", 362, 456, text="Jelajahi 321 Soal ▾", props={
    "fontSize": 15,
    "fontStyle": "Medium",
    "fill": "#CBD5E1"
})

# Trust Proof under CTA
add_node("text", "Hero Trust Rating", 80, 520, text="★★★★★  4.9/5 dari 1,200+ Konsultan & Akuntan Odoo Indonesia", props={
    "fontSize": 13,
    "fontStyle": "Medium",
    "fill": "#F7C325"
})

# Hero Right Side: The Interactive Problem Card (Brilliant Tilted Style)
add_node("rectangle", "Hero Card Container", 720, 120, 640, 430, props={
    "fill": "#141A26",
    "stroke": "#232E42",
    "strokeWeight": 1,
    "cornerRadius": 24
})

# Card Header
add_node("rectangle", "Problem Header Tag", 750, 146, 130, 26, props={
    "fill": "rgba(0, 210, 211, 0.14)",
    "cornerRadius": 6
})
add_node("text", "Problem Header Text", 760, 152, text="AKUNTANSI ODOO 19", props={
    "fontSize": 10,
    "fontStyle": "Bold",
    "fill": "#00D2D3"
})
add_node("text", "Problem Step", 1230, 150, text="Latihan 1 / 10", props={
    "fontSize": 12,
    "fontStyle": "Medium",
    "fill": "#94A3B8"
})

# Problem Prompt
add_node("text", "Problem Prompt Text", 750, 188, text="Seimbangkan Jurnal Otomatis Pembelian Barang Dagang:", props={
    "fontSize": 17,
    "fontStyle": "Bold",
    "fill": "#F8FAFC"
})
add_node("text", "Problem Context Text", 750, 216, text="Perusahaan menerapkan Perpetual Inventory & Anglo-Saxon. Saat Bill divalidasi:", props={
    "fontSize": 13,
    "fill": "#94A3B8"
})

# Interactive Matching Table / Entry Box
add_node("rectangle", "Journal Box 1", 750, 248, 580, 46, props={
    "fill": "#1A2232",
    "stroke": "rgba(41, 204, 87, 0.4)",
    "strokeWeight": 1,
    "cornerRadius": 10
})
add_node("text", "Journal Entry 1 Line", 770, 262, text="Debit:  Stock Interim (Received) .................... Rp 25.000.000  ✅", props={
    "fontSize": 13,
    "fontStyle": "Bold",
    "fill": "#29CC57"
})

add_node("rectangle", "Journal Box 2", 750, 304, 580, 46, props={
    "fill": "#1A2232",
    "stroke": "#232E42",
    "strokeWeight": 1,
    "cornerRadius": 10
})
add_node("text", "Journal Entry 2 Line", 770, 318, text="Kredit: Account Payable (Hutang Usaha) .......... [ Pilih Nilai ]  ▾", props={
    "fontSize": 13,
    "fontStyle": "Medium",
    "fill": "#CBD5E1"
})

# Tactile Multi-Choice Options
add_node("rectangle", "Choice Pill A", 750, 362, 136, 40, props={
    "fill": "#0B0F19",
    "stroke": "#232E42",
    "strokeWeight": 1,
    "cornerRadius": 10
})
add_node("text", "Choice Pill A Text", 780, 374, text="Rp 20.000.000", props={
    "fontSize": 12,
    "fill": "#94A3B8"
})

add_node("rectangle", "Choice Pill B (Selected)", 900, 362, 146, 40, props={
    "fill": "rgba(41, 204, 87, 0.15)",
    "stroke": "#29CC57",
    "strokeWeight": 2,
    "cornerRadius": 10
})
add_node("text", "Choice Pill B Text", 924, 374, text="Rp 25.000.000 ✓", props={
    "fontSize": 12,
    "fontStyle": "Bold",
    "fill": "#29CC57"
})

add_node("rectangle", "Choice Pill C", 1060, 362, 136, 40, props={
    "fill": "#0B0F19",
    "stroke": "#232E42",
    "strokeWeight": 1,
    "cornerRadius": 10
})
add_node("text", "Choice Pill C Text", 1090, 374, text="Rp 27.500.000", props={
    "fontSize": 12,
    "fill": "#94A3B8"
})

# Card Bottom Action Check
add_node("rectangle", "Validate Button", 750, 420, 580, 44, props={
    "fill": "#29CC57",
    "cornerRadius": 12
})
add_node("text", "Validate Button Text", 975, 434, text="Cek Jawaban (Balance Verified) ✨", props={
    "fontSize": 14,
    "fontStyle": "Bold",
    "fill": "#0B0F19"
})
add_node("text", "Instant Feedback Tag", 750, 478, text="🎯 Jawaban Benar! Akun Interim lunas dan Hutang Usaha terbit sempurna.", props={
    "fontSize": 12,
    "fontStyle": "Medium",
    "fill": "#29CC57"
})

# 4. Metric & Trust Proof Banner (Y: 600 - 680)
add_node("rectangle", "Trust Bar BG", 80, 590, 1280, 80, props={
    "fill": "#0E1320",
    "stroke": "#232E42",
    "strokeWeight": 1,
    "cornerRadius": 16
})

stats = [
    ("321 Soal Asli", "Update Odoo 19 & 18", 120),
    ("100% Visual", "Interactive Widget & Diagram", 440),
    ("8-State UI Craft", "Emil Kowalski Philosophy", 760),
    ("Audio Studio", "321 Penjelasan Suara Jernih", 1070)
]
for val, lbl, x_pos in stats:
    add_node("text", f"Stat Val {val}", x_pos, 608, text=val, props={
        "fontSize": 18,
        "fontStyle": "Bold",
        "fill": "#F8FAFC"
    })
    add_node("text", f"Stat Lbl {val}", x_pos, 634, text=lbl, props={
        "fontSize": 12,
        "fill": "#94A3B8"
    })

# 5. Core Bento Grid Section (Y: 710 - 1300)
add_node("text", "Bento Section Eyebrow", 80, 710, text="METODE BELAJAR ACTIVE RECALL", props={
    "fontSize": 12,
    "fontStyle": "Bold",
    "fill": "#29CC57",
    "letterSpacing": 1.0
})
add_node("text", "Bento Section Heading", 80, 735, text="Dirancang untuk Hasil Ujian Nyata, Bukan Teori Pasif", props={
    "fontSize": 28,
    "fontStyle": "Bold",
    "fill": "#F8FAFC"
})

# Bento Card 1: Exam Simulator (Wide, 820 x 280)
add_node("rectangle", "Bento Card 1 BG", 80, 785, 820, 280, props={
    "fill": "#141A26",
    "stroke": "#232E42",
    "strokeWeight": 1,
    "cornerRadius": 20
})
add_node("rectangle", "Bento 1 Badge", 112, 815, 110, 24, props={
    "fill": "rgba(41, 204, 87, 0.15)",
    "cornerRadius": 6
})
add_node("text", "Bento 1 Badge Text", 122, 821, text="SIMULATOR UJIAN", props={
    "fontSize": 10,
    "fontStyle": "Bold",
    "fill": "#29CC57"
})
add_node("text", "Bento 1 Title", 112, 850, text="Standar Ujian Pearson VUE Odoo 19", props={
    "fontSize": 20,
    "fontStyle": "Bold",
    "fill": "#F8FAFC"
})
add_node("text", "Bento 1 Desc", 112, 882, text="Timer 90 menit nyata, pembobotan skor multi-topik, dan sistem penandaan\ntingkat keyakinan (Yakin, Ragu, Tebak) untuk akurasi evaluasi.", props={
    "fontSize": 13,
    "fill": "#94A3B8",
    "lineHeight": 20
})

# Mocking the simulator UI preview inside Card 1
add_node("rectangle", "Sim UI Preview", 112, 935, 756, 100, props={
    "fill": "#0B0F19",
    "stroke": "#232E42",
    "strokeWeight": 1,
    "cornerRadius": 12
})
add_node("text", "Sim Timer Mock", 136, 952, text="⏱ 01:14:22 Tersisa", props={
    "fontSize": 12,
    "fontStyle": "Bold",
    "fill": "#F7C325"
})
add_node("text", "Sim Progress Mock", 300, 952, text="Soal 42 dari 60 (70% Passing Gate)", props={
    "fontSize": 12,
    "fontStyle": "Medium",
    "fill": "#CBD5E1"
})
add_node("rectangle", "Confidence Tag Yakin", 600, 948, 70, 24, props={
    "fill": "rgba(41, 204, 87, 0.2)",
    "cornerRadius": 6
})
add_node("text", "Tag Yakin Text", 615, 954, text="Yakin", props={
    "fontSize": 11,
    "fontStyle": "Bold",
    "fill": "#29CC57"
})
add_node("rectangle", "Confidence Tag Ragu", 680, 948, 70, 24, props={
    "fill": "rgba(247, 195, 37, 0.2)",
    "cornerRadius": 6
})
add_node("text", "Tag Ragu Text", 695, 954, text="Ragu", props={
    "fontSize": 11,
    "fontStyle": "Bold",
    "fill": "#F7C325"
})
add_node("rectangle", "Confidence Tag Tebak", 760, 948, 70, 24, props={
    "fill": "rgba(255, 93, 93, 0.2)",
    "cornerRadius": 6
})
add_node("text", "Tag Tebak Text", 775, 954, text="Tebak", props={
    "fontSize": 11,
    "fontStyle": "Bold",
    "fill": "#FF5D5D"
})
add_node("text", "Sim Question Snip", 136, 988, text="Soal #42: Apa konsekuensi pengaktifan 'Multi-Step Routes' pada modul Inventory?", props={
    "fontSize": 12,
    "fill": "#94A3B8"
})

# Bento Card 2: AI Step-by-Step Tutor (440 x 280)
add_node("rectangle", "Bento Card 2 BG", 920, 785, 440, 280, props={
    "fill": "#141A26",
    "stroke": "#232E42",
    "strokeWeight": 1,
    "cornerRadius": 20
})
add_node("rectangle", "Bento 2 Badge", 948, 815, 110, 24, props={
    "fill": "rgba(247, 195, 37, 0.15)",
    "cornerRadius": 6
})
add_node("text", "Bento 2 Badge Text", 958, 821, text="AI TUTOR MENTOR", props={
    "fontSize": 10,
    "fontStyle": "Bold",
    "fill": "#F7C325"
})
add_node("text", "Bento 2 Title", 948, 850, text="Penjelasan Logika & Jebakan", props={
    "fontSize": 20,
    "fontStyle": "Bold",
    "fill": "#F8FAFC"
})
add_node("text", "Bento 2 Desc", 948, 882, text="Bukan sekadar jawaban benar-salah. AI membongkar mengapa opsi lain mengecoh dan bagaimana arsitektur teknis Odoo bekerja di baliknya.", props={
    "fontSize": 13,
    "fill": "#94A3B8",
    "lineHeight": 20
})
add_node("rectangle", "Bento 2 Hint Box", 948, 942, 384, 90, props={
    "fill": "#1A2232",
    "stroke": "rgba(247, 195, 37, 0.3)",
    "strokeWeight": 1,
    "cornerRadius": 10
})
add_node("text", "Bento 2 Hint Text", 964, 958, text="💡 Tip Penting Odoo 19:\nDi Odoo 19, Push Rules dan Pull Rules digabung dalam\nrute terintegrasi untuk menyederhanakan lead time.", props={
    "fontSize": 11,
    "fill": "#F7C325",
    "lineHeight": 18
})

# Bento Card 3: Audiobook Studio (440 x 280)
add_node("rectangle", "Bento Card 3 BG", 80, 1085, 440, 280, props={
    "fill": "#141A26",
    "stroke": "#232E42",
    "strokeWeight": 1,
    "cornerRadius": 20
})
add_node("rectangle", "Bento 3 Badge", 112, 1115, 130, 24, props={
    "fill": "rgba(0, 210, 211, 0.15)",
    "cornerRadius": 6
})
add_node("text", "Bento 3 Badge Text", 122, 1121, text="AUDIOBOOK STUDIO", props={
    "fontSize": 10,
    "fontStyle": "Bold",
    "fill": "#00D2D3"
})
add_node("text", "Bento 3 Title", 112, 1150, text="Belajar di Mana Saja (321 Audio)", props={
    "fontSize": 20,
    "fontStyle": "Bold",
    "fill": "#F8FAFC"
})
add_node("text", "Bento 3 Desc", 112, 1182, text="Dengarkan pembahasan soal saat commuting atau santai. Narasi audio studio berbahasa Indonesia yang jernih dan nyaman didengar.", props={
    "fontSize": 13,
    "fill": "#94A3B8",
    "lineHeight": 20
})
# Mini Vinyl / Audio Player Mock
add_node("rectangle", "Audio Mini Box", 112, 1242, 376, 90, props={
    "fill": "#0B0F19",
    "stroke": "#232E42",
    "strokeWeight": 1,
    "cornerRadius": 10
})
add_node("rectangle", "Audio Disc Mock", 130, 1256, 60, 60, props={
    "fill": "#714B67",
    "cornerRadius": 30
})
add_node("text", "Audio Disc Icon", 152, 1276, text="▶", props={
    "fontSize": 16,
    "fill": "#00D2D3"
})
add_node("text", "Audio Track Name", 205, 1264, text="Track #18: Rekonsiliasi Bank Odoo 19", props={
    "fontSize": 12,
    "fontStyle": "Bold",
    "fill": "#F8FAFC"
})
add_node("text", "Audio Track Time", 205, 1286, text="03:45 / 07:12 · Mode Suara Jernih", props={
    "fontSize": 11,
    "fill": "#00D2D3"
})

# Bento Card 4: Spaced Repetition (820 x 280)
add_node("rectangle", "Bento Card 4 BG", 540, 1085, 820, 280, props={
    "fill": "#141A26",
    "stroke": "#232E42",
    "strokeWeight": 1,
    "cornerRadius": 20
})
add_node("rectangle", "Bento 4 Badge", 572, 1115, 140, 24, props={
    "fill": "rgba(41, 204, 87, 0.15)",
    "cornerRadius": 6
})
add_node("text", "Bento 4 Badge Text", 582, 1121, text="SPACED REPETITION", props={
    "fontSize": 10,
    "fontStyle": "Bold",
    "fill": "#29CC57"
})
add_node("text", "Bento 4 Title", 572, 1150, text="Anki Engine: Ingat Konsep Permanen Tanpa Lupa", props={
    "fontSize": 20,
    "fontStyle": "Bold",
    "fill": "#F8FAFC"
})
add_node("text", "Bento 4 Desc", 572, 1182, text="Algoritma SuperMemo SM-2 melacak soal-soal yang pernah Anda jawab salah dan memunculkannya kembali tepat pada kurva lupa otak Anda.", props={
    "fontSize": 13,
    "fill": "#94A3B8",
    "lineHeight": 20
})

# Flashcard Mock in Bento 4
add_node("rectangle", "FC Card Mock", 572, 1242, 756, 90, props={
    "fill": "#0B0F19",
    "stroke": "#232E42",
    "strokeWeight": 1,
    "cornerRadius": 12
})
add_node("text", "FC Status", 596, 1258, text="🔥 Review Hari Ini: 14 Kartu Siap Dilatih (Streak Hari ke-8)", props={
    "fontSize": 12,
    "fontStyle": "Bold",
    "fill": "#F7C325"
})
add_node("rectangle", "FC Btn Easy", 596, 1288, 110, 32, props={
    "fill": "rgba(41, 204, 87, 0.2)",
    "cornerRadius": 8
})
add_node("text", "FC Btn Easy Text", 620, 1297, text="Mudah (4d)", props={
    "fontSize": 11,
    "fontStyle": "Bold",
    "fill": "#29CC57"
})
add_node("rectangle", "FC Btn Good", 720, 1288, 110, 32, props={
    "fill": "rgba(0, 210, 211, 0.2)",
    "cornerRadius": 8
})
add_node("text", "FC Btn Good Text", 745, 1297, text="Bagus (2d)", props={
    "fontSize": 11,
    "fontStyle": "Bold",
    "fill": "#00D2D3"
})
add_node("rectangle", "FC Btn Hard", 844, 1288, 110, 32, props={
    "fill": "rgba(255, 93, 93, 0.2)",
    "cornerRadius": 8
})
add_node("text", "FC Btn Hard Text", 868, 1297, text="Ulangi (10m)", props={
    "fontSize": 11,
    "fontStyle": "Bold",
    "fill": "#FF5D5D"
})

# 6. Interactive Quiz Showcase: Emil Kowalski 8-State Choice Component (Y: 1390 - 1720)
add_node("rectangle", "Choice Showcase BG", 80, 1390, 1280, 320, props={
    "fill": "#101622",
    "stroke": "#232E42",
    "strokeWeight": 1,
    "cornerRadius": 24
})

add_node("text", "Choice Section Tag", 112, 1420, text="KOMPONEN INTERAKTIF PILIHAN GANDA · 8-STATE POLISH", props={
    "fontSize": 11,
    "fontStyle": "Bold",
    "fill": "#29CC57",
    "letterSpacing": 0.8
})
add_node("text", "Choice Section Title", 112, 1446, text="Contoh Soal Sertifikasi Odoo 19: Delivery Order & COGS", props={
    "fontSize": 20,
    "fontStyle": "Bold",
    "fill": "#F8FAFC"
})
add_node("text", "Choice Section Sub", 112, 1474, text="Dalam Odoo 19 Accounting dengan Automated Anglo-Saxon, kapan jurnal COGS pertama kali terbentuk?", props={
    "fontSize": 14,
    "fill": "#CBD5E1"
})

# Option 1: Default
add_node("rectangle", "Choice Row 1", 112, 1515, 600, 48, props={
    "fill": "#141A26",
    "stroke": "#232E42",
    "strokeWeight": 1,
    "cornerRadius": 14
})
add_node("text", "Choice Row 1 Text", 132, 1530, text="A. Saat Sales Order dikonfirmasi oleh sales manager", props={
    "fontSize": 13,
    "fill": "#94A3B8"
})

# Option 2: Correct / Selected State (Green with Glow)
add_node("rectangle", "Choice Row 2", 112, 1575, 600, 48, props={
    "fill": "rgba(41, 204, 87, 0.12)",
    "stroke": "#29CC57",
    "strokeWeight": 2,
    "cornerRadius": 14
})
add_node("text", "Choice Row 2 Text", 132, 1590, text="B. Saat Customer Invoice divalidasi dan diposting", props={
    "fontSize": 13,
    "fontStyle": "Bold",
    "fill": "#29CC57"
})
add_node("text", "Choice Row 2 Badge", 650, 1590, text="BENAR ✓", props={
    "fontSize": 11,
    "fontStyle": "Bold",
    "fill": "#29CC57"
})

# Option 3: Wrong / Retry State
add_node("rectangle", "Choice Row 3", 112, 1635, 600, 48, props={
    "fill": "#141A26",
    "stroke": "#232E42",
    "strokeWeight": 1,
    "cornerRadius": 14
})
add_node("text", "Choice Row 3 Text", 132, 1650, text="C. Saat Delivery Order divalidasi di modul Inventory", props={
    "fontSize": 13,
    "fill": "#94A3B8"
})

# Explanation Box for Option 2 on the right side
add_node("rectangle", "Explain Box", 740, 1515, 590, 168, props={
    "fill": "#141A26",
    "stroke": "rgba(41, 204, 87, 0.4)",
    "strokeWeight": 1,
    "cornerRadius": 16
})
add_node("text", "Explain Title", 764, 1535, text="Penjelasan Teknis Odoo 19 (Anglo-Saxon Accounting):", props={
    "fontSize": 14,
    "fontStyle": "Bold",
    "fill": "#29CC57"
})
add_node("text", "Explain Body", 764, 1565, text="Pada sistem Anglo-Saxon, validasi pengiriman barang (DO) hanya\nmencatat akun Interim: Debit Stock Interim Output / Kredit Stock Valuation.\nBeban Pokok Penjualan (COGS) baru diakui saat Invoice diterbitkan,\nsehingga pendapatan penjualan dan beban COGS tercatat di periode yang sama.", props={
    "fontSize": 12,
    "fill": "#CBD5E1",
    "lineHeight": 20
})

# 7. Bottom High-Impact CTA Banner (Y: 1740 - 1880)
add_node("rectangle", "Bottom CTA Card", 80, 1740, 1280, 140, props={
    "fill": "#141A26",
    "stroke": "#232E42",
    "strokeWeight": 1,
    "cornerRadius": 20
})
add_node("text", "Bottom CTA Title", 120, 1775, text="Siap Menjadi Konsultan Odoo Bersertifikasi Resmi?", props={
    "fontSize": 24,
    "fontStyle": "Bold",
    "fill": "#F8FAFC"
})
add_node("text", "Bottom CTA Sub", 120, 1812, text="Mulai latihan sekarang tanpa registrasi rumit. Dapatkan skor kelulusan ≥70% pada tes pertama Anda.", props={
    "fontSize": 13,
    "fill": "#94A3B8"
})

add_node("rectangle", "Bottom CTA Action Btn", 1080, 1780, 240, 56, props={
    "fill": "#29CC57",
    "cornerRadius": 16
})
add_node("text", "Bottom CTA Action Text", 1125, 1798, text="Mulai Ujian Gratis ⚡", props={
    "fontSize": 15,
    "fontStyle": "Bold",
    "fill": "#0B0F19"
})

# Write JSON output
with open("designs/build_brilliant_landing.json", "w", encoding="utf-8") as f:
    json.dump(commands, f, indent=2)

print(f"Generated designs/build_brilliant_landing.json with {len(commands)} nodes.")
