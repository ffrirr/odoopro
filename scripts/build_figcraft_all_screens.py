#!/usr/bin/env python3
import json
import subprocess
import os

def build_all_screens():
    commands = []
    
    # =========================================================================
    # FRAME 1: DESKTOP 1440 - DASHBOARD (x: 0, y: 0, 1440 x 960)
    # =========================================================================
    commands.append({
        "as": "d_canvas",
        "command": "node.create",
        "params": {
            "type": "frame",
            "name": "Desktop 1440 - Dashboard",
            "x": 0, "y": 0, "width": 1440, "height": 960,
            "props": {"fill": "#0B0F19"}
        }
    })
    
    # Sidebar
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Sidebar BG",
            "parent": {"$ref": "d_canvas"},
            "x": 0, "y": 0, "width": 260, "height": 960,
            "props": {"fill": "#141A26", "stroke": "#232E42", "strokeRightWeight": 1}
        }
    })
    # Logo
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle",
            "name": "Logo Box",
            "parent": {"$ref": "d_canvas"},
            "x": 24, "y": 24, "width": 38, "height": 38,
            "props": {"fill": "#714B67", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Logo Text", "parent": {"$ref": "d_canvas"},
            "x": 32, "y": 32, "text": "OP",
            "props": {"fontSize": 18, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Brand Title", "parent": {"$ref": "d_canvas"},
            "x": 72, "y": 24, "text": "OdooPro",
            "props": {"fontSize": 20, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Brand Subtitle", "parent": {"$ref": "d_canvas"},
            "x": 72, "y": 48, "text": "CERTIFICATION ENGINE",
            "props": {"fontSize": 9, "fontStyle": "Bold", "fill": "#94A3B8"}
        }
    })
    # Divider
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Divider", "parent": {"$ref": "d_canvas"},
            "x": 24, "y": 78, "width": 212, "height": 1, "props": {"fill": "#232E42"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Section Label", "parent": {"$ref": "d_canvas"},
            "x": 24, "y": 96, "text": "WORKSPACE",
            "props": {"fontSize": 11, "fontStyle": "Bold", "fill": "#64748B"}
        }
    })
    # Nav Items
    navs = [
        {"y": 120, "icon": "⚡", "label": "Dashboard", "active": True},
        {"y": 172, "icon": "📖", "label": "Learning Path", "active": False},
        {"y": 218, "icon": "📝", "label": "Simulasi Ujian", "active": False, "badge": "321 Q", "badge_col": "#00D2D3"},
        {"y": 264, "icon": "🎧", "label": "Audiobook Studio", "active": False},
        {"y": 310, "icon": "🗂️", "label": "Flashcard SM-2", "active": False, "badge": "18 Due", "badge_col": "#F59E0B"},
        {"y": 356, "icon": "📊", "label": "Analitik Skor", "active": False},
    ]
    for n in navs:
        if n.get("active"):
            commands.append({
                "command": "node.create",
                "params": {
                    "type": "rectangle", "name": f"Nav {n['label']} BG", "parent": {"$ref": "d_canvas"},
                    "x": 16, "y": n["y"], "width": 228, "height": 42,
                    "props": {"fill": "#1E2738", "cornerRadius": 8}
                }
            })
            commands.append({
                "command": "node.create",
                "params": {
                    "type": "rectangle", "name": "Active Indicator", "parent": {"$ref": "d_canvas"},
                    "x": 16, "y": n["y"], "width": 4, "height": 42,
                    "props": {"fill": "#00D2D3", "cornerRadius": 2}
                }
            })
            col = "#00D2D3"
        else:
            col = "#CBD5E1"
            
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"Nav {n['label']} Text", "parent": {"$ref": "d_canvas"},
                "x": 36, "y": n["y"] + 12, "text": f"{n['icon']}  {n['label']}",
                "props": {"fontSize": 14, "fontStyle": "Bold" if n.get("active") else "normal", "fill": col}
            }
        })
        if n.get("badge"):
            commands.append({
                "command": "node.create",
                "params": {
                    "type": "rectangle", "name": "Badge BG", "parent": {"$ref": "d_canvas"},
                    "x": 184, "y": n["y"] + 11, "width": 48, "height": 20,
                    "props": {"fill": f"{n['badge_col']}25", "cornerRadius": 4}
                }
            })
            commands.append({
                "command": "node.create",
                "params": {
                    "type": "text", "name": "Badge Text", "parent": {"$ref": "d_canvas"},
                    "x": 190, "y": n["y"] + 15, "text": n["badge"],
                    "props": {"fontSize": 10, "fontStyle": "Bold", "fill": n["badge_col"]}
                }
            })

    # Sidebar Bottom Widgets
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Countdown BG", "parent": {"$ref": "d_canvas"},
            "x": 16, "y": 732, "width": 228, "height": 96,
            "props": {"fill": "#1A2232", "stroke": "#232E42", "cornerRadius": 12}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Countdown Tag", "parent": {"$ref": "d_canvas"},
            "x": 30, "y": 746, "text": "PEARSON VUE VOUCHER",
            "props": {"fontSize": 9, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Countdown Title", "parent": {"$ref": "d_canvas"},
            "x": 30, "y": 764, "text": "21 Hari Menuju Ujian",
            "props": {"fontSize": 15, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Countdown Sub", "parent": {"$ref": "d_canvas"},
            "x": 30, "y": 786, "text": "Kesiapan: 78% (Target min. 70%)",
            "props": {"fontSize": 11, "fill": "#94A3B8"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Countdown Track", "parent": {"$ref": "d_canvas"},
            "x": 30, "y": 808, "width": 200, "height": 6,
            "props": {"fill": "#232E42", "cornerRadius": 3}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Countdown Fill", "parent": {"$ref": "d_canvas"},
            "x": 30, "y": 808, "width": 156, "height": 6,
            "props": {"fill": "#00D2D3", "cornerRadius": 3}
        }
    })
    # User Profile
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "User BG", "parent": {"$ref": "d_canvas"},
            "x": 16, "y": 844, "width": 228, "height": 64,
            "props": {"fill": "#0E1320", "stroke": "#232E42", "cornerRadius": 10}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Avatar", "parent": {"$ref": "d_canvas"},
            "x": 28, "y": 856, "width": 40, "height": 40,
            "props": {"fill": "#714B67", "cornerRadius": 20}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Avatar Text", "parent": {"$ref": "d_canvas"},
            "x": 38, "y": 867, "text": "FR",
            "props": {"fontSize": 14, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "User Name", "parent": {"$ref": "d_canvas"},
            "x": 78, "y": 858, "text": "Feri Irawan",
            "props": {"fontSize": 14, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "User Role", "parent": {"$ref": "d_canvas"},
            "x": 78, "y": 880, "text": "Odoo 19 Specialist",
            "props": {"fontSize": 11, "fill": "#94A3B8"}
        }
    })

    # Header Top Bar (Height 72px)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Header BG", "parent": {"$ref": "d_canvas"},
            "x": 260, "y": 0, "width": 1180, "height": 72,
            "props": {"fill": "#0E1320", "stroke": "#232E42", "strokeBottomWeight": 1}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Search BG", "parent": {"$ref": "d_canvas"},
            "x": 292, "y": 16, "width": 400, "height": 40,
            "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Search Text", "parent": {"$ref": "d_canvas"},
            "x": 312, "y": 28, "text": "🔍  Cari materi, 321 bank soal, jurnal, BOM...",
            "props": {"fontSize": 13, "fill": "#64748B"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Streak Pill", "parent": {"$ref": "d_canvas"},
            "x": 846, "y": 16, "width": 146, "height": 40,
            "props": {"fill": "#1A2232", "stroke": "#232E42", "cornerRadius": 20}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Streak Text", "parent": {"$ref": "d_canvas"},
            "x": 862, "y": 28, "text": "🔥 14 Hari Streak",
            "props": {"fontSize": 12, "fontStyle": "Bold", "fill": "#F59E0B"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Readiness Pill", "parent": {"$ref": "d_canvas"},
            "x": 1004, "y": 16, "width": 146, "height": 40,
            "props": {"fill": "#00D2D315", "stroke": "#00D2D340", "cornerRadius": 20}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Readiness Text", "parent": {"$ref": "d_canvas"},
            "x": 1022, "y": 28, "text": "🎯 78% Kesiapan",
            "props": {"fontSize": 12, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    # Action Button (40px ergonomically optimized)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Quick Action BTN", "parent": {"$ref": "d_canvas"},
            "x": 1162, "y": 16, "width": 170, "height": 40,
            "props": {"fill": "#00D2D3", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Quick Action Text", "parent": {"$ref": "d_canvas"},
            "x": 1182, "y": 28, "text": "⚡ Simulasi Ujian",
            "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#0B0F19"}
        }
    })

    # Hero Card (y: 96, h: 160)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Hero BG", "parent": {"$ref": "d_canvas"},
            "x": 292, "y": 96, "width": 1116, "height": 160,
            "props": {"fill": "#161E2E", "stroke": "#2B384E", "cornerRadius": 16}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Hero Stripe", "parent": {"$ref": "d_canvas"},
            "x": 292, "y": 96, "width": 1116, "height": 4,
            "props": {"fill": "#00D2D3", "cornerRadius": 2}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Hero Tag BG", "parent": {"$ref": "d_canvas"},
            "x": 320, "y": 116, "width": 168, "height": 22,
            "props": {"fill": "#714B6735", "stroke": "#714B67", "cornerRadius": 11}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Hero Tag Text", "parent": {"$ref": "d_canvas"},
            "x": 330, "y": 120, "text": "ODOO 19 OFFICIAL PREP",
            "props": {"fontSize": 10, "fontStyle": "Bold", "fill": "#E2D9F3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Hero Title", "parent": {"$ref": "d_canvas"},
            "x": 320, "y": 146, "text": "Sertifikasi Odoo 19: Functional Consultant Mastery",
            "props": {"fontSize": 20, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Hero Subtitle", "parent": {"$ref": "d_canvas"},
            "x": 320, "y": 174, "text": "321 bank soal terverifikasi · Spaced repetition adaptif · 73 soal butuh pengulangan minggu ini",
            "props": {"fontSize": 13, "fill": "#CBD5E1"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Hero CTA 1", "parent": {"$ref": "d_canvas"},
            "x": 320, "y": 204, "width": 204, "height": 38,
            "props": {"fill": "#00D2D3", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Hero CTA 1 Text", "parent": {"$ref": "d_canvas"},
            "x": 336, "y": 216, "text": "Lanjutkan Belajar (Accounting)",
            "props": {"fontSize": 12, "fontStyle": "Bold", "fill": "#0B0F19"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Hero CTA 2", "parent": {"$ref": "d_canvas"},
            "x": 536, "y": 204, "width": 184, "height": 38,
            "props": {"fill": "#232E42", "stroke": "#32405A", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Hero CTA 2 Text", "parent": {"$ref": "d_canvas"},
            "x": 554, "y": 216, "text": "Simulasi Tryout 50 Soal",
            "props": {"fontSize": 12, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Hero Score BG", "parent": {"$ref": "d_canvas"},
            "x": 1238, "y": 116, "width": 144, "height": 120,
            "props": {"fill": "#1A2232", "stroke": "#2D3B54", "cornerRadius": 12}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Hero Score Val", "parent": {"$ref": "d_canvas"},
            "x": 1272, "y": 132, "text": "78%",
            "props": {"fontSize": 32, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Hero Score Label", "parent": {"$ref": "d_canvas"},
            "x": 1252, "y": 178, "text": "KESIAPAN UJIAN",
            "props": {"fontSize": 9, "fontStyle": "Bold", "fill": "#94A3B8"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Hero Score Trend", "parent": {"$ref": "d_canvas"},
            "x": 1262, "y": 200, "text": "+5% minggu ini",
            "props": {"fontSize": 10, "fontStyle": "Bold", "fill": "#10B981"}
        }
    })

    # KPI Metric Row (4 Cards)
    kpis = [
        {"x": 292, "t": "TOTAL SOAL DIKUASAI", "v": "248 / 321", "s": "77% kurikulum selesai", "c": "#10B981"},
        {"x": 577, "t": "RATA-RATA TRYOUT", "v": "82.4%", "s": "Target lulus: min 70%", "c": "#00D2D3"},
        {"x": 862, "t": "AUDIOBOOK STUDI", "v": "4.8 Jam", "s": "6 playlist bab diselesaikan", "c": "#CBD5E1"},
        {"x": 1147, "t": "SPACED REPETITION", "v": "18 Kartu", "s": "Perlu diulang hari ini", "c": "#F59E0B"},
    ]
    for k in kpis:
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": f"KPI {k['t']}", "parent": {"$ref": "d_canvas"},
                "x": k["x"], "y": 276, "width": 261, "height": 96,
                "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 12}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"KPI T {k['t']}", "parent": {"$ref": "d_canvas"},
                "x": k["x"] + 18, "y": 292, "text": k["t"],
                "props": {"fontSize": 10, "fontStyle": "Bold", "fill": "#94A3B8"}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"KPI V {k['t']}", "parent": {"$ref": "d_canvas"},
                "x": k["x"] + 18, "y": 312, "text": k["v"],
                "props": {"fontSize": 22, "fontStyle": "Bold", "fill": "#F8FAFC"}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"KPI S {k['t']}", "parent": {"$ref": "d_canvas"},
                "x": k["x"] + 18, "y": 344, "text": k["s"],
                "props": {"fontSize": 11, "fill": k["c"]}
            }
        })

    # Section Headers & Filter Pills (Enhancement from UI-Review)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Modules Title", "parent": {"$ref": "d_canvas"},
            "x": 292, "y": 396, "text": "Modul Pembelajaran & Learning Path",
            "props": {"fontSize": 18, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    # Filter Tabs
    filters = [
        {"x": 680, "w": 84, "t": "Semua (4)", "active": True},
        {"x": 772, "w": 96, "t": "Mastered (2)", "active": False},
        {"x": 876, "w": 102, "t": "Needs Focus (1)", "active": False},
    ]
    for ft in filters:
        bg_col = "#232E42" if ft["active"] else "#141A26"
        txt_col = "#00D2D3" if ft["active"] else "#94A3B8"
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": f"Filter {ft['t']}", "parent": {"$ref": "d_canvas"},
                "x": ft["x"], "y": 392, "width": ft["w"], "height": 28,
                "props": {"fill": bg_col, "stroke": "#2B384E", "cornerRadius": 14}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"Filter Text {ft['t']}", "parent": {"$ref": "d_canvas"},
                "x": ft["x"] + 12, "y": 400, "text": ft["t"],
                "props": {"fontSize": 11, "fontStyle": "Bold" if ft["active"] else "normal", "fill": txt_col}
            }
        })

    # 4 Modules
    mods = [
        {"y": 440, "icon": "📊", "t": "Accounting & Financial Management", "m": "68 / 74 Soal dikuasai · Jurnal, Rekonsiliasi, Multi-currency", "p": 92, "c": "#10B981", "b": "Mastered"},
        {"y": 550, "icon": "💼", "t": "Sales, CRM & Point of Sale", "m": "45 / 61 Soal dikuasai · Pipeline, Pricelist, Sales Order Flow", "p": 74, "c": "#00D2D3", "b": "In Progress"},
        {"y": 660, "icon": "📦", "t": "Inventory, Logistics & Manufacturing (MRP)", "m": "38 / 65 Soal dikuasai · FIFO/AVCO, Reordering, BOM", "p": 58, "c": "#F59E0B", "b": "Needs Focus"},
        {"y": 770, "icon": "🛒", "t": "Purchasing, RFQ & Three-Way Matching", "m": "42 / 48 Soal dikuasai · Vendor Bills, Purchase Agreements", "p": 88, "c": "#10B981", "b": "Mastered"},
    ]
    for mod in mods:
        my = mod["y"]
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": f"Mod {mod['t']}", "parent": {"$ref": "d_canvas"},
                "x": 292, "y": my, "width": 686, "height": 96,
                "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 12}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": "Icon BG", "parent": {"$ref": "d_canvas"},
                "x": 310, "y": my + 18, "width": 42, "height": 42,
                "props": {"fill": "#1A2232", "cornerRadius": 8}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": "Icon", "parent": {"$ref": "d_canvas"},
                "x": 322, "y": my + 30, "text": mod["icon"],
                "props": {"fontSize": 16}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": "Mod T", "parent": {"$ref": "d_canvas"},
                "x": 366, "y": my + 18, "text": mod["t"],
                "props": {"fontSize": 15, "fontStyle": "Bold", "fill": "#F8FAFC"}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": "Mod M", "parent": {"$ref": "d_canvas"},
                "x": 366, "y": my + 40, "text": mod["m"],
                "props": {"fontSize": 12, "fill": "#94A3B8"}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": "Track", "parent": {"$ref": "d_canvas"},
                "x": 366, "y": my + 68, "width": 460, "height": 6,
                "props": {"fill": "#232E42", "cornerRadius": 3}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": "Fill", "parent": {"$ref": "d_canvas"},
                "x": 366, "y": my + 68, "width": int(460 * mod["p"] / 100), "height": 6,
                "props": {"fill": mod["c"], "cornerRadius": 3}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": "Pct", "parent": {"$ref": "d_canvas"},
                "x": 836, "y": my + 64, "text": f"{mod['p']}%",
                "props": {"fontSize": 12, "fontStyle": "Bold", "fill": mod["c"]}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": "Badge BG", "parent": {"$ref": "d_canvas"},
                "x": 884, "y": my + 16, "width": 80, "height": 22,
                "props": {"fill": f"{mod['c']}20", "cornerRadius": 4}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": "Badge T", "parent": {"$ref": "d_canvas"},
                "x": 894, "y": my + 20, "text": mod["b"],
                "props": {"fontSize": 10, "fontStyle": "Bold", "fill": mod["c"]}
            }
        })

    # Right Column Cards
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Exam T", "parent": {"$ref": "d_canvas"},
            "x": 1002, "y": 396, "text": "Aktivitas Simulasi Ujian",
            "props": {"fontSize": 18, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    # Mock Exam Card
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Mock Exam Box", "parent": {"$ref": "d_canvas"},
            "x": 1002, "y": 440, "width": 406, "height": 206,
            "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 12}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Pass Badge BG", "parent": {"$ref": "d_canvas"},
            "x": 1024, "y": 458, "width": 116, "height": 22,
            "props": {"fill": "#10B98120", "cornerRadius": 4}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Pass Badge T", "parent": {"$ref": "d_canvas"},
            "x": 1032, "y": 462, "text": "STATUS: LULUS ✅",
            "props": {"fontSize": 10, "fontStyle": "Bold", "fill": "#10B981"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Exam Name", "parent": {"$ref": "d_canvas"},
            "x": 1024, "y": 490, "text": "Full Mock Exam #4 (50 Soal)",
            "props": {"fontSize": 15, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Exam Meta", "parent": {"$ref": "d_canvas"},
            "x": 1024, "y": 512, "text": "Waktu tempuh: 42 mnt / 60 mnt · Kemarin, 21:30 WIB",
            "props": {"fontSize": 12, "fill": "#94A3B8"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Score Box", "parent": {"$ref": "d_canvas"},
            "x": 1024, "y": 538, "width": 362, "height": 52,
            "props": {"fill": "#1A2232", "stroke": "#2B384E", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Score Val", "parent": {"$ref": "d_canvas"},
            "x": 1042, "y": 550, "text": "84",
            "props": {"fontSize": 24, "fontStyle": "Bold", "fill": "#10B981"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Score Denom", "parent": {"$ref": "d_canvas"},
            "x": 1076, "y": 556, "text": "/ 100 Poin (Passing grade Odoo: 70)",
            "props": {"fontSize": 12, "fill": "#CBD5E1"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Exam Link", "parent": {"$ref": "d_canvas"},
            "x": 1024, "y": 608, "text": "Lihat Pembahasan Detail Soal →",
            "props": {"fontSize": 12, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })

    # Flashcard SM-2 Card with Enhanced CTA
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Flashcard Box", "parent": {"$ref": "d_canvas"},
            "x": 1002, "y": 660, "width": 406, "height": 206,
            "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 12}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "SM2 Badge BG", "parent": {"$ref": "d_canvas"},
            "x": 1024, "y": 678, "width": 140, "height": 22,
            "props": {"fill": "#F59E0B20", "cornerRadius": 4}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "SM2 Badge T", "parent": {"$ref": "d_canvas"},
            "x": 1032, "y": 682, "text": "SPACED REPETITION",
            "props": {"fontSize": 10, "fontStyle": "Bold", "fill": "#F59E0B"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "SM2 Title", "parent": {"$ref": "d_canvas"},
            "x": 1024, "y": 710, "text": "18 Kartu Siap Diulang Hari Ini",
            "props": {"fontSize": 15, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "SM2 Desc", "parent": {"$ref": "d_canvas"},
            "x": 1024, "y": 734, "text": "SuperMemo SM-2 mendeteksi daya ingat melemah pada materi Valuation FIFO vs AVCO & Automated Inventory.",
            "props": {"fontSize": 12, "fill": "#CBD5E1"}
        }
    })
    # Enhanced CTA (with hover border styling)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "SM2 CTA BTN", "parent": {"$ref": "d_canvas"},
            "x": 1024, "y": 798, "width": 362, "height": 46,
            "props": {"fill": "#714B67", "stroke": "#875A7B", "strokeWeight": 1, "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "SM2 CTA Text", "parent": {"$ref": "d_canvas"},
            "x": 1100, "y": 814, "text": "⚡ Mulai Review Flashcard (5 Menit)",
            "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })

    # =========================================================================
    # FRAME 2: MOBILE 390 - DASHBOARD (x: 1520, y: 0, 390 x 844)
    # =========================================================================
    commands.append({
        "as": "m_canvas",
        "command": "node.create",
        "params": {
            "type": "frame",
            "name": "Mobile 390 - Dashboard",
            "x": 1520, "y": 0, "width": 390, "height": 844,
            "props": {"fill": "#0B0F19"}
        }
    })

    # Mobile Sticky Header (h: 60)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "M Header BG", "parent": {"$ref": "m_canvas"},
            "x": 0, "y": 0, "width": 390, "height": 60,
            "props": {"fill": "#0E1320", "stroke": "#232E42", "strokeBottomWeight": 1}
        }
    })
    # Mobile Logo & Brand
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "M Logo Box", "parent": {"$ref": "m_canvas"},
            "x": 16, "y": 14, "width": 32, "height": 32,
            "props": {"fill": "#714B67", "cornerRadius": 6}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "M Logo Text", "parent": {"$ref": "m_canvas"},
            "x": 23, "y": 21, "text": "OP",
            "props": {"fontSize": 14, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "M Brand", "parent": {"$ref": "m_canvas"},
            "x": 56, "y": 20, "text": "OdooPro",
            "props": {"fontSize": 17, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    # Mobile Header Streak Pill
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "M Streak Pill", "parent": {"$ref": "m_canvas"},
            "x": 278, "y": 14, "width": 96, "height": 32,
            "props": {"fill": "#1A2232", "stroke": "#232E42", "cornerRadius": 16}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "M Streak Text", "parent": {"$ref": "m_canvas"},
            "x": 290, "y": 22, "text": "🔥 14 Hari",
            "props": {"fontSize": 11, "fontStyle": "Bold", "fill": "#F59E0B"}
        }
    })

    # Mobile Hero Card (w: 358, h: 146)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "M Hero BG", "parent": {"$ref": "m_canvas"},
            "x": 16, "y": 76, "width": 358, "height": 146,
            "props": {"fill": "#161E2E", "stroke": "#2B384E", "cornerRadius": 14}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "M Hero Tag", "parent": {"$ref": "m_canvas"},
            "x": 32, "y": 92, "text": "TARGET: ODOO 19 FUNCTIONAL",
            "props": {"fontSize": 10, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "M Hero Title", "parent": {"$ref": "m_canvas"},
            "x": 32, "y": 112, "text": "21 Hari Menuju Ujian",
            "props": {"fontSize": 18, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "M Hero Sub", "parent": {"$ref": "m_canvas"},
            "x": 32, "y": 136, "text": "Kesiapan: 78% · 73 soal butuh review",
            "props": {"fontSize": 12, "fill": "#CBD5E1"}
        }
    })
    # Mobile Hero Button (44px min touch target)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "M Hero BTN", "parent": {"$ref": "m_canvas"},
            "x": 32, "y": 162, "width": 326, "height": 44,
            "props": {"fill": "#00D2D3", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "M Hero BTN Text", "parent": {"$ref": "m_canvas"},
            "x": 130, "y": 176, "text": "⚡ Lanjut Simulasi Ujian",
            "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#0B0F19"}
        }
    })

    # Mobile 2x2 KPI Grid (y: 238, cards w: 173, h: 80)
    m_kpis = [
        {"x": 16, "y": 238, "t": "SOAL DIKUASAI", "v": "248 / 321", "c": "#10B981"},
        {"x": 201, "y": 238, "t": "SKOR TRYOUT", "v": "82.4%", "c": "#00D2D3"},
        {"x": 16, "y": 326, "t": "AUDIOBOOK", "v": "4.8 Jam", "c": "#CBD5E1"},
        {"x": 201, "y": 326, "t": "SM-2 DUE", "v": "18 Kartu", "c": "#F59E0B"},
    ]
    for mk in m_kpis:
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": f"M KPI {mk['t']}", "parent": {"$ref": "m_canvas"},
                "x": mk["x"], "y": mk["y"], "width": 173, "height": 76,
                "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 10}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"M KPI T {mk['t']}", "parent": {"$ref": "m_canvas"},
                "x": mk["x"] + 12, "y": mk["y"] + 12, "text": mk["t"],
                "props": {"fontSize": 9, "fontStyle": "Bold", "fill": "#94A3B8"}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"M KPI V {mk['t']}", "parent": {"$ref": "m_canvas"},
                "x": mk["x"] + 12, "y": mk["y"] + 30, "text": mk["v"],
                "props": {"fontSize": 18, "fontStyle": "Bold", "fill": mk["c"]}
            }
        })

    # Mobile Learning Modules Section (y: 418)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "M Mod Header", "parent": {"$ref": "m_canvas"},
            "x": 16, "y": 420, "text": "Modul Pembelajaran",
            "props": {"fontSize": 16, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    m_mods = [
        {"y": 448, "t": "Accounting & Finance", "s": "92%", "c": "#10B981", "sub": "68/74 Soal · Mastered"},
        {"y": 526, "t": "Sales & CRM", "s": "74%", "c": "#00D2D3", "sub": "45/61 Soal · In Progress"},
        {"y": 604, "t": "Inventory & MRP", "s": "58%", "c": "#F59E0B", "sub": "38/65 Soal · Needs Focus"},
        {"y": 682, "t": "Purchasing & RFQ", "s": "88%", "c": "#10B981", "sub": "42/48 Soal · Mastered"},
    ]
    for mm in m_mods:
        mmy = mm["y"]
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": f"M Mod {mm['t']}", "parent": {"$ref": "m_canvas"},
                "x": 16, "y": mmy, "width": 358, "height": 68,
                "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 10}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": "Title", "parent": {"$ref": "m_canvas"},
                "x": 30, "y": mmy + 12, "text": mm["t"],
                "props": {"fontSize": 14, "fontStyle": "Bold", "fill": "#F8FAFC"}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": "Pct", "parent": {"$ref": "m_canvas"},
                "x": 328, "y": mmy + 12, "text": mm["s"],
                "props": {"fontSize": 13, "fontStyle": "Bold", "fill": mm["c"]}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": "Sub", "parent": {"$ref": "m_canvas"},
                "x": 30, "y": mmy + 32, "text": mm["sub"],
                "props": {"fontSize": 11, "fill": "#94A3B8"}
            }
        })
        # Progress track & fill
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": "Track", "parent": {"$ref": "m_canvas"},
                "x": 30, "y": mmy + 50, "width": 330, "height": 4,
                "props": {"fill": "#232E42", "cornerRadius": 2}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": "Fill", "parent": {"$ref": "m_canvas"},
                "x": 30, "y": mmy + 50, "width": int(330 * int(mm["s"].replace("%","")) / 100), "height": 4,
                "props": {"fill": mm["c"], "cornerRadius": 2}
            }
        })

    # Mobile Fixed Bottom Nav (Thumb zone: h: 72)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "M Bottom Nav BG", "parent": {"$ref": "m_canvas"},
            "x": 0, "y": 772, "width": 390, "height": 72,
            "props": {"fill": "#0E1320", "stroke": "#232E42", "strokeTopWeight": 1}
        }
    })
    b_tabs = [
        {"x": 24, "icon": "⚡", "label": "Home", "active": True},
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
                "type": "text", "name": f"Tab Icon {bt['label']}", "parent": {"$ref": "m_canvas"},
                "x": bt["x"], "y": 786, "text": bt["icon"],
                "props": {"fontSize": 16}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"Tab Text {bt['label']}", "parent": {"$ref": "m_canvas"},
                "x": bt["x"] - 4, "y": 808, "text": bt["label"],
                "props": {"fontSize": 10, "fontStyle": "Bold" if bt["active"] else "normal", "fill": col}
            }
        })

    # =========================================================================
    # FRAME 3: DESKTOP 1440 - EXAM SIMULATOR & INTERACTION (x: 0, y: 1040)
    # =========================================================================
    commands.append({
        "as": "q_canvas",
        "command": "node.create",
        "params": {
            "type": "frame",
            "name": "Desktop 1440 - Exam Simulator Screen",
            "x": 0, "y": 1040, "width": 1440, "height": 960,
            "props": {"fill": "#0B0F19"}
        }
    })

    # Exam Top Bar
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Q Header BG", "parent": {"$ref": "q_canvas"},
            "x": 0, "y": 0, "width": 1440, "height": 72,
            "props": {"fill": "#0E1320", "stroke": "#232E42", "strokeBottomWeight": 1}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Q Header Title", "parent": {"$ref": "q_canvas"},
            "x": 36, "y": 24, "text": "Simulasi Sertifikasi Fungsional Odoo 19 · Mock Exam #4",
            "props": {"fontSize": 16, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    # Countdown Pill
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Timer Pill", "parent": {"$ref": "q_canvas"},
            "x": 920, "y": 16, "width": 164, "height": 40,
            "props": {"fill": "#00D2D315", "stroke": "#00D2D340", "cornerRadius": 20}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Timer Text", "parent": {"$ref": "q_canvas"},
            "x": 936, "y": 28, "text": "⏱️ Sisa: 47:35 Menit",
            "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    # Flag Question Button
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Flag BTN", "parent": {"$ref": "q_canvas"},
            "x": 1100, "y": 16, "width": 140, "height": 40,
            "props": {"fill": "#1A2232", "stroke": "#232E42", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Flag Text", "parent": {"$ref": "q_canvas"},
            "x": 1120, "y": 28, "text": "🚩 Tandai Ragu",
            "props": {"fontSize": 12, "fontStyle": "Bold", "fill": "#F59E0B"}
        }
    })
    # Finish Exam Button
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Finish BTN", "parent": {"$ref": "q_canvas"},
            "x": 1256, "y": 16, "width": 148, "height": 40,
            "props": {"fill": "#10B981", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Finish Text", "parent": {"$ref": "q_canvas"},
            "x": 1276, "y": 28, "text": "Selesai Ujian",
            "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#0B0F19"}
        }
    })

    # Left Column: Question Card & Interactive Options (w: 940)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Question Card BG", "parent": {"$ref": "q_canvas"},
            "x": 36, "y": 104, "width": 940, "height": 816,
            "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 16}
        }
    })
    # Question Number & Tag
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Q Tag BG", "parent": {"$ref": "q_canvas"},
            "x": 64, "y": 132, "width": 180, "height": 26,
            "props": {"fill": "#714B6730", "stroke": "#714B67", "cornerRadius": 6}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Q Tag Text", "parent": {"$ref": "q_canvas"},
            "x": 76, "y": 138, "text": "INVENTORY & VALUATION",
            "props": {"fontSize": 11, "fontStyle": "Bold", "fill": "#E2D9F3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Q Number", "parent": {"$ref": "q_canvas"},
            "x": 260, "y": 136, "text": "Soal Nomor 14 dari 50 (Bobot: 2 Poin)",
            "props": {"fontSize": 13, "fill": "#94A3B8"}
        }
    })
    # Question Stem
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Q Stem 1", "parent": {"$ref": "q_canvas"},
            "x": 64, "y": 178,
            "text": "Sebuah perusahaan manufaktur di Odoo 19 menggunakan metode Automated Inventory Valuation",
            "props": {"fontSize": 17, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Q Stem 2", "parent": {"$ref": "q_canvas"},
            "x": 64, "y": 204,
            "text": "(Perpetual) dengan Costing Method FIFO. Ketika Purchase Order diterima di gudang (Receipt),",
            "props": {"fontSize": 17, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Q Stem 3", "parent": {"$ref": "q_canvas"},
            "x": 64, "y": 230,
            "text": "akun apakah yang akan di-debit dan di-kredit secara otomatis sebelum Vendor Bill diterbitkan?",
            "props": {"fontSize": 17, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })

    # 4 INTERACTIVE OPTION STATES (Demonstrating Default, Hover, and Selected states)
    # Option A: DEFAULT STATE
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Option A (Default)", "parent": {"$ref": "q_canvas"},
            "x": 64, "y": 284, "width": 884, "height": 72,
            "props": {"fill": "#1A2232", "stroke": "#232E42", "cornerRadius": 10}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Radio A", "parent": {"$ref": "q_canvas"},
            "x": 88, "y": 306, "width": 26, "height": 26,
            "props": {"fill": "#141A26", "stroke": "#64748B", "cornerRadius": 13}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Text A", "parent": {"$ref": "q_canvas"},
            "x": 130, "y": 308,
            "text": "A.  Debit: Stock Interim (Received), Kredit: Accounts Payable",
            "props": {"fontSize": 15, "fill": "#CBD5E1"}
        }
    })

    # Option B: HOVER INTERACTIVE STATE (Mouse Hovering)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Option B (Hover State)", "parent": {"$ref": "q_canvas"},
            "x": 64, "y": 372, "width": 884, "height": 72,
            "props": {"fill": "#1F2B3E", "stroke": "#00D2D380", "strokeWeight": 1.5, "cornerRadius": 10}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Radio B", "parent": {"$ref": "q_canvas"},
            "x": 88, "y": 394, "width": 26, "height": 26,
            "props": {"fill": "#141A26", "stroke": "#00D2D3", "cornerRadius": 13}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Text B", "parent": {"$ref": "q_canvas"},
            "x": 130, "y": 396,
            "text": "B.  Debit: Stock Valuation Account, Kredit: Stock Interim (Received)",
            "props": {"fontSize": 15, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Hover Indicator Pill", "parent": {"$ref": "q_canvas"},
            "x": 820, "y": 394, "width": 108, "height": 26,
            "props": {"fill": "#00D2D325", "cornerRadius": 13}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Hover Indicator Text", "parent": {"$ref": "q_canvas"},
            "x": 834, "y": 400, "text": "HOVER STATE 👆",
            "props": {"fontSize": 10, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })

    # Option C: SELECTED / ACTIVE STATE (User Selected)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Option C (Selected State)", "parent": {"$ref": "q_canvas"},
            "x": 64, "y": 460, "width": 884, "height": 72,
            "props": {"fill": "#00D2D312", "stroke": "#00D2D3", "strokeWeight": 2, "cornerRadius": 10}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Radio C Outer", "parent": {"$ref": "q_canvas"},
            "x": 88, "y": 482, "width": 26, "height": 26,
            "props": {"fill": "#00D2D3", "cornerRadius": 13}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Radio C Inner", "parent": {"$ref": "q_canvas"},
            "x": 96, "y": 490, "width": 10, "height": 10,
            "props": {"fill": "#0B0F19", "cornerRadius": 5}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Text C", "parent": {"$ref": "q_canvas"},
            "x": 130, "y": 484,
            "text": "C.  Debit: Stock Valuation Account, Kredit: Stock Interim (Received)",
            "props": {"fontSize": 15, "fontStyle": "Bold", "fill": "#00D2D3"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Selected Pill", "parent": {"$ref": "q_canvas"},
            "x": 820, "y": 482, "width": 108, "height": 26,
            "props": {"fill": "#00D2D3", "cornerRadius": 13}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Selected Text", "parent": {"$ref": "q_canvas"},
            "x": 842, "y": 488, "text": "TERPILIH ✓",
            "props": {"fontSize": 11, "fontStyle": "Bold", "fill": "#0B0F19"}
        }
    })

    # Option D: DEFAULT STATE
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Option D (Default)", "parent": {"$ref": "q_canvas"},
            "x": 64, "y": 548, "width": 884, "height": 72,
            "props": {"fill": "#1A2232", "stroke": "#232E42", "cornerRadius": 10}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Radio D", "parent": {"$ref": "q_canvas"},
            "x": 88, "y": 570, "width": 26, "height": 26,
            "props": {"fill": "#141A26", "stroke": "#64748B", "cornerRadius": 13}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Text D", "parent": {"$ref": "q_canvas"},
            "x": 130, "y": 572,
            "text": "D.  Debit: Cost of Goods Sold (COGS), Kredit: Stock Valuation Account",
            "props": {"fontSize": 15, "fill": "#CBD5E1"}
        }
    })

    # Bottom Question Action Buttons
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Prev BTN", "parent": {"$ref": "q_canvas"},
            "x": 64, "y": 744, "width": 180, "height": 46,
            "props": {"fill": "#232E42", "stroke": "#32405A", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Prev Text", "parent": {"$ref": "q_canvas"},
            "x": 96, "y": 758, "text": "← Soal Sebelumnya",
            "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#CBD5E1"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Next BTN", "parent": {"$ref": "q_canvas"},
            "x": 732, "y": 744, "width": 216, "height": 46,
            "props": {"fill": "#00D2D3", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Next Text", "parent": {"$ref": "q_canvas"},
            "x": 756, "y": 758, "text": "Simpan & Lanjut ke No. 15 →",
            "props": {"fontSize": 13, "fontStyle": "Bold", "fill": "#0B0F19"}
        }
    })

    # Right Column: Question Palette (w: 396)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Palette Box", "parent": {"$ref": "q_canvas"},
            "x": 1004, "y": 104, "width": 400, "height": 816,
            "props": {"fill": "#141A26", "stroke": "#232E42", "cornerRadius": 16}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Palette Title", "parent": {"$ref": "q_canvas"},
            "x": 1028, "y": 132, "text": "Navigasi Lembar Soal",
            "props": {"fontSize": 16, "fontStyle": "Bold", "fill": "#F8FAFC"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Palette Sub", "parent": {"$ref": "q_canvas"},
            "x": 1028, "y": 156, "text": "50 Soal · Klik nomor untuk melompat langsung",
            "props": {"fontSize": 12, "fill": "#94A3B8"}
        }
    })
    # Legend
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Leg Green", "parent": {"$ref": "q_canvas"},
            "x": 1028, "y": 184, "width": 12, "height": 12, "props": {"fill": "#10B981", "cornerRadius": 3}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Leg Green Text", "parent": {"$ref": "q_canvas"},
            "x": 1046, "y": 184, "text": "Dijawab (13)", "props": {"fontSize": 11, "fill": "#CBD5E1"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Leg Yellow", "parent": {"$ref": "q_canvas"},
            "x": 1136, "y": 184, "width": 12, "height": 12, "props": {"fill": "#F59E0B", "cornerRadius": 3}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Leg Yellow Text", "parent": {"$ref": "q_canvas"},
            "x": 1154, "y": 184, "text": "Ragu (2)", "props": {"fontSize": 11, "fill": "#CBD5E1"}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Leg Gray", "parent": {"$ref": "q_canvas"},
            "x": 1230, "y": 184, "width": 12, "height": 12, "props": {"fill": "#232E42", "cornerRadius": 3}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Leg Gray Text", "parent": {"$ref": "q_canvas"},
            "x": 1248, "y": 184, "text": "Belum (35)", "props": {"fontSize": 11, "fill": "#CBD5E1"}
        }
    })

    # Grid of 50 Questions (5 columns x 10 rows)
    grid_start_x = 1028
    grid_start_y = 224
    pill_size = 62
    gap_x = 8
    gap_y = 10
    
    for q_idx in range(1, 51):
        col_i = (q_idx - 1) % 5
        row_i = (q_idx - 1) // 5
        px = grid_start_x + col_i * (pill_size + gap_x)
        py = grid_start_y + row_i * (pill_size - 22 + gap_y)
        
        # Determine status
        if q_idx <= 13:
            fill_c = "#10B98125"
            border_c = "#10B981"
            txt_c = "#10B981"
        elif q_idx == 14:
            fill_c = "#00D2D3"
            border_c = "#00D2D3"
            txt_c = "#0B0F19"
        elif q_idx in [15, 22]:
            fill_c = "#F59E0B25"
            border_c = "#F59E0B"
            txt_c = "#F59E0B"
        else:
            fill_c = "#1A2232"
            border_c = "#232E42"
            txt_c = "#64748B"
            
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": f"Pill {q_idx}", "parent": {"$ref": "q_canvas"},
                "x": px, "y": py, "width": pill_size, "height": 38,
                "props": {"fill": fill_c, "stroke": border_c, "cornerRadius": 8}
            }
        })
        # offset single vs double digits
        text_offset = 24 if q_idx < 10 else 20
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"Pill Num {q_idx}", "parent": {"$ref": "q_canvas"},
                "x": px + text_offset, "y": py + 12, "text": str(q_idx),
                "props": {"fontSize": 13, "fontStyle": "Bold", "fill": txt_c}
            }
        })

    return commands

if __name__ == "__main__":
    script_data = build_all_screens()
    os.makedirs("designs", exist_ok=True)
    json_path = "designs/build_all_screens.json"
    figcraft_path = "designs/odoopro-learning-platform.figcraft"
    
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(script_data, f, indent=2)
    print(f"Generated {len(script_data)} FigCraft commands in {json_path}")
    
    # Run figcraft-cli to build the file
    cmd_run = ["figcraft-cli", "run", json_path, "--out", figcraft_path]
    print("Building multi-screen FigCraft design...")
    res = subprocess.run(cmd_run, capture_output=True, text=True)
    if res.returncode != 0:
        print("ERROR running figcraft-cli:")
        print(res.stderr)
        print(res.stdout)
        exit(1)
    print("FigCraft build completed successfully!")
    
    # Export each frame to PNG
    cmd_export = ["figcraft-cli", "export", figcraft_path, "-o", "designs/", "--format", "png", "--scale", "1.5"]
    print("Exporting frames to PNG...")
    res_export = subprocess.run(cmd_export, capture_output=True, text=True)
    print(res_export.stdout)
