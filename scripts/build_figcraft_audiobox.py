#!/usr/bin/env python3
import json
import subprocess
import os

def build_audiobox_figcraft():
    commands = []

    # =========================================================================
    # ARTBOARD 1: Desktop 1440 - Audio Box Studio
    # =========================================================================
    commands.append({
        "as": "desktop",
        "command": "node.create",
        "params": {
            "type": "frame",
            "name": "Desktop 1440 - Audio Box Studio",
            "x": 0, "y": 0, "width": 1440, "height": 1120,
            "props": {"fill": "#0B0F19"}
        }
    })

    # Top Navbar Bar (h: 64)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Navbar BG", "parent": {"$ref": "desktop"},
            "x": 0, "y": 0, "width": 1440, "height": 64,
            "props": {"fill": "#0E1320", "stroke": "#232E42", "strokeBottomWeight": 1}
        }
    })
    # Logo Box
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Nav Logo Box", "parent": {"$ref": "desktop"},
            "x": 80, "y": 16, "width": 32, "height": 32,
            "props": {"fill": "#714B67", "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Nav Logo Text", "parent": {"$ref": "desktop"},
            "x": 87, "y": 23, "text": "OP",
            "props": {"fill": "#FFFFFF", "fontSize": 14, "fontWeight": 800}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Nav Brand Text", "parent": {"$ref": "desktop"},
            "x": 122, "y": 22, "text": "OdooPro Audio Studio",
            "props": {"fill": "#F8FAFC", "fontSize": 15, "fontWeight": 700}
        }
    })

    # Vocal Explainer Mode Indicator Pill in Navbar
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Vocal Mode Pill", "parent": {"$ref": "desktop"},
            "x": 880, "y": 16, "width": 340, "height": 32,
            "props": {"fill": "#1A2232", "stroke": "#00D2D3", "strokeWeight": 1, "cornerRadius": 16}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Vocal Mode Pill Text", "parent": {"$ref": "desktop"},
            "x": 894, "y": 23, "text": "🎙️ Vokal: Gadis Neural (Natural Explainer) ✓",
            "props": {"fill": "#00D2D3", "fontSize": 11.5, "fontWeight": 700}
        }
    })

    # Offline ready pill
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Offline Pill", "parent": {"$ref": "desktop"},
            "x": 1235, "y": 16, "width": 125, "height": 32,
            "props": {"fill": "#141A26", "stroke": "#232E42", "strokeWeight": 1, "cornerRadius": 16}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Offline Pill Text", "parent": {"$ref": "desktop"},
            "x": 1248, "y": 23, "text": "⚡ 192kbps Hi-Fi",
            "props": {"fill": "#10B981", "fontSize": 11, "fontWeight": 700}
        }
    })

    # =========================================================================
    # LEFT COLUMN: THE HERO AUDIO BOX PLAYER DECK
    # =========================================================================
    # Main Deck Card (w: 800, h: 590)
    commands.append({
        "as": "player_card",
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Audio Box Player Card", "parent": {"$ref": "desktop"},
            "x": 80, "y": 88, "width": 800, "height": 590,
            "props": {"fill": "#141A26", "stroke": "#232E42", "strokeWeight": 1, "cornerRadius": 24}
        }
    })
    # Top Accent Stripe Gradient (h: 4)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Accent Top Stripe", "parent": {"$ref": "desktop"},
            "x": 80, "y": 88, "width": 800, "height": 4,
            "props": {"fill": "#00D2D3", "cornerRadius": 4}
        }
    })

    # Deck Header Badges Row
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Badge Chapter", "parent": {"$ref": "desktop"},
            "x": 108, "y": 112, "width": 160, "height": 26,
            "props": {"fill": "#201726", "stroke": "#714B67", "strokeWeight": 1, "cornerRadius": 13}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Badge Chapter Text", "parent": {"$ref": "desktop"},
            "x": 118, "y": 118, "text": "BAB 04 · MICRO-LECTURE",
            "props": {"fill": "#E0B0D5", "fontSize": 10.5, "fontWeight": 800}
        }
    })

    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Badge Question Num", "parent": {"$ref": "desktop"},
            "x": 278, "y": 112, "width": 135, "height": 26,
            "props": {"fill": "#0D252F", "stroke": "#00D2D3", "strokeWeight": 1, "cornerRadius": 13}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Badge Question Text", "parent": {"$ref": "desktop"},
            "x": 288, "y": 118, "text": "SOAL #14 DARI 300",
            "props": {"fill": "#00D2D3", "fontSize": 10.5, "fontWeight": 800}
        }
    })

    # Sound Bitrate Indicator
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Bitrate Pill", "parent": {"$ref": "desktop"},
            "x": 688, "y": 112, "width": 164, "height": 26,
            "props": {"fill": "#101622", "stroke": "#232E42", "strokeWeight": 1, "cornerRadius": 13}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Bitrate Dot", "parent": {"$ref": "desktop"},
            "x": 700, "y": 121, "width": 8, "height": 8,
            "props": {"fill": "#10B981", "cornerRadius": 4}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Bitrate Text", "parent": {"$ref": "desktop"},
            "x": 716, "y": 118, "text": "192 KBPS NATURAL STEREO",
            "props": {"fill": "#94A3B8", "fontSize": 10, "fontWeight": 700}
        }
    })

    # Disc Artwork Stage (Vinyl)
    # Vinyl Outer Circle (130x130)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Vinyl Outer Disc", "parent": {"$ref": "desktop"},
            "x": 108, "y": 158, "width": 130, "height": 130,
            "props": {"fill": "#0A0D14", "stroke": "#232E42", "strokeWeight": 3, "cornerRadius": 65}
        }
    })
    # Vinyl Groove Ring
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Vinyl Groove", "parent": {"$ref": "desktop"},
            "x": 120, "y": 170, "width": 106, "height": 106,
            "props": {"fill": "#121824", "stroke": "#1E2738", "strokeWeight": 1, "cornerRadius": 53}
        }
    })
    # Vinyl Center Core Gradient
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Vinyl Center Core", "parent": {"$ref": "desktop"},
            "x": 147, "y": 197, "width": 52, "height": 52,
            "props": {"fill": "#714B67", "stroke": "#00D2D3", "strokeWeight": 2, "cornerRadius": 26}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Vinyl Center Label", "parent": {"$ref": "desktop"},
            "x": 158, "y": 213, "text": "🎧 #14",
            "props": {"fill": "#FFFFFF", "fontSize": 11, "fontWeight": 900}
        }
    })

    # Track Title & Primary Meta
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Track Module Cat", "parent": {"$ref": "desktop"},
            "x": 262, "y": 162, "text": "INVENTORY & ACCOUNTING AUTOMATED VALUATION",
            "props": {"fill": "#00D2D3", "fontSize": 11, "fontWeight": 800}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Track Main Question", "parent": {"$ref": "desktop"},
            "x": 262, "y": 186,
            "text": "Pada metode Automated Valuation FIFO Odoo 19, akun apa yang\ndi-kredit saat Goods Receipt dari Vendor?",
            "props": {"fill": "#FFFFFF", "fontSize": 17, "fontWeight": 800}
        }
    })

    # Vocals Explainer Feature Pill
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Narrator Feature Chip", "parent": {"$ref": "desktop"},
            "x": 262, "y": 252, "width": 460, "height": 30,
            "props": {"fill": "#1A2232", "stroke": "#232E42", "strokeWeight": 1, "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Narrator Feature Text", "parent": {"$ref": "desktop"},
            "x": 274, "y": 260,
            "text": "🎙️ Narasi: Gadis Neural (Penjelasan Konsep ID) + Jenny Neural (Soal EN)",
            "props": {"fill": "#CBD5E1", "fontSize": 11.5, "fontWeight": 600}
        }
    })

    # Equalizer Soundwave Stage (36 bars, w: 744, h: 56)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Equalizer Track Container", "parent": {"$ref": "desktop"},
            "x": 108, "y": 306, "width": 744, "height": 60,
            "props": {"fill": "#0D111A", "stroke": "#1E2738", "strokeWeight": 1, "cornerRadius": 12}
        }
    })

    # Generate 36 dynamic equalizer bars
    import math
    for i in range(36):
        bx = 124 + i * 20
        # Simulated wave heights
        bh = int(math.sin(i * 0.4) * 18 + 26)
        by = 336 - int(bh / 2)
        bar_fill = "#00D2D3" if i < 20 else "#714B67"
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": f"EqBar_{i}", "parent": {"$ref": "desktop"},
                "x": bx, "y": by, "width": 8, "height": bh,
                "props": {"fill": bar_fill, "cornerRadius": 4}
            }
        })

    # Scrubber / Timeline Section
    # Current Time Text
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Current Time", "parent": {"$ref": "desktop"},
            "x": 108, "y": 384, "text": "0:14",
            "props": {"fill": "#CBD5E1", "fontSize": 12.5, "fontWeight": 700}
        }
    })
    # Scrubber Track
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Scrubber BG Track", "parent": {"$ref": "desktop"},
            "x": 154, "y": 390, "width": 648, "height": 6,
            "props": {"fill": "#232E42", "cornerRadius": 3}
        }
    })
    # Scrubber Progress Fill (30% progress)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Scrubber Progress", "parent": {"$ref": "desktop"},
            "x": 154, "y": 390, "width": 210, "height": 6,
            "props": {"fill": "#00D2D3", "cornerRadius": 3}
        }
    })
    # Scrubber Thumb Knob (16x16)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Scrubber Thumb", "parent": {"$ref": "desktop"},
            "x": 358, "y": 385, "width": 16, "height": 16,
            "props": {"fill": "#00D2D3", "stroke": "#FFFFFF", "strokeWeight": 2, "cornerRadius": 8}
        }
    })
    # Total Duration Text
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Total Duration", "parent": {"$ref": "desktop"},
            "x": 816, "y": 384, "text": "0:48",
            "props": {"fill": "#94A3B8", "fontSize": 12.5, "fontWeight": 700}
        }
    })

    # =========================================================================
    # CORE TRANSPORT CLUSTER (Buttons)
    # =========================================================================
    # Center y around 442
    # 1. Shuffle Button
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Btn Shuffle", "parent": {"$ref": "desktop"},
            "x": 230, "y": 420, "width": 44, "height": 44,
            "props": {"fill": "#1A2232", "stroke": "#00D2D3", "strokeWeight": 1, "cornerRadius": 22}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Shuffle Icon", "parent": {"$ref": "desktop"},
            "x": 243, "y": 432, "text": "🔀",
            "props": {"fill": "#00D2D3", "fontSize": 16}
        }
    })

    # 2. Rewind 10s Button
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Btn Rewind 10s", "parent": {"$ref": "desktop"},
            "x": 294, "y": 420, "width": 44, "height": 44,
            "props": {"fill": "#1A2232", "stroke": "#232E42", "strokeWeight": 1, "cornerRadius": 22}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Rewind Text", "parent": {"$ref": "desktop"},
            "x": 302, "y": 435, "text": "↺10s",
            "props": {"fill": "#CBD5E1", "fontSize": 11.5, "fontWeight": 800}
        }
    })

    # 3. Previous Track Button
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Btn Previous", "parent": {"$ref": "desktop"},
            "x": 358, "y": 417, "width": 50, "height": 50,
            "props": {"fill": "#1F283B", "stroke": "#2E3D56", "strokeWeight": 1, "cornerRadius": 25}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Prev Icon", "parent": {"$ref": "desktop"},
            "x": 373, "y": 431, "text": "⏮",
            "props": {"fill": "#FFFFFF", "fontSize": 18}
        }
    })

    # 4. MASTER PLAY / PAUSE BUTTON (68x68 Cyan Glow)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Btn Master Play", "parent": {"$ref": "desktop"},
            "x": 428, "y": 408, "width": 68, "height": 68,
            "props": {"fill": "#00D2D3", "cornerRadius": 34}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Master Play Icon", "parent": {"$ref": "desktop"},
            "x": 453, "y": 425, "text": "⏸",
            "props": {"fill": "#0B0F19", "fontSize": 26, "fontWeight": 900}
        }
    })

    # 5. Next Track Button
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Btn Next", "parent": {"$ref": "desktop"},
            "x": 516, "y": 417, "width": 50, "height": 50,
            "props": {"fill": "#1F283B", "stroke": "#2E3D56", "strokeWeight": 1, "cornerRadius": 25}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Next Icon", "parent": {"$ref": "desktop"},
            "x": 532, "y": 431, "text": "⏭",
            "props": {"fill": "#FFFFFF", "fontSize": 18}
        }
    })

    # 6. Forward 10s Button
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Btn Forward 10s", "parent": {"$ref": "desktop"},
            "x": 586, "y": 420, "width": 44, "height": 44,
            "props": {"fill": "#1A2232", "stroke": "#232E42", "strokeWeight": 1, "cornerRadius": 22}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Forward Text", "parent": {"$ref": "desktop"},
            "x": 594, "y": 435, "text": "↻10s",
            "props": {"fill": "#CBD5E1", "fontSize": 11.5, "fontWeight": 800}
        }
    })

    # 7. Repeat Mode Button (Loop All)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Btn Repeat", "parent": {"$ref": "desktop"},
            "x": 650, "y": 420, "width": 64, "height": 44,
            "props": {"fill": "#1A2232", "stroke": "#00D2D3", "strokeWeight": 1, "cornerRadius": 22}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Repeat Text", "parent": {"$ref": "desktop"},
            "x": 662, "y": 435, "text": "🔁 All",
            "props": {"fill": "#00D2D3", "fontSize": 11, "fontWeight": 700}
        }
    })

    # AUXILIARY CONTROLS BAR (y: 504)
    # Divider line
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Aux Divider", "parent": {"$ref": "desktop"},
            "x": 108, "y": 498, "width": 744, "height": 1,
            "props": {"fill": "#232E42"}
        }
    })

    # 1. Vocal Selector Pill
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Aux Vocal Select", "parent": {"$ref": "desktop"},
            "x": 108, "y": 516, "width": 260, "height": 36,
            "props": {"fill": "#1A2232", "stroke": "#232E42", "strokeWeight": 1, "cornerRadius": 10}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Aux Vocal Text", "parent": {"$ref": "desktop"},
            "x": 120, "y": 526, "text": "🎙️ Vokal: Gadis Neural (Explainer) ▼",
            "props": {"fill": "#00D2D3", "fontSize": 11.5, "fontWeight": 700}
        }
    })

    # 2. Playback Speed Selector
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Aux Speed Pill", "parent": {"$ref": "desktop"},
            "x": 384, "y": 516, "width": 95, "height": 36,
            "props": {"fill": "#1A2232", "stroke": "#232E42", "strokeWeight": 1, "cornerRadius": 10}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Aux Speed Text", "parent": {"$ref": "desktop"},
            "x": 402, "y": 526, "text": "⚡ 1.25x",
            "props": {"fill": "#F8FAFC", "fontSize": 12, "fontWeight": 700}
        }
    })

    # 3. Volume Control Pill
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Aux Volume Pill", "parent": {"$ref": "desktop"},
            "x": 495, "y": 516, "width": 150, "height": 36,
            "props": {"fill": "#1A2232", "stroke": "#232E42", "strokeWeight": 1, "cornerRadius": 10}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Aux Volume Icon", "parent": {"$ref": "desktop"},
            "x": 507, "y": 526, "text": "🔊",
            "props": {"fill": "#CBD5E1", "fontSize": 14}
        }
    })
    # Volume mini bar
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Vol BG", "parent": {"$ref": "desktop"},
            "x": 535, "y": 532, "width": 90, "height": 4,
            "props": {"fill": "#232E42", "cornerRadius": 2}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Vol Fill", "parent": {"$ref": "desktop"},
            "x": 535, "y": 532, "width": 75, "height": 4,
            "props": {"fill": "#00D2D3", "cornerRadius": 2}
        }
    })

    # 4. Sleep Timer Pill
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Aux Sleep Pill", "parent": {"$ref": "desktop"},
            "x": 660, "y": 516, "width": 105, "height": 36,
            "props": {"fill": "#261E13", "stroke": "#F59E0B", "strokeWeight": 1, "cornerRadius": 10}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Aux Sleep Text", "parent": {"$ref": "desktop"},
            "x": 675, "y": 526, "text": "🌙 30 min",
            "props": {"fill": "#F59E0B", "fontSize": 11.5, "fontWeight": 700}
        }
    })

    # =========================================================================
    # SYNCHRONIZED TRANSCRIPT / LYRICS CARD (Below Player Deck)
    # =========================================================================
    commands.append({
        "as": "lyrics_card",
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Synchronized Transcript Card", "parent": {"$ref": "desktop"},
            "x": 80, "y": 700, "width": 800, "height": 380,
            "props": {"fill": "#141A26", "stroke": "#232E42", "strokeWeight": 1, "cornerRadius": 20}
        }
    })

    # Lyrics Header
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Lyrics Icon & Heading", "parent": {"$ref": "desktop"},
            "x": 108, "y": 724, "text": "📝 Live Transcript & Penjelasan Alur Bisnis Odoo 19",
            "props": {"fill": "#FFFFFF", "fontSize": 16, "fontWeight": 800}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Lyrics Sub", "parent": {"$ref": "desktop"},
            "x": 108, "y": 748, "text": "Narasi terjemahan dan logika akuntansi otomatis disinkronkan dengan playback audio",
            "props": {"fill": "#94A3B8", "fontSize": 12, "fontWeight": 500}
        }
    })

    # Action CTA Link to Quiz
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Quiz CTA Btn", "parent": {"$ref": "desktop"},
            "x": 680, "y": 722, "width": 170, "height": 34,
            "props": {"fill": "#0E242E", "stroke": "#00D2D3", "strokeWeight": 1, "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Quiz CTA Text", "parent": {"$ref": "desktop"},
            "x": 694, "y": 732, "text": "⚡ Uji Soal Ini di Quiz →",
            "props": {"fill": "#00D2D3", "fontSize": 11.5, "fontWeight": 700}
        }
    })

    # Question Prompt Box
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Transcript Q Box", "parent": {"$ref": "desktop"},
            "x": 108, "y": 780, "width": 744, "height": 62,
            "props": {"fill": "#0B0F19", "stroke": "#1E2738", "strokeWeight": 1, "cornerRadius": 10}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Transcript Q Text", "parent": {"$ref": "desktop"},
            "x": 124, "y": 794,
            "text": "Soal #14: On automated inventory valuation (FIFO) in Odoo 19, which account is credited\nupon Goods Receipt before vendor bill arrives?",
            "props": {"fill": "#F8FAFC", "fontSize": 13, "fontWeight": 600}
        }
    })

    # Options List with Highlighted Option B
    options_data = [
        ("A", "Accounts Payable (Vendor Liability)", False),
        ("B", "Stock Interim Account (Received) — Kunci Jawaban Resmi ✓", True),
        ("C", "Cost of Goods Sold (COGS)", False),
        ("D", "Inventory Valuation Loss Account", False),
    ]

    for idx, (opt_letter, opt_label, is_correct) in enumerate(options_data):
        oy = 852 + idx * 38
        box_fill = "#0E2721" if is_correct else "#111723"
        box_stroke = "#10B981" if is_correct else "#1F283B"
        text_fill = "#FFFFFF" if is_correct else "#CBD5E1"

        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": f"OptRow_{opt_letter}", "parent": {"$ref": "desktop"},
                "x": 108, "y": oy, "width": 744, "height": 32,
                "props": {"fill": box_fill, "stroke": box_stroke, "strokeWeight": 1, "cornerRadius": 6}
            }
        })
        # Badge
        badge_fill = "#10B981" if is_correct else "#1A2232"
        badge_txt_fill = "#0B0F19" if is_correct else "#94A3B8"
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": f"OptBadge_{opt_letter}", "parent": {"$ref": "desktop"},
                "x": 116, "y": oy + 5, "width": 22, "height": 22,
                "props": {"fill": badge_fill, "cornerRadius": 4}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"OptLetter_{opt_letter}", "parent": {"$ref": "desktop"},
                "x": 123, "y": oy + 9, "text": opt_letter,
                "props": {"fill": badge_txt_fill, "fontSize": 11, "fontWeight": 800}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"OptText_{opt_letter}", "parent": {"$ref": "desktop"},
                "x": 148, "y": oy + 9, "text": opt_label,
                "props": {"fill": text_fill, "fontSize": 12.5, "fontWeight": 700 if is_correct else 500}
            }
        })

    # Deep Explanation Box
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Explanation Box", "parent": {"$ref": "desktop"},
            "x": 108, "y": 1012, "width": 744, "height": 52,
            "props": {"fill": "#1F1522", "stroke": "#714B67", "strokeWeight": 1, "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Explanation Text", "parent": {"$ref": "desktop"},
            "x": 122, "y": 1022,
            "text": "💡 Pembahasan Vokal: Pada saat penerimaan barang (Goods Receipt), jurnal otomatis mendebit Persediaan\ndan mengkredit Akun Stock Interim (Received) hingga tagihan vendor (Vendor Bill) direkonsiliasi.",
            "props": {"fill": "#E0B0D5", "fontSize": 11.5, "fontWeight": 600}
        }
    })

    # =========================================================================
    # RIGHT COLUMN: INTERACTIVE PLAYLIST & CHAPTERS DRAWER
    # =========================================================================
    commands.append({
        "as": "playlist_card",
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Playlist Card Deck", "parent": {"$ref": "desktop"},
            "x": 904, "y": 88, "width": 456, "height": 992,
            "props": {"fill": "#141A26", "stroke": "#232E42", "strokeWeight": 1, "cornerRadius": 24}
        }
    })

    # Playlist Header
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Playlist Title", "parent": {"$ref": "desktop"},
            "x": 932, "y": 114, "text": "Daftar Putar MP3 Audio",
            "props": {"fill": "#FFFFFF", "fontSize": 18, "fontWeight": 800}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Playlist Sub", "parent": {"$ref": "desktop"},
            "x": 932, "y": 140, "text": "300 pembahasan audio · 4.8 jam durasi vokal jernih",
            "props": {"fill": "#94A3B8", "fontSize": 12, "fontWeight": 500}
        }
    })

    # Topic Filter Pills Row
    topic_pills = [
        ("Semua (300)", True),
        ("Akuntansi (50)", False),
        ("Inventory (45)", False),
        ("Sales (25)", False),
    ]
    px = 932
    for pname, pactive in topic_pills:
        pw = len(pname) * 7 + 18
        pbg = "#00D2D3" if pactive else "#1A2232"
        ptxt = "#0B0F19" if pactive else "#CBD5E1"
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": f"TopicPill_{pname}", "parent": {"$ref": "desktop"},
                "x": px, "y": 166, "width": pw, "height": 28,
                "props": {"fill": pbg, "cornerRadius": 14}
            }
        })
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"TopicPillText_{pname}", "parent": {"$ref": "desktop"},
                "x": px + 10, "y": 173, "text": pname,
                "props": {"fill": ptxt, "fontSize": 10.5, "fontWeight": 700}
            }
        })
        px += pw + 8

    # Search Bar Box
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Search Box BG", "parent": {"$ref": "desktop"},
            "x": 932, "y": 206, "width": 400, "height": 38,
            "props": {"fill": "#0B0F19", "stroke": "#232E42", "strokeWeight": 1, "cornerRadius": 10}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Search Placeholder", "parent": {"$ref": "desktop"},
            "x": 948, "y": 218, "text": "🔍 Cari materi atau nomor soal...",
            "props": {"fill": "#64748B", "fontSize": 12, "fontWeight": 500}
        }
    })

    # Playlist Track Rows
    tracks = [
        (11, "Multi-step routing: 2-step receipt vs 3-step", "Inventory", "0:44", False),
        (12, "Landed cost allocation in multi-currency Odoo 19", "Accounting", "0:52", False),
        (13, "Automated FIFO valuation vs AVCO costing layer", "Accounting", "0:46", False),
        (14, "Goods Receipt credit account (Stock Interim)", "Accounting", "0:48", True),  # ACTIVE
        (15, "Anglo-Saxon stock output reconciliation entry", "Accounting", "0:56", False),
        (16, "Scrap order vs inventory adjustment scrap location", "Inventory", "0:38", False),
        (17, "Standard price vs real-time revaluation entry", "Accounting", "0:42", False),
        (18, "Vendor bill 3-way matching tolerance threshold", "Purchases", "0:50", False),
    ]

    ty = 258
    for qid, qtitle, qmod, qdur, is_playing in tracks:
        row_bg = "#0D252E" if is_playing else "#111723"
        row_stroke = "#00D2D3" if is_playing else "#1E2738"

        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": f"TrackRow_{qid}", "parent": {"$ref": "desktop"},
                "x": 932, "y": ty, "width": 400, "height": 62,
                "props": {"fill": row_bg, "stroke": row_stroke, "strokeWeight": 1.5 if is_playing else 1, "cornerRadius": 12}
            }
        })

        # Play/Eq Indicator
        if is_playing:
            commands.append({
                "command": "node.create",
                "params": {
                    "type": "rectangle", "name": f"TrackNowPlayingBadge_{qid}", "parent": {"$ref": "desktop"},
                    "x": 944, "y": ty + 18, "width": 26, "height": 26,
                    "props": {"fill": "#00D2D3", "cornerRadius": 13}
                }
            })
            commands.append({
                "command": "node.create",
                "params": {
                    "type": "text", "name": f"TrackPlayIcon_{qid}", "parent": {"$ref": "desktop"},
                    "x": 952, "y": ty + 23, "text": "▶",
                    "props": {"fill": "#0B0F19", "fontSize": 12, "fontWeight": 900}
                }
            })
        else:
            commands.append({
                "command": "node.create",
                "params": {
                    "type": "text", "name": f"TrackNum_{qid}", "parent": {"$ref": "desktop"},
                    "x": 948, "y": ty + 24, "text": str(qid).padStart(2, "0") if hasattr(str(qid), 'padStart') else f"{qid:02d}",
                    "props": {"fill": "#64748B", "fontSize": 12, "fontWeight": 700}
                }
            })

        # Track Title & Tags
        title_fill = "#00D2D3" if is_playing else "#F8FAFC"
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"TrackTitle_{qid}", "parent": {"$ref": "desktop"},
                "x": 982, "y": ty + 14, "text": qtitle[:38] + ("…" if len(qtitle) > 38 else ""),
                "props": {"fill": title_fill, "fontSize": 12.5, "fontWeight": 700 if is_playing else 600}
            }
        })

        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"TrackMeta_{qid}", "parent": {"$ref": "desktop"},
                "x": 982, "y": ty + 36, "text": f"{qmod} · #{qid} · {qdur}",
                "props": {"fill": "#94A3B8", "fontSize": 10.5, "fontWeight": 500}
            }
        })

        if is_playing:
            commands.append({
                "command": "node.create",
                "params": {
                    "type": "text", "name": f"TrackPlayingStatus_{qid}", "parent": {"$ref": "desktop"},
                    "x": 1248, "y": ty + 24, "text": "SEDANG PUTAR",
                    "props": {"fill": "#00D2D3", "fontSize": 9.5, "fontWeight": 800}
                }
            })

        ty += 70

    # Key Takeaways Box at bottom of playlist
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Key Takeaways Box", "parent": {"$ref": "desktop"},
            "x": 932, "y": 832, "width": 400, "height": 220,
            "props": {"fill": "#101622", "stroke": "#232E42", "strokeWeight": 1, "cornerRadius": 14}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Takeaways Heading", "parent": {"$ref": "desktop"},
            "x": 948, "y": 848, "text": "💡 Cheat Sheet Vokal Penjelasan",
            "props": {"fill": "#FFFFFF", "fontSize": 14, "fontWeight": 800}
        }
    })
    tips = [
        "• Vokal Gadis Neural menjelaskan alur akuntansi dalam bahasa Indonesia natural.",
        "• Vokal Jenny Neural membacakan pertanyaan resmi bahasa Inggris Pearson VUE.",
        "• Lakukan simulasi kuis segera setelah mendengarkan untuk retensi 3.2x lipat.",
        "• Gunakan sleep timer saat belajar menjelang tidur tanpa boros kuota."
    ]
    tip_y = 878
    for t in tips:
        commands.append({
            "command": "node.create",
            "params": {
                "type": "text", "name": f"Tip_{tip_y}", "parent": {"$ref": "desktop"},
                "x": 948, "y": tip_y, "text": t[:58],
                "props": {"fill": "#94A3B8", "fontSize": 11, "fontWeight": 500}
            }
        })
        tip_y += 26


    # =========================================================================
    # ARTBOARD 2: Mobile 390 - Audio Box Responsive
    # =========================================================================
    commands.append({
        "as": "mobile",
        "command": "node.create",
        "params": {
            "type": "frame",
            "name": "Mobile 390 - Audio Box",
            "x": 1480, "y": 0, "width": 390, "height": 844,
            "props": {"fill": "#0B0F19"}
        }
    })

    # Mobile Header
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Mobile Header BG", "parent": {"$ref": "mobile"},
            "x": 0, "y": 0, "width": 390, "height": 56,
            "props": {"fill": "#0E1320", "stroke": "#232E42", "strokeBottomWeight": 1}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Mobile Back", "parent": {"$ref": "mobile"},
            "x": 16, "y": 18, "text": "← Beranda",
            "props": {"fill": "#00D2D3", "fontSize": 13, "fontWeight": 700}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Mobile Title", "parent": {"$ref": "mobile"},
            "x": 135, "y": 18, "text": "Audiobook Studio",
            "props": {"fill": "#FFFFFF", "fontSize": 14, "fontWeight": 800}
        }
    })

    # Mobile Main Player Box (w: 358, h: 480)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Mobile Player Box", "parent": {"$ref": "mobile"},
            "x": 16, "y": 72, "width": 358, "height": 480,
            "props": {"fill": "#141A26", "stroke": "#232E42", "strokeWeight": 1, "cornerRadius": 20}
        }
    })
    # Mobile Top Accent
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Mobile Accent Top", "parent": {"$ref": "mobile"},
            "x": 16, "y": 72, "width": 358, "height": 3,
            "props": {"fill": "#00D2D3", "cornerRadius": 3}
        }
    })

    # Badges
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Mobile Badges", "parent": {"$ref": "mobile"},
            "x": 32, "y": 88, "text": "BAB 04 · SOAL #14 DARI 300",
            "props": {"fill": "#00D2D3", "fontSize": 11, "fontWeight": 800}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Mobile HiFi", "parent": {"$ref": "mobile"},
            "x": 272, "y": 88, "text": "● 192 KBPS",
            "props": {"fill": "#10B981", "fontSize": 10, "fontWeight": 700}
        }
    })

    # Mobile Vinyl Disc (90x90 centered)
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Mobile Vinyl Disc", "parent": {"$ref": "mobile"},
            "x": 150, "y": 118, "width": 90, "height": 90,
            "props": {"fill": "#0A0D14", "stroke": "#232E42", "strokeWeight": 2, "cornerRadius": 45}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Mobile Vinyl Center", "parent": {"$ref": "mobile"},
            "x": 177, "y": 145, "width": 36, "height": 36,
            "props": {"fill": "#714B67", "stroke": "#00D2D3", "strokeWeight": 1.5, "cornerRadius": 18}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Mobile Vinyl Icon", "parent": {"$ref": "mobile"},
            "x": 185, "y": 155, "text": "🎧",
            "props": {"fill": "#FFFFFF", "fontSize": 14}
        }
    })

    # Mobile Track Question Text
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Mobile Q Title", "parent": {"$ref": "mobile"},
            "x": 32, "y": 224,
            "text": "Pada metode Automated Valuation FIFO Odoo 19,\nakun apa yang di-kredit saat Goods Receipt?",
            "props": {"fill": "#FFFFFF", "fontSize": 13.5, "fontWeight": 800}
        }
    })

    # Mobile Vocal Tag
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Mobile Vocal Pill", "parent": {"$ref": "mobile"},
            "x": 32, "y": 272, "text": "🎙️ Vokal Penjelasan: Gadis Neural (Natural)",
            "props": {"fill": "#00D2D3", "fontSize": 11, "fontWeight": 700}
        }
    })

    # Mobile Equalizer (18 bars)
    for i in range(18):
        mbx = 36 + i * 18
        mbh = int(math.sin(i * 0.5) * 12 + 18)
        mby = 318 - int(mbh / 2)
        commands.append({
            "command": "node.create",
            "params": {
                "type": "rectangle", "name": f"MobEqBar_{i}", "parent": {"$ref": "mobile"},
                "x": mbx, "y": mby, "width": 8, "height": mbh,
                "props": {"fill": "#00D2D3" if i < 10 else "#714B67", "cornerRadius": 4}
            }
        })

    # Mobile Timeline Scrubber
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Mob CurTime", "parent": {"$ref": "mobile"},
            "x": 32, "y": 348, "text": "0:14",
            "props": {"fill": "#CBD5E1", "fontSize": 11, "fontWeight": 700}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Mob Scrubber BG", "parent": {"$ref": "mobile"},
            "x": 68, "y": 352, "width": 254, "height": 6,
            "props": {"fill": "#232E42", "cornerRadius": 3}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Mob Scrubber Fill", "parent": {"$ref": "mobile"},
            "x": 68, "y": 352, "width": 80, "height": 6,
            "props": {"fill": "#00D2D3", "cornerRadius": 3}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Mob Scrubber Knob", "parent": {"$ref": "mobile"},
            "x": 144, "y": 348, "width": 14, "height": 14,
            "props": {"fill": "#00D2D3", "stroke": "#FFFFFF", "strokeWeight": 1.5, "cornerRadius": 7}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Mob TotTime", "parent": {"$ref": "mobile"},
            "x": 330, "y": 348, "text": "0:48",
            "props": {"fill": "#94A3B8", "fontSize": 11, "fontWeight": 700}
        }
    })

    # Mobile Transport Controls Row
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Mob Rewind", "parent": {"$ref": "mobile"},
            "x": 58, "y": 395, "text": "↺10s",
            "props": {"fill": "#CBD5E1", "fontSize": 12, "fontWeight": 800}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Mob Prev", "parent": {"$ref": "mobile"},
            "x": 110, "y": 394, "text": "⏮",
            "props": {"fill": "#FFFFFF", "fontSize": 18}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Mob Master Play", "parent": {"$ref": "mobile"},
            "x": 166, "y": 378, "width": 58, "height": 58,
            "props": {"fill": "#00D2D3", "cornerRadius": 29}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Mob Play Icon", "parent": {"$ref": "mobile"},
            "x": 187, "y": 394, "text": "⏸",
            "props": {"fill": "#0B0F19", "fontSize": 22, "fontWeight": 900}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Mob Next", "parent": {"$ref": "mobile"},
            "x": 250, "y": 394, "text": "⏭",
            "props": {"fill": "#FFFFFF", "fontSize": 18}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Mob Forward", "parent": {"$ref": "mobile"},
            "x": 296, "y": 395, "text": "↻10s",
            "props": {"fill": "#CBD5E1", "fontSize": 12, "fontWeight": 800}
        }
    })

    # Mobile Speed & Sleep Row
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Mob Aux Speed", "parent": {"$ref": "mobile"},
            "x": 78, "y": 470, "text": "⚡ 1.25x Kecepatan",
            "props": {"fill": "#CBD5E1", "fontSize": 11, "fontWeight": 700}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Mob Aux Sleep", "parent": {"$ref": "mobile"},
            "x": 224, "y": 470, "text": "🌙 30m Sleep Timer",
            "props": {"fill": "#F59E0B", "fontSize": 11, "fontWeight": 700}
        }
    })

    # Mobile Bottom Lyrics Snippet Card
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Mobile Lyrics Snippet", "parent": {"$ref": "mobile"},
            "x": 16, "y": 568, "width": 358, "height": 250,
            "props": {"fill": "#141A26", "stroke": "#232E42", "strokeWeight": 1, "cornerRadius": 16}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Mobile Lyrics Head", "parent": {"$ref": "mobile"},
            "x": 32, "y": 586, "text": "📝 Kunci Jawaban & Penjelasan",
            "props": {"fill": "#FFFFFF", "fontSize": 13.5, "fontWeight": 800}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Mob Ans Box", "parent": {"$ref": "mobile"},
            "x": 32, "y": 612, "width": 326, "height": 44,
            "props": {"fill": "#0E2721", "stroke": "#10B981", "strokeWeight": 1, "cornerRadius": 8}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Mob Ans Text", "parent": {"$ref": "mobile"},
            "x": 44, "y": 624, "text": "B. Stock Interim Account (Received) ✓",
            "props": {"fill": "#FFFFFF", "fontSize": 12, "fontWeight": 700}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Mob Exp Text", "parent": {"$ref": "mobile"},
            "x": 32, "y": 670,
            "text": "💡 Jurnal otomatis mendebit Persediaan dan\nmengkredit Stock Interim Received hingga faktur tiba.",
            "props": {"fill": "#E0B0D5", "fontSize": 11, "fontWeight": 500}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "rectangle", "name": "Mob Quiz Btn", "parent": {"$ref": "mobile"},
            "x": 32, "y": 752, "width": 326, "height": 42,
            "props": {"fill": "#00D2D3", "cornerRadius": 10}
        }
    })
    commands.append({
        "command": "node.create",
        "params": {
            "type": "text", "name": "Mob Quiz Btn Text", "parent": {"$ref": "mobile"},
            "x": 108, "y": 765, "text": "Lanjut Kerjakan Simulasi Kuis →",
            "props": {"fill": "#0B0F19", "fontSize": 12.5, "fontWeight": 800}
        }
    })

    return commands

if __name__ == "__main__":
    cmds = build_audiobox_figcraft()
    out_json = "scripts/audiobox_batch.json"
    with open(out_json, "w") as f:
        json.dump(cmds, f, indent=2)
    print(f"Generated {len(cmds)} commands in {out_json}")
