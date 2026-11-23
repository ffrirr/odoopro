# Design Reference: Brilliant.org
> **Dokumen Referensi Desain & Arsitektur Visual untuk Proyek OdooPro**  
> Sumber: [https://brilliant.org/](https://brilliant.org/)  
> Ekstraksi: Reverse-engineered Design System, Typography, Layout, dan Interaksi UI/UX.

---

## 1. Executive Summary & Design Philosophy

**Brilliant.org** adalah tolak ukur global (*gold standard*) untuk platform pembelajaran interaktif (EdTech & STEM). Desain mereka berhasil mengubah materi rumit (matematika, algoritma data, pemrograman) menjadi pengalaman visual yang adiktif, intuitif, dan memuaskan.

### Prinsip Utama (Core Principles):
1. **Active Learning over Passive Reading**: Pengguna tidak hanya membaca artikel atau menonton video panjang, melainkan langsung berinteraksi dengan widget manipulasi (slider, drag-and-drop, interactive quiz, diagram dinamis).
2. **Tactile & Responsive Affordance**: Setiap elemen UI terasa seperti benda fisik (tombol tebal dengan inset shadow 3D beveled, tombol pilihan dengan rounded corner ergonomis, feedback getar/shake saat salah, dan border-glow saat benar).
3. **High Contrast, Editorial Sophistication**: Menggabungkan tipografi editorial serif berkarakter hangat dengan interface modern sans-serif yang presisi dan layout bento grid bersih.
4. **Frictionless Scaffolding**: Informasi dipecah menjadi unit-unit mikro (*bite-sized digestible steps*) sehingga pengguna tidak mengalami cognitive overload.

---

## 2. Tipografi & Font Hierarchy

Brilliant menggunakan kombinasi tipografi khusus berbasis **Panda CSS** yang memadukan rasa akademis humanis dengan ketajaman antarmuka modern.

| Role | Font Asli (Brilliant) | Alternatif Open-Source / Web | Karakteristik |
| :--- | :--- | :--- | :--- |
| **Display / Headings (H1, H2)** | `CoFo Robert` (Medium / Regular) | `Newsreader`, `Fraunces`, `Playfair Display`, `Source Serif Pro` | Serif kontemporer, kontras tinggi, elegan, memberikan wibawa akademis tanpa terkesan kaku. |
| **Body & UI Elements** | `CoFo Brilliant` | `Inter`, `Plus Jakarta Sans`, `Geist Sans`, `Poppins` | Humanist-geometric sans-serif, x-height tinggi, sangat terbaca di layar mobile maupun desktop. |
| **Code & Technical Data** | `Source Code Pro` / `CoFo Semi Mono` | `JetBrains Mono`, `Fira Code`, `Source Code Pro` | Monospace geometris dengan keterbacaan kode tingkat tinggi. |
| **Formula & Notasi** | `KaTeX` | `KaTeX`, `MathJax` | Rendering rumus logika & matematika berbasis TeX yang tajam. |

### Aturan Tipografi:
- **Heading Roman Pure**: Heading dan H1/H2 selalu tegak (`font-style: normal`), tidak menggunakan italic miring generik. Penekanan kata kunci dilakukan lewat bobot (*font-weight*), warna kontras, atau *highlight pill*.
- **Display Size Scale**:
  - H1 Hero: `clamp(2.5rem, 5vw, 4rem)` (40px - 64px), line-height: `1.1`
  - H2 Section: `clamp(1.75rem, 3vw, 2.5rem)` (28px - 40px), line-height: `1.2`
  - H3 Card Title: `1.25rem - 1.5rem` (20px - 24px), font-weight: `600 / 700`
  - Body Text: `1rem` (16px), line-height: `1.6`, color: `#383838`

---

## 3. Palet Warna & Token Desain (Design Tokens)

Hasil ekstraksi token asli sistem desain Brilliant.org (berbasis token Panda CSS):

### 3.1. Neutral Foundation
```css
:root {
  --panda-colors-black: #000000;
  --panda-colors-white: #ffffff;
  --panda-colors-dark-gray: #1e1e1e;
  
  /* Gray Scale */
  --panda-colors-gray-50: #f8f8f8;   /* Background card halus / canvas neutral */
  --panda-colors-gray-100: #f2f2f2;  /* Container background */
  --panda-colors-gray-200: #e5e5e5;  /* Border default */
  --panda-colors-gray-300: #cccccc;  /* Border hover / inactive */
  --panda-colors-gray-400: #b3b3b3;  /* Subtitle muted */
  --panda-colors-gray-700: #666666;  /* Secondary text */
  --panda-colors-gray-900: #383838;  /* Primary body text */
  --panda-colors-gray-950: #141414;  /* Deep dark elements */
}
```

### 3.2. Brand & Semantic Colors
```css
:root {
  /* Primary Action & Success (Green) */
  --panda-colors-green-400: #5ed981;
  --panda-colors-green-500: #29cc57; /* Brand Primary CTA */
  --panda-colors-green-600: #15b441; /* Hover State */
  --panda-colors-green-700: #009b2b; /* Active State */
  
  /* Gamification, Streaks & Stars (Yellow) */
  --panda-colors-yellow-400: #f9d25c;
  --panda-colors-yellow-500: #f7c325; /* Accent Streak */
  --panda-colors-yellow-600: #d7a613;
  
  /* Technical & Coding Tracks (Blue / Cyan) */
  --panda-colors-blue-500: #456dff;
  --panda-colors-teal-500: #2cb0a1;
  
  /* Error & Warning (Red / Coral) */
  --panda-colors-red-400: #ff8585;
  --panda-colors-red-500: #ff5d5d;  /* Error state */
  --panda-colors-orange-500: #ff8d23;
}
```

### 3.3. Tactile Shadows & Insets (Karakter Fisik Brilliant)
Ciri khas tombol dan card Brilliant adalah efek kedalaman 3D fisik:
```css
:root {
  /* Card Elevation */
  --panda-shadows-elevation-base: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
  --panda-shadows-elevation-md: 0px 0px 25px 0px rgba(0, 0, 0, 0.08);
  --panda-shadows-elevation-subtle: 0 1px 3px rgba(0, 0, 0, 0.04);
  
  /* Tactile Button Bottom Bevel */
  --panda-shadows-tactile-btn: 0px -4px 0px 0px rgba(0, 0, 0, 0.2) inset;
  --panda-shadows-plan-card-base: 0px -6px 0px 0px rgba(0, 0, 0, 0.15) inset;
}
```

### 3.4. Border Radii Scale
```css
:root {
  --panda-radii-md: 0.5rem;    /* 8px - Badges / Small inputs */
  --panda-radii-lg: 0.75rem;   /* 12px - Controls / Small cards */
  --panda-radii-choice: 0.875rem; /* 14px - Interactive Quiz Choice Item */
  --panda-radii-xl: 1rem;      /* 16px - Standard Container */
  --panda-radii-panel: 1.5rem; /* 24px - Bento & Feature Card */
  --panda-radii-pill: 1.75rem; /* 28px - Search bar & Pills */
  --panda-radii-full: 9999px;  /* Pill buttons */
}
```

---

## 4. Struktur Halaman & Layout Makro (Landing Page Rhythm)

Rhythm landing page Brilliant dirancang untuk membangun rasa penasaran dan langsung membuktikan efektivitas metode pembelajaran:

```
[ 1. Sticky Minimal Nav ]
       ↓
[ 2. Hero Section: Asymmetric Split (Value Prop + 3D Tilted Interactive Widget) ]
       ↓
[ 3. Interactive Tutor Introduction: "Meet Koji" (Feature Showcase Cards) ]
       ↓
[ 4. Curriculum Bento Grid (Tabbed Level: Elementary → Professional) ]
       ↓
[ 5. Trust Bar & Institutional Proof (5,000+ Schools, MIT/Harvard) ]
       ↓
[ 6. Social Proof / Student Testimonial Bento Cards ]
       ↓
[ 7. High-Impact Closing CTA Banner ]
       ↓
[ 8. Structured Clean Footer ]
```

### Detail Anatomi Tiap Bagian:

### 1. Minimalist Glass Nav
- **Tinggi**: 64px, background `rgba(255, 255, 255, 0.9)` dengan `backdrop-filter: blur(12px)`.
- **Elemen**: Logo Brilliant di kiri, navigasi simpel ("Courses", "For Business", "About"), tombol login teks halus, dan tombol utama pill hijau `Get started`.

### 2. The Asymmetric Hero Section
- **Sisi Kiri (Copywriting & CTA)**:
  - Eyebrow tag: *"Visual, interactive tutoring"*
  - H1 Headline: *"Your personal tutor for math and coding"* (dengan font serif berwibawa).
  - Subhead: *"Master concepts through visual exploration, not rote memorization."*
  - CTA Button: Tombol hijau cerah berukuran besar (`height: 52px`), font tebal, bevel shadow 3D, micro-interaction saat ditekan (`active: translateY(2px)`).
- **Sisi Kanan (Interactive 3D Preview)**:
  - Bukan sekadar screenshot statis, melainkan mockup widget berperspektif 3D (*tilt isometric*) yang menunjukkan simulasi interaktif (misal: slider fisika, graf interaktif, atau blok kode Python visual).

### 3. "Meet Your Tutor" / AI Guided Showcase
- Memperkenalkan asisten belajar dengan positioning jelas: *"A visual, interactive tutor, not a cheating machine."*
- Card layout 2-kolom / bento cards yang menonjolkan:
  - *Step-by-step guidance*: Memberikan petunjuk bertahap saat macet, bukan langsung memberi jawaban instan.
  - *Visual code execution*: Debugging kode secara visual.
  - *Adaptive learning path*: Mengukur level pengguna secara real-time.

### 4. Curriculum Bento Explorer
- Tab navigasi untuk mengganti jenjang: *Foundations* → *Intermediate* → *Advanced CS & AI*.
- Kartu topik menggunakan ilustrasi geometris minimalis, progress bar, dan label durasi belajar singkat (misal: "5 min daily").

### 5. Social Proof & Trust Architecture
- Menggunakan angka kredibel dan nama institusi besar (MIT, Harvard, 5,000+ institusi pendidikan).
- Testimonial disajikan dalam bentuk quote card yang mencantumkan profesi/latar belakang (misal: *"Software Engineer at Google"*, *"High School Teacher"*, *"College Student"*).

---

## 5. Komponen Interaktif Khas (Interactive Micro-Patterns)

### 5.1. The Quiz Choice Card
Komponen pilihan ganda interaktif dengan feedback visual langsung:
- **Default State**: Background putih, border `1px solid #e5e5e5`, radius `14px`, padding `16px 20px`.
- **Hover State**: Border berubah menjadi `var(--panda-colors-gray-400)`, elevasi subtle.
- **Selected State**: Border `2px solid #29cc57` atau `#456dff`, background tint tipis `rgba(41, 204, 87, 0.05)`.
- **Correct State**: Border glow animation hijau (`borderGlow 1s ease-out`), checkmark icon animasi.
- **Incorrect/Retry State**: Animasi getar halus (`shakeX 0.45s ease`), border coral/merah halus, dan hint otomatis muncul di bawahnya.

### 5.2. Interactive Slider & Graph Widget
- Track abu-abu halus dengan thumb rounded besar yang mudah digeser di layar sentuh (*touch target* minimal 44x44px).
- Nilai angka (*data value*) diperbarui secara real-time di atas slider tanpa lag.

### 5.3. Daily Streak & Gamified Progress
- Ikon api oranye/kuning (`#f7c325`) dengan kalender mini horizontal 7-hari yang menandai konsistensi belajar harian pengguna.

---

## 6. Rencana Implementasi & Adaptasi untuk OdooPro

Bagaimana kita dapat menerapkan DNA Brilliant.org ini pada platform **OdooPro**?

| Elemen Brilliant.org | Adaptasi pada Proyek OdooPro |
| :--- | :--- |
| **Hero Proposition** | *"Tutor Personal & Simulator Interaktif Ujian Odoo ERP"* (Belajar akuntansi, inventory, workflow, dan Python ORM Odoo secara visual). |
| **Interactive 3D Widget** | Widget simulasi jurnal akuntansi interaktif / flowchart approval workflow Odoo yang bisa diklik langsung di hero. |
| **Interactive Quiz Card** | Format soal ujian OdooPro (pilihan ganda, simulasi transaksi debit/kredit, matching pair field model Odoo). |
| **Panda CSS Tokens** | Masukkan variabel warna (Green `#29cc57`, Yellow `#f7c325`, Gray palette, tactile shadow `#00000026 inset`) ke dalam `tokens.css` dan `style.css` OdooPro. |
| **Tipografi** | Gunakan `Newsreader` atau `Fraunces` untuk Headline serif profesional OdooPro, dipadukan dengan `Plus Jakarta Sans` untuk antarmuka sistem dan `JetBrains Mono` untuk kode Python/XML Odoo. |
| **Desain FigCraft** | Terapkan grid layout, choice cards radius 14px, dan bento container 24px pada master file `designs/odoopro-bento-suite.figcraft`. |

---

## 7. Referensi Kode CSS Token untuk OdooPro (`tokens.css`)

```css
/* Brilliant-inspired Tokens for OdooPro */
:root {
  /* Fonts */
  --font-display: "Newsreader", "Fraunces", Georgia, serif;
  --font-sans: "Plus Jakarta Sans", "Inter", -apple-system, sans-serif;
  --font-mono: "JetBrains Mono", "Source Code Pro", monospace;

  /* Brand Accents */
  --color-brand-primary: #29cc57;
  --color-brand-primary-hover: #15b441;
  --color-streak-yellow: #f7c325;
  --color-tech-blue: #456dff;

  /* Surfaces & Borders */
  --color-bg-canvas: #ffffff;
  --color-bg-surface: #f8f8f8;
  --color-bg-surface-elevated: #ffffff;
  --color-border-subtle: #e5e5e5;
  --color-border-focus: #29cc57;

  /* Tactile Physics */
  --shadow-tactile-btn: 0px -4px 0px 0px rgba(0, 0, 0, 0.2) inset;
  --shadow-bento-card: 0px 1px 3px rgba(0, 0, 0, 0.05), 0px 10px 25px -5px rgba(0, 0, 0, 0.05);

  /* Radii */
  --radius-interactive: 14px;
  --radius-card: 24px;
  --radius-pill: 9999px;
}
```
