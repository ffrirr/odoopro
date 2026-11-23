#!/usr/bin/env python3
"""
Generate FigCraft JSON script for OdooPro 100% True Brilliant.org Template.
Matches Brilliant.org's exact design language:
- Clean Luminous White/Light Canvas (#FFFFFF, #F8F8F8)
- Editorial Serif Headings (CoFo Robert / Newsreader style)
- Signature Vibrant Green Accents (#29CC57, #15B441, #009B2B)
- Tactical Choice Cards (14px radius, subtle #E5E5E5 borders, soft ambient elevation)
- Asymmetric Hero with 3D-perspective Interactive Problem Card
- "Meet Your Tutor" 3-column feature section
- Interactive Topic & Curriculum Grid
- High-impact closing banner
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

# 1. Canvas Root (1440 x 2250) - Clean Pure White (#FFFFFF)
commands.append({
    "as": "canvas",
    "command": "node.create",
    "params": {
        "type": "frame",
        "name": "Desktop 1440 - OdooPro True Brilliant Template",
        "x": 0,
        "y": 0,
        "width": 1440,
        "height": 2250,
        "props": {
            "fill": "#FFFFFF"
        }
    }
})

# 2. Navbar (Brilliant Clean White Header)
add_node("rectangle", "Navbar BG", 0, 0, 1440, 72, props={
    "fill": "#FFFFFF",
    "stroke": "#E5E5E5",
    "strokeBottomWeight": 1
})

# Brand Logo: Clean modern black & green
add_node("text", "Nav Logo Mark", 80, 22, text="✦", props={
    "fontSize": 24,
    "fontStyle": "Bold",
    "fill": "#29CC57"
})
add_node("text", "Nav Brand Name", 112, 24, text="Odoo", props={
    "fontSize": 22,
    "fontStyle": "Bold",
    "fill": "#1E1E1E"
})
add_node("text", "Nav Brand Accent", 168, 24, text="Pro", props={
    "fontSize": 22,
    "fontStyle": "Bold",
    "fill": "#29CC57"
})

# Nav Links (Minimal, neutral gray #666666)
nav_links = [
    ("Kurikulum", 340),
    ("Simulator Ujian", 460),
    ("AI Tutor", 600),
    ("Audiobook (321 Soal)", 710),
    ("Untuk Perusahaan", 890)
]
for title, px in nav_links:
    add_node("text", f"Nav {title}", px, 27, text=title, props={
        "fontSize": 14,
        "fontStyle": "Medium",
        "fill": "#666666"
    })

# Right Actions: Login + Green Pill CTA
add_node("text", "Nav Login Link", 1160, 27, text="Masuk", props={
    "fontSize": 14,
    "fontStyle": "Bold",
    "fill": "#1E1E1E"
})
add_node("rectangle", "Nav CTA Pill", 1230, 16, 130, 40, props={
    "fill": "#29CC57",
    "cornerRadius": 20
})
add_node("text", "Nav CTA Text", 1252, 27, text="Mulai Gratis", props={
    "fontSize": 13,
    "fontStyle": "Bold",
    "fill": "#FFFFFF"
})

# 3. Hero Section (Y: 100 to 620)
# Left Column: Value Proposition in Brilliant Editorial Style
add_node("rectangle", "Hero Eyebrow Pill", 80, 115, 290, 30, props={
    "fill": "#F4FCF7",
    "stroke": "#D4F5DD",
    "strokeWeight": 1,
    "cornerRadius": 15
})
add_node("text", "Hero Eyebrow Text", 96, 122, text="TUTOR PERSONAL SERTIFIKASI ODOO 19", props={
    "fontSize": 10,
    "fontStyle": "Bold",
    "fill": "#009B2B",
    "letterSpacing": 0.5
})

# Display Headline (High-Contrast Editorial Serif Style)
add_node("text", "Hero H1 Line 1", 80, 165, text="Tutor personal Anda untuk", props={
    "fontSize": 46,
    "fontStyle": "Bold",
    "fill": "#1E1E1E",
    "lineHeight": 54
})
add_node("text", "Hero H1 Line 2", 80, 222, text="ujian sertifikasi Odoo 19", props={
    "fontSize": 46,
    "fontStyle": "Bold",
    "fill": "#1E1E1E",
    "lineHeight": 54
})
add_node("text", "Hero H1 Accent", 80, 280, text="dan penguasaan workflow.", props={
    "fontSize": 46,
    "fontStyle": "Bold",
    "fill": "#29CC57",
    "lineHeight": 54
})

# Prosa Subhead (Refined Charcoal #4C4C4C)
add_node("text", "Hero Subhead", 80, 350, text="Pembelajaran visual dan interaktif dari konsep dasar hingga mahir.\nKuasai akuntansi double-entry, inventory perpetual, manufaktur,\nhingga Python ORM dengan simulasi nyata, bukan sekadar menghafal.", props={
    "fontSize": 16,
    "fill": "#666666",
    "lineHeight": 26
})

# Primary Green Pill Button (Brilliant Physical Press Style)
add_node("rectangle", "Hero Primary CTA Btn", 80, 440, 230, 52, props={
    "fill": "#29CC57",
    "cornerRadius": 26
})
add_node("text", "Hero Primary CTA Text", 115, 456, text="Mulai Belajar Sekarang →", props={
    "fontSize": 15,
    "fontStyle": "Bold",
    "fill": "#FFFFFF"
})

# Secondary Ghost Button
add_node("rectangle", "Hero Ghost Btn", 325, 440, 180, 52, props={
    "fill": "#FFFFFF",
    "stroke": "#CCCCCC",
    "strokeWeight": 1,
    "cornerRadius": 26
})
add_node("text", "Hero Ghost Text", 355, 456, text="Jelajahi 321 Soal", props={
    "fontSize": 15,
    "fontStyle": "Medium",
    "fill": "#1E1E1E"
})

# Micro Guarantees
add_node("text", "Hero Guarantees", 80, 515, text="✓ 321 Soal Pearson VUE   ·   ✓ Umpan Balik Instan   ·   ✓ Gratis Diakses", props={
    "fontSize": 12,
    "fontStyle": "Medium",
    "fill": "#666666"
})

# Right Column: The Signature Brilliant 3D Tilted Interactive Card
# Base Container with soft ambient drop-shadow
add_node("rectangle", "Hero Interactive Card Shadow", 740, 115, 620, 440, props={
    "fill": "#FFFFFF",
    "stroke": "#E5E5E5",
    "strokeWeight": 1,
    "cornerRadius": 24
})

# Card Interior
add_node("rectangle", "Problem Tag BG", 770, 140, 140, 26, props={
    "fill": "#F4FCF7",
    "cornerRadius": 6
})
add_node("text", "Problem Tag Text", 782, 146, text="AKUNTANSI ODOO 19", props={
    "fontSize": 10,
    "fontStyle": "Bold",
    "fill": "#009B2B"
})
add_node("text", "Problem Question Number", 1240, 145, text="Tantangan 1", props={
    "fontSize": 12,
    "fontStyle": "Bold",
    "fill": "#666666"
})

# Problem Title
add_node("text", "Problem Title", 770, 182, text="Bagaimana Odoo mencatat Penjualan Kredit?", props={
    "fontSize": 18,
    "fontStyle": "Bold",
    "fill": "#1E1E1E"
})
add_node("text", "Problem Subtitle", 770, 210, text="Lengkapi pasangan jurnal saat Customer Invoice divalidasi:", props={
    "fontSize": 13,
    "fill": "#666666"
})

# Interactive Matching Slot 1 (Solved)
add_node("rectangle", "Journal Row 1", 770, 240, 560, 46, props={
    "fill": "#F8F8F8",
    "stroke": "#E5E5E5",
    "strokeWeight": 1,
    "cornerRadius": 12
})
add_node("text", "Journal Row 1 Debit", 790, 254, text="Debit", props={
    "fontSize": 12,
    "fontStyle": "Bold",
    "fill": "#009B2B"
})
add_node("text", "Journal Row 1 Account", 840, 254, text="Account Receivable (Piutang Usaha)", props={
    "fontSize": 13,
    "fontStyle": "Medium",
    "fill": "#1E1E1E"
})
add_node("text", "Journal Row 1 Val", 1230, 254, text="Rp 11.100.000", props={
    "fontSize": 13,
    "fontStyle": "Bold",
    "fill": "#1E1E1E"
})

# Interactive Matching Slot 2 (Pending User Choice)
add_node("rectangle", "Journal Row 2", 770, 296, 560, 46, props={
    "fill": "#FAFAFA",
    "stroke": "#29CC57",
    "strokeWeight": 2,
    "cornerRadius": 12
})
add_node("text", "Journal Row 2 Kredit", 790, 310, text="Kredit", props={
    "fontSize": 12,
    "fontStyle": "Bold",
    "fill": "#1E1E1E"
})
add_node("text", "Journal Row 2 Account", 840, 310, text="Product Sales & Tax Payable ...................", props={
    "fontSize": 13,
    "fontStyle": "Medium",
    "fill": "#666666"
})
add_node("text", "Journal Row 2 Val", 1220, 310, text="Rp 11.100.000 ✓", props={
    "fontSize": 13,
    "fontStyle": "Bold",
    "fill": "#009B2B"
})

# 3 Tactical Choice Cards (Brilliant choice pills with 14px radius)
add_node("rectangle", "Choice Option 1", 770, 355, 175, 42, props={
    "fill": "#FFFFFF",
    "stroke": "#E5E5E5",
    "strokeWeight": 1,
    "cornerRadius": 14
})
add_node("text", "Choice 1 Text", 805, 368, text="Rp 10.000.000", props={
    "fontSize": 12,
    "fill": "#666666"
})

# Selected Active Option
add_node("rectangle", "Choice Option 2 (Selected)", 960, 355, 180, 42, props={
    "fill": "#F4FCF7",
    "stroke": "#29CC57",
    "strokeWeight": 2,
    "cornerRadius": 14
})
add_node("text", "Choice 2 Text", 990, 368, text="Rp 11.100.000 ✓", props={
    "fontSize": 12,
    "fontStyle": "Bold",
    "fill": "#009B2B"
})

add_node("rectangle", "Choice Option 3", 1155, 355, 175, 42, props={
    "fill": "#FFFFFF",
    "stroke": "#E5E5E5",
    "strokeWeight": 1,
    "cornerRadius": 14
})
add_node("text", "Choice 3 Text", 1190, 368, text="Rp 12.210.000", props={
    "fontSize": 12,
    "fill": "#666666"
})

# Interactive Bottom Status Tag
add_node("rectangle", "Result Success Tag", 770, 412, 560, 46, props={
    "fill": "#EAFCEE",
    "cornerRadius": 12
})
add_node("text", "Result Success Text", 870, 426, text="🎉 Benar! Total Debit dan Kredit seimbang sempurna.", props={
    "fontSize": 13,
    "fontStyle": "Bold",
    "fill": "#007C23"
})

# 4. Trust & Authority Bar (Brilliant Style: Clean light section)
add_node("rectangle", "Trust Bar Canvas", 0, 590, 1440, 100, props={
    "fill": "#F8F8F8",
    "stroke": "#E5E5E5",
    "strokeTopWeight": 1,
    "strokeBottomWeight": 1
})

add_node("text", "Trust Bar Title", 80, 630, text="DIPERCAYA OLEH 1,200+ AKUNTAN, KONSULTAN ODOO & KAMPUS TERKEMUKA", props={
    "fontSize": 11,
    "fontStyle": "Bold",
    "fill": "#666666",
    "letterSpacing": 1.2
})

trust_badges = [
    ("321 Soal", "Odoo 19 & 18", 780),
    ("88%", "Lulus Ujian Pertama", 950),
    ("4.9 ★", "Ulasan Pengguna", 1130),
    ("100%", "Simulasi Visual", 1280)
]
for stat, sub, pos in trust_badges:
    add_node("text", f"Trust Stat {stat}", pos, 620, text=stat, props={
        "fontSize": 16,
        "fontStyle": "Bold",
        "fill": "#1E1E1E"
    })
    add_node("text", f"Trust Sub {stat}", pos, 642, text=sub, props={
        "fontSize": 11,
        "fill": "#666666"
    })

# 5. Section: "Meet Koji" -> "Meet OdooPro AI Tutor" (Brilliant Core Section)
add_node("text", "Tutor Section Eyebrow", 580, 735, text="TUTOR VISUAL PRIBADI ANDA", props={
    "fontSize": 11,
    "fontStyle": "Bold",
    "fill": "#29CC57",
    "letterSpacing": 1.0
})
add_node("text", "Tutor Section Heading", 410, 760, text="Tutor Interaktif, Bukan Mesin Pencontek", props={
    "fontSize": 32,
    "fontStyle": "Bold",
    "fill": "#1E1E1E"
})
add_node("text", "Tutor Section Sub", 430, 804, text="OdooPro membimbing Anda memahami alur bisnis ERP langkah demi langkah\ndengan analogi visual, bukan memberi jawaban mentah tanpa pemahaman.", props={
    "fontSize": 15,
    "fill": "#666666",
    "lineHeight": 24
})

# 3 Feature Cards (Pure Brilliant White Cards with Light Gray Borders)
features = [
    {
        "title": "Bimbingan Bertahap Saat Macet",
        "desc": "Ketika Anda keliru, AI tidak langsung membocorkan kunci jawaban, melainkan memberikan petunjuk teknis bertahap.",
        "icon": "💡",
        "x": 80
    },
    {
        "title": "Simulasi Workflow Nyata",
        "desc": "Pelajari siklus Purchase-to-Pay, Order-to-Cash, dan Manufacturing Routing secara visual layaknya di sistem Odoo asli.",
        "icon": "⚙️",
        "x": 520
    },
    {
        "title": "Diagnosis Kesiapan Ujian",
        "desc": "Algoritma mengevaluasi skor di setiap topik sehingga Anda tahu persis kapan siap mendaftar ujian Pearson VUE resmi.",
        "icon": "🎯",
        "x": 960
    }
]

for f in features:
    add_node("rectangle", f"Feature BG {f['title']}", f['x'], 860, 400, 240, props={
        "fill": "#FFFFFF",
        "stroke": "#E5E5E5",
        "strokeWeight": 1,
        "cornerRadius": 20
    })
    add_node("rectangle", f"Feature Icon Box {f['title']}", f['x'] + 28, 888, 48, 48, props={
        "fill": "#F4FCF7",
        "cornerRadius": 12
    })
    add_node("text", f"Feature Icon {f['title']}", f['x'] + 42, 902, text=f['icon'], props={
        "fontSize": 20
    })
    add_node("text", f"Feature Title {f['title']}", f['x'] + 28, 955, text=f['title'], props={
        "fontSize": 18,
        "fontStyle": "Bold",
        "fill": "#1E1E1E"
    })
    add_node("text", f"Feature Desc {f['title']}", f['x'] + 28, 988, text=f['desc'], props={
        "fontSize": 13,
        "fill": "#666666",
        "lineHeight": 22
    })

# 6. Section: Curriculum Explorer by Topic (Brilliant Bento Grid)
add_node("text", "Curriculum Section Eyebrow", 80, 1150, text="JELAJAHI MATERI", props={
    "fontSize": 11,
    "fontStyle": "Bold",
    "fill": "#29CC57",
    "letterSpacing": 1.0
})
add_node("text", "Curriculum Section Heading", 80, 1175, text="Dari Fondasi ERP Hingga Arsitektur Lanjutan", props={
    "fontSize": 30,
    "fontStyle": "Bold",
    "fill": "#1E1E1E"
})

# Curriculum Category Tabs (Brilliant Clean Filter Pills)
tabs = [
    ("Semua Modul (321 Soal)", 80, True),
    ("Akuntansi & Finansial (85)", 280, False),
    ("Inventory & Gudang (72)", 490, False),
    ("Manufacturing & MRP (58)", 680, False),
    ("Technical & ORM (56)", 880, False)
]
for tab_name, px, is_active in tabs:
    if is_active:
        add_node("rectangle", f"Tab {tab_name}", px, 1225, 185, 38, props={
            "fill": "#1E1E1E",
            "cornerRadius": 19
        })
        add_node("text", f"Tab Text {tab_name}", px + 18, 1236, text=tab_name, props={
            "fontSize": 12,
            "fontStyle": "Bold",
            "fill": "#FFFFFF"
        })
    else:
        add_node("rectangle", f"Tab {tab_name}", px, 1225, 180, 38, props={
            "fill": "#FFFFFF",
            "stroke": "#E5E5E5",
            "strokeWeight": 1,
            "cornerRadius": 19
        })
        add_node("text", f"Tab Text {tab_name}", px + 18, 1236, text=tab_name, props={
            "fontSize": 12,
            "fontStyle": "Medium",
            "fill": "#666666"
        })

# 4 Curriculum Cards (2 x 2 Bento Grid, Pure White with Crisp Strokes)
curriculum_cards = [
    {
        "code": "ACC-19",
        "title": "Akuntansi & Finansial Odoo 19",
        "count": "85 Latihan Interaktif",
        "desc": "Chart of Accounts, Jurnal Otomatis, Rekonsiliasi Bank, Anglo-Saxon COGS, dan Pelaporan Pajak.",
        "badge": "Paling Populer",
        "badge_color": "#29CC57",
        "x": 80,
        "y": 1285
    },
    {
        "code": "INV-19",
        "title": "Inventory, Multi-Warehouse & Barcode",
        "count": "72 Latihan Interaktif",
        "desc": "Penerimaan 3-Langkah, Multi-Company Routing, Reordering Rules, dan Real-time Valuation.",
        "badge": "Krusial",
        "badge_color": "#009B2B",
        "x": 740,
        "y": 1285
    },
    {
        "code": "MRP-19",
        "title": "Manufaktur, BOM & Work Centers",
        "count": "58 Latihan Interaktif",
        "desc": "Bill of Materials Multi-Level, Subcontracting, Work Order Routing, dan Cost Calculation.",
        "badge": "Lanjutan",
        "badge_color": "#755600",
        "x": 80,
        "y": 1475
    },
    {
        "code": "DEV-19",
        "title": "Python ORM, Model & QWeb Report",
        "count": "56 Latihan Interaktif",
        "desc": "Field dependencies, compute inverse, security ACL, record rules, dan template printout PDF.",
        "badge": "Teknikal",
        "badge_color": "#294BC6",
        "x": 740,
        "y": 1475
    }
]

for c in curriculum_cards:
    add_node("rectangle", f"Curriculum BG {c['code']}", c['x'], c['y'], 620, 165, props={
        "fill": "#FFFFFF",
        "stroke": "#E5E5E5",
        "strokeWeight": 1,
        "cornerRadius": 18
    })
    # Badge
    add_node("rectangle", f"Curriculum Badge {c['code']}", c['x'] + 24, c['y'] + 20, 95, 22, props={
        "fill": "#F8F8F8",
        "stroke": "#E5E5E5",
        "strokeWeight": 1,
        "cornerRadius": 6
    })
    add_node("text", f"Badge Text {c['code']}", c['x'] + 32, c['y'] + 25, text=c['badge'], props={
        "fontSize": 10,
        "fontStyle": "Bold",
        "fill": c['badge_color']
    })
    add_node("text", f"Curriculum Count {c['code']}", c['x'] + 480, c['y'] + 24, text=c['count'], props={
        "fontSize": 11,
        "fontStyle": "Bold",
        "fill": "#666666"
    })
    # Title
    add_node("text", f"Curriculum Title {c['code']}", c['x'] + 24, c['y'] + 52, text=c['title'], props={
        "fontSize": 17,
        "fontStyle": "Bold",
        "fill": "#1E1E1E"
    })
    # Desc
    add_node("text", f"Curriculum Desc {c['code']}", c['x'] + 24, c['y'] + 78, text=c['desc'], props={
        "fontSize": 13,
        "fill": "#666666",
        "lineHeight": 20
    })
    # Action Arrow
    add_node("text", f"Curriculum CTA {c['code']}", c['x'] + 24, c['y'] + 128, text="Mulai Topik Ini →", props={
        "fontSize": 13,
        "fontStyle": "Bold",
        "fill": "#009B2B"
    })

# 7. Section: Testimonial & Social Proof (Brilliant Learner Quotes)
add_node("text", "Testimonial Eyebrow", 80, 1690, text="CERITA KELULUSAN", props={
    "fontSize": 11,
    "fontStyle": "Bold",
    "fill": "#29CC57",
    "letterSpacing": 1.0
})
add_node("text", "Testimonial Title", 80, 1715, text="Dicintai oleh Konsultan, Akuntan, dan Developer", props={
    "fontSize": 28,
    "fontStyle": "Bold",
    "fill": "#1E1E1E"
})

testimonials = [
    {
        "quote": "“Format soal interaktif OdooPro sangat mirip dengan ujian sertifikasi resmi Pearson VUE. Saya lulus Odoo 19 dengan skor 86% pada kesempatan pertama.”",
        "name": "Budi Santoso",
        "role": "Senior ERP Consultant · Jakarta",
        "x": 80
    },
    {
        "quote": "“Penjelasan di balik penyeimbangan jurnal akuntansi dan Anglo-Saxon di sini jauh lebih jelas daripada membaca dokumentasi tebal ratusan halaman.”",
        "name": "Siti Rahmawati, Ak.",
        "role": "Accounting Lead · Surabaya",
        "x": 520
    },
    {
        "quote": "“Fitur Audiobook Studio sangat membantu saat sedang macet di jalan. Konsep ORM dan workflow Odoo jadi nempel permanen di kepala.”",
        "name": "David Pratama",
        "role": "Odoo Technical Developer · Bandung",
        "x": 960
    }
]

for t in testimonials:
    add_node("rectangle", f"Testi BG {t['name']}", t['x'], 1765, 400, 180, props={
        "fill": "#F8F8F8",
        "stroke": "#E5E5E5",
        "strokeWeight": 1,
        "cornerRadius": 16
    })
    add_node("text", f"Testi Quote {t['name']}", t['x'] + 24, 1785, text=t['quote'], props={
        "fontSize": 12.5,
        "fill": "#4C4C4C",
        "lineHeight": 20
    })
    add_node("text", f"Testi Name {t['name']}", t['x'] + 24, 1875, text=t['name'], props={
        "fontSize": 13,
        "fontStyle": "Bold",
        "fill": "#1E1E1E"
    })
    add_node("text", f"Testi Role {t['name']}", t['x'] + 24, 1898, text=t['role'], props={
        "fontSize": 11,
        "fill": "#666666"
    })

# 8. High-Impact Closing CTA Banner (Brilliant Deep Green Banner #004E16)
add_node("rectangle", "Closing CTA BG", 80, 1990, 1280, 180, props={
    "fill": "#004E16",
    "cornerRadius": 24
})

add_node("text", "Closing CTA Heading", 130, 2035, text="Tutor terbaik yang pernah Anda miliki sudah ada di sini.", props={
    "fontSize": 30,
    "fontStyle": "Bold",
    "fill": "#FFFFFF"
})
add_node("text", "Closing CTA Subhead", 130, 2080, text="Bergabunglah dengan ribuan profesional yang lulus sertifikasi Odoo resmi dengan rasa percaya diri penuh.", props={
    "fontSize": 15,
    "fill": "#D4F5DD"
})

add_node("rectangle", "Closing Action Btn", 1080, 2050, 230, 56, props={
    "fill": "#29CC57",
    "cornerRadius": 28
})
add_node("text", "Closing Action Text", 1118, 2068, text="Mulai Belajar Sekarang →", props={
    "fontSize": 14,
    "fontStyle": "Bold",
    "fill": "#FFFFFF"
})

# Save JSON
with open("designs/build_brilliant_official_template.json", "w", encoding="utf-8") as f:
    json.dump(commands, f, indent=2)

print(f"Generated designs/build_brilliant_official_template.json with {len(commands)} nodes.")
