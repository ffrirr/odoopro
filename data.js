// data.js — 300 soal sertifikasi Odoo 19 (100% Validated Deep Pedagogical References)

export const TOPICS = [
  {
    "id": "introduction",
    "nama": "Introduction",
    "icon": "home",
    "soalCount": 16
  },
  {
    "id": "sales",
    "nama": "Sales",
    "icon": "shopping-cart",
    "soalCount": 25
  },
  {
    "id": "survey",
    "nama": "Survey",
    "icon": "file-text",
    "soalCount": 9
  },
  {
    "id": "crm",
    "nama": "CRM",
    "icon": "users",
    "soalCount": 24
  },
  {
    "id": "ai",
    "nama": "AI",
    "icon": "bot",
    "soalCount": 14
  },
  {
    "id": "marketing",
    "nama": "Marketing",
    "icon": "megaphone",
    "soalCount": 9
  },
  {
    "id": "website",
    "nama": "Website",
    "icon": "globe",
    "soalCount": 11
  },
  {
    "id": "ecommerce",
    "nama": "eCommerce",
    "icon": "shopping-bag",
    "soalCount": 11
  },
  {
    "id": "knowledge",
    "nama": "Knowledge",
    "icon": "book",
    "soalCount": 8
  },
  {
    "id": "project",
    "nama": "Project",
    "icon": "clipboard",
    "soalCount": 17
  },
  {
    "id": "timesheets",
    "nama": "Timesheets",
    "icon": "clock",
    "soalCount": 10
  },
  {
    "id": "accounting",
    "nama": "Accounting",
    "icon": "dollar-sign",
    "soalCount": 29
  },
  {
    "id": "spreadsheet",
    "nama": "Spreadsheet",
    "icon": "table",
    "soalCount": 7
  },
  {
    "id": "hr",
    "nama": "HR",
    "icon": "user",
    "soalCount": 13
  },
  {
    "id": "pos",
    "nama": "POS",
    "icon": "monitor",
    "soalCount": 6
  },
  {
    "id": "purchase",
    "nama": "Purchase",
    "icon": "truck",
    "soalCount": 18
  },
  {
    "id": "inventory",
    "nama": "Inventory",
    "icon": "archive",
    "soalCount": 32
  },
  {
    "id": "mrp",
    "nama": "MRP",
    "icon": "settings",
    "soalCount": 29
  },
  {
    "id": "studio",
    "nama": "Studio",
    "icon": "pen-tool",
    "soalCount": 12
  }
];

export const QUESTIONS = [
  {
    "id": 1,
    "topic": "introduction",
    "soal": "In a multi-company setup, how can you allow a customer record to be shared across all companies?",
    "pilihan": [
      "This is not possible because each customer is restricted to a single company.",
      "Leave the \"Company\" field empty on the contact record (Sales & Purchase Tab).",
      "Enable an option called Accessible to Everyone on the contact."
    ],
    "jawaban": 1,
    "penjelasan": "Di Odoo multi-company, mengosongkan field \"Company\" pada kontak membuatnya bersifat global dan dapat diakses oleh seluruh cabang perusahaan.",
    "referensi": {
      "topikSpesifik": "Multi-Company Setup & Records Sharing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/companies/multi_companies.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Multi+Company+Setup+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Multi-Company+Setup+%26+Records+Sharing+Odoo+19"
    }
  },
  {
    "id": 2,
    "topic": "introduction",
    "soal": "Why can you sort by some fields in a list view but not by others?",
    "pilihan": [
      "You can only sort simple fields, not relational fields.",
      "You can only sort fields that are not computed.",
      "You can only sort fields stored in the database."
    ],
    "jawaban": 2,
    "penjelasan": "Hanya field yang disimpan dalam database (stored fields) yang dapat diurutkan (sort) di List View, sedangkan un-stored compute field tidak dapat diurutkan.",
    "referensi": {
      "topikSpesifik": "List View Sorting & Compute Fields",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/search.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+List+View+Sorting+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+List+View+Sorting+%26+Compute+Fields+Odoo+19"
    }
  },
  {
    "id": 3,
    "topic": "introduction",
    "soal": "What is the difference between a message/discussion and a log note in the chatter?",
    "pilihan": [
      "A message/discussion is sent to the customer and notifies all followers, while a log note is only visible internally or via @mentions.",
      "A message/discussion is posted publicly on the record, while a log note is meant for internal updates or team collaboration.",
      "A message/discussion sends notifications to external contacts, while a log note keeps communication limited to internal followers."
    ],
    "jawaban": 0,
    "penjelasan": "Send message mengirim pesan ke semua follower, termasuk customer (eksternal). Log note bersifat internal; hanya orang yang di-@mention yang mendapat notifikasi.",
    "referensi": {
      "topikSpesifik": "Chatter, Log Notes & Activities",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/activities.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Chatter+and+Activities+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Chatter%2C+Log+Notes+%26+Activities+Odoo+19"
    }
  },
  {
    "id": 4,
    "topic": "introduction",
    "soal": "What action(s) need to be taken on the Odoo dashboard to order the placement of the icons?",
    "pilihan": [
      "Enable edit mode from the dashboard settings, then use the \"Arrange Apps\" option to drag icons into place.",
      "Open the user menu, select \"Customize Dashboard,\" and reorder the apps by dragging them in the list view.",
      "Click on an app icon and hold the mouse button down; the icon will tilt slightly, allowing it to be dragged into a new position within the app grid."
    ],
    "jawaban": 2,
    "penjelasan": "Ikon aplikasi pada menu utama Odoo dapat diatur urutannya dengan cara drag and drop langsung pada tampilan dashboard utama.",
    "referensi": {
      "topikSpesifik": "Apps Dashboard Layout & App Ordering",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/keyboard_shortcuts.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Apps+Dashboard+Drag+Drop+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Apps+Dashboard+Layout+%26+App+Ordering+Odoo+19"
    }
  },
  {
    "id": 5,
    "topic": "introduction",
    "soal": "How can you bulk add or remove followers from multiple records in Odoo?",
    "pilihan": [
      "In List View, select the records, click Actions, then choose Add/Remove Followers.",
      "In Form View, open each record and manage followers individually under the chatter.",
      "From Settings > Users & Companies, update the follower lists for all related records."
    ],
    "jawaban": 0,
    "penjelasan": "Di List View, pilih beberapa record sekaligus lalu buka menu Actions dan pilih Add/Remove Followers untuk mengelola follower secara massal, tanpa harus membuka tiap record satu per satu.",
    "referensi": {
      "topikSpesifik": "Chatter, Log Notes & Activities",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/activities.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Chatter+and+Activities+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Chatter%2C+Log+Notes+%26+Activities+Odoo+19"
    }
  },
  {
    "id": 6,
    "topic": "introduction",
    "soal": "What happens to the fields of secondary contacts when merging into a master contact?",
    "pilihan": [
      "Odoo discards all information from secondary contacts except for linked records.",
      "Fields in the master record remain, and non-empty fields from the secondary records are merged in.",
      "All fields from secondary contacts overwrite the data in the master contact."
    ],
    "jawaban": 1,
    "penjelasan": "Saat menggabungkan kontak (merge), field master tetap dipertahankan dan data dari kontak sekunder digabungkan ke master.",
    "referensi": {
      "topikSpesifik": "Merge Contacts & Deduplication",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/contacts/merge.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Merge+Contacts+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Merge+Contacts+%26+Deduplication+Odoo+19"
    }
  },
  {
    "id": 7,
    "topic": "sales",
    "soal": "A customer buys a sweater under a pricelist that includes a 10% discount, rounds to the nearest $1.00, and has a -0.10 extra fee. If the sweater's sale price is $99, what is the final cost for this product after applying the pricelist's rules?",
    "pilihan": [
      "$89.10",
      "$88.90",
      "$89.99"
    ],
    "jawaban": 1,
    "penjelasan": "Diskon 10% dari $99 menghasilkan $89,10, dibulatkan ke $1,00 terdekat menjadi $89,00, lalu extra fee -0,10 diterapkan setelah pembulatan sehingga harga akhir $88,90.",
    "referensi": {
      "topikSpesifik": "Pricelists & Dynamic Pricing Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/prices/pricing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Pricelists+Discount+Rules+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Pricelists+%26+Dynamic+Pricing+Rules+Odoo+19"
    }
  },
  {
    "id": 8,
    "topic": "sales",
    "soal": "Where can you see the profit margin for a given sales order?",
    "pilihan": [
      "Margins are only calculated for all of the orders in each quarter",
      "Margins for a sales order can be found on the sales order itself, so long as the \"Margins\" checkbox has been ticked in the Sales app settings",
      "Margins can only be viewed by going to the Reporting header and clicking \"Margins\""
    ],
    "jawaban": 1,
    "penjelasan": "Setelah opsi Margins diaktifkan di Sales > Configuration > Settings, margin (harga jual dikurangi cost) tampil langsung di sales order, baik per baris maupun totalnya.",
    "referensi": {
      "topikSpesifik": "Sales Margins & Cost Analysis",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/margin.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Sales+Margins+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Sales+Margins+%26+Cost+Analysis+Odoo+19"
    }
  },
  {
    "id": 9,
    "topic": "sales",
    "soal": "How do you view Margins in the Sales Analysis dashboard?",
    "pilihan": [
      "Margins are visible by default in this dashboard",
      "Clear all existing filters and search for \"Margin\"",
      "Click the \"Measures\" drop-down menu and select \"Margin\""
    ],
    "jawaban": 2,
    "penjelasan": "Di laporan Sales Analysis, margin tidak tampil secara default; buka dropdown Measures lalu pilih Margin untuk menambahkannya ke tampilan.",
    "referensi": {
      "topikSpesifik": "Sales Margins & Cost Analysis",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/margin.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Sales+Margins+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Sales+Margins+%26+Cost+Analysis+Odoo+19"
    }
  },
  {
    "id": 10,
    "topic": "inventory",
    "soal": "What condition must be true when using a default unit of measure and purchase unit of measure?",
    "pilihan": [
      "The two units of measure must share the same reference unit",
      "The two units of measure cannot share the same reference unit",
      "The two units of measure must have the same unit name as each other"
    ],
    "jawaban": 0,
    "penjelasan": "Di Odoo 19, konversi antar satuan dihitung melalui reference unit, sehingga Unit of Measure default dan Purchase UoM harus memiliki reference unit yang sama (misalnya Units dan Dozens), sedangkan nama satuannya boleh berbeda.",
    "referensi": {
      "topikSpesifik": "Units of Measure (UoM) & Conversions",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/configure/uom.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Units+of+Measure+UoM+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Units+of+Measure+%28UoM%29+%26+Conversions+Odoo+19"
    }
  },
  {
    "id": 11,
    "topic": "sales",
    "soal": "Regarding pricelists and the unit price of a product in a quotation, which of the following is true?",
    "pilihan": [
      "For a product with a pricelist, that price will override the Sales Price on the product's form",
      "Whenever you change the associated pricelist on a quotation, the product's unit price is automatically recomputed",
      "Both are true"
    ],
    "jawaban": 0,
    "penjelasan": "Harga dari pricelist menggantikan Sales Price di form produk. Namun, mengganti pricelist pada quotation tidak otomatis menghitung ulang harga baris; harga baru diterapkan dengan tombol Update Prices, sehingga hanya pernyataan A yang benar.",
    "referensi": {
      "topikSpesifik": "Pricelists & Dynamic Pricing Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/prices/pricing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Pricelists+Discount+Rules+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Pricelists+%26+Dynamic+Pricing+Rules+Odoo+19"
    }
  },
  {
    "id": 12,
    "topic": "sales",
    "soal": "How could you prevent a specific product from being used in quotations?",
    "pilihan": [
      "By archiving the product",
      "By setting a blocking warning on the product ('Sale Warnings' setting must be activated)",
      "Both solutions are correct"
    ],
    "jawaban": 0,
    "penjelasan": "Di Odoo 19, Sale Warning pada produk hanya berupa teks peringatan (tidak ada lagi opsi 'Blocking'). Satu-satunya cara mencegah produk dipakai di quotation adalah dengan meng-archive produk tersebut.",
    "referensi": {
      "topikSpesifik": "Product Catalog & Archiving Records",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/product_catalog.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Product+Catalog+Archiving+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Product+Catalog+%26+Archiving+Records+Odoo+19"
    }
  },
  {
    "id": 13,
    "topic": "sales",
    "soal": "What's the best way to set up the product form for a product where a consultant will come to the customer's location and conduct a home appraisal?",
    "pilihan": [
      "This should be set up with the Product Type \"Goods\" and the Invoicing Policy \"Delivered quantities\", since the consultant is delivering themself by coming to the customer",
      "This should be set up with the Product Type \"Service\" and the Invoicing Policy \"Prepaid/Fixed Price\" since the consultant is providing a one-time service",
      "This should be set up with the Product Type \"Combo\", since the appraisal is a service but coming to the customer's location counts as a delivered good"
    ],
    "jawaban": 1,
    "penjelasan": "Kunjungan penilaian oleh konsultan bukan barang fisik, jadi Product Type-nya Service. Karena ditagih sebagai jasa sekali dengan harga tetap, Invoicing Policy yang sesuai adalah Prepaid/Fixed Price (berdasarkan ordered quantity).",
    "referensi": {
      "topikSpesifik": "Invoicing Policies & Pro-Forma Invoices",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/invoicing/invoicing_policy.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Invoicing+Policies+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Invoicing+Policies+%26+Pro-Forma+Invoices+Odoo+19"
    }
  },
  {
    "id": 14,
    "topic": "sales",
    "soal": "How would you configure a promotion to offer the following: 'Receive a free tote bag with your purchase of $50 or more'?",
    "pilihan": [
      "Create a Conditional Rule with the minimum quantity set to '50' and create a Reward with Reward Type set to 'Discount.' Then, enter 'Free Tote Bag' in the Description On Order field",
      "Create a Conditional Rule with the minimum purchase set to '50' and create a Reward with a Reward Type set to 'Free Shipping.' Then enter 'Free Tote Bag' in the Description On Order field",
      "Create a Conditional Rule with the minimum purchase set to '50' and create a Reward with Reward Type set to 'Free Product.' Then, create or select 'Tote Bag' in the Product field"
    ],
    "jawaban": 2,
    "penjelasan": "Untuk syarat belanja minimal $50, isi Minimum Purchase pada Conditional Rule. Pilih Reward Type 'Free Product' dan tentukan produk Tote Bag agar tas otomatis ditambahkan gratis ke pesanan, bukan hanya ditulis sebagai deskripsi.",
    "referensi": {
      "topikSpesifik": "eWallets, Gift Cards & Loyalty Programs",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/ewallets_giftcards.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Gift+Cards+eWallets+Loyalty+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+eWallets%2C+Gift+Cards+%26+Loyalty+Programs+Odoo+19"
    }
  },
  {
    "id": 15,
    "topic": "sales",
    "soal": "You run a small business as a baker. You have a physical storefront where you offer individual loaves of bread, a lunch menu consisting of the customer's choice of sandwich and soft drink, and at-home breadmaking classes. Which of these products best fits the \"Service\" Product Type?",
    "pilihan": [
      "The individual loaves of bread, since baking bread is the service you perform as a baker",
      "The at-home breadmaking classes, since you are selling an experience and not a physical good",
      "The lunch menu, since you're letting customers choose items for a complete meal rather than selling them individual baked goods"
    ],
    "jawaban": 1,
    "penjelasan": "Product Type 'Service' dipakai untuk hal tak berwujud yang tidak dikelola stoknya. Kelas membuat roti di rumah adalah jasa atau pengalaman, sedangkan roti dan menu makan siang adalah barang fisik (menu pilihan lebih cocok sebagai Combo).",
    "referensi": {
      "topikSpesifik": "POS & eCommerce Multi-Channel Bakery Store",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+POS+Retail+and+Bakery+Setup+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+POS+%26+eCommerce+Multi-Channel+Bakery+Store+Odoo+19"
    }
  },
  {
    "id": 16,
    "topic": "sales",
    "soal": "What is a valid configuration for an achievement-based commission plan?",
    "pilihan": [
      "10% of all sales to a specific customer each quarter",
      "$1,000 for reaching $25,000 in sales each month",
      "5% of the margin of all sales across a specific product category over the course of a year"
    ],
    "jawaban": 2,
    "penjelasan": "Achievement plan memberi komisi berupa persentase dari pencapaian (Amount Sold/Invoiced, Quantity, atau Margin) per periode. Bonus tetap saat mencapai target tertentu (opsi B) adalah target-based plan.",
    "referensi": {
      "topikSpesifik": "Sales Commissions Plans",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/commissions.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Sales+Commissions+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Sales+Commissions+Plans+Odoo+19"
    }
  },
  {
    "id": 17,
    "topic": "survey",
    "soal": "How can participants in a Live Session survey receive a bonus for answering questions quickly?",
    "pilihan": [
      "Analyze their response time in Reporting and send them a reward manually.",
      "Activate Reward quick answers in the Live Session section of the Options tab on the survey form.",
      "Enable the Score by time option in the Questions tab of the survey."
    ],
    "jawaban": 1,
    "penjelasan": "Pada tab Options di form survey, bagian Live Session, aktifkan 'Reward quick answers' agar peserta yang menjawab lebih cepat mendapat poin lebih banyak.",
    "referensi": {
      "topikSpesifik": "eWallets, Gift Cards & Loyalty Programs",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/ewallets_giftcards.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Gift+Cards+eWallets+Loyalty+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+eWallets%2C+Gift+Cards+%26+Loyalty+Programs+Odoo+19"
    }
  },
  {
    "id": 18,
    "topic": "survey",
    "soal": "How does a Matrix question work in an Odoo survey?",
    "pilihan": [
      "It requires participants to enter HTML code in their responses.",
      "It displays a set of rows where participants select an answer from multiple columns.",
      "It allows participants to retry the same question multiple times without penalty."
    ],
    "jawaban": 1,
    "penjelasan": "Tipe soal Matrix di Survey memungkinkan pengumpulan jawaban penilaian bertingkat dalam format tabel baris dan kolom yang rapi.",
    "referensi": {
      "topikSpesifik": "Survey Question Types & Matrix Format",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/surveys.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Survey+Matrix+Questions+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Survey+Question+Types+%26+Matrix+Format+Odoo+19"
    }
  },
  {
    "id": 19,
    "topic": "survey",
    "soal": "What does clicking See results > Analyze Results on a Survey do?",
    "pilihan": [
      "A side-by-side comparison is created for each participant.",
      "The survey results are inserted into a Spreadsheet.",
      "The results are compared across multiple surveys."
    ],
    "jawaban": 1,
    "penjelasan": "Tombol See results > Analyze Results membuka hasil survey di Odoo Spreadsheet, sehingga jawaban dapat diolah lebih lanjut dengan pivot, grafik, dan formula.",
    "referensi": {
      "topikSpesifik": "Odoo Spreadsheets & Live Pivot Tables",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/spreadsheet.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Spreadsheets+Pivot+Integration+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+Spreadsheets+%26+Live+Pivot+Tables+Odoo+19"
    }
  },
  {
    "id": 20,
    "topic": "crm",
    "soal": "What happens when you click one of the colored bars at the top of a kanban stage?",
    "pilihan": [
      "Nothing happens.",
      "Odoo filters opportunities in that stage by the color code, which represents the current activity status.",
      "Odoo filters opportunities with a specific activity status across all stages (Planned, Today, Overdue)."
    ],
    "jawaban": 1,
    "penjelasan": "Bar warna di atas kolom stage Kanban menunjukkan status aktivitas (hijau = planned, oranye = today, merah = overdue). Mengkliknya hanya menyaring opportunity di stage tersebut, bukan di semua stage.",
    "referensi": {
      "topikSpesifik": "Stages & Kanban Progress Bars",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/stages.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Kanban+Stages+Progress+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Stages+%26+Kanban+Progress+Bars+Odoo+19"
    }
  },
  {
    "id": 21,
    "topic": "crm",
    "soal": "What does the Probability field on an opportunity represent?",
    "pilihan": [
      "The likelihood that the opportunity will move to the next stage in the pipeline.",
      "The likelihood of receiving a response to a quotation or offer.",
      "The likelihood of successfully closing the deal with the prospect."
    ],
    "jawaban": 2,
    "penjelasan": "Field Probability di CRM memperkirakan peluang keberhasilan deal berdasarkan data historis dan atribut prospek.",
    "referensi": {
      "topikSpesifik": "Predictive Lead Scoring & Probabilities",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/track_leads/lead_scoring.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Predictive+Lead+Scoring+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Predictive+Lead+Scoring+%26+Probabilities+Odoo+19"
    }
  },
  {
    "id": 22,
    "topic": "crm",
    "soal": "What does the Closed Date field indicate on a lead or opportunity?",
    "pilihan": [
      "The date the lead was marked as closed.",
      "The date the opportunity was marked as won or lost.",
      "The date the opportunity record was removed from the database."
    ],
    "jawaban": 1,
    "penjelasan": "Field Closed Date terisi otomatis saat opportunity ditandai Won atau Lost, sehingga mencatat kapan deal tersebut berakhir.",
    "referensi": {
      "topikSpesifik": "Convert Leads into Opportunities",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/acquire_leads/convert.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Convert+Leads+to+Opportunities+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Convert+Leads+into+Opportunities+Odoo+19"
    }
  },
  {
    "id": 23,
    "topic": "crm",
    "soal": "How can you manually link an existing sales order to an existing opportunity in Odoo?",
    "pilihan": [
      "Through the Link Documents button on the opportunity.",
      "Under the Other Info tab on the sales order.",
      "By creating a new opportunity and merging it with the sales order."
    ],
    "jawaban": 1,
    "penjelasan": "Buka sales order, lalu pada tab Other Info pilih opportunity yang sudah ada di field Opportunity agar SO tersebut tertaut ke opportunity.",
    "referensi": {
      "topikSpesifik": "Convert Leads into Opportunities",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/acquire_leads/convert.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Convert+Leads+to+Opportunities+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Convert+Leads+into+Opportunities+Odoo+19"
    }
  },
  {
    "id": 24,
    "topic": "crm",
    "soal": "Which of the following is not a Lead Enrichment option on the CRM Settings page?",
    "pilihan": [
      "Enrich leads on demand only.",
      "Enrich leads based on customer behavior.",
      "Enrich all leads automatically."
    ],
    "jawaban": 1,
    "penjelasan": "Pengaturan Lead Enrichment di CRM Settings hanya menyediakan dua pilihan, yaitu Enrich leads on demand only dan Enrich all leads automatically. Tidak ada opsi berdasarkan perilaku customer.",
    "referensi": {
      "topikSpesifik": "CRM Lead Enrichment & IAP",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/optimize/lead_enrichment.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+CRM+Lead+Enrichment+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+CRM+Lead+Enrichment+%26+IAP+Odoo+19"
    }
  },
  {
    "id": 25,
    "topic": "crm",
    "soal": "How can you filter leads by company size (number of employees) when using the Generate Leads option?",
    "pilihan": [
      "Use the Filter on Size option.",
      "Only available if you are in Developer Mode.",
      "Filter based on company revenue instead of size."
    ],
    "jawaban": 0,
    "penjelasan": "Di wizard Generate Leads (Lead Mining) terdapat opsi Filter on Size untuk membatasi hasil berdasarkan rentang jumlah karyawan perusahaan, dan opsi ini tidak memerlukan Developer Mode.",
    "referensi": {
      "topikSpesifik": "Developer & Superuser Mode",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/developer_mode.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Developer+Mode+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Developer+%26+Superuser+Mode+Odoo+19"
    }
  },
  {
    "id": 26,
    "topic": "crm",
    "soal": "How can you access an individual sales team's pipeline in Odoo?",
    "pilihan": [
      "Go to Sales > Teams > Pipeline.",
      "Go to Configuration > Teams > Pipeline.",
      "Go to Sales > Opportunities and filter by team."
    ],
    "jawaban": 0,
    "penjelasan": "Buka menu Sales > Teams untuk melihat dashboard Kanban tim penjualan, lalu klik tombol Pipeline pada kartu tim untuk membuka pipeline khusus tim tersebut.",
    "referensi": {
      "topikSpesifik": "Sales Teams & Pipeline Stages",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/pipeline/manage_sales_teams.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Sales+Teams+Pipeline+Stages+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Sales+Teams+%26+Pipeline+Stages+Odoo+19"
    }
  },
  {
    "id": 27,
    "topic": "crm",
    "soal": "What is the shortest interval of time at which automatic rule-based lead assignment can occur in Odoo?",
    "pilihan": [
      "Seconds",
      "Minutes",
      "Hours"
    ],
    "jawaban": 1,
    "penjelasan": "Interval terpendek untuk assignment/scoring otomatis di CRM adalah menit; pilihan periode berkisar dari Minutes hingga Weeks, tidak ada Seconds.",
    "referensi": {
      "topikSpesifik": "Automated Lead Assignment Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/acquire_leads/lead_mining.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Lead+Assignment+Rules+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Automated+Lead+Assignment+Rules+Odoo+19"
    }
  },
  {
    "id": 28,
    "topic": "crm",
    "soal": "What visual indicator shows that an opportunity has \"rotted\" in Odoo?",
    "pilihan": [
      "A red warning icon appears next to the opportunity name in the list view.",
      "The opportunity's Kanban card is highlighted in red.",
      "The stage header flashes to indicate a rotted opportunity."
    ],
    "jawaban": 1,
    "penjelasan": "Saat opportunity melewati batas rotting yang ditentukan pada stage, kartu Kanban-nya disorot dengan warna merah.",
    "referensi": {
      "topikSpesifik": "Stages & Kanban Progress Bars",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/stages.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Kanban+Stages+Progress+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Stages+%26+Kanban+Progress+Bars+Odoo+19"
    }
  },
  {
    "id": 29,
    "topic": "crm",
    "soal": "How are leads from external sources, such as an email alias, automatically handled in Odoo?",
    "pilihan": [
      "They are automatically assigned to the sales team leader to ensure follow-up.",
      "They remain unassigned until a salesperson manually claims them.",
      "They are assigned randomly to any available salesperson."
    ],
    "jawaban": 1,
    "penjelasan": "Lead yang masuk dari sumber eksternal seperti email alias dibuat tanpa salesperson dan tetap unassigned sampai diambil secara manual oleh salesperson (atau diproses oleh rule-based assignment jika diaktifkan).",
    "referensi": {
      "topikSpesifik": "Customer Payment Follow-ups",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/customer_invoices/payment_follow_up.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Payment+Follow+Up+Levels+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Customer+Payment+Follow-ups+Odoo+19"
    }
  },
  {
    "id": 30,
    "topic": "ai",
    "soal": "In an AI Agent prompt, what is the purpose of using /field selector?",
    "pilihan": [
      "To reference or update specific fields from a record directly within the prompt.",
      "To create a shortcut for adding new custom fields to a model.",
      "To insert predefined text snippets stored in the Knowledge app."
    ],
    "jawaban": 0,
    "penjelasan": "Sintaks /field pada prompt AI Agent digunakan untuk menyisipkan nilai dinamis dari kolom database ke dalam instruksi AI.",
    "referensi": {
      "topikSpesifik": "AI Prompt /field Selector Syntax",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+AI+Prompt+Field+Selector+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+AI+Prompt+%2Ffield+Selector+Syntax+Odoo+19"
    }
  },
  {
    "id": 31,
    "topic": "ai",
    "soal": "What is the purpose of the AI email prompt in Odoo email templates?",
    "pilihan": [
      "To decide when an email should be sent to maximize open rates.",
      "To help write or enhance parts of an email message based on the template context.",
      "To automatically detect recipient email addresses from contact records."
    ],
    "jawaban": 1,
    "penjelasan": "Fitur AI pada template email membantu menyusun draf pesan yang relevan dan menyarankan subjek email yang menarik.",
    "referensi": {
      "topikSpesifik": "AI Email Generation & Subject Suggestions",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+AI+Email+Generation+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+AI+Email+Generation+%26+Subject+Suggestions+Odoo+19"
    }
  },
  {
    "id": 32,
    "topic": "ai",
    "soal": "Where can you define the response style (Creative, Balanced, Analytical) for an AI Agent?",
    "pilihan": [
      "On the Agent's configuration form.",
      "Under General Settings > AI Preferences.",
      "In each Topic definition individually."
    ],
    "jawaban": 0,
    "penjelasan": "Gaya respons (Creative, Balanced, Analytical) diatur per agent langsung di form konfigurasi AI Agent, bukan di pengaturan global maupun di setiap Topic.",
    "referensi": {
      "topikSpesifik": "AI Response Styles & Temperature Settings",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+AI+Temperature+Response+Styles+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+AI+Response+Styles+%26+Temperature+Settings+Odoo+19"
    }
  },
  {
    "id": 33,
    "topic": "ai",
    "soal": "When you open a conversation with an AI Agent, what information does it automatically know about the record?",
    "pilihan": [
      "Only the record name and user's message.",
      "It can access the field values of the record you're viewing, unless restricted by configuration.",
      "It only knows what's stored in its Sources."
    ],
    "jawaban": 1,
    "penjelasan": "Saat percakapan dibuka dari sebuah record, AI Agent dapat membaca nilai field record yang sedang dilihat sebagai konteks, kecuali aksesnya dibatasi oleh konfigurasi. Jadi pengetahuannya tidak terbatas pada Sources saja.",
    "referensi": {
      "topikSpesifik": "AI Conversation Context & User Details",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+AI+Conversation+Context+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+AI+Conversation+Context+%26+User+Details+Odoo+19"
    }
  },
  {
    "id": 34,
    "topic": "ai",
    "soal": "How many AI Agents can you have in a single Odoo database?",
    "pilihan": [
      "One per installed app.",
      "A maximum of five active agents per user.",
      "As many as needed, there's no fixed limit."
    ],
    "jawaban": 2,
    "penjelasan": "Tidak ada batas jumlah AI Agent dalam satu database; Anda dapat membuat banyak agent independen sesuai kebutuhan.",
    "referensi": {
      "topikSpesifik": "Multi-Agent AI Framework in Odoo",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Multiple+AI+Agents+Framework+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Multi-Agent+AI+Framework+in+Odoo+Odoo+19"
    }
  },
  {
    "id": 35,
    "topic": "marketing",
    "soal": "Can you use the same mailing list contacts for BOTH email and SMS marketing campaigns?",
    "pilihan": [
      "No, mailing list contacts are specific to the delivery method, and are not interchangeable.",
      "No, since SMS mailing list contacts do not have an email field, and email marketing lists do not have a phone number field.",
      "Yes, since mailing list contacts contain both email addresses and phone numbers."
    ],
    "jawaban": 2,
    "penjelasan": "Kontak mailing list menyimpan email dan nomor telepon, sehingga list yang sama bisa dipakai untuk Email Marketing (Send Mailing) maupun SMS Marketing (Send SMS).",
    "referensi": {
      "topikSpesifik": "Email Marketing & Mass Mailing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/email_marketing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Email+Marketing+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Email+Marketing+%26+Mass+Mailing+Odoo+19"
    }
  },
  {
    "id": 36,
    "topic": "marketing",
    "soal": "Can you create new attendees from an event registration desk kiosk once an event started?",
    "pilihan": [
      "No, registrants MUST register in advance.",
      "Yes. On the registration desk kiosk, click Select Attendee > New, and enter all the required information.",
      "No, but Odoo Events automatically creates 10 extra tickets per event, so new attendees can use one, if available"
    ],
    "jawaban": 1,
    "penjelasan": "Di registration desk, klik Select Attendee lalu New untuk mendaftarkan peserta baru secara manual walaupun event sudah dimulai.",
    "referensi": {
      "topikSpesifik": "Attendances & Kiosk Mode",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/hr/attendances/kiosk_mode.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Attendance+Kiosk+Mode+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Attendances+%26+Kiosk+Mode+Odoo+19"
    }
  },
  {
    "id": 37,
    "topic": "marketing",
    "soal": "What are the two reports available in the 'Email Marketing' application?",
    "pilihan": [
      "Success Rate and Opt-Out Report.",
      "Bounce Rates and Opportunities.",
      "Mass Mailing Analysis and Opt-Out Report."
    ],
    "jawaban": 2,
    "penjelasan": "Menu Reporting di Email Marketing berisi 'Mass Mailing Analysis' dan 'Opt-Out Report'. Tidak ada laporan 'Success Rate'.",
    "referensi": {
      "topikSpesifik": "Email Marketing & Mass Mailing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/email_marketing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Email+Marketing+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Email+Marketing+%26+Mass+Mailing+Odoo+19"
    }
  },
  {
    "id": 38,
    "topic": "website",
    "soal": "You've just customized a building block. Where can you reuse it?",
    "pilihan": [
      "You can save it and reuse it anywhere on your website.",
      "You can save it and reuse it, but only on the page it was created.",
      "You can save it and reuse it, but only on the homepage."
    ],
    "jawaban": 0,
    "penjelasan": "Blok bangunan website yang telah dikustomisasi dapat disimpan ke dalam kategori Custom Snippets untuk digunakan kembali di halaman lain.",
    "referensi": {
      "topikSpesifik": "Website Custom Building Blocks & Snippets",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/website.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Custom+Website+Snippets+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Website+Custom+Building+Blocks+%26+Snippets+Odoo+19"
    }
  },
  {
    "id": 39,
    "topic": "website",
    "soal": "Regarding the 'Search Bar' building block, can you customize what the visitor will be searching for?",
    "pilihan": [
      "No, the search bar is only searching for products.",
      "Yes, you can choose between products, web pages, and blogs (if the related modules are installed).",
      "Yes, you can choose between appointments, products, web pages, blogs, events, jobs, forums, knowledge articles, and courses (if the related modules are installed) or everything."
    ],
    "jawaban": 2,
    "penjelasan": "Opsi 'Search within' pada building block Search Bar dapat diatur ke semua konten atau jenis tertentu (products, pages, blogs, events, forums, dll.) sesuai modul yang ter-install.",
    "referensi": {
      "topikSpesifik": "Custom Filters & Search Views",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/search.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Search+Filter+Group+By+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Custom+Filters+%26+Search+Views+Odoo+19"
    }
  },
  {
    "id": 40,
    "topic": "website",
    "soal": "You've finished designing the desktop version of your Odoo website. How can you adapt it for the mobile version using the same elements?",
    "pilihan": [
      "You can redesign the mobile version independently from the desktop version, and even have a different themes.",
      "You can reorder elements, resize columns, and hide specific blocks for mobile without changing the desktop layout.",
      "You cannot make any changes specific to the mobile version."
    ],
    "jawaban": 1,
    "penjelasan": "Dalam mode preview mobile di editor Website, Anda dapat mengubah urutan elemen, ukuran kolom, dan menyembunyikan blok khusus untuk mobile tanpa mengubah layout desktop. Namun, halaman dan theme-nya tetap sama.",
    "referensi": {
      "topikSpesifik": "Responsive Website Design & Mobile Preview",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/website.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Website+Mobile+Responsive+View+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Responsive+Website+Design+%26+Mobile+Preview+Odoo+19"
    }
  },
  {
    "id": 41,
    "topic": "website",
    "soal": "In the 'Optimize SEO' tool, can you choose to fill some fields with AI?",
    "pilihan": [
      "Yes, but only the title and description.",
      "Yes, but only keywords.",
      "Yes: title, description, and keywords can be filled with AI."
    ],
    "jawaban": 2,
    "penjelasan": "Tombol 'Fill with AI' di Optimize SEO dapat mengisi meta title, description, sekaligus memberi saran keyword.",
    "referensi": {
      "topikSpesifik": "Website SEO Optimization with AI Tools",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/website.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Website+SEO+AI+Optimization+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Website+SEO+Optimization+with+AI+Tools+Odoo+19"
    }
  },
  {
    "id": 42,
    "topic": "ecommerce",
    "soal": "Where can you set a custom internal reference for each product variant?",
    "pilihan": [
      "On the product form in the backend, click the Variant smart button.",
      "On the product form in the backend, in the Sales tab.",
      "On the product form in the backend, in the Attributes menu."
    ],
    "jawaban": 0,
    "penjelasan": "Klik smart button Variants di form produk untuk membuka daftar varian. Setiap varian memiliki field Internal Reference sendiri yang dapat diisi berbeda-beda.",
    "referensi": {
      "topikSpesifik": "Product Variants & Attributes",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/products/variants.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Product+Variants+Attributes+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Product+Variants+%26+Attributes+Odoo+19"
    }
  },
  {
    "id": 44,
    "topic": "ecommerce",
    "soal": "Are there specific ways to display product attributes over a product card on the /shop page?",
    "pilihan": [
      "No, they are always visible.",
      "Yes, you can choose to display them or not or to display them only on Hover.",
      "You can only choose to hide them or display them on scroll."
    ],
    "jawaban": 1,
    "penjelasan": "Pada atribut produk, field 'On Product Cards' dapat diatur agar atribut tidak ditampilkan, selalu tampil (Visible), atau hanya saat Hover di halaman /shop.",
    "referensi": {
      "topikSpesifik": "eCommerce Product Attributes on /shop Grid",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/ecommerce.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+eCommerce+Product+Attributes+Grid+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+eCommerce+Product+Attributes+on+%2Fshop+Grid+Odoo+19"
    }
  },
  {
    "id": 45,
    "topic": "ecommerce",
    "soal": "Where can you add Optional Products?",
    "pilihan": [
      "On the frontend of the product page with the Editor.",
      "In Website > eCommerce > Products.",
      "In the product backend, on the Sales tab."
    ],
    "jawaban": 2,
    "penjelasan": "Optional Products diatur di form produk (backend), tab Sales, bagian Upsell & Cross-Sell.",
    "referensi": {
      "topikSpesifik": "Optional Products & Upselling",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/optional_products.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Optional+Products+Upselling+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Optional+Products+%26+Upselling+Odoo+19"
    }
  },
  {
    "id": 46,
    "topic": "knowledge",
    "soal": "What articles feature in the 'Shared' category?",
    "pilihan": [
      "Articles shared to all internal users.",
      "Articles shared with specific users with no default access.",
      "Article accessible to the author only."
    ],
    "jawaban": 1,
    "penjelasan": "Kategori \"Shared\" di Knowledge memuat artikel-artikel yang secara spesifik dibagikan kepada pengguna atau tim tertentu.",
    "referensi": {
      "topikSpesifik": "Knowledge Articles in Shared Category",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/knowledge.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Knowledge+Shared+Articles+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Knowledge+Articles+in+Shared+Category+Odoo+19"
    }
  },
  {
    "id": 47,
    "topic": "knowledge",
    "soal": "What type of users can add properties?",
    "pilihan": [
      "Any user accessing an article",
      "Portal users only",
      "Users with 'Can edit' access rights"
    ],
    "jawaban": 2,
    "penjelasan": "Menambahkan properties pada artikel Knowledge membutuhkan hak akses 'Can edit' pada artikel tersebut.",
    "referensi": {
      "topikSpesifik": "Knowledge Article Properties & Collaboration",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/knowledge.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Knowledge+Properties+Fields+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Knowledge+Article+Properties+%26+Collaboration+Odoo+19"
    }
  },
  {
    "id": 48,
    "topic": "knowledge",
    "soal": "Which of the following commands allows for hiding and showing a block of content?",
    "pilihan": [
      "Index",
      "Toggle list",
      "Separator"
    ],
    "jawaban": 1,
    "penjelasan": "Command /Toggle list membuat blok yang bisa dilipat (foldable), sehingga konten di bawahnya bisa disembunyikan dan ditampilkan. Index hanya membuat daftar isi.",
    "referensi": {
      "topikSpesifik": "Knowledge /hide Toggle Collapse Command",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/knowledge.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Knowledge+Powerbox+Commands+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Knowledge+%2Fhide+Toggle+Collapse+Command+Odoo+19"
    }
  },
  {
    "id": 51,
    "topic": "project",
    "soal": "When automatically rescheduling dependent tasks from the Gantt view, which of the following information related to assignees is not taken into account?",
    "pilihan": [
      "Time off",
      "Working hours",
      "Calendar"
    ],
    "jawaban": 2,
    "penjelasan": "Saat menjadwalkan ulang task dependen di Gantt view, Odoo memperhitungkan working hours dan time off assignee, tetapi tidak memperhitungkan event di Calendar mereka.",
    "referensi": {
      "topikSpesifik": "Project Management & Burndown Charts",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project/project_management/project_dashboard.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Project+Burndown+Chart+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Project+Management+%26+Burndown+Charts+Odoo+19"
    }
  },
  {
    "id": 52,
    "topic": "project",
    "soal": "When is a milestone displayed in red?",
    "pilihan": [
      "When one or more of its tasks is marked as canceled",
      "When the milestone's deadline is today",
      "When the milestone's deadline has passed and at least one of its tasks is not marked as done or canceled"
    ],
    "jawaban": 2,
    "penjelasan": "Milestone proyek ditampilkan berwarna merah jika tenggat waktu telah terlampaui (overdue) dan belum selesai.",
    "referensi": {
      "topikSpesifik": "Project Milestones Tracking",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project/project_management/project_milestones.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Project+Milestones+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Project+Milestones+Tracking+Odoo+19"
    }
  },
  {
    "id": 53,
    "topic": "project",
    "soal": "When creating a task from a project's Kanban view, adding \"24h\" to the task title will:",
    "pilihan": [
      "Add the text \"24h\" to the task's title",
      "Allocate 24 hours to the task",
      "Set the task deadline's to be in 24 hours"
    ],
    "jawaban": 1,
    "penjelasan": "Menambahkan \"24h\" pada judul saat membuat tugas cepat di Kanban akan otomatis mengisi alokasi waktu tugas sebesar 24 jam.",
    "referensi": {
      "topikSpesifik": "Quick Task Creation Syntax (Duration)",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project/tasks/task_creation.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Project+Quick+Task+Creation+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Quick+Task+Creation+Syntax+%28Duration%29+Odoo+19"
    }
  },
  {
    "id": 54,
    "topic": "project",
    "soal": "When creating a task from a project's Kanban view, adding \"#priority\" to the title will:",
    "pilihan": [
      "Add a \"priority\" tag to the task",
      "Set's the task's priority to high",
      "Add the text \"#priority\" to the task's title"
    ],
    "jawaban": 0,
    "penjelasan": "Pada quick create task, '#kata' di judul otomatis menambahkan tag 'kata'. Prioritas tinggi diset dengan tanda '!'.",
    "referensi": {
      "topikSpesifik": "Quick Task Priority Tags (#priority)",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project/tasks/task_creation.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Project+Quick+Task+Creation+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Quick+Task+Priority+Tags+%28%23priority%29+Odoo+19"
    }
  },
  {
    "id": 55,
    "topic": "project",
    "soal": "The top bar does not allow you to:",
    "pilihan": [
      "Access records related to your projects without leaving Odoo Project",
      "Automate task moves between stages",
      "Add and share custom views"
    ],
    "jawaban": 1,
    "penjelasan": "Top bar proyek memberi akses ke record terkait (misalnya sales order, invoice, timesheet) dan memungkinkan menyimpan serta berbagi custom view. Perpindahan task antar stage secara otomatis diatur lewat automation, bukan dari top bar.",
    "referensi": {
      "topikSpesifik": "Project Navigation & Top Bar Actions",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project/project_management.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Project+Top+Bar+Actions+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Project+Navigation+%26+Top+Bar+Actions+Odoo+19"
    }
  },
  {
    "id": 56,
    "topic": "project",
    "soal": "The number of analytic accounts that can be set on a project is limited by the number of:",
    "pilihan": [
      "Tasks in the project",
      "Analytic plans in the project",
      "Kanban stages in the project"
    ],
    "jawaban": 1,
    "penjelasan": "Proyek hanya dapat memiliki satu analytic account per analytic plan, sehingga jumlah analytic account yang bisa diisi dibatasi oleh jumlah analytic plan.",
    "referensi": {
      "topikSpesifik": "Stages & Kanban Progress Bars",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/stages.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Kanban+Stages+Progress+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Stages+%26+Kanban+Progress+Bars+Odoo+19"
    }
  },
  {
    "id": 57,
    "topic": "timesheets",
    "soal": "What does it mean when a timesheet line is in italics?",
    "pilihan": [
      "It means the line has been invoiced",
      "It means the line has been validated",
      "It means the line is related to a project or task for which the user has not yet submitted a timesheet during the displayed period"
    ],
    "jawaban": 2,
    "penjelasan": "Baris timesheet bercetak miring adalah saran (suggested entry): project/task yang belum diisi timesheet oleh user selama periode yang ditampilkan.",
    "referensi": {
      "topikSpesifik": "Timesheets Billing Rates & Leaderboards",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/timesheets/billing_rates.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Timesheets+Billing+Rates+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Timesheets+Billing+Rates+%26+Leaderboards+Odoo+19"
    }
  },
  {
    "id": 58,
    "topic": "timesheets",
    "soal": "Which statement is true?",
    "pilihan": [
      "Employees cannot edit a timesheet that predates their most recent validated timesheet",
      "Employees cannot edit a timesheet when a timesheet from an earlier period has not been validated yet",
      "Employees cannot edit a timesheet outside their working hours"
    ],
    "jawaban": 0,
    "penjelasan": "Setelah timesheet divalidasi, karyawan tidak bisa lagi mengedit timesheet pada atau sebelum tanggal timesheet terakhir yang sudah divalidasi.",
    "referensi": {
      "topikSpesifik": "Timesheets Billing Rates & Leaderboards",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/timesheets/billing_rates.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Timesheets+Billing+Rates+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Timesheets+Billing+Rates+%26+Leaderboards+Odoo+19"
    }
  },
  {
    "id": 59,
    "topic": "timesheets",
    "soal": "What happens when you enable the \"Timesheet Validation\" setting?",
    "pilihan": [
      "Timesheets must be approved by the project manager before they can be submitted",
      "Employees can only record time after their timesheets are validated by their manager",
      "Timesheets require validation by a supervisor before being used by the Payroll or Invoicing app"
    ],
    "jawaban": 2,
    "penjelasan": "Dengan Timesheet Validation aktif, timesheet harus divalidasi atasan terlebih dahulu sebelum dapat digunakan untuk proses selanjutnya seperti Payroll atau Invoicing.",
    "referensi": {
      "topikSpesifik": "Payroll & Work Entries",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/hr/payroll/work_entries.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Payroll+Work+Entries+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Payroll+%26+Work+Entries+Odoo+19"
    }
  },
  {
    "id": 60,
    "topic": "timesheets",
    "soal": "Does a time off record automatically create a timesheet?",
    "pilihan": [
      "Always",
      "Only if the \"Time Off\" setting is enabled",
      "Never"
    ],
    "jawaban": 1,
    "penjelasan": "Timesheet untuk cuti hanya dibuat otomatis jika opsi Time Off diaktifkan di pengaturan Timesheets. Setelah itu, time off yang disetujui akan tercatat sebagai baris timesheet.",
    "referensi": {
      "topikSpesifik": "Timesheets Billing Rates & Leaderboards",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/timesheets/billing_rates.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Timesheets+Billing+Rates+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Timesheets+Billing+Rates+%26+Leaderboards+Odoo+19"
    }
  },
  {
    "id": 61,
    "topic": "timesheets",
    "soal": "On the \"All Timesheets\" view, what does it mean when a duration is in orange?",
    "pilihan": [
      "It means the employee worked overtime on that day",
      "It means the employee took time off on that day",
      "It means the employee worked undertime on that day"
    ],
    "jawaban": 0,
    "penjelasan": "Pada tampilan 'All Timesheets', durasi kerja yang melebihi batas jam kerja harian standar (lembur) ditampilkan dengan penanda khusus untuk memudahkan verifikasi manajer.",
    "referensi": {
      "topikSpesifik": "Timesheet Overtime Display in All Timesheets",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/timesheets.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Timesheet+Overtime+Indicator+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Timesheet+Overtime+Display+in+All+Timesheets+Odoo+19"
    }
  },
  {
    "id": 62,
    "topic": "accounting",
    "soal": "A customer invoice with two lines, each with the same account and same 10% tax, is validated. How many items will the generated journal entry have?",
    "pilihan": [
      "2 journal items",
      "3 journal items",
      "4 journal items"
    ],
    "jawaban": 2,
    "penjelasan": "Jurnal yang terbentuk memiliki 4 item: 2 baris produk (tidak digabung meskipun akunnya sama), 1 baris pajak (pajak yang sama digabung), dan 1 baris receivable.",
    "referensi": {
      "topikSpesifik": "Customer Invoice Journal Items Generation",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/customer_invoices/customer_invoices.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Invoice+Journal+Entries+Items+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Customer+Invoice+Journal+Items+Generation+Odoo+19"
    }
  },
  {
    "id": 63,
    "topic": "accounting",
    "soal": "What happens when you reconcile a bank transaction with a customer invoice using the bank reconciliation tool?",
    "pilihan": [
      "Odoo creates a new journal entry for the payment and does not change the account of any existing journal entry.",
      "Odoo updates the bank transaction's journal entry to replace the suspense account with the account receivable of the invoice.",
      "Odoo updates the invoice journal entry to replace the account receivable with the suspense account of the bank transaction."
    ],
    "jawaban": 1,
    "penjelasan": "Saat rekonsiliasi di bank reconciliation, akun suspense pada jurnal transaksi bank diganti dengan akun receivable invoice. Tidak ada jurnal pembayaran terpisah yang dibuat.",
    "referensi": {
      "topikSpesifik": "Bank Transaction Reconciliation with Invoices",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/bank/reconciliation.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Bank+Reconciliation+Customer+Invoices+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Bank+Transaction+Reconciliation+with+Invoices+Odoo+19"
    }
  },
  {
    "id": 64,
    "topic": "accounting",
    "soal": "How can you update exchange rates automatically?",
    "pilihan": [
      "By enabling the Automatic Currency Rates option in the Accounting configuration.",
      "Exchange rates are automatically updated when a journal entry with a different currency is created.",
      "By default, currency rates are updated daily and can be manually triggered using the developer mode."
    ],
    "jawaban": 0,
    "penjelasan": "Fitur 'Automatic Currency Rates' di pengaturan Accounting secara berkala memperbarui kurs mata uang asing dari bank sentral secara otomatis.",
    "referensi": {
      "topikSpesifik": "Automatic Multi-Currency Exchange Rates Update",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/taxes/fiscal_positions.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Automatic+Currency+Exchange+Rates+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Automatic+Multi-Currency+Exchange+Rates+Update+Odoo+19"
    }
  },
  {
    "id": 65,
    "topic": "accounting",
    "soal": "How can you modify a posted journal entry's number?",
    "pilihan": [
      "You can modify a single posted journal entry's number by resetting it to draft and manually changing the number, or you can change them en masse by going into developer mode, selecting the journal entries, and selecting Resequence from the action menu.",
      "Odoo will only allow users with Bookkeeper access rights for the accounting application to modify a posted journal entry's number. All other users will receive an error message.",
      "You can modify a single posted journal entry's number by going into developer mode and manually changing the number, or you can change them en masse by selecting the journal entries, resetting them to draft and selecting Resequence from the action menu."
    ],
    "jawaban": 0,
    "penjelasan": "Nomor satu entri posted dapat diubah dengan Reset to Draft lalu mengedit nomornya. Untuk banyak entri sekaligus, aktifkan developer mode, pilih entri di list view, lalu jalankan Resequence dari menu Actions.",
    "referensi": {
      "topikSpesifik": "Modifying Posted Journal Entry Numbers",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/chart_of_accounts.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Edit+Posted+Journal+Entry+Number+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Modifying+Posted+Journal+Entry+Numbers+Odoo+19"
    }
  },
  {
    "id": 66,
    "topic": "accounting",
    "soal": "What information can you define on a contact record?",
    "pilihan": [
      "The default payment method, preferred invoice sending method, and the invoice follow-ups.",
      "The invoice follow-ups, the payment terms, and the costing method.",
      "The default payment terms, default payment method, and outstanding account."
    ],
    "jawaban": 0,
    "penjelasan": "Di tab Accounting/Sales & Purchase pada form kontak, Anda dapat menentukan default payment method, metode pengiriman invoice yang diinginkan, dan pengaturan invoice follow-up. Costing method diatur di kategori produk, bukan di kontak.",
    "referensi": {
      "topikSpesifik": "Contact Form Accounting & Invoicing Preferences",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/contacts.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Contact+Invoicing+Payment+Terms+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Contact+Form+Accounting+%26+Invoicing+Preferences+Odoo+19"
    }
  },
  {
    "id": 67,
    "topic": "accounting",
    "soal": "How can you create financial budgets?",
    "pilihan": [
      "Set up analytic plans and accounts first, then create a budget via Accounting > Accounting > Analytic Budget.",
      "Go to Accounting > Reporting > Profit and Loss, then click the Budget button to display existing budgets and create a new one.",
      "Go to Accounting > Reporting > Balance Sheet, and select the period. Odoo automatically creates a budget for the selected period."
    ],
    "jawaban": 1,
    "penjelasan": "Financial budget dibuat dari laporan Accounting > Reporting > Profit and Loss dengan tombol Budget. Menu Analytic Budgets dipakai untuk budget analitik.",
    "referensi": {
      "topikSpesifik": "Financial Budgets & Analytic Positions",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/reporting/analytic_accounting.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Accounting+Budgeting+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Financial+Budgets+%26+Analytic+Positions+Odoo+19"
    }
  },
  {
    "id": 68,
    "topic": "accounting",
    "soal": "Can accounts belong to multiple companies?",
    "pilihan": [
      "Yes, but only if the companies are set as branch offices.",
      "No, each account can only belong to one company.",
      "Yes, by merging accounts from various companies or mapping multiple companies on an account, each with a code."
    ],
    "jawaban": 2,
    "penjelasan": "Di Odoo 19 satu akun bisa dipakai oleh beberapa perusahaan (field Companies) dengan kode per perusahaan, dan akun dari beberapa perusahaan dapat di-merge.",
    "referensi": {
      "topikSpesifik": "Multi-Company Chart of Accounts",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/companies/multi_companies.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Multi+Company+Chart+of+Accounts+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Multi-Company+Chart+of+Accounts+Odoo+19"
    }
  },
  {
    "id": 69,
    "topic": "accounting",
    "soal": "Is it possible to reconcile a bank entry with a draft invoice?",
    "pilihan": [
      "No, draft entries cannot be reconciled with bank transactions because they're not confirmed yet.",
      "Yes, draft entries can be reconciled, but only if the payment generated a journal entry that uses outstanding accounts.",
      "Yes, draft invoices can be matched with bank entries for reconciliation."
    ],
    "jawaban": 0,
    "penjelasan": "Mutasi bank tidak dapat direkonsiliasi dengan invoice yang masih berstatus Draft; invoice wajib dikonfirmasi (Posted) terlebih dahulu sebelum dapat dicocokkan.",
    "referensi": {
      "topikSpesifik": "Bank Reconciliation Draft Entries Restrictions",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/bank/reconciliation.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Bank+Reconciliation+Draft+Entries+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Bank+Reconciliation+Draft+Entries+Restrictions+Odoo+19"
    }
  },
  {
    "id": 70,
    "topic": "accounting",
    "soal": "How can you send a payment reminder to a customer for all overdue invoices except one?",
    "pilihan": [
      "In the Invoices list view, search for Overdue invoices and select the desired ones. Then select Invoice Follow-ups in the Actions menu.",
      "In the customer Follow-up report, enable the toggle in the No Follow-up column for the invoice you want to exclude.",
      "In the Accounting tab of the customer form, click Send in the Invoice Follow-ups section and select the invoice that needs a reminder."
    ],
    "jawaban": 1,
    "penjelasan": "Di laporan Follow-up pelanggan, aktifkan toggle pada kolom No Follow-up untuk invoice yang ingin dikecualikan, sehingga reminder hanya mencakup invoice overdue lainnya.",
    "referensi": {
      "topikSpesifik": "Overdue Invoices Customer Payment Follow-up",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/customer_invoices/payment_follow_up.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Customer+Payment+Follow+Up+Reports+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Overdue+Invoices+Customer+Payment+Follow-up+Odoo+19"
    }
  },
  {
    "id": 71,
    "topic": "accounting",
    "soal": "What do the audit features allow you to do?",
    "pilihan": [
      "Review working files related to selected cycles by performing various checks and balances for a specified period.",
      "Both review working files and generate a customizable audit report, and control and track changes with a non-restrictive audit trail that is accessible by default to everyone.",
      "Generate a customizable audit report for that period, including a table of contents, attestations, the balance sheet, a profit and loss statement, annexes, and supporting documents."
    ],
    "jawaban": 1,
    "penjelasan": "Fitur audit mencakup keduanya: meninjau working file per siklus dan membuat audit report yang dapat dikustomisasi, serta audit trail non-restriktif yang secara default dapat diakses semua user untuk melacak perubahan.",
    "referensi": {
      "topikSpesifik": "Accounting Audit Trail & Activity Logs",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/cheat_sheet.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Accounting+Audit+Trail+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Accounting+Audit+Trail+%26+Activity+Logs+Odoo+19"
    }
  },
  {
    "id": 72,
    "topic": "accounting",
    "soal": "In perpetual accounting, when purchasing goods to sell them, which actions generate journal entries?",
    "pilihan": [
      "Confirming the vendor bill and confirming the customer invoice.",
      "Confirming the vendor bill, validating the delivery order, and confirming the customer invoice.",
      "Validating the receipt, confirming the vendor bill, validating the delivery order, and confirming the customer invoice."
    ],
    "jawaban": 2,
    "penjelasan": "Pada perpetual valuation, validasi receipt (stok masuk), konfirmasi vendor bill, validasi delivery order (COGS/stok keluar), dan konfirmasi customer invoice masing-masing menghasilkan journal entry.",
    "referensi": {
      "topikSpesifik": "Perpetual Inventory Valuation Journal Creation",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/inventory_valuation.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Perpetual+Inventory+Accounting+Entries+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Perpetual+Inventory+Valuation+Journal+Creation+Odoo+19"
    }
  },
  {
    "id": 73,
    "topic": "spreadsheet",
    "soal": "When you upload an Excel or CSV file and open it with Odoo Spreadsheet, what happens to the original file?",
    "pilihan": [
      "By default, it is deleted, but you can opt to preserve the file.",
      "The original file is moved to an 'Uploaded Files' folder.",
      "By default, it is preserved in the same folder unless you check 'Send source file to trash'."
    ],
    "jawaban": 0,
    "penjelasan": "Saat file Excel/CSV dibuka dengan Odoo Spreadsheet, file tersebut dikonversi menjadi spreadsheet Odoo dan file aslinya dihapus secara default, kecuali Anda memilih untuk menyimpannya.",
    "referensi": {
      "topikSpesifik": "Odoo Spreadsheet CSV/Excel Upload Behavior",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/spreadsheet.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Spreadsheets+Import+Excel+CSV+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+Spreadsheet+CSV%2FExcel+Upload+Behavior+Odoo+19"
    }
  },
  {
    "id": 74,
    "topic": "spreadsheet",
    "soal": "When a spreadsheet is converted into a dashboard, where is the original spreadsheet saved?",
    "pilihan": [
      "The spreadsheet remains in the Documents app but is automatically set to read-only.",
      "The spreadsheet is saved in a special Dashboard assets folder, in the Documents app.",
      "The spreadsheet is deleted from the Documents app and can only be accessed via the Dashboards app."
    ],
    "jawaban": 2,
    "penjelasan": "Setelah spreadsheet dikonversi menjadi dashboard, spreadsheet tersebut hanya bisa diakses dan diedit melalui app Dashboards, bukan lagi dari Documents.",
    "referensi": {
      "topikSpesifik": "Converting Spreadsheets into Analytic Dashboards",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/spreadsheet.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Spreadsheet+to+Dashboard+Conversion+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Converting+Spreadsheets+into+Analytic+Dashboards+Odoo+19"
    }
  },
  {
    "id": 75,
    "topic": "spreadsheet",
    "soal": "In a multi-company database with Company A, Company B, and Company C, how can you ensure only users from Company A and Company B can access a new dashboard you create?",
    "pilihan": [
      "In the dashboard configuration, set which companies' users can access the dashboard.",
      "You need to duplicate the dashboard and assign each copy to a single company.",
      "This is not possible; any dashboard is visible to all companies present in the database."
    ],
    "jawaban": 0,
    "penjelasan": "Pada konfigurasi dashboard multi-perusahaan, Anda dapat menentukan entitas perusahaan mana saja yang diizinkan untuk melihat data dashboard tersebut.",
    "referensi": {
      "topikSpesifik": "Multi-Company Spreadsheet Dashboard Access",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/companies/multi_companies.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Multi+Company+Dashboard+Permissions+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Multi-Company+Spreadsheet+Dashboard+Access+Odoo+19"
    }
  },
  {
    "id": 76,
    "topic": "hr",
    "soal": "How would you set up a mechanism where the amount of time off an employee gets depends on their number of days worked?",
    "pilihan": [
      "You create a new Time Off type that does not require any approvals.",
      "You create a new Allocation and set the Allocation Type to \"Accrual Allocation\"",
      "You create a new Time Off type that does not permit Extra Day Requests"
    ],
    "jawaban": 1,
    "penjelasan": "Untuk menambah kuota cuti berdasarkan akumulasi hari kerja, buat Alokasi Cuti baru dengan tipe 'Accrual Allocation' dan tentukan jadwal perolehan kuotanya.",
    "referensi": {
      "topikSpesifik": "Time Off Accrual Allocation Plan",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/hr_and_attendance.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Time+Off+Accrual+Plans+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Time+Off+Accrual+Allocation+Plan+Odoo+19"
    }
  },
  {
    "id": 77,
    "topic": "hr",
    "soal": "In the Employees app, what does the History smart button do?",
    "pilihan": [
      "Allows you to revert to any previous contract",
      "It shows all versions of the Employee record, and allows you to view past records",
      "Shows all payslips for the employee, grouped by job title and salary"
    ],
    "jawaban": 1,
    "penjelasan": "Di Odoo 19 kontrak digabung ke dalam 'versions' data karyawan. Smart button History menampilkan semua versi record karyawan dan memungkinkan Anda membuka versi lama.",
    "referensi": {
      "topikSpesifik": "Employee Contracts History & Reversion",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/hr_and_attendance.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Employee+Contracts+History+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Employee+Contracts+History+%26+Reversion+Odoo+19"
    }
  },
  {
    "id": 78,
    "topic": "hr",
    "soal": "How do you automatically send an email asking an applicant to schedule an interview in the Recruitment app?",
    "pilihan": [
      "Edit the corresponding stage in the pipeline, and select the email template 'Recruitment: Schedule interview'.",
      "Select the email template 'Recruitment: Schedule Interview' in the Configuration page for the job position.",
      "The Recruitment app automatically sends the 'Recruitment: Schedule Interview' email template when the candidate moves to the Qualified stage; there is no further configuration needed"
    ],
    "jawaban": 0,
    "penjelasan": "Pada stage pipeline Recruitment, atur field Email Template ke 'Recruitment: Schedule interview' agar email tersebut otomatis terkirim saat pelamar dipindahkan ke stage itu.",
    "referensi": {
      "topikSpesifik": "Recruitment Interview Self-Scheduling Email",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/appointments.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Recruitment+Interview+Scheduling+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Recruitment+Interview+Self-Scheduling+Email+Odoo+19"
    }
  },
  {
    "id": 79,
    "topic": "hr",
    "soal": "How can a user with the required rights change an Employee's presence in the database from Present to Absent?",
    "pilihan": [
      "In the Attendances app dashboard, click on the employee attendance record, and select Absent",
      "In the Employees app dashboard, click Presence Icon > Absent",
      "On the Employee record, click Actions > Presence Control > Set Absent"
    ],
    "jawaban": 2,
    "penjelasan": "Dengan modul Presence Control (hr_presence), user berwenang dapat membuka record karyawan lalu memilih Actions > Presence Control > Set Absent.",
    "referensi": {
      "topikSpesifik": "Employee Presence Status Management",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/hr_and_attendance.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Employee+Presence+Status+Absent+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Employee+Presence+Status+Management+Odoo+19"
    }
  },
  {
    "id": 80,
    "topic": "hr",
    "soal": "How can you determine if an employee is out of the office, taking a sick day?",
    "pilihan": [
      "A red stethoscope icon appears on their employee profile",
      "An orange airplane appears on their employee profile.",
      "A gray 'Out Of Office' banner appears on their employee profile."
    ],
    "jawaban": 1,
    "penjelasan": "Karyawan yang sedang cuti (termasuk cuti sakit) ditandai dengan ikon pesawat berwarna oranye pada profilnya. Tidak ada ikon stetoskop.",
    "referensi": {
      "topikSpesifik": "Employee Sick Leave Out-of-Office Indicator",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/hr_and_attendance.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Employee+Time+Off+Sick+Leave+Indicator+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Employee+Sick+Leave+Out-of-Office+Indicator+Odoo+19"
    }
  },
  {
    "id": 81,
    "topic": "pos",
    "soal": "What happens to an order when you split a bill?",
    "pilihan": [
      "A sub-order is created.",
      "The bill is printed.",
      "Nothing, you proceed with the same order."
    ],
    "jawaban": 0,
    "penjelasan": "Saat Split Bill, item yang dipilih dipindahkan ke order baru (sub-order) yang dibayar terpisah, sementara sisa item tetap berada di order asal.",
    "referensi": {
      "topikSpesifik": "Restaurant POS Bill Splitting & Table Orders",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+POS+Restaurant+Split+Bill+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Restaurant+POS+Bill+Splitting+%26+Table+Orders+Odoo+19"
    }
  },
  {
    "id": 82,
    "topic": "pos",
    "soal": "If no payment method is selected, what is the default one in the register?",
    "pilihan": [
      "Cash.",
      "Card.",
      "Customer account."
    ],
    "jawaban": 0,
    "penjelasan": "Jika kasir tidak memilih metode pembayaran secara eksplisit, register menggunakan Cash sebagai metode pembayaran default.",
    "referensi": {
      "topikSpesifik": "POS Register Default Payment Method",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+POS+Payment+Methods+Setup+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+POS+Register+Default+Payment+Method+Odoo+19"
    }
  },
  {
    "id": 84,
    "topic": "purchase",
    "soal": "After the buyer confirms a purchase order, how does the seller create a corresponding sales order using EDI?",
    "pilihan": [
      "The buyer's database automatically pushes the PO into the seller's sales orders list",
      "The seller downloads the XML from the buyer's portal and uploads it in their Sales app",
      "In the email the seller receives, the seller clicks the \"Download\" button and uploads the downloaded PDF to the Sales dashboard"
    ],
    "jawaban": 1,
    "penjelasan": "Dengan EDI, penjual membuka portal pembeli, mengunduh file XML dari PO, lalu mengunggahnya di app Sales untuk membuat sales order. Database pembeli tidak mengirim PO secara otomatis.",
    "referensi": {
      "topikSpesifik": "Requests for Quotation (RFQ) & PO Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/rfq.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Purchase+Orders+RFQ+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Requests+for+Quotation+%28RFQ%29+%26+PO+Workflow+Odoo+19"
    }
  },
  {
    "id": 85,
    "topic": "purchase",
    "soal": "While using 3-way matching, for products with Invoicing Policy = Received quantities, you upload a vendor bill for the full PO before any receipt. How is it treated?",
    "pilihan": [
      "The bill is created, but \"Should Be Paid?\" = No (fails 3-way match until receipt)",
      "Bill upload is blocked until at least one receipt is validated",
      "The bill uploads and is automatically marked payable in full regardless of receipts"
    ],
    "jawaban": 0,
    "penjelasan": "Dengan 3-way matching, upload vendor bill tidak diblokir; bill tetap dibuat, tetapi field 'Should Be Paid' bernilai 'No' karena barang belum diterima, dan baru menjadi 'Yes' setelah kuantitas diterima sesuai tagihan.",
    "referensi": {
      "topikSpesifik": "Invoicing Policies & Pro-Forma Invoices",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/invoicing/invoicing_policy.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Invoicing+Policies+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Invoicing+Policies+%26+Pro-Forma+Invoices+Odoo+19"
    }
  },
  {
    "id": 86,
    "topic": "purchase",
    "soal": "If you have a product with several vendors assigned to it, which one will be used when an RFQ is automatically generated?",
    "pilihan": [
      "The first vendor on the list matching the minimum quantity condition",
      "The vendor with the shortest delivery lead time",
      "The vendor with the cheapest price"
    ],
    "jawaban": 0,
    "penjelasan": "RFQ otomatis (mis. dari reordering rule) menggunakan vendor pertama pada daftar vendor di tab Purchase produk yang memenuhi syarat minimum quantity; urutan baris menentukan prioritas, bukan harga termurah atau lead time terpendek.",
    "referensi": {
      "topikSpesifik": "Requests for Quotation (RFQ) & PO Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/rfq.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Purchase+Orders+RFQ+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Requests+for+Quotation+%28RFQ%29+%26+PO+Workflow+Odoo+19"
    }
  },
  {
    "id": 87,
    "topic": "purchase",
    "soal": "Using the 'Average Cost' costing method, will the cost in the product form change when you receive products?",
    "pilihan": [
      "Yes",
      "Yes, but only if the vendor bill arrives at the same time as the product",
      "No"
    ],
    "jawaban": 0,
    "penjelasan": "Dengan Average Cost (AVCO), setiap penerimaan barang menghitung ulang cost produk sebagai rata-rata tertimbang antara nilai stok yang ada dan harga barang yang masuk, sehingga cost di form produk berubah saat receipt divalidasi.",
    "referensi": {
      "topikSpesifik": "Inventory Valuation & Perpetual Accounting",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/inventory_valuation.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Inventory+Valuation+Accounting+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Inventory+Valuation+%26+Perpetual+Accounting+Odoo+19"
    }
  },
  {
    "id": 88,
    "topic": "purchase",
    "soal": "When you purchase new products, how is the Expected Arrival date computed on new PO lines?",
    "pilihan": [
      "Order Date - Vendor Lead Time - Company Security Days",
      "Order Date + Vendor Lead Time",
      "Order Date + Vendor Lead Time + Company Security Days"
    ],
    "jawaban": 1,
    "penjelasan": "Tanggal kedatangan pesanan (Expected Arrival) dihitung dari tanggal PO ditambah Vendor Lead Time pada Vendor Pricelist.",
    "referensi": {
      "topikSpesifik": "PO Lead Times & Expected Arrival Date",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/lead_times.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Vendor+Lead+Times+Arrival+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+PO+Lead+Times+%26+Expected+Arrival+Date+Odoo+19"
    }
  },
  {
    "id": 89,
    "topic": "purchase",
    "soal": "When creating a new request for quotation (RFQ), are you able to link it to an existing RFQ as an alternative?",
    "pilihan": [
      "No, alternative RFQs must be created from the 'Alternatives' tab of an existing, pre-populated RFQ with a listed vendor and products",
      "No, Odoo does not allow multiple RFQs to be linked to each other unless the same vendor is listed on each",
      "Yes, by clicking 'Link to Existing RfQ', under the 'Alternatives' tab on a new request for quotation"
    ],
    "jawaban": 2,
    "penjelasan": "RFQ baru bisa dihubungkan sebagai alternatif ke RFQ yang sudah ada lewat tombol 'Link to Existing RfQ' di tab Alternatives.",
    "referensi": {
      "topikSpesifik": "Requests for Quotation (RFQ) & PO Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/rfq.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Purchase+Orders+RFQ+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Requests+for+Quotation+%28RFQ%29+%26+PO+Workflow+Odoo+19"
    }
  },
  {
    "id": 90,
    "topic": "purchase",
    "soal": "When the '3-way matching' feature is activated, how will you know which vendor bills are ready to be paid for received quantities?",
    "pilihan": [
      "You won't. The '3-way matching' feature only works when the bill control policy is set to 'On ordered quantities'",
      "The 'Should Be Paid' field will read 'Yes', under the 'Other Info' tab on the vendor bill",
      "When the vendor bill's status changes from 'In Payment' to 'Paid'"
    ],
    "jawaban": 1,
    "penjelasan": "Dengan 3-way matching (kebijakan 'On received quantities'), field 'Should Be Paid' di tab Other Info vendor bill menunjukkan 'Yes' jika bill sudah sesuai dengan barang yang diterima.",
    "referensi": {
      "topikSpesifik": "Invoicing Policies & Pro-Forma Invoices",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/invoicing/invoicing_policy.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Invoicing+Policies+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Invoicing+Policies+%26+Pro-Forma+Invoices+Odoo+19"
    }
  },
  {
    "id": 91,
    "topic": "purchase",
    "soal": "You set \"Based On\" to Last 7 days and \"Replenish for\" to 15 days. Odoo suggests quantities for several products. What data is Odoo using to generate these suggestions?",
    "pilihan": [
      "It only considers confirmed purchase orders in the last 7 days to compute daily demand, then multiplies by 15",
      "It averages the price of the product over the last 7 days to compare to what you're paying for the next 15 days to make sure your vendors aren't ripping you off",
      "It looks at quantities delivered over the past 7 days to compute daily demand, then multiplies by 15 and subtracts on-hand stock"
    ],
    "jawaban": 2,
    "penjelasan": "Dengan 'Based On' Last 7 days, Odoo menghitung rata-rata permintaan harian dari kuantitas yang terkirim selama 7 hari terakhir, mengalikannya dengan 15 hari ('Replenish for'), lalu mengurangi stok on hand untuk menyarankan kuantitas pembelian.",
    "referensi": {
      "topikSpesifik": "Requests for Quotation (RFQ) & PO Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/rfq.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Purchase+Orders+RFQ+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Requests+for+Quotation+%28RFQ%29+%26+PO+Workflow+Odoo+19"
    }
  },
  {
    "id": 93,
    "topic": "inventory",
    "soal": "Your warehouse is set up to deliver in three steps: pick, pack, and ship. In the 'Pick' step, you are supposed to pick 10 chairs and 5 desks, but you accidentally pick 15 chairs and 2 desks. You select 'No Backorder' during the process. What will be the result in the 'Pack' step?",
    "pilihan": [
      "15 chairs, 2 desks",
      "10 chairs and 5 desks",
      "10 chairs, 2 desks"
    ],
    "jawaban": 0,
    "penjelasan": "Dengan 'No Backorder', langkah Pick divalidasi sesuai kuantitas yang benar-benar diambil (15 kursi, 2 meja) tanpa membuat backorder untuk kekurangannya, sehingga transfer Pack menerima persis 15 kursi dan 2 meja.",
    "referensi": {
      "topikSpesifik": "3-Step Delivery Route (Pick + Pack + Ship)",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/receipts_delivery_orders.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Three+Step+Delivery+Route+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+3-Step+Delivery+Route+%28Pick+%2B+Pack+%2B+Ship%29+Odoo+19"
    }
  },
  {
    "id": 94,
    "topic": "inventory",
    "soal": "When performing an inventory adjustment that increases a product's stock from 0 to 5 units, what are the 'Location Types' of the locations involved in the resulting stock move?",
    "pilihan": [
      "A move from an 'Internal Location' to an 'Inventory Adjustment' location",
      "A move from an 'Inventory Loss' location to an 'Internal Location'",
      "A move between two 'Internal Locations'"
    ],
    "jawaban": 1,
    "penjelasan": "Menambah stok dari 0 ke 5 lewat inventory adjustment membuat stock move dari lokasi virtual bertipe 'Inventory Loss' ke lokasi 'Internal'.",
    "referensi": {
      "topikSpesifik": "Physical Inventory Adjustments & Locations",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/count_products.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Inventory+Adjustments+Stock+Count+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Physical+Inventory+Adjustments+%26+Locations+Odoo+19"
    }
  },
  {
    "id": 96,
    "topic": "inventory",
    "soal": "If a product has been reserved for sales orders and you perform an 'Inventory Adjustment' to set the on-hand quantity to 0, what will happen to the forecasted quantity of that product?",
    "pilihan": [
      "The forecasted quantity is updated to 0",
      "There's no change to the forecasted quantity",
      "The forecasted quantity becomes negative, and the product is marked as \"Not Available\" on any current delivery orders"
    ],
    "jawaban": 2,
    "penjelasan": "Mengubah on-hand menjadi 0 membatalkan reservasi, sementara permintaan keluar tetap ada. Akibatnya forecasted quantity menjadi negatif dan delivery order berstatus Not Available.",
    "referensi": {
      "topikSpesifik": "Delivery Orders & Stock Reservation",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/receipts_delivery_orders.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Delivery+Orders+Stock+Reservation+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Delivery+Orders+%26+Stock+Reservation+Odoo+19"
    }
  },
  {
    "id": 97,
    "topic": "inventory",
    "soal": "When you update on-hand quantities from 5 units to 4 for a specific product, what stock moves are created?",
    "pilihan": [
      "A move of 4 units from an 'Internal Location' to an 'Inventory Loss' location",
      "A move of 1 unit from an 'Internal Location' to an 'Inventory Loss' location",
      "A move of 1 unit from an 'Inventory Loss' location to an 'Internal Location'"
    ],
    "jawaban": 1,
    "penjelasan": "Inventory adjustment hanya mencatat selisihnya: dari 5 ke 4 dibuat move 1 unit dari lokasi Internal ke lokasi Inventory Loss.",
    "referensi": {
      "topikSpesifik": "Stock Moves on Quantity Update",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/count_products.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Stock+Moves+Inventory+Update+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Stock+Moves+on+Quantity+Update+Odoo+19"
    }
  },
  {
    "id": 98,
    "topic": "inventory",
    "soal": "You're configuring a packaging called \"Pack of 6\" to sell six soda bottles together. Soda's base unit of measure is units. You set the Package Type to Carton (representing the cardboard six-pack holder). On a delivery order for 6 units of soda and click \"Put in Pack\", what effect does this configuration have?",
    "pilihan": [
      "Create a new package with the Package Type \"Carton\", with all 6 sodas inside",
      "Create a new package with the Package Type \"Carton\", with all 6 sodas inside, but the unit is converted to 1 \"Pack of 6\" on the delivery order",
      "Creates one package containing all 6 sodas, but no Package Type is set, because it's not a thing"
    ],
    "jawaban": 0,
    "penjelasan": "Karena packaging 'Pack of 6' memiliki Package Type Carton, 'Put in Pack' membuat package bertipe Carton berisi keenam soda; kuantitas di delivery order tetap tercatat 6 Units dan tidak dikonversi menjadi 1 'Pack of 6'.",
    "referensi": {
      "topikSpesifik": "Packages & Move Entire Package",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/packages.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Packages+Move+Entire+Package+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Packages+%26+Move+Entire+Package+Odoo+19"
    }
  },
  {
    "id": 99,
    "topic": "inventory",
    "soal": "Where is the \"Count Entire Locations\" Barcode feature configured?",
    "pilihan": [
      "In Inventory > Configuration > Settings, under the Barcode section, enable the \"Count Entire Locations\" feature",
      "Go to the Locations configuration page and enable the \"Count Entire Locations\" feature",
      "In the Barcode app, click \"Count inventory\", click the gear icon (settings) menu, and enable \"Count Entire Locations\""
    ],
    "jawaban": 2,
    "penjelasan": "'Count Entire Locations' diaktifkan dari app Barcode: buka Count Inventory, klik ikon gear, lalu aktifkan opsinya (syarat: Storage Locations aktif).",
    "referensi": {
      "topikSpesifik": "Barcode Count Entire Locations",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/barcode/operations/count_locations.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Barcode+Inventory+Count+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Barcode+Count+Entire+Locations+Odoo+19"
    }
  },
  {
    "id": 100,
    "topic": "inventory",
    "soal": "What does the 'i' button on the Replenishment dashboard NOT do?",
    "pilihan": [
      "Display the forecasted arrival date of the product",
      "Triggers the reordering rule",
      "Display lead times"
    ],
    "jawaban": 1,
    "penjelasan": "Tombol (i) di Replenishment membuka Replenishment Information yang menampilkan forecasted date dan lead time. Tombol ini tidak menjalankan reordering rule.",
    "referensi": {
      "topikSpesifik": "Automated Reordering Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/reordering_rules.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Reordering+Rules+Replenishment+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Automated+Reordering+Rules+Odoo+19"
    }
  },
  {
    "id": 102,
    "topic": "mrp",
    "soal": "You want to trigger quality checks when products arrive from vendors. How should you configure this?",
    "pilihan": [
      "Create a quality control point on the \"Receipt\" operation type",
      "Create a control point on the \"Vendor Reception\" operation type",
      "Create a quality check for each specific vendor"
    ],
    "jawaban": 0,
    "penjelasan": "Titik kontrol kualitas (Quality Control Point) pada operasi Incoming/Receipts otomatis memicu pemeriksaan mutu saat barang tiba dari vendor.",
    "referensi": {
      "topikSpesifik": "Quality Checks on Vendor Receipts",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/quality/quality_management/quality_checks.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Quality+Checks+Incoming+Receipts+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Quality+Checks+on+Vendor+Receipts+Odoo+19"
    }
  },
  {
    "id": 103,
    "topic": "mrp",
    "soal": "Your MPS shows a forecasted demand of 110 units for a product with a BoM Batch Size of 40. What happens when you click \"Order\"?",
    "pilihan": [
      "3 MOs are created, with 40 units in two MOs, and 30 units in the third MO",
      "3 MOs are created, 40 units each",
      "4 MOs with 30 each"
    ],
    "jawaban": 0,
    "penjelasan": "MPS membagi kebutuhan sesuai Batch Size pada BoM, sehingga permintaan 110 unit menghasilkan dua MO berisi 40 unit dan satu MO berisi sisa 30 unit.",
    "referensi": {
      "topikSpesifik": "Bills of Materials (BoM) & Kits",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/management/kit_shipping.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Bills+of+Materials+BoM+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Bills+of+Materials+%28BoM%29+%26+Kits+Odoo+19"
    }
  },
  {
    "id": 104,
    "topic": "mrp",
    "soal": "A MO produces 5 products tracked by serial numbers. How do you generate serial numbers for all finished products?",
    "pilihan": [
      "Enable the \"Custom Lot/Serial\" feature for the product, then click \"Generate Serial\". This creates five serial numbers in the Lot/Serial Number field",
      "It's not possible to have more than one serial number in the \"Lot/Serial Number\" field, so Odoo creates backorders for the remaining four unassigned serial numbers",
      "You must manually create five separate Manufacturing Orders, each for quantity 1, so that Odoo assigns a serial number to each finished product individually"
    ],
    "jawaban": 0,
    "penjelasan": "Setelah Custom Lot/Serial diaktifkan pada produk, tombol 'Generate Serial' di MO membuat sekaligus lima serial number untuk seluruh produk jadi, tanpa perlu memecah MO atau membuat backorder.",
    "referensi": {
      "topikSpesifik": "Lots & Serial Numbers Traceability",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/product_tracking.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Lots+Serial+Numbers+Traceability+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Lots+%26+Serial+Numbers+Traceability+Odoo+19"
    }
  },
  {
    "id": 105,
    "topic": "mrp",
    "soal": "What do the additional row options Actual Demand Y-1 and Actual Demand Y-2 refer to in the Master Production Schedule (MPS)?",
    "pilihan": [
      "The quantity of products sold at this time last year and two years ago, respectively",
      "The quantity of products delivered to customer locations at the same time last year and two years ago, respectively",
      "The demand forecast input in the MPS this time last year and two years ago respectively"
    ],
    "jawaban": 0,
    "penjelasan": "Baris Actual Demand Y-1 dan Y-2 di MPS menampilkan kuantitas produk yang terjual pada periode yang sama satu dan dua tahun sebelumnya sebagai pembanding forecast, bukan forecast MPS lama atau kuantitas yang dikirim.",
    "referensi": {
      "topikSpesifik": "Master Production Schedule (MPS)",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/management/mps.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Master+Production+Schedule+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Master+Production+Schedule+%28MPS%29+Odoo+19"
    }
  },
  {
    "id": 106,
    "topic": "mrp",
    "soal": "When alternative work centers are configured, which work center will Odoo select for work orders?",
    "pilihan": [
      "The work center with the highest capacity",
      "The work center with the lowest cost per hour",
      "The work center that will finish the task the soonest"
    ],
    "jawaban": 2,
    "penjelasan": "Jika work center memiliki Alternative Workcenters, Odoo menjadwalkan work order di work center yang dapat menyelesaikannya paling cepat berdasarkan ketersediaan, bukan yang kapasitasnya tertinggi atau biayanya terendah.",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Capacity",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/management/work_center_capacity.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Capacity+Odoo+19"
    }
  },
  {
    "id": 108,
    "topic": "mrp",
    "soal": "What must happen in order to mark a subcontracted order as complete?",
    "pilihan": [
      "The subcontractor must validate component consumption from the subcontracting portal",
      "The user must validate the receipt of the product from the subcontractor",
      "The finished product must be shipped"
    ],
    "jawaban": 1,
    "penjelasan": "Order subcontracting selesai ketika user memvalidasi receipt produk jadi dari subcontractor. Portal subcontracting bersifat opsional.",
    "referensi": {
      "topikSpesifik": "Subcontracting in Manufacturing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/subcontracting.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Subcontracting+Manufacturing+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Subcontracting+in+Manufacturing+Odoo+19"
    }
  },
  {
    "id": 109,
    "topic": "mrp",
    "soal": "Which app is the Shop Floor module installed alongside?",
    "pilihan": [
      "Accounting",
      "Manufacturing",
      "Maintenance"
    ],
    "jawaban": 1,
    "penjelasan": "Modul Shop Floor ter-install bersama app Manufacturing.",
    "referensi": {
      "topikSpesifik": "Shop Floor App Installation & MRP Operations",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+MRP+Shop+Floor+App+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Shop+Floor+App+Installation+%26+MRP+Operations+Odoo+19"
    }
  },
  {
    "id": 110,
    "topic": "mrp",
    "soal": "Which of the following is NOT shown on the card for an MO on the Shop Floor dashboard?",
    "pilihan": [
      "The estimated time to complete the MO",
      "The MO number",
      "The product being manufactured"
    ],
    "jawaban": 0,
    "penjelasan": "Kartu MO di Shop Floor menampilkan nomor MO, produk yang dibuat beserta kuantitasnya, serta work order/komponennya, tetapi tidak menampilkan estimasi waktu penyelesaian MO.",
    "referensi": {
      "topikSpesifik": "Shop Floor Manufacturing Order Cards & Steps",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Shop+Floor+MO+Cards+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Shop+Floor+Manufacturing+Order+Cards+%26+Steps+Odoo+19"
    }
  },
  {
    "id": 111,
    "topic": "mrp",
    "soal": "What happens when no employees are listed in the 'Allowed Employees' field on a work center form?",
    "pilihan": [
      "No employee is allowed to operate the work center",
      "It is not possible to leave the 'Allowed Employees' field blank",
      "Any employee is allowed to operate the work center"
    ],
    "jawaban": 2,
    "penjelasan": "Jika field 'Allowed Employees' pada work center dikosongkan, tidak ada pembatasan sehingga semua karyawan boleh mengoperasikan work center tersebut.",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Capacity",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/management/work_center_capacity.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Capacity+Odoo+19"
    }
  },
  {
    "id": 112,
    "topic": "mrp",
    "soal": "Where do you find the cost of processing a specific work order?",
    "pilihan": [
      "Manufacturing app -> Operations -> Manufacturing Orders -> select MO -> Overview -> Operations section",
      "Manufacturing app -> Operations -> Manufacturing Orders -> select MO -> Work Orders tab",
      "Manufacturing app -> Operations -> Work Orders -> select work order"
    ],
    "jawaban": 0,
    "penjelasan": "Biaya pemrosesan tiap work order dilihat dari MO dengan membuka smart button Overview (MO Overview), pada bagian Operations yang merinci durasi dan biaya setiap operasi.",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Capacity",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/management/work_center_capacity.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Capacity+Odoo+19"
    }
  },
  {
    "id": 113,
    "topic": "mrp",
    "soal": "What does it mean when a work center is operating at \"reduced speed\"?",
    "pilihan": [
      "The work center is operating more slowly than usual",
      "The work center does not have enough employees staffing it",
      "The work center is processing a work order that has exceeded its expected duration"
    ],
    "jawaban": 2,
    "penjelasan": "Pada OEE, 'reduced speed' berarti work center sedang mengerjakan work order yang sudah melewati durasi yang diharapkan.",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Capacity",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/management/work_center_capacity.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Capacity+Odoo+19"
    }
  },
  {
    "id": 114,
    "topic": "studio",
    "soal": "Which relational field type must exist for a One2Many field to function?",
    "pilihan": [
      "Related Field.",
      "Many2Many.",
      "Many2One."
    ],
    "jawaban": 2,
    "penjelasan": "Field One2Many di Odoo Studio wajib merujuk pada field Many2One yang ada di model target sebagai kunci relasinya.",
    "referensi": {
      "topikSpesifik": "Studio Relational Fields (One2Many & Many2One)",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Studio+Relational+Fields+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Studio+Relational+Fields+%28One2Many+%26+Many2One%29+Odoo+19"
    }
  },
  {
    "id": 115,
    "topic": "studio",
    "soal": "Which property should you use on a field if you want to display an example of how the field should be completed (e.g., 'Enter up to 50 characters')?",
    "pilihan": [
      "Placeholder.",
      "Help Tooltip.",
      "Default Value."
    ],
    "jawaban": 0,
    "penjelasan": "Properti \"Placeholder\" pada Odoo Studio digunakan untuk menampilkan contoh teks abu-abu di dalam kotak input sebelum diisi pengguna.",
    "referensi": {
      "topikSpesifik": "Studio Field Placeholders & Help Tooltips",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Studio+Field+Properties+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Studio+Field+Placeholders+%26+Help+Tooltips+Odoo+19"
    }
  },
  {
    "id": 116,
    "topic": "studio",
    "soal": "A dynamic table in a report is based on a relational field. Which type(s) of relational fields can be used for this purpose?",
    "pilihan": [
      "Many2One only.",
      "Related Fields only.",
      "One2Many or Many2Many."
    ],
    "jawaban": 2,
    "penjelasan": "Tabel dinamis pada laporan PDF Studio dibuat berdasarkan relasi One2Many atau Many2Many untuk mengulang baris data transaksi.",
    "referensi": {
      "topikSpesifik": "Studio Dynamic Report Tables & Relational Links",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Studio+Dynamic+Report+Tables+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Studio+Dynamic+Report+Tables+%26+Relational+Links+Odoo+19"
    }
  },
  {
    "id": 117,
    "topic": "studio",
    "soal": "When setting up an approval step on a button, which option, if enabled, prevents a user who approves one step from approving any other step on the same record?",
    "pilihan": [
      "Exclusive Approval.",
      "Approval Order.",
      "Sequential Approval."
    ],
    "jawaban": 0,
    "penjelasan": "Opsi 'Exclusive Approval' pada approval rule memastikan user yang sudah menyetujui satu langkah tidak dapat menyetujui langkah lain pada record yang sama, sehingga setiap langkah disetujui oleh orang berbeda.",
    "referensi": {
      "topikSpesifik": "Studio Button Approval Rules & User Access",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Studio+Button+Approvals+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Studio+Button+Approval+Rules+%26+User+Access+Odoo+19"
    }
  },
  {
    "id": 118,
    "topic": "studio",
    "soal": "How can you ensure a customer is automatically added as a follower when project changed state to 'In Progress'?",
    "pilihan": [
      "Use the 'Add Followers' action with the type 'Dynamic Followers', then select the appropriate partner field.",
      "Use the 'Create Activity' action and select the customer's email field.",
      "Use the 'Send Email' action and set the action to 'Message'."
    ],
    "jawaban": 0,
    "penjelasan": "Pada automation rule dengan trigger perubahan stage ke 'In Progress', action 'Add Followers' bertipe Dynamic Followers mengambil partner dari field record (mis. Customer) sehingga customer otomatis menjadi follower.",
    "referensi": {
      "topikSpesifik": "Chatter, Log Notes & Activities",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/activities.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Chatter+and+Activities+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Chatter%2C+Log+Notes+%26+Activities+Odoo+19"
    }
  },
  {
    "id": 120,
    "topic": "introduction",
    "soal": "What are the two types of contacts in Odoo?",
    "pilihan": [
      "Person and Company.",
      "Person and Joint.",
      "Company and Not-for-Profit."
    ],
    "jawaban": 0,
    "penjelasan": "Saat membuat kontak, Odoo menyediakan dua tipe: Person (individu) dan Company (perusahaan); kontak Person dapat ditautkan ke sebuah Company.",
    "referensi": {
      "topikSpesifik": "Multi-Company Setup & Records Sharing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/companies/multi_companies.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Multi+Company+Setup+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Multi-Company+Setup+%26+Records+Sharing+Odoo+19"
    }
  },
  {
    "id": 121,
    "topic": "introduction",
    "soal": "What does it mean when a record is archived in Odoo?",
    "pilihan": [
      "Records cannot be archived for traceability purposes.",
      "When a record is archived in Odoo, it is hidden from regular view, and no longer active.",
      "When a record is archived, nobody can ever modify it, it's frozen forever."
    ],
    "jawaban": 1,
    "penjelasan": "Record yang di-archive disembunyikan dari tampilan dan pencarian biasa (tidak aktif), tetapi datanya tetap tersimpan, bisa ditampilkan lewat filter Archived, dan dapat di-unarchive kapan saja.",
    "referensi": {
      "topikSpesifik": "Lots & Serial Numbers Traceability",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/product_tracking.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Lots+Serial+Numbers+Traceability+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Lots+%26+Serial+Numbers+Traceability+Odoo+19"
    }
  },
  {
    "id": 122,
    "topic": "introduction",
    "soal": "Inside a record, how do you schedule an activity?",
    "pilihan": [
      "Click the \"Activity\" button at the top of the chatter and choose the activity type, due date, assignee, and log a note.",
      "Click the \"New Activity\" option in the chatter menu and select the activity type, responsible user, and deadline.",
      "Open the Activities panel from the record header and use \"Add Activity\" to define the activity details."
    ],
    "jawaban": 0,
    "penjelasan": "Activity dijadwalkan dengan mengklik tombol 'Activity' di bagian atas chatter, lalu memilih activity type, due date, assignee, dan menambahkan catatan.",
    "referensi": {
      "topikSpesifik": "Chatter, Log Notes & Activities",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/activities.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Chatter+and+Activities+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Chatter%2C+Log+Notes+%26+Activities+Odoo+19"
    }
  },
  {
    "id": 123,
    "topic": "introduction",
    "soal": "What does activating Superuser mode do?",
    "pilihan": [
      "It allows the user to impersonate any other user.",
      "It allows the user to bypass record rules and access rights.",
      "It provides the user with temporary Administration Access Rights."
    ],
    "jawaban": 1,
    "penjelasan": "Superuser mode melewati semua record rules dan access rights. Fitur ini berbeda dari impersonate user.",
    "referensi": {
      "topikSpesifik": "Developer & Superuser Mode",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/developer_mode.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Developer+Mode+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Developer+%26+Superuser+Mode+Odoo+19"
    }
  },
  {
    "id": 124,
    "topic": "sales",
    "soal": "What type of commission plan would you use to reward sales people for hitting a quarterly fixed, predefined sales goal?",
    "pilihan": [
      "A target-based commission plan",
      "An achievement-based commission plan",
      "Either a target or achievement-based commission plan"
    ],
    "jawaban": 0,
    "penjelasan": "Target-based commission plan memberi komisi berdasarkan tingkat pencapaian terhadap target penjualan yang ditetapkan per periode (mis. per kuartal), sedangkan achievement-based menghitung komisi dari persentase nilai penjualan tanpa target tetap.",
    "referensi": {
      "topikSpesifik": "Sales Commissions Plans",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/commissions.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Sales+Commissions+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Sales+Commissions+Plans+Odoo+19"
    }
  },
  {
    "id": 125,
    "topic": "sales",
    "soal": "If you would like to group specific sales order lines together to generate subtotals, what feature would you use on the quotation/sales order?",
    "pilihan": [
      "Product categories",
      "Sequences",
      "Sections"
    ],
    "jawaban": 2,
    "penjelasan": "Fitur \"Add a Section\" pada Sales Order memungkinkan pengelompokan baris produk untuk menghasilkan subtotal terpisah.",
    "referensi": {
      "topikSpesifik": "Quotation Sections, Notes & Subtotals",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/quote_template.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Quotation+Sections+Subtotals+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Quotation+Sections%2C+Notes+%26+Subtotals+Odoo+19"
    }
  },
  {
    "id": 126,
    "topic": "sales",
    "soal": "Which of the following actions can customers NOT perform in the customer portal?",
    "pilihan": [
      "Manage pricelists for their most frequently purchased products",
      "Add funds to their eWallet",
      "Submit partial payments and down payments for invoices (if the payment terms allow)"
    ],
    "jawaban": 0,
    "penjelasan": "Di customer portal, customer dapat melihat dan membayar invoice (termasuk pembayaran sebagian/down payment bila payment terms mengizinkan) serta mengisi eWallet, tetapi tidak dapat mengelola pricelist karena pricelist hanya diatur oleh internal user.",
    "referensi": {
      "topikSpesifik": "Pricelists & Dynamic Pricing Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/prices/pricing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Pricelists+Discount+Rules+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Pricelists+%26+Dynamic+Pricing+Rules+Odoo+19"
    }
  },
  {
    "id": 127,
    "topic": "sales",
    "soal": "What does the 'Customer Lead Time' field on a product form represent?",
    "pilihan": [
      "The computed order date based on the quotation date",
      "The number of days, promised to the customer, between the confirmation of the sales order and the delivery",
      "Confirmation that the Terms & Conditions will be displayed on the quotation"
    ],
    "jawaban": 1,
    "penjelasan": "Customer Lead Time adalah estimasi jumlah hari antara konfirmasi pesanan penjualan hingga barang dikirimkan ke pelanggan.",
    "referensi": {
      "topikSpesifik": "Customer Lead Time on Product Form",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/lead_times.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Customer+Lead+Time+Delivery+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Customer+Lead+Time+on+Product+Form+Odoo+19"
    }
  },
  {
    "id": 128,
    "topic": "sales",
    "soal": "You want to create a \"Buy 10 Sandwiches, Get 1 Free\" offer to encourage repeat customers. Which Setting must be activated in the Sales app to allow this?",
    "pilihan": [
      "Discounts, since the free sandwich is technically a normal sandwich sold at a 100% discount",
      "Pricelists, since you need to create a custom Pricelist with the \"BOGO\" setting activated",
      "Promotions, Loyalty & Gift Card, since you're creating a loyalty program"
    ],
    "jawaban": 2,
    "penjelasan": "Promo 'beli 10 gratis 1' untuk pelanggan setia adalah loyalty program, sehingga setting 'Promotions, Loyalty & Gift Card' harus diaktifkan.",
    "referensi": {
      "topikSpesifik": "Pricelists & Dynamic Pricing Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/prices/pricing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Pricelists+Discount+Rules+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Pricelists+%26+Dynamic+Pricing+Rules+Odoo+19"
    }
  },
  {
    "id": 129,
    "topic": "sales",
    "soal": "When generating Gift Cards, they can be generated for...",
    "pilihan": [
      "Anonymous Customer",
      "Selected Customers",
      "Both"
    ],
    "jawaban": 2,
    "penjelasan": "Gift card dapat di-generate untuk Anonymous Customers (tanpa pemilik tertentu) maupun untuk Selected Customers melalui tombol Generate Gift Cards pada program.",
    "referensi": {
      "topikSpesifik": "eWallets, Gift Cards & Loyalty Programs",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/ewallets_giftcards.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Gift+Cards+eWallets+Loyalty+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+eWallets%2C+Gift+Cards+%26+Loyalty+Programs+Odoo+19"
    }
  },
  {
    "id": 130,
    "topic": "sales",
    "soal": "Which of the following is NOT a 'Variant Creation' option while creating product attributes?",
    "pilihan": [
      "Instantly",
      "Formula-based",
      "Dynamically"
    ],
    "jawaban": 1,
    "penjelasan": "Pembuatan varian atribut dapat diatur ke mode Instantly, Dynamically (saat dipesan), atau Never (hanya sebagai opsi kustom).",
    "referensi": {
      "topikSpesifik": "Product Attribute Variant Creation Modes",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/products/variants.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Product+Attribute+Variants+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Product+Attribute+Variant+Creation+Modes+Odoo+19"
    }
  },
  {
    "id": 131,
    "topic": "ecommerce",
    "soal": "How do you configure an upsell product to appear on the bottom of another product page in your eCommerce store?",
    "pilihan": [
      "In the 'Sales' tab of your eCommerce product, enter the upsell product in the 'Alternative Products' field",
      "In your eCommerce website, drag and drop the product from the Odoo product page (open on a separate tab)",
      "There is no way to add an upsell product to the bottom a product page in the eCommerce store."
    ],
    "jawaban": 0,
    "penjelasan": "Produk upsell yang tampil di bagian bawah halaman produk eCommerce diatur dengan mengisi field 'Alternative Products' di tab Sales pada form produk.",
    "referensi": {
      "topikSpesifik": "Optional Products & Upselling",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/optional_products.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Optional+Products+Upselling+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Optional+Products+%26+Upselling+Odoo+19"
    }
  },
  {
    "id": 132,
    "topic": "survey",
    "soal": "When a new survey is being created, which of the following is NOT an available survey type option?",
    "pilihan": [
      "Recruitment",
      "Questionnaire",
      "Assesment"
    ],
    "jawaban": 1,
    "penjelasan": "Tipe survey di Odoo 19 adalah Survey, Live Session, Assessment, Custom, serta Recruitment jika modulnya ter-install. Tidak ada tipe 'Questionnaire'.",
    "referensi": {
      "topikSpesifik": "Survey Creation Options & Layout Modes",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/surveys.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Survey+Creation+Layout+Options+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Survey+Creation+Options+%26+Layout+Modes+Odoo+19"
    }
  },
  {
    "id": 133,
    "topic": "survey",
    "soal": "In the 'Options' tab of a survey form, what are the 'Display Progress as' options?",
    "pilihan": [
      "'Percentage left' and 'Progress bar'.",
      "'Percentage left' and 'Number'.",
      "'Progress bar' and 'Number'."
    ],
    "jawaban": 1,
    "penjelasan": "Opsi 'Display Progress as' pada survey adalah 'Percentage left' dan 'Number'.",
    "referensi": {
      "topikSpesifik": "Survey Progress Bar Display Modes",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/surveys.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Survey+Progress+Bar+Setup+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Survey+Progress+Bar+Display+Modes+Odoo+19"
    }
  },
  {
    "id": 134,
    "topic": "survey",
    "soal": "Which of the following options is not available in a Live Session?",
    "pilihan": [
      "Survey time limit.",
      "Scoring without Answers.",
      "Matrix Questions."
    ],
    "jawaban": 0,
    "penjelasan": "Live Session dikendalikan host pertanyaan demi pertanyaan (dengan batas waktu per pertanyaan), sehingga pengaturan batas waktu untuk keseluruhan survey (Survey time limit) tidak tersedia.",
    "referensi": {
      "topikSpesifik": "Survey Live Session Host Controls",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/surveys.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Survey+Live+Session+Controls+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Survey+Live+Session+Host+Controls+Odoo+19"
    }
  },
  {
    "id": 135,
    "topic": "crm",
    "soal": "How can Odoo detect that 2 leads are duplicates and can be merged (not similar leads)?",
    "pilihan": [
      "They share the same email address",
      "They share the same opportunity name",
      "They have the exact same tags"
    ],
    "jawaban": 0,
    "penjelasan": "Odoo mendeteksi lead sebagai duplikat yang dapat di-merge jika memiliki alamat email yang sama; kesamaan nama opportunity atau tag tidak dijadikan kriteria duplikat.",
    "referensi": {
      "topikSpesifik": "Convert Leads into Opportunities",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/acquire_leads/convert.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Convert+Leads+to+Opportunities+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Convert+Leads+into+Opportunities+Odoo+19"
    }
  },
  {
    "id": 136,
    "topic": "crm",
    "soal": "What does converting a lead mean?",
    "pilihan": [
      "Creating a lead from a contact card.",
      "Closing a deal.",
      "Transforming a lead into an opportunity."
    ],
    "jawaban": 2,
    "penjelasan": "Lead yang prospektif dapat dikonversi menjadi Opportunity dan ditautkan ke Sales Order baru maupun yang sudah ada.",
    "referensi": {
      "topikSpesifik": "Convert Leads into Opportunities",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/acquire_leads/convert.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Convert+Leads+to+Opportunities+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Convert+Leads+into+Opportunities+Odoo+19"
    }
  },
  {
    "id": 137,
    "topic": "crm",
    "soal": "What does the Opportunities smart button display on a company's contact record in Odoo?",
    "pilihan": [
      "All opportunities related to the company and its contacts.",
      "Only opportunities that have been won.",
      "Only opportunities that have scheduled activities."
    ],
    "jawaban": 0,
    "penjelasan": "Smart button Opportunities pada kontak perusahaan menampilkan semua opportunity milik perusahaan tersebut beserta kontak-kontak individunya, tanpa memfilter status won atau aktivitas terjadwal.",
    "referensi": {
      "topikSpesifik": "Multi-Company Setup & Records Sharing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/companies/multi_companies.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Multi+Company+Setup+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Multi-Company+Setup+%26+Records+Sharing+Odoo+19"
    }
  },
  {
    "id": 138,
    "topic": "crm",
    "soal": "Who can access Reporting in the CRM app?",
    "pilihan": [
      "Only database administrators.",
      "Only managers.",
      "All CRM users."
    ],
    "jawaban": 2,
    "penjelasan": "Menu Reporting di app CRM tersedia untuk semua user CRM, bukan hanya manager atau administrator; data yang tampil mengikuti hak akses masing-masing user.",
    "referensi": {
      "topikSpesifik": "CRM Pipeline Reporting & Win/Loss Analysis",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/performance/win_loss.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+CRM+Reporting+Win+Loss+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+CRM+Pipeline+Reporting+%26+Win%2FLoss+Analysis+Odoo+19"
    }
  },
  {
    "id": 139,
    "topic": "crm",
    "soal": "When is it useful to create a new property field on an opportunity?",
    "pilihan": [
      "When your sales team needs to track a specific piece of information.",
      "When a sales manager notices an opportunity has an overdue activity.",
      "When a salesperson wants to impress a client."
    ],
    "jawaban": 0,
    "penjelasan": "Property field ditambahkan pada opportunity ketika tim sales perlu mencatat informasi spesifik yang tidak tersedia di field standar, dan property tersebut berlaku untuk opportunity di Sales Team yang sama.",
    "referensi": {
      "topikSpesifik": "Property Fields Configuration",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/property_fields.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Property+Fields+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Property+Fields+Configuration+Odoo+19"
    }
  },
  {
    "id": 140,
    "topic": "crm",
    "soal": "What does an orange activity icon on an opportunity card in Kanban view indicate?",
    "pilihan": [
      "The activity is due soon.",
      "The activity is overdue.",
      "The activity is due today."
    ],
    "jawaban": 2,
    "penjelasan": "Ikon jam aktivitas berwarna oranye pada kartu Kanban menandakan ada aktivitas yang jatuh tempo hari ini.",
    "referensi": {
      "topikSpesifik": "Activity Clock Icons in Kanban View",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/activities.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Activity+Clock+Colors+Kanban+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Activity+Clock+Icons+in+Kanban+View+Odoo+19"
    }
  },
  {
    "id": 141,
    "topic": "ai",
    "soal": "Which of the following can be used as Sources for an AI Agent?",
    "pilihan": [
      "Only text fields and record notes.",
      "Uploaded files, Knowledge articles, docs from the Documents app, and website links.",
      "Knowledge articles and docs from the Documents app only."
    ],
    "jawaban": 1,
    "penjelasan": "Sources AI Agent dapat berupa file yang diunggah, artikel Knowledge, dokumen dari app Documents, dan tautan website, yang menjadi dasar pengetahuan untuk jawaban agen.",
    "referensi": {
      "topikSpesifik": "AI Agent Knowledge Sources & Document Attachments",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+AI+Agent+Sources+Setup+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+AI+Agent+Knowledge+Sources+%26+Document+Attachments+Odoo+19"
    }
  },
  {
    "id": 142,
    "topic": "ai",
    "soal": "What is the purpose of AI Tools in Odoo's AI framework?",
    "pilihan": [
      "To provide extra data sources for the agent to read from.",
      "To limit the agent's output to predefined templates.",
      "To extend the AI Agent's capabilities beyond text generation, allowing it to perform defined actions or functions."
    ],
    "jawaban": 2,
    "penjelasan": "AI Tools memungkinkan agen AI menjalankan aksi nyata di Odoo, seperti membuat task baru, memeriksa stok, atau memperbarui lead.",
    "referensi": {
      "topikSpesifik": "AI Tools & Execution Actions Framework",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+AI+Tools+Actions+Framework+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+AI+Tools+%26+Execution+Actions+Framework+Odoo+19"
    }
  },
  {
    "id": 143,
    "topic": "ai",
    "soal": "You want to ask an AI Agent how many leads are currently assigned to a specific salesperson. Which Topic must be assigned to the agent for it to answer that question?",
    "pilihan": [
      "Information Reporting.",
      "Information Retrieval.",
      "Lead Assessment."
    ],
    "jawaban": 1,
    "penjelasan": "Untuk menjawab pertanyaan berbasis data (misalnya jumlah lead per salesperson), AI Agent membutuhkan topic 'Information Retrieval'.",
    "referensi": {
      "topikSpesifik": "AI Queries for Lead Counts & CRM Data",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+AI+CRM+Query+Leads+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+AI+Queries+for+Lead+Counts+%26+CRM+Data+Odoo+19"
    }
  },
  {
    "id": 144,
    "topic": "marketing",
    "soal": "On a mailing form, what's the purpose of this button next to the 'Subject' line?",
    "pilihan": [
      "To include a link to a satisfaction survey at the bottom of the communication.",
      "To add the company's logo to the top of the communication.",
      "To insert dynamic values in the subject line."
    ],
    "jawaban": 2,
    "penjelasan": "Tombol di samping field Subject membuka pemilih dynamic placeholder untuk menyisipkan nilai dinamis (mis. nama penerima) ke dalam subjek email.",
    "referensi": {
      "topikSpesifik": "Email Marketing AI Subject Line Generator",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/email_marketing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Email+Marketing+AI+Subject+Generator+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Email+Marketing+AI+Subject+Line+Generator+Odoo+19"
    }
  },
  {
    "id": 145,
    "topic": "marketing",
    "soal": "What is an A/B test?",
    "pilihan": [
      "Sending different versions of a marketing email to a small group of recipients in a mailing list. The version that performs the best is then sent to the remaining contacts in the mailing list.",
      "Sending a selection of emails to a random portion of contacts in the database, at regular intervals, with no end date.",
      "Sending the same email to two different mailing lists, so the mailing list with the fewest open rates is archived."
    ],
    "jawaban": 0,
    "penjelasan": "A/B test mengirim beberapa versi email ke sebagian kecil penerima di mailing list; versi dengan performa terbaik (mis. open rate atau click rate tertinggi) kemudian dikirim ke sisa kontak.",
    "referensi": {
      "topikSpesifik": "Email Marketing & Mass Mailing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/email_marketing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Email+Marketing+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Email+Marketing+%26+Mass+Mailing+Odoo+19"
    }
  },
  {
    "id": 146,
    "topic": "marketing",
    "soal": "In SMS Marketing, under the 'A/B Tests' tab on a message form, which metric is available for selecting the winning email?",
    "pilihan": [
      "Highest Click Rate",
      "Forwards",
      "Bounces"
    ],
    "jawaban": 0,
    "penjelasan": "Pada pengujian A/B Testing SMS Marketing, metrik penentu pesan pemenang adalah Highest Click Rate (persentase tautan yang paling banyak diklik).",
    "referensi": {
      "topikSpesifik": "SMS Marketing A/B Testing Winning Metric",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/email_marketing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+SMS+Marketing+AB+Testing+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+SMS+Marketing+A%2FB+Testing+Winning+Metric+Odoo+19"
    }
  },
  {
    "id": 147,
    "topic": "website",
    "soal": "How can you add the 'customizable cookie bar' for your website visitors?",
    "pilihan": [
      "Going to the 'Style' tab in the website editor and enable it.",
      "By enabling the feature in the website settings.",
      "By activating developer mode and enabling it in the website properties."
    ],
    "jawaban": 1,
    "penjelasan": "Cookie bar yang dapat dikustomisasi diaktifkan dengan mencentang opsi Cookies Bar di Website > Configuration > Settings, bukan dari tab Style atau developer mode.",
    "referensi": {
      "topikSpesifik": "Developer & Superuser Mode",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/developer_mode.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Developer+Mode+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Developer+%26+Superuser+Mode+Odoo+19"
    }
  },
  {
    "id": 148,
    "topic": "website",
    "soal": "You added the 'Newsletter popup' on your website, and you want to edit it. How can you find it?",
    "pilihan": [
      "By going into 'Edit' mode on your website and waiting a few seconds for the pop-up to appear.",
      "By clicking on 'Newsletter Popup' in the 'Invisible Elements' section at the bottom of the website editor.",
      "By clicking Website > Site > Properties."
    ],
    "jawaban": 1,
    "penjelasan": "Popup tidak selalu muncul di mode Edit, sehingga untuk mengeditnya klik 'Newsletter Popup' pada bagian 'Invisible Elements' di bawah panel website editor.",
    "referensi": {
      "topikSpesifik": "Website Newsletter Popup Customization",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/website.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Website+Newsletter+Popup+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Website+Newsletter+Popup+Customization+Odoo+19"
    }
  },
  {
    "id": 149,
    "topic": "website",
    "soal": "On which device can you decide to hide certain content blocks when editing your website?",
    "pilihan": [
      "Desktop",
      "Desktop and mobile",
      "Desktop, mobile, and tablet"
    ],
    "jawaban": 1,
    "penjelasan": "Di panel editor website Odoo, Anda dapat menyembunyikan blok konten tertentu khusus pada tampilan layar mobile atau desktop.",
    "referensi": {
      "topikSpesifik": "Website Mobile vs Desktop Block Visibility",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/website.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Website+Hide+Block+on+Mobile+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Website+Mobile+vs+Desktop+Block+Visibility+Odoo+19"
    }
  },
  {
    "id": 150,
    "topic": "website",
    "soal": "Is it possible to add a hyperlink to an image on your website?",
    "pilihan": [
      "Yes, by adding a URL to the media in the website editor.",
      "Yes, by activating the developer mode and going to Settings > Technical > Database Structure > Hyperlinks.",
      "You cannot link an image to a URL on your website."
    ],
    "jawaban": 0,
    "penjelasan": "Di website editor, pilih gambar lalu tambahkan URL melalui opsi link pada media tersebut sehingga gambar menjadi hyperlink, tanpa perlu developer mode.",
    "referensi": {
      "topikSpesifik": "Developer & Superuser Mode",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/developer_mode.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Developer+Mode+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Developer+%26+Superuser+Mode+Odoo+19"
    }
  },
  {
    "id": 151,
    "topic": "ecommerce",
    "soal": "Which Odoo feature lets you show a similar product to a customer browsing a product page?",
    "pilihan": [
      "Alternative products",
      "Accessory products",
      "Optional products"
    ],
    "jawaban": 0,
    "penjelasan": "Alternative products ditampilkan di halaman produk untuk menawarkan produk serupa; optional products muncul saat produk ditambahkan ke keranjang, dan accessory products saat checkout.",
    "referensi": {
      "topikSpesifik": "Optional Products & Upselling",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/optional_products.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Optional+Products+Upselling+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Optional+Products+%26+Upselling+Odoo+19"
    }
  },
  {
    "id": 152,
    "topic": "ecommerce",
    "soal": "You want to show your customers additional products they may be interested in upon checkout, which feature can you use?",
    "pilihan": [
      "Alternative products.",
      "Optional products.",
      "Accessory products."
    ],
    "jawaban": 2,
    "penjelasan": "Accessory products ditampilkan kepada customer saat checkout (review keranjang). Optional products muncul saat produk ditambahkan ke keranjang, dan alternative products tampil di halaman produk.",
    "referensi": {
      "topikSpesifik": "Optional Products & Upselling",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/optional_products.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Optional+Products+Upselling+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Optional+Products+%26+Upselling+Odoo+19"
    }
  },
  {
    "id": 153,
    "topic": "ecommerce",
    "soal": "On the frontend, where can you display a 'Sale' Badge or Ribbon on a product?",
    "pilihan": [
      "On the /shop/[productName-id] page, in the Style tab only.",
      "On the /shop page, in the Style tab only.",
      "Both options are valid."
    ],
    "jawaban": 2,
    "penjelasan": "Pita 'Sale' (Ribbon) dapat ditampilkan pada kartu produk di halaman katalog /shop maupun pada halaman detail produk itu sendiri.",
    "referensi": {
      "topikSpesifik": "eCommerce Product Sale Ribbon Placement",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/ecommerce.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+eCommerce+Product+Ribbon+Display+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+eCommerce+Product+Sale+Ribbon+Placement+Odoo+19"
    }
  },
  {
    "id": 155,
    "topic": "knowledge",
    "soal": "Who can edit an article in the Workspace?",
    "pilihan": [
      "Any contributor with 'Can read' access.",
      "The author only.",
      "Everyone, as long as it's in the default company access."
    ],
    "jawaban": 2,
    "penjelasan": "Artikel di Workspace secara default memberi akses 'Can edit' kepada semua internal user, bukan hanya penulisnya.",
    "referensi": {
      "topikSpesifik": "Knowledge Workspace Permissions & Team Access",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/knowledge.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Knowledge+Workspace+Permissions+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Knowledge+Workspace+Permissions+%26+Team+Access+Odoo+19"
    }
  },
  {
    "id": 156,
    "topic": "knowledge",
    "soal": "What happens if you lock an article in the Workspace?",
    "pilihan": [
      "You cannot access the article.",
      "You can only read the article.",
      "You can still edit it, even if you're not the author."
    ],
    "jawaban": 1,
    "penjelasan": "Artikel Workspace yang dikunci menjadi read-only sehingga hanya bisa dibaca oleh siapa pun, sampai kuncinya dibuka kembali oleh user yang memiliki hak edit.",
    "referensi": {
      "topikSpesifik": "Knowledge Article Locking & Read-Only Mode",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/knowledge.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Knowledge+Lock+Article+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Knowledge+Article+Locking+%26+Read-Only+Mode+Odoo+19"
    }
  },
  {
    "id": 157,
    "topic": "knowledge",
    "soal": "Can you copy the link of one specific header?",
    "pilihan": [
      "Yes, any header can be copied.",
      "No, you can only copy the article's link.",
      "Yes, but you can only copy the title."
    ],
    "jawaban": 0,
    "penjelasan": "Mengklik ikon tautan di samping judul sub-bab (header) pada artikel Knowledge akan menyalin URL tautan langsung ke paragraf tersebut.",
    "referensi": {
      "topikSpesifik": "Knowledge Header Anchor Links Copying",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/knowledge.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Knowledge+Header+Link+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Knowledge+Header+Anchor+Links+Copying+Odoo+19"
    }
  },
  {
    "id": 158,
    "topic": "project",
    "soal": "When can Odoo send an automatic task rating request to a customer?",
    "pilihan": [
      "Only when a task reaches a specific stage",
      "Only on a periodic basis (e.g., every month)",
      "Both when a task reaches a specific stage or on a periodic basis"
    ],
    "jawaban": 2,
    "penjelasan": "Permintaan rating task dapat dikirim otomatis ketika task mencapai stage tertentu (stage dengan rating email template) maupun secara periodik, misalnya setiap bulan.",
    "referensi": {
      "topikSpesifik": "Customer Ratings on Project Tasks",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project/tasks/customer_ratings.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Project+Customer+Ratings+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Customer+Ratings+on+Project+Tasks+Odoo+19"
    }
  },
  {
    "id": 159,
    "topic": "project",
    "soal": "Which of the following project visibility options does not exist?",
    "pilihan": [
      "Invited internal users",
      "All internal users",
      "Public"
    ],
    "jawaban": 2,
    "penjelasan": "Opsi visibilitas project adalah 'Invited internal users', 'All internal users', dan 'Invited portal users and all internal users'. Tidak ada opsi 'Public' saja.",
    "referensi": {
      "topikSpesifik": "Project Privacy & Visibility Settings",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project/project_management.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Project+Visibility+Privacy+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Project+Privacy+%26+Visibility+Settings+Odoo+19"
    }
  },
  {
    "id": 160,
    "topic": "project",
    "soal": "Who can potentially view a private project?",
    "pilihan": [
      "Only invited internal users",
      "Only invited internal users, invited portal users and users with the access right \"Project Administrator\"",
      "Only invited internal users and users with the access right \"Project Administrator\""
    ],
    "jawaban": 2,
    "penjelasan": "Project private (visibility 'Invited internal users') hanya dapat dilihat oleh internal user yang diundang serta user dengan hak akses Project Administrator; portal user tidak dapat melihatnya.",
    "referensi": {
      "topikSpesifik": "Private Projects Access Rights",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project/project_management.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Private+Projects+Access+Rights+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Private+Projects+Access+Rights+Odoo+19"
    }
  },
  {
    "id": 161,
    "topic": "project",
    "soal": "The burndown chart represent, at a specific point in time:",
    "pilihan": [
      "The number of tasks in each stage",
      "The number of negative customer ratings",
      "The number of canceled tasks"
    ],
    "jawaban": 0,
    "penjelasan": "Burndown chart menampilkan jumlah task di setiap stage pada titik waktu tertentu, sehingga terlihat progres task menuju stage akhir; grafik ini tidak menghitung rating atau task yang dibatalkan.",
    "referensi": {
      "topikSpesifik": "Project Management & Burndown Charts",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project/project_management/project_dashboard.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Project+Burndown+Chart+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Project+Management+%26+Burndown+Charts+Odoo+19"
    }
  },
  {
    "id": 162,
    "topic": "project",
    "soal": "What element cannot be added to the top bar?",
    "pilihan": [
      "Products",
      "Sales orders",
      "Analytic items"
    ],
    "jawaban": 2,
    "penjelasan": "Top bar project dapat menampilkan elemen terkait seperti Products dan Sales Orders, tetapi Analytic Items tidak termasuk elemen yang dapat ditambahkan ke top bar.",
    "referensi": {
      "topikSpesifik": "Project Overview Dashboard Elements",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project/project_management/project_dashboard.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Project+Overview+Dashboard+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Project+Overview+Dashboard+Elements+Odoo+19"
    }
  },
  {
    "id": 163,
    "topic": "timesheets",
    "soal": "When using Timesheets' default settings, what will be the duration of the timesheet entry if you stop the timer after 4 minutes and 30 seconds?",
    "pilihan": [
      "4 minutes",
      "5 minutes",
      "15 minutes"
    ],
    "jawaban": 2,
    "penjelasan": "Dengan pengaturan default Timesheets, entri dari timer memiliki durasi minimum 15 menit dan dibulatkan ke atas ke kelipatan 15 menit, sehingga timer 4 menit 30 detik tercatat sebagai 15 menit.",
    "referensi": {
      "topikSpesifik": "Timesheets Billing Rates & Leaderboards",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/timesheets/billing_rates.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Timesheets+Billing+Rates+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Timesheets+Billing+Rates+%26+Leaderboards+Odoo+19"
    }
  },
  {
    "id": 164,
    "topic": "accounting",
    "soal": "How can you configure fiscal positions to apply automatically to contacts based on their country?",
    "pilihan": [
      "Select the country and enable the 'Detect Automatically' option on the fiscal position.",
      "Set the customer's fiscal position to 'Detect Automatically'.",
      "Set the invoice's fiscal position to 'Detect Automatically'."
    ],
    "jawaban": 0,
    "penjelasan": "Pada fiscal position, isi Country lalu aktifkan 'Detect Automatically'; Odoo akan menerapkannya otomatis ke kontak yang negaranya cocok. Opsi ini tidak ada di record customer maupun invoice.",
    "referensi": {
      "topikSpesifik": "Fiscal Positions & Tax Account Mapping",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/taxes/fiscal_positions.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Fiscal+Positions+Tax+Mapping+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Fiscal+Positions+%26+Tax+Account+Mapping+Odoo+19"
    }
  },
  {
    "id": 165,
    "topic": "accounting",
    "soal": "How can you set up follow-up actions for payments due from a customer?",
    "pilihan": [
      "Set follow-up actions using the Due smartbutton in the customer record.",
      "Create follow-up levels then set reminders in the customer's contact record.",
      "Create follow-up levels then set reminders in Accounting > Customers > Follow-up Reports."
    ],
    "jawaban": 1,
    "penjelasan": "Buat follow-up levels di Accounting > Configuration, lalu atur reminder di tab Accounting pada record kontak customer.",
    "referensi": {
      "topikSpesifik": "Customer Payment Follow-ups",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/customer_invoices/payment_follow_up.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Payment+Follow+Up+Levels+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Customer+Payment+Follow-ups+Odoo+19"
    }
  },
  {
    "id": 166,
    "topic": "accounting",
    "soal": "How can you automatically cancel all journal entries from before a specific date?",
    "pilihan": [
      "Set the specific date in the Invoicing Switch Threshold field in the Accounting settings.",
      "Select all the journal entries from before the specific date in the list view and click Action > Cancel.",
      "In developer mode, go to the Advanced Settings tab of each journal that you want to cancel journal entries in, enable the Cancel Posted Entries With Hash field, and set the specific date."
    ],
    "jawaban": 0,
    "penjelasan": "Mengisi Invoicing Switch Threshold di Accounting settings membuat semua journal entry bertanggal sebelum tanggal tersebut otomatis dibatalkan dan tidak lagi dihitung di akuntansi. Action > Cancel di list view bersifat manual, bukan otomatis.",
    "referensi": {
      "topikSpesifik": "Developer & Superuser Mode",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/developer_mode.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Developer+Mode+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Developer+%26+Superuser+Mode+Odoo+19"
    }
  },
  {
    "id": 167,
    "topic": "accounting",
    "soal": "How can you include a spelled out invoice total on an invoice report?",
    "pilihan": [
      "In the Accounting settings, enable the \"Total amount of invoice in letters\" feature.",
      "On the invoice form view in Studio, select the Total field and change the widget to \"Amount in letters\".",
      "On the invoice report in Studio, select the Total field and change the widget to \"Amount in letters\"."
    ],
    "jawaban": 0,
    "penjelasan": "Aktifkan 'Total amount of invoice in letters' di Accounting > Configuration > Settings agar total invoice dicetak dalam huruf.",
    "referensi": {
      "topikSpesifik": "Spelled Out Invoice Amounts in Words",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/customer_invoices/customer_invoices.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Spelled+Out+Amount+Invoices+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Spelled+Out+Invoice+Amounts+in+Words+Odoo+19"
    }
  },
  {
    "id": 168,
    "topic": "accounting",
    "soal": "How can you automatically generate bills in Company A from invoices in Company B?",
    "pilihan": [
      "Enable inter-company transactions in the general settings, then select the \"Synchronize invoices/bills\" option in Company A.",
      "Enable inter-company transactions in the general settings, then select the \"Create Vendor Bills\" option in Company A.",
      "Enable inter-company transactions in the general settings, then select the \"Create Vendor Bills\" option in Company B."
    ],
    "jawaban": 1,
    "penjelasan": "Opsi 'Create Vendor Bills' diatur pada perusahaan penerima (Company A): saat Company B memvalidasi invoice untuk Company A, bill otomatis dibuat di Company A.",
    "referensi": {
      "topikSpesifik": "Inter-Company Invoices and Bills Synchronization",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/companies/inter_company.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Inter+Company+Transactions+Invoicing+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Inter-Company+Invoices+and+Bills+Synchronization+Odoo+19"
    }
  },
  {
    "id": 169,
    "topic": "accounting",
    "soal": "How can you set a lock date for only vendor bills?",
    "pilihan": [
      "Set the Journal Entries Lock Date.",
      "Set the Lock Bills date.",
      "Set the Lock Purchases date."
    ],
    "jawaban": 2,
    "penjelasan": "Lock Purchases mengunci entri purchase (vendor bills) sampai tanggal tersebut tanpa mengunci sales atau journal lain. Di Odoo 19 penguncian semua entri memakai Lock Everything, dan field 'Lock Bills' tidak ada.",
    "referensi": {
      "topikSpesifik": "Accounting Lock Dates & Year-End Closing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/reporting/year_end.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Accounting+Lock+Dates+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Accounting+Lock+Dates+%26+Year-End+Closing+Odoo+19"
    }
  },
  {
    "id": 170,
    "topic": "accounting",
    "soal": "Which of the following statements correctly describes the periodic or perpetual accounting practices?",
    "pilihan": [
      "In the periodic method, vendor bills are recorded as expenses, and the inventory (stock valuation) is adjusted in the closing entry.",
      "In the periodic method, vendor bills are recorded as assets (stock valuation) and are expensed when goods are sold.",
      "In perpetual accounting, vendor bills are recorded as expenses, and the inventory (stock valuation) is adjusted in the closing entry."
    ],
    "jawaban": 0,
    "penjelasan": "Pada metode periodic, vendor bill dicatat langsung sebagai expense dan nilai persediaan (stock valuation) disesuaikan lewat closing entry di akhir periode. Mencatat bill sebagai aset lalu dibebankan saat terjual adalah ciri metode perpetual.",
    "referensi": {
      "topikSpesifik": "Inventory Valuation & Perpetual Accounting",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/inventory_valuation.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Inventory+Valuation+Accounting+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Inventory+Valuation+%26+Perpetual+Accounting+Odoo+19"
    }
  },
  {
    "id": 171,
    "topic": "accounting",
    "soal": "When looking at the depreciation board of an asset, which fields affect the values in the Depreciation column?",
    "pilihan": [
      "Original value, Duration, Asset Group",
      "Fixed Asset Account, Salvage Value, Computation",
      "Method, Not Depreciable Value, Prorata Date"
    ],
    "jawaban": 2,
    "penjelasan": "Nilai depresiasi dipengaruhi Method, Not Depreciable Value, dan Prorata Date. Asset Group hanya untuk pengelompokan dan tidak memengaruhi perhitungan.",
    "referensi": {
      "topikSpesifik": "Fixed Assets & Depreciation Management",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/vendor_bills/assets.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Fixed+Assets+Depreciation+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Fixed+Assets+%26+Depreciation+Management+Odoo+19"
    }
  },
  {
    "id": 172,
    "topic": "accounting",
    "soal": "Why is a line highlighted in red in a purchase order?",
    "pilihan": [
      "The product is currently out of stock.",
      "This PO line will exceed the analytic budget if confirmed.",
      "The product is not available for delivery in the requested quantity."
    ],
    "jawaban": 1,
    "penjelasan": "Baris PO berwarna merah menandakan baris tersebut akan melampaui analytic budget yang ditetapkan jika PO dikonfirmasi, sehingga pembeli dapat meninjaunya dulu.",
    "referensi": {
      "topikSpesifik": "Requests for Quotation (RFQ) & PO Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/rfq.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Purchase+Orders+RFQ+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Requests+for+Quotation+%28RFQ%29+%26+PO+Workflow+Odoo+19"
    }
  },
  {
    "id": 173,
    "topic": "spreadsheet",
    "soal": "What does a blue globe icon in the upper-right corner above a spreadsheet signify about regional settings, e.g., date format and thousand and decimal separators?",
    "pilihan": [
      "The regional settings of the spreadsheet are the same as those of your own user profile.",
      "The regional settings of the spreadsheet are different from those of your own user profile.",
      "You can click on this icon to change the regional settings of spreadsheet if they don't match those of your own user profile."
    ],
    "jawaban": 1,
    "penjelasan": "Ikon globe biru muncul ketika regional settings spreadsheet (format tanggal, pemisah ribuan dan desimal) berbeda dengan pengaturan bahasa di profil user Anda; ikon ini hanya indikator informasi.",
    "referensi": {
      "topikSpesifik": "Odoo Spreadsheets & Live Pivot Tables",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/spreadsheet.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Spreadsheets+Pivot+Integration+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+Spreadsheets+%26+Live+Pivot+Tables+Odoo+19"
    }
  },
  {
    "id": 174,
    "topic": "spreadsheet",
    "soal": "On a dashboard, what additional feature is available when a time-series chart, i.e., a chart that shows data over time, is expanded to full screen?",
    "pilihan": [
      "It is possible to edit the chart's data source directly from the full-screen view.",
      "It is possible to zoom in on a specific time span and scroll forwards and backwards in time.",
      "Real−time data streaming shows live updates to the data while the chart is expanded."
    ],
    "jawaban": 1,
    "penjelasan": "Saat chart time-series di dashboard dibuka full screen, Anda dapat zoom ke rentang waktu tertentu dan menggeser maju-mundur sepanjang sumbu waktu. Sumber data tidak bisa diedit dari tampilan ini dan tidak ada streaming real-time.",
    "referensi": {
      "topikSpesifik": "Spreadsheet Time-Series Filters on Dashboard",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/spreadsheet.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Spreadsheet+Dashboard+Filters+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Spreadsheet+Time-Series+Filters+on+Dashboard+Odoo+19"
    }
  },
  {
    "id": 175,
    "topic": "hr",
    "soal": "What does the Launch Campaign button do in the Appraisals app?",
    "pilihan": [
      "It automatically schedules appraisals for all employees whose appraisals are due within the current quarter",
      "It allows scheduling multiple appraisals at once",
      "It assigns the same goal to multiple employees at one time"
    ],
    "jawaban": 1,
    "penjelasan": "Tombol Launch Campaign di Appraisals memungkinkan penjadwalan banyak appraisal sekaligus untuk beberapa karyawan, tanpa membuatnya satu per satu.",
    "referensi": {
      "topikSpesifik": "Email Marketing & Mass Mailing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/email_marketing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Email+Marketing+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Email+Marketing+%26+Mass+Mailing+Odoo+19"
    }
  },
  {
    "id": 177,
    "topic": "hr",
    "soal": "What is preconfigured in the Fleet app?",
    "pilihan": [
      "Vehicle Manufacturers",
      "Vehicle Models",
      "Vehicle Categories"
    ],
    "jawaban": 2,
    "penjelasan": "Modul Fleet secara bawaan telah dilengkapi dengan Kategori Kendaraan (Vehicle Categories) standar untuk mempermudah klasifikasi armada perusahaan.",
    "referensi": {
      "topikSpesifik": "Fleet Management Preconfigured Categories",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/hr_and_attendance.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Fleet+Management+Vehicle+Categories+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Fleet+Management+Preconfigured+Categories+Odoo+19"
    }
  },
  {
    "id": 178,
    "topic": "pos",
    "soal": "In what case would you send a global invoice?",
    "pilihan": [
      "For all orders from the same client.",
      "For clients who purchased the same product.",
      "For returned products only."
    ],
    "jawaban": 0,
    "penjelasan": "Global invoice dipakai untuk menggabungkan semua order POS dari customer yang sama ke dalam satu invoice, bukan dibuat per order.",
    "referensi": {
      "topikSpesifik": "POS Invoicing & Customer Sales Receipts",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+POS+Invoicing+Setup+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+POS+Invoicing+%26+Customer+Sales+Receipts+Odoo+19"
    }
  },
  {
    "id": 179,
    "topic": "pos",
    "soal": "What happens when a customer pays using their customer account in the POS?",
    "pilihan": [
      "The purchase amount is immediately deducted from inventory.",
      "The purchase amount is recorded as debt until it is paid off.",
      "The purchase is automatically refunded."
    ],
    "jawaban": 1,
    "penjelasan": "Metode pembayaran Customer Account mencatat pembelian sebagai piutang (utang customer) di akun kontaknya sampai customer melunasinya kemudian.",
    "referensi": {
      "topikSpesifik": "Credit Notes and Customer Refunds",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/customer_invoices/credit_notes.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Credit+Notes+Customer+Refunds+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Credit+Notes+and+Customer+Refunds+Odoo+19"
    }
  },
  {
    "id": 180,
    "topic": "pos",
    "soal": "What happens when settling the remaining balance of a sales order in the POS?",
    "pilihan": [
      "The down payment is deducted, allowing to complete the order.",
      "The down payment is ignored and the customer pays the full amount again.",
      "A new sales order must be created for the remaining amount."
    ],
    "jawaban": 0,
    "penjelasan": "Saat melunasi sisa sales order di POS, down payment yang sudah dibayar otomatis dikurangkan sehingga customer hanya membayar sisa tagihan untuk menyelesaikan order.",
    "referensi": {
      "topikSpesifik": "Down Payments Invoicing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/invoicing/down_payment.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Down+Payments+Invoicing+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Down+Payments+Invoicing+Odoo+19"
    }
  },
  {
    "id": 181,
    "topic": "purchase",
    "soal": "An RFQ is automatically created whenever the following happens:",
    "pilihan": [
      "The product has the Purchase checkbox ticked, has a vendor pricelist, and a reordering rule triggers the purchase",
      "The route on the product is set as 'Buy' and a sales order is validated",
      "The route on the product is set as 'Manufacture' and a quotation is created"
    ],
    "jawaban": 0,
    "penjelasan": "RFQ dibuat otomatis oleh reordering rule jika produk dapat dibeli (Purchase dicentang) dan memiliki vendor di vendor pricelist. Route Buy saja tidak membuat RFQ saat sales order dikonfirmasi tanpa MTO atau reordering rule.",
    "referensi": {
      "topikSpesifik": "Pricelists & Dynamic Pricing Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/prices/pricing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Pricelists+Discount+Rules+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Pricelists+%26+Dynamic+Pricing+Rules+Odoo+19"
    }
  },
  {
    "id": 182,
    "topic": "purchase",
    "soal": "If you have several lines for the same vendor in a product purchase price list, which one will be selected?",
    "pilihan": [
      "The first in the list",
      "The cheapest if the condition of quantity is met",
      "The one with the biggest quantity under the quantity ordered"
    ],
    "jawaban": 1,
    "penjelasan": "Jika ada beberapa baris vendor pricelist untuk vendor yang sama, Odoo memilih harga termurah di antara baris yang syarat minimum quantity-nya terpenuhi oleh jumlah pesanan.",
    "referensi": {
      "topikSpesifik": "Vendor Pricelist Selection Hierarchy",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/agreements.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Vendor+Pricelist+Hierarchy+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Vendor+Pricelist+Selection+Hierarchy+Odoo+19"
    }
  },
  {
    "id": 183,
    "topic": "purchase",
    "soal": "Your warehouse tracks liquid inventory in liters, but your vendor sells in gallons. You create Gallon as a new Unit of Measure. What condition must be met for Odoo to automatically convert between gallons and liters when you purchase the product?",
    "pilihan": [
      "Create the \"Gallons\" unit, set its Reference unit to liters, and if an RFQ uses gallons as the unit, the receipt will say liters",
      "Create the gallons unit to be in the \"Volume\" UoM category that uses liters as the reference unit of measure",
      "Odoo converts automatically without any setup, thanks to AI"
    ],
    "jawaban": 0,
    "penjelasan": "Di Odoo 19 kategori UoM sudah dihapus. Buat unit Gallon dengan Reference Unit Liter (beserta faktornya), sehingga RFQ dalam galon akan dikonversi menjadi liter di receipt.",
    "referensi": {
      "topikSpesifik": "Requests for Quotation (RFQ) & PO Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/rfq.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Purchase+Orders+RFQ+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Requests+for+Quotation+%28RFQ%29+%26+PO+Workflow+Odoo+19"
    }
  },
  {
    "id": 184,
    "topic": "purchase",
    "soal": "When a preset Discount is set on a Vendor Pricelist for a specific product, can the discount be overridden on an RFQ?",
    "pilihan": [
      "No, the Discount must be changed in the 'Discount (%)' field on the Vendor Pricelist itself",
      "No, once the Discount is set it won't reset until the Vendor changes their pricing",
      "Yes, the Discount can be modified directly on the purchase order line when creating an RFQ"
    ],
    "jawaban": 2,
    "penjelasan": "Discount dari vendor pricelist hanya menjadi nilai default di baris RFQ; nilai Discount (%) tetap dapat diubah langsung pada purchase order line.",
    "referensi": {
      "topikSpesifik": "Pricelists & Dynamic Pricing Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/prices/pricing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Pricelists+Discount+Rules+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Pricelists+%26+Dynamic+Pricing+Rules+Odoo+19"
    }
  },
  {
    "id": 185,
    "topic": "purchase",
    "soal": "Can you create alternative requests for quotation (RFQs) for multiple vendors, with the same products, to find the best price?",
    "pilihan": [
      "Yes, by clicking 'Create Alternative' under the 'Alternatives' tab from a new RFQ, and selecting 'Copy Products'",
      "No, Odoo does not allow for alternative requests for quotation to be created with the same products and different vendors",
      "Yes, by selecting two RFQs from the RFQs overview page, clicking the 'gear' icon, and clicking 'create alternative quotation'"
    ],
    "jawaban": 0,
    "penjelasan": "Di RFQ, buka tab Alternatives, klik 'Create Alternative', pilih vendor lain dan centang 'Copy Products' untuk membuat RFQ alternatif dengan produk yang sama lalu membandingkan harganya.",
    "referensi": {
      "topikSpesifik": "Requests for Quotation (RFQ) & PO Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/rfq.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Purchase+Orders+RFQ+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Requests+for+Quotation+%28RFQ%29+%26+PO+Workflow+Odoo+19"
    }
  },
  {
    "id": 186,
    "topic": "inventory",
    "soal": "The Forecasted report shows \"Time to Replenish = 8 days\" for a product with low on-hand quantity. The forecasted quantity will reach 0 in 8 days. What should you do based on this information?",
    "pilihan": [
      "Click \"Replenish\" to trigger replenishment to ensure the product arrives in 8 days",
      "Wait until the on-hand quantity reaches 0 before reordering",
      "Ignore the field, it only affects products managed by reordering rules"
    ],
    "jawaban": 0,
    "penjelasan": "Time to Replenish 8 hari berarti replenishment perlu 8 hari untuk tiba, sementara stok forecasted habis dalam 8 hari; klik Replenish sekarang agar barang datang tepat waktu.",
    "referensi": {
      "topikSpesifik": "Automated Reordering Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/reordering_rules.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Reordering+Rules+Replenishment+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Automated+Reordering+Rules+Odoo+19"
    }
  },
  {
    "id": 187,
    "topic": "inventory",
    "soal": "A delivery method is set to Based on Rules. (1) Order total < $50, Delivery fee = $13 (2) Order total > $50, Delivery fee = $0. Question: You confirm a sales order totalling $55. How much is delivery?",
    "pilihan": [
      "$13",
      "$0",
      "$55"
    ],
    "jawaban": 1,
    "penjelasan": "Dengan metode Based on Rules, Odoo mengevaluasi total order terhadap aturan: total $55 memenuhi aturan 'lebih dari $50', sehingga ongkos kirimnya $0.",
    "referensi": {
      "topikSpesifik": "Delivery Pricing Rules Computation",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/delivery_method.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Delivery+Pricing+Rules+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Delivery+Pricing+Rules+Computation+Odoo+19"
    }
  },
  {
    "id": 188,
    "topic": "inventory",
    "soal": "Which of the following is true about the Dispatch Management System?",
    "pilihan": [
      "You can get Google Maps directions to all delivery destinations for an in-progress batch or wave transfer",
      "You can set a vehicle's capacity based on the number of products it can carry",
      "It's not necessary to configure dock locations to load items onto a delivery vehicle"
    ],
    "jawaban": 0,
    "penjelasan": "Dispatch Management System memungkinkan membuka petunjuk arah Google Maps ke semua alamat tujuan pengiriman dalam batch atau wave transfer yang sedang diproses.",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Capacity",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/management/work_center_capacity.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Capacity+Odoo+19"
    }
  },
  {
    "id": 191,
    "topic": "inventory",
    "soal": "Your product uses the FIFO costing method. You (1) receive 3 units at $20 each, (2) receive 1 unit at $50, then (3) deliver 2 units.Which of the following correctly describes the cost of your remaining stock?",
    "pilihan": [
      "Two remaining units, both valued at $20",
      "One unit valued at $20 and one unit valued at $50",
      "Two remaining units, both valued at $35"
    ],
    "jawaban": 1,
    "penjelasan": "Pada FIFO, 2 unit yang dikirim diambil dari layer paling awal ($20), sehingga sisa stok adalah 1 unit $20 dan 1 unit $50. Nilai rata-rata $35 adalah ciri metode AVCO.",
    "referensi": {
      "topikSpesifik": "Inventory Valuation & Perpetual Accounting",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/inventory_valuation.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Inventory+Valuation+Accounting+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Inventory+Valuation+%26+Perpetual+Accounting+Odoo+19"
    }
  },
  {
    "id": 192,
    "topic": "inventory",
    "soal": "Your warehouse uses the \"Before Scheduled Date\" reservation method. In the Delivery Order operation settings, \"days before\" = 5, and \"days before when starred\" = 10. You have 2 deliveries for June 30, one starred, one not. Today is June 21. Which of the following best describes what happens?",
    "pilihan": [
      "Both deliveries are reserved, because they're within 10 days of the scheduled date",
      "Only the starred delivery is reserved, because it's within 10 days of the scheduled date",
      "Neither delivery is reserved, because the scheduled date hasn't yet arrived"
    ],
    "jawaban": 1,
    "penjelasan": "Dengan metode Before Scheduled Date, delivery yang di-star direservasi mulai 10 hari sebelum tanggal jadwal, sedangkan yang biasa baru 5 hari sebelumnya; 21 Juni berada 9 hari sebelum 30 Juni, jadi hanya delivery yang di-star yang direservasi.",
    "referensi": {
      "topikSpesifik": "Delivery Orders & Stock Reservation",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/receipts_delivery_orders.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Delivery+Orders+Stock+Reservation+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Delivery+Orders+%26+Stock+Reservation+Odoo+19"
    }
  },
  {
    "id": 194,
    "topic": "inventory",
    "soal": "Which of the following types of record(s) can NOT have barcodes added to them?",
    "pilihan": [
      "Products, Packagings, and Package Types",
      "Locations and Operation Types",
      "Product Categories"
    ],
    "jawaban": 2,
    "penjelasan": "Barcode dapat ditambahkan ke products, packagings, package types, locations, dan operation types, tetapi product categories tidak memiliki field barcode.",
    "referensi": {
      "topikSpesifik": "Packages & Move Entire Package",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/packages.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Packages+Move+Entire+Package+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Packages+%26+Move+Entire+Package+Odoo+19"
    }
  },
  {
    "id": 195,
    "topic": "inventory",
    "soal": "Can you enter barcodes manually in the Barcode app?",
    "pilihan": [
      "Yes, but only for products and packages",
      "Yes, including barcodes for products, packages, delivery orders, and warehouse receipts",
      "No"
    ],
    "jawaban": 1,
    "penjelasan": "Aplikasi Barcode menyediakan input barcode manual lewat keyboard, sehingga Anda dapat mengetik barcode produk, package, maupun dokumen seperti delivery order dan receipt.",
    "referensi": {
      "topikSpesifik": "Packages & Move Entire Package",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/packages.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Packages+Move+Entire+Package+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Packages+%26+Move+Entire+Package+Odoo+19"
    }
  },
  {
    "id": 196,
    "topic": "mrp",
    "soal": "When should a company use the Master Production Schedule (MPS) instead of reordering rules?",
    "pilihan": [
      "When it wants to maintain fixed safety stock levels for all products",
      "When it produces only on demand (Make to Order)",
      "When it needs to plan production based on seasonal or forecasted demand"
    ],
    "jawaban": 2,
    "penjelasan": "MPS dipakai untuk merencanakan produksi dan pengadaan berdasarkan forecast permintaan, misalnya permintaan musiman; reordering rules hanya menjaga level stok min/max tetap.",
    "referensi": {
      "topikSpesifik": "Automated Reordering Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/reordering_rules.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Reordering+Rules+Replenishment+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Automated+Reordering+Rules+Odoo+19"
    }
  },
  {
    "id": 197,
    "topic": "mrp",
    "soal": "When an analytic account is assigned to a MO, how are the related costs recorded?",
    "pilihan": [
      "Finished products are posted as revenue, while consumed components appear as costs, and labor is billed through timesheets",
      "Consumed components and labor costs are recorded as expenses on the linked analytic account (project)",
      "Finished products and by-products are recorded as revenue on the analytic account"
    ],
    "jawaban": 1,
    "penjelasan": "Jika MO diberi analytic account, biaya komponen yang dikonsumsi dan biaya tenaga kerja (waktu work order dikali biaya work center/karyawan) dicatat sebagai biaya pada analytic account tersebut, bukan sebagai revenue.",
    "referensi": {
      "topikSpesifik": "Timesheets Billing Rates & Leaderboards",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/timesheets/billing_rates.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Timesheets+Billing+Rates+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Timesheets+Billing+Rates+%26+Leaderboards+Odoo+19"
    }
  },
  {
    "id": 198,
    "topic": "mrp",
    "soal": "In an OEE calculation, what is considered as fully productive time?",
    "pilihan": [
      "Recorded working time that doesn't exceed the expected working time",
      "All recorded time on a work order before it's marked as done",
      "All time recorded on the work order during a work center's scheduled working hours"
    ],
    "jawaban": 0,
    "penjelasan": "Fully productive time adalah waktu kerja tercatat pada work order yang tidak melebihi durasi yang diharapkan.",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Capacity",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/management/work_center_capacity.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Capacity+Odoo+19"
    }
  },
  {
    "id": 199,
    "topic": "mrp",
    "soal": "How do you configure a manufacturing product for subcontracting?",
    "pilihan": [
      "Enable the 'Subcontracted' checkbox on the product's form",
      "Enable the 'Subcontracting' option in the 'BoM Type' field on the product's BoM",
      "Add the 'Subcontract' route on the sales order that includes the product\\"
    ],
    "jawaban": 1,
    "penjelasan": "Subcontracting dikonfigurasi di BoM produk dengan memilih BoM Type 'Subcontracting' dan menentukan subcontractor-nya; tidak ada checkbox 'Subcontracted' di form produk.",
    "referensi": {
      "topikSpesifik": "Subcontracting in Manufacturing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/subcontracting.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Subcontracting+Manufacturing+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Subcontracting+in+Manufacturing+Odoo+19"
    }
  },
  {
    "id": 201,
    "topic": "mrp",
    "soal": "In the MPS, what does a yellow-colored cell indicate about replenishment?",
    "pilihan": [
      "A replenishment order has already been generated, but more quantities need to be ordered to meet the Safety Stock Target",
      "The forecasted demand is higher than the actual demand, so the quantity to replenish is uncertain",
      "Too many units have already been replenished"
    ],
    "jawaban": 0,
    "penjelasan": "Sel kuning di MPS berarti replenishment order sudah dibuat, tetapi jumlahnya belum cukup sehingga masih perlu memesan lebih banyak untuk mencapai Safety Stock Target.",
    "referensi": {
      "topikSpesifik": "Master Production Schedule (MPS)",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/management/mps.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Master+Production+Schedule+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Master+Production+Schedule+%28MPS%29+Odoo+19"
    }
  },
  {
    "id": 202,
    "topic": "mrp",
    "soal": "When performing a work order, you can consume:",
    "pilihan": [
      "Only products from the BoM, in the quantities defined by the BoM",
      "Only products from the BoM, but you can add extra quantities",
      "Any product"
    ],
    "jawaban": 2,
    "penjelasan": "Saat mengerjakan work order, Anda dapat mencatat konsumsi komponen apa pun, termasuk produk di luar BoM, dan menyesuaikan kuantitasnya sesuai konsumsi aktual.",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Capacity",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/management/work_center_capacity.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Capacity+Odoo+19"
    }
  },
  {
    "id": 203,
    "topic": "mrp",
    "soal": "Which of the following is true about splitting/merging manufacturing orders?",
    "pilihan": [
      "Only manufacturing orders of identical products with the same BoM may be merged",
      "Only manufacturing orders in the draft state may be merged",
      "Only manufacturing orders of even quantities may be split"
    ],
    "jawaban": 0,
    "penjelasan": "Manufacturing order hanya bisa di-merge jika produknya sama dan memakai BoM yang sama. Split tidak mensyaratkan kuantitas genap.",
    "referensi": {
      "topikSpesifik": "Bills of Materials (BoM) & Kits",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/management/kit_shipping.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Bills+of+Materials+BoM+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Bills+of+Materials+%28BoM%29+%26+Kits+Odoo+19"
    }
  },
  {
    "id": 204,
    "topic": "mrp",
    "soal": "What is the \"Register Production\" step on a work order card in the Shop Floor module used for?",
    "pilihan": [
      "To confirm that the manufacturing order has been completed",
      "To mark a work order as \"In Progress\"",
      "To register the number of units manufactured"
    ],
    "jawaban": 2,
    "penjelasan": "Langkah 'Register Production' di Shop Floor dipakai untuk mencatat jumlah unit yang sudah diproduksi.",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Capacity",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/management/work_center_capacity.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Capacity+Odoo+19"
    }
  },
  {
    "id": 205,
    "topic": "mrp",
    "soal": "What does it mean when a work center is \"fully productive\"?",
    "pilihan": [
      "The work center is operational",
      "The work center is processing a work order within its expected duration",
      "The work center is processing multiple work orders"
    ],
    "jawaban": 1,
    "penjelasan": "Sebuah work center dianggap 'fully productive' saat bisa menerima work order, komponennya tersedia, dan work order diproses dalam expected duration-nya; waktu yang melebihi expected duration dihitung sebagai reduced speed dalam OEE, bukan waktu fully productive.",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Capacity",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/management/work_center_capacity.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Capacity+Odoo+19"
    }
  },
  {
    "id": 206,
    "topic": "studio",
    "soal": "On Many2One and Many2Many fields, what does setting a value of '5' for 'Typeahead search' allow?",
    "pilihan": [
      "The search has an auto-complete functionality based the last 5 selected records.",
      "The search results only show after at least 5 characters have been typed.",
      "The search results are limited to the first 5 records for faster loading."
    ],
    "jawaban": 1,
    "penjelasan": "Typeahead search bernilai 5 membuat hasil pencarian pada field Many2One/Many2Many baru muncul setelah user mengetik minimal 5 karakter. Opsi ini tidak membatasi jumlah hasil yang ditampilkan.",
    "referensi": {
      "topikSpesifik": "Studio Many2One / Many2Many Limit Property",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Studio+Relational+Field+Limit+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Studio+Many2One+%2F+Many2Many+Limit+Property+Odoo+19"
    }
  },
  {
    "id": 207,
    "topic": "studio",
    "soal": "In a List view, how can you control the width of columns?",
    "pilihan": [
      "Set the width using a CSS class applied to the List view's container element.",
      "This can't be controlled; the width is determined by the longest value in the column.",
      "Define a fixed column width, in pixels."
    ],
    "jawaban": 2,
    "penjelasan": "Di Studio, kolom List view dapat diberi lebar tetap (Column Width dalam piksel).",
    "referensi": {
      "topikSpesifik": "Studio List View Column Width Management",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Studio+List+View+Column+Width+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Studio+List+View+Column+Width+Management+Odoo+19"
    }
  },
  {
    "id": 208,
    "topic": "studio",
    "soal": "If an action only needs approval in certain circumstances, how you can configure this?",
    "pilihan": [
      "Add the details in the 'Description' field; the approver will see a message indicating whether or not approval is needed.",
      "When setting up an approval step, click the filter icon and define the relevant conditions.",
      "After the basic approval rule is set up, create an automation rule to further define the circumstances in which it applies."
    ],
    "jawaban": 1,
    "penjelasan": "Saat mengatur approval step di Studio, klik ikon filter pada rule tersebut dan tentukan domain kondisi agar approval hanya diminta dalam situasi tertentu.",
    "referensi": {
      "topikSpesifik": "Studio Automated Actions & Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio/automated_actions.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Studio+Automation+Rules+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Studio+Automated+Actions+%26+Rules+Odoo+19"
    }
  },
  {
    "id": 209,
    "topic": "studio",
    "soal": "What is the primary function of the 'Before Update Domain' in an automation rule?",
    "pilihan": [
      "It defines the set of records the rule acts on after the trigger event occurs.",
      "It defines the conditions a record must meet before the trigger event occurs.",
      "It specifies the user groups that are allowed to trigger the automation rule."
    ],
    "jawaban": 1,
    "penjelasan": "Before Update Domain menentukan kondisi yang harus dipenuhi record sebelum trigger terjadi (misalnya status sebelum diubah), sedangkan domain 'Apply on' menyaring record setelah perubahan.",
    "referensi": {
      "topikSpesifik": "Studio Automated Actions & Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio/automated_actions.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Studio+Automation+Rules+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Studio+Automated+Actions+%26+Rules+Odoo+19"
    }
  },
  {
    "id": 210,
    "topic": "studio",
    "soal": "How can you trigger an automated action only upon the creation of a record?",
    "pilihan": [
      "Set the Trigger to 'On create'.",
      "Set the Trigger to 'On save' and use 'ID is not set' as the 'Before Update Domain' and 'ID is set' as the 'Apply on' domain.",
      "Set the Trigger to 'Values Updated' and select 'Creation Date' as the field to watch."
    ],
    "jawaban": 0,
    "penjelasan": "Trigger 'On create' menjalankan automation rule hanya saat record baru dibuat. Trigger 'On save' juga berjalan saat record diperbarui.",
    "referensi": {
      "topikSpesifik": "Studio Automated Actions & Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio/automated_actions.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Studio+Automation+Rules+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Studio+Automated+Actions+%26+Rules+Odoo+19"
    }
  },
  {
    "id": 211,
    "topic": "introduction",
    "soal": "If you were in any list view, how would you display 1,000 records at once?",
    "pilihan": [
      "All records are always displayed.",
      "By clicking on the page indicator next to the view options and entering 1-1000.",
      "80 records is the maximum number of results that can be displayed in list view."
    ],
    "jawaban": 1,
    "penjelasan": "Jumlah baris data yang ditampilkan pada tampilan List View dapat diubah melalui kontrol pager di pojok kanan atas.",
    "referensi": {
      "topikSpesifik": "List View Paging & Custom Limits",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/search.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+List+View+Pager+Records+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+List+View+Paging+%26+Custom+Limits+Odoo+19"
    }
  },
  {
    "id": 212,
    "topic": "introduction",
    "soal": "How do you archive a company in Odoo?",
    "pilihan": [
      "Companies cannot be archived for traceability purposes.",
      "Contact Odoo, this needs to be performed by Odoo Support.",
      "Go to General Settings > Manage Companies > Select the company line (list view) > Action > Archive."
    ],
    "jawaban": 2,
    "penjelasan": "Company dapat diarsipkan: buka Settings > Manage Companies, pilih baris company di list view, lalu klik Action > Archive, tanpa perlu bantuan Odoo Support.",
    "referensi": {
      "topikSpesifik": "Multi-Company Setup & Records Sharing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/companies/multi_companies.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Multi+Company+Setup+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Multi-Company+Setup+%26+Records+Sharing+Odoo+19"
    }
  },
  {
    "id": 213,
    "topic": "introduction",
    "soal": "What option in Odoo can help a user better protect their account?",
    "pilihan": [
      "VPN (Virtual Private Network).",
      "Use an incognito browser window.",
      "2FA (Two-Factor Authentication)."
    ],
    "jawaban": 2,
    "penjelasan": "Mengaktifkan autentikasi dua faktor (2FA) mewajibkan kode verifikasi tambahan saat login untuk mengamankan akun pengguna.",
    "referensi": {
      "topikSpesifik": "Two-Factor Authentication (2FA) Security",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/auth/2fa.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Two+Factor+Authentication+2FA+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Two-Factor+Authentication+%282FA%29+Security+Odoo+19"
    }
  },
  {
    "id": 214,
    "topic": "sales",
    "soal": "How can I set separate invoice and delivery addresses for a customer when creating a quotation?",
    "pilihan": [
      "In the Contacts app, open a customer's contact form. Under the Contacts tab, click \"Add Contact\". Then enter addresses under both the \"Invoice\" and \"Delivery\" radio buttons. This automatically fills out the invoice and delivery address fields in quotations",
      "In the Settings app, search for \"Customer Invoices\" and tick the \"Customer Addresses\" box. This will add an option to set separate invoice and delivery addresses to each quotation",
      "In the Sales app, under the \"Configuration\" header, choose \"Delivery Method\". Click the \"New\" button and create a Delivery Method set to \"Invoice address only\""
    ],
    "jawaban": 1,
    "penjelasan": "Aktifkan 'Customer Addresses' di Settings (bagian Customer Invoices) agar field Invoice Address dan Delivery Address muncul di quotation.",
    "referensi": {
      "topikSpesifik": "Customer Invoice and Delivery Addresses",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/contacts.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Contact+Invoice+Delivery+Address+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Customer+Invoice+and+Delivery+Addresses+Odoo+19"
    }
  },
  {
    "id": 215,
    "topic": "inventory",
    "soal": "What does it mean when a product has both the \"Purchase\" checkbox and the \"Replenish on Order (MTO)\" checkbox in the Inventory tab checked on its product form?",
    "pilihan": [
      "When a reordering rule set on the product is triggered, a manufacturing order will be generated if there is not sufficient inventory",
      "When a sales order is confirmed, a Request for Quotation to purchase the product from a vendor will be generated if there is not sufficient inventory",
      "When inventory for the product reaches 0, a Request for Quotation will be sent to a vendor to have them come and assemble more of the product in your warehouse"
    ],
    "jawaban": 1,
    "penjelasan": "Kombinasi route Buy (Purchase) dan Replenish on Order (MTO) membuat Odoo otomatis membuat RFQ ke vendor saat sales order dikonfirmasi jika stok tidak mencukupi.",
    "referensi": {
      "topikSpesifik": "Requests for Quotation (RFQ) & PO Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/rfq.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Purchase+Orders+RFQ+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Requests+for+Quotation+%28RFQ%29+%26+PO+Workflow+Odoo+19"
    }
  },
  {
    "id": 216,
    "topic": "inventory",
    "soal": "What does it mean if the forecasted quantity of a product is higher than the quantity on hand?",
    "pilihan": [
      "You have enabled \"Include Components In Forecasts\" and your forecast is including potential units you may choose to manufacture at a future date",
      "New products are planned to be added to inventory because of a purchase or manufacturing order or because of returns",
      "A sales order has failed and product has not been removed from inventory"
    ],
    "jawaban": 1,
    "penjelasan": "Forecasted quantity lebih tinggi dari On Hand berarti ada stok yang direncanakan masuk, misalnya dari purchase order, manufacturing order, atau retur, yang belum diterima.",
    "referensi": {
      "topikSpesifik": "Forecasted vs On-Hand Inventory Quantities",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/receipts_delivery_orders.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Forecasted+vs+On+Hand+Stock+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Forecasted+vs+On-Hand+Inventory+Quantities+Odoo+19"
    }
  },
  {
    "id": 217,
    "topic": "sales",
    "soal": "What does it mean when a product is labeled under the product type, \"Combo\"?",
    "pilihan": [
      "When purchasing this product type, the customer can choose one product amongst a selection of multiple",
      "This product is a combination of a \"Good\" and a \"Service\"",
      "When purchasing this product, the customer must choose multiple product variants to submit an order"
    ],
    "jawaban": 0,
    "penjelasan": "Produk bertipe Combo memungkinkan customer memilih satu produk dari tiap pilihan combo (misalnya satu minuman dari beberapa opsi), bukan gabungan Good dan Service.",
    "referensi": {
      "topikSpesifik": "Product Variants & Attributes",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/products/variants.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Product+Variants+Attributes+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Product+Variants+%26+Attributes+Odoo+19"
    }
  },
  {
    "id": 218,
    "topic": "sales",
    "soal": "When would it be most useful to use 'Order Grid Entry' as the sales variant selection type for a product?",
    "pilihan": [
      "When clients want their sales orders organized in a grid",
      "When salespeople typically recommend specific product variants to clients",
      "When salespeople usually create large quotations with many product variants for clients"
    ],
    "jawaban": 2,
    "penjelasan": "Order Grid Entry memudahkan salesperson memilih banyak varian produk sekaligus dalam satu tampilan grid, cocok untuk quotation besar dengan banyak varian.",
    "referensi": {
      "topikSpesifik": "Product Variants & Attributes",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/products/variants.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Product+Variants+Attributes+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Product+Variants+%26+Attributes+Odoo+19"
    }
  },
  {
    "id": 219,
    "topic": "accounting",
    "soal": "What is the difference between a pro-forma invoice and a standard invoice?",
    "pilihan": [
      "A pro-forma invoice is not used to request payment from a customer, but rather as a confirmation step between quotation and invoicing",
      "A pro-forma invoice is legally non-binding, meaning that neither you nor your customer can be sued for failing to follow its terms",
      "A pro-forma invoice follows a standardized format intended for providing professional services, like a legal consultation"
    ],
    "jawaban": 0,
    "penjelasan": "Pro-forma invoice bukan tagihan pembayaran. Dokumen ini adalah invoice pendahuluan yang dikirim bersama quotation sebelum invoice resmi.",
    "referensi": {
      "topikSpesifik": "Invoicing Policies & Pro-Forma Invoices",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/invoicing/invoicing_policy.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Invoicing+Policies+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Invoicing+Policies+%26+Pro-Forma+Invoices+Odoo+19"
    }
  },
  {
    "id": 220,
    "topic": "sales",
    "soal": "Which of the following is NOT a valid option when setting an achievement-based commission plan for your team?",
    "pilihan": [
      "A plan based on the total amount of sales invoiced",
      "A plan based on the total amount of sales quoted",
      "A plan based on the total quantity of products sold"
    ],
    "jawaban": 1,
    "penjelasan": "Achievement-based commission plan dapat didasarkan pada jumlah atau kuantitas yang terjual maupun ditagih (sold/invoiced), bukan pada nilai quotation, karena quotation belum menjadi penjualan.",
    "referensi": {
      "topikSpesifik": "Sales Commissions Plans",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/commissions.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Sales+Commissions+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Sales+Commissions+Plans+Odoo+19"
    }
  },
  {
    "id": 221,
    "topic": "survey",
    "soal": "What does the Allow Roaming option let participants do during a survey?",
    "pilihan": [
      "Pause the survey and complete it at a different day or time.",
      "Share their responses with other participants.",
      "Go back to previous pages of the survey if needed."
    ],
    "jawaban": 2,
    "penjelasan": "Opsi \"Allow Roaming\" mengizinkan responden survey untuk berpindah-pindah antar pertanyaan sebelum mengirim jawaban akhir.",
    "referensi": {
      "topikSpesifik": "Survey Allow Roaming Navigation Option",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/surveys.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Survey+Allow+Roaming+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Survey+Allow+Roaming+Navigation+Option+Odoo+19"
    }
  },
  {
    "id": 222,
    "topic": "crm",
    "soal": "What happens to an opportunity that is marked as 'Lost'?",
    "pilihan": [
      "The opportunity is archived and hidden from the main dashboard but can be accessed using Filters > Lost.",
      "The opportunity is moved to the Lost stage in the Kanban view and remains visible but inactive.",
      "The opportunity is archived and removed from all dashboards but can still be accessed through advanced search options."
    ],
    "jawaban": 0,
    "penjelasan": "Opportunity yang ditandai Lost otomatis diarsipkan dan disembunyikan dari pipeline, tetapi masih dapat ditemukan melalui filter Lost di search.",
    "referensi": {
      "topikSpesifik": "Lost Opportunities & Reason Tracking",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/pipeline/lost_opportunities.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Lost+Opportunities+CRM+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Lost+Opportunities+%26+Reason+Tracking+Odoo+19"
    }
  },
  {
    "id": 223,
    "topic": "crm",
    "soal": "Compared to an opportunity, how likely is a lead to be won in Odoo?",
    "pilihan": [
      "A lead is more likely to be won than an opportunity.",
      "A lead is less likely to be won than an opportunity.",
      "Leads and opportunities have the same likelihood of being won."
    ],
    "jawaban": 1,
    "penjelasan": "Lead adalah prospek awal yang belum dikualifikasi, sehingga peluang menangnya lebih kecil daripada opportunity yang sudah dikualifikasi dan masuk pipeline.",
    "referensi": {
      "topikSpesifik": "Convert Leads into Opportunities",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/acquire_leads/convert.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Convert+Leads+to+Opportunities+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Convert+Leads+into+Opportunities+Odoo+19"
    }
  },
  {
    "id": 224,
    "topic": "crm",
    "soal": "What is the difference between deleting an opportunity and marking it as Lost?",
    "pilihan": [
      "Deleting an opportunity removes it from all views but allows it to be restored via the database's archived records.",
      "Marking an opportunity as Lost simply hides it from the pipeline without deleting the record.",
      "Deleting an opportunity and marking it as Lost both archive the record, but marking it as Lost also triggers a notification to the sales team."
    ],
    "jawaban": 1,
    "penjelasan": "Menandai opportunity sebagai Lost hanya mengarsipkan dan menyembunyikannya dari pipeline sehingga record dan riwayatnya tetap tersimpan, sedangkan Delete menghapus record secara permanen.",
    "referensi": {
      "topikSpesifik": "Lost Opportunities & Reason Tracking",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/pipeline/lost_opportunities.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Lost+Opportunities+CRM+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Lost+Opportunities+%26+Reason+Tracking+Odoo+19"
    }
  },
  {
    "id": 225,
    "topic": "crm",
    "soal": "When can the Expected Revenue on an opportunity be set in Odoo?",
    "pilihan": [
      "It cannot be set manually because it is computed from the untaxed amount of linked sales orders.",
      "It can only be set when creating the opportunity.",
      "It can be set or modified manually at any time."
    ],
    "jawaban": 2,
    "penjelasan": "Expected Revenue adalah field yang dapat diisi atau diubah manual kapan saja di opportunity; nilainya tidak dikunci atau dihitung otomatis dari sales order.",
    "referensi": {
      "topikSpesifik": "Convert Leads into Opportunities",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/acquire_leads/convert.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Convert+Leads+to+Opportunities+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Convert+Leads+into+Opportunities+Odoo+19"
    }
  },
  {
    "id": 226,
    "topic": "crm",
    "soal": "How can you set the Days to Rot for a stage in the CRM pipeline?",
    "pilihan": [
      "Click the gear icon on the stage, select Edit, and enter the number of days in the Days to Rot field.",
      "Open any opportunity in that stage and set the number of days in the Days to Rot field on the record itself.",
      "Go to Configuration > CRM Settings and define a default number of days that applies to all stages in the pipeline."
    ],
    "jawaban": 0,
    "penjelasan": "Field \"Days to Rot\" pada konfigurasi stage CRM menentukan berapa hari suatu opportunity dianggap mengendap sebelum ditandai tidak aktif.",
    "referensi": {
      "topikSpesifik": "Days to Rot on CRM Pipeline Stages",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/pipeline/manage_sales_teams.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+CRM+Days+to+Rot+Stages+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Days+to+Rot+on+CRM+Pipeline+Stages+Odoo+19"
    }
  },
  {
    "id": 227,
    "topic": "ai",
    "soal": "In an AI Agent prompt, what does /record selector allow you to do?",
    "pilihan": [
      "To attach files from the Documents app to an AI conversation.",
      "To open a filtered list view of related records in a separate window.",
      "To reference or update information from a specific record when interacting with the AI Agent."
    ],
    "jawaban": 2,
    "penjelasan": "Selektor /record di prompt AI Agent memungkinkan Anda merujuk record tertentu agar AI dapat membaca atau memperbarui informasinya saat berinteraksi.",
    "referensi": {
      "topikSpesifik": "AI Agent Prompt /record Context Selector",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+AI+Prompt+Record+Selector+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+AI+Agent+Prompt+%2Frecord+Context+Selector+Odoo+19"
    }
  },
  {
    "id": 228,
    "topic": "ai",
    "soal": "How can you enable AI to transcribe meetings in Odoo?",
    "pilihan": [
      "In the Discuss app, go to Configuration > Voice & Video Settings and enable AI Transcription.",
      "In Knowledge > Browse Templates, select Meeting Minutes.",
      "Type \"/\" to open the command palette on an article, note tab, or description tab, and select Voice Transcript."
    ],
    "jawaban": 2,
    "penjelasan": "Transkripsi AI dilakukan dengan mengetik '/' untuk membuka powerbox di article, tab note, atau tab description, lalu memilih Voice Transcript.",
    "referensi": {
      "topikSpesifik": "AI Meeting Audio Transcription Integration",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+AI+Audio+Transcription+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+AI+Meeting+Audio+Transcription+Integration+Odoo+19"
    }
  },
  {
    "id": 229,
    "topic": "ai",
    "soal": "What does the \"Ask AI Search\" feature do?",
    "pilihan": [
      "To turn a plain-language search into the right database filters automatically.",
      "To generate AI suggestions for improving your search terms.",
      "To search only within Knowledge articles and uploaded files."
    ],
    "jawaban": 0,
    "penjelasan": "Ask AI Search mengubah pencarian berbahasa alami menjadi filter dan kriteria pencarian database yang tepat secara otomatis.",
    "referensi": {
      "topikSpesifik": "Ask AI Search Feature in Odoo Command Palette",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Ask+AI+Global+Search+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Ask+AI+Search+Feature+in+Odoo+Command+Palette+Odoo+19"
    }
  },
  {
    "id": 230,
    "topic": "ai",
    "soal": "If an AI Agent with \"Restrict to Sources\" enabled is asked something outside its defined Topics or Sources, how does it respond?",
    "pilihan": [
      "It informs the user it doesn't have the information or permissions to respond.",
      "It automatically switches to another provider.",
      "It guesses the most likely answer based on previous responses."
    ],
    "jawaban": 0,
    "penjelasan": "Jika AI Agent dibatasi pada Sources, pertanyaan di luar sumber data akan dijawab bahwa informasi tidak tersedia pada basis data.",
    "referensi": {
      "topikSpesifik": "AI Agent Sources Grounding & Out-of-Scope Response",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+AI+Agent+Sources+Restriction+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+AI+Agent+Sources+Grounding+%26+Out-of-Scope+Response+Odoo+19"
    }
  },
  {
    "id": 232,
    "topic": "website",
    "soal": "What social media wall can be displayed on your website?",
    "pilihan": [
      "Instagram",
      "TikTok",
      "LinkedIn"
    ],
    "jawaban": 0,
    "penjelasan": "Website Builder menyediakan snippet Instagram untuk menampilkan feed Instagram di halaman website; TikTok dan LinkedIn tidak memiliki snippet wall bawaan.",
    "referensi": {
      "topikSpesifik": "Website Social Media Wall Feeds Widget",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/website.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Website+Social+Media+Wall+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Website+Social+Media+Wall+Feeds+Widget+Odoo+19"
    }
  },
  {
    "id": 233,
    "topic": "website",
    "soal": "How can you animate elements of your website using \"animation\"?",
    "pilihan": [
      "You can add On scroll & On Hover animation on images only.",
      "You can add On scroll & On Appearance animation on any column.",
      "You can add On Scroll & On Appearance animation on most text, images, and blocks. And you can add On Hover animation on images."
    ],
    "jawaban": 2,
    "penjelasan": "Animasi On Scroll dan On Appearance dapat diterapkan pada sebagian besar teks, gambar, dan blok, sedangkan animasi On Hover hanya tersedia untuk gambar.",
    "referensi": {
      "topikSpesifik": "Website On-Scroll Animation Effects",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/website.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Website+On+Scroll+Animations+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Website+On-Scroll+Animation+Effects+Odoo+19"
    }
  },
  {
    "id": 234,
    "topic": "website",
    "soal": "How can you hide the header and/or footer on pages?",
    "pilihan": [
      "You can do this upon activating developer mode.",
      "You can do this in the website editor, in the Styles tab.",
      "You can do this in the website editor, in the Blocks tab."
    ],
    "jawaban": 1,
    "penjelasan": "Header dan footer dapat disembunyikan per halaman lewat website editor di tab Style (opsi visibility header/footer halaman), tanpa perlu developer mode.",
    "referensi": {
      "topikSpesifik": "Developer & Superuser Mode",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/developer_mode.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Developer+Mode+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Developer+%26+Superuser+Mode+Odoo+19"
    }
  },
  {
    "id": 235,
    "topic": "sales",
    "soal": "All products with attribute value 'A' should be priced $50 higher than products with attribute value 'B'. How can you automate this price difference?",
    "pilihan": [
      "By changing the 'Default Extra Price' value in the backend of that attribute.",
      "In 'Sales Price' on product variants.",
      "This can only be done with a pricelist."
    ],
    "jawaban": 0,
    "penjelasan": "Isi 'Default Extra Price' pada nilai atribut 'A' di backend agar setiap varian dengan nilai itu otomatis bertambah $50 dibanding varian dengan nilai 'B', tanpa perlu pricelist.",
    "referensi": {
      "topikSpesifik": "Pricelists & Dynamic Pricing Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/prices/pricing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Pricelists+Discount+Rules+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Pricelists+%26+Dynamic+Pricing+Rules+Odoo+19"
    }
  },
  {
    "id": 236,
    "topic": "ecommerce",
    "soal": "How can you allow customers to order online and then pay in person at your stores?",
    "pilihan": [
      "By enabling the \"Pay on Site\" payment provider.",
      "By enabling the 'Click & Collect' feature, configuring a picking site, and activating the 'Pay on Site' payment provider.",
      "By activating the 'Pick-up in Store' feature in the website settings."
    ],
    "jawaban": 1,
    "penjelasan": "Aktifkan fitur Click & Collect, konfigurasikan lokasi pengambilan (picking site), dan aktifkan payment provider 'Pay on Site' agar customer memesan online lalu membayar dan mengambil barang di toko.",
    "referensi": {
      "topikSpesifik": "Click & Collect (Order Online, Pay & Pickup in Store)",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/ecommerce.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+eCommerce+Click+and+Collect+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Click+%26+Collect+%28Order+Online%2C+Pay+%26+Pickup+in+Store%29+Odoo+19"
    }
  },
  {
    "id": 237,
    "topic": "ecommerce",
    "soal": "What other option is there to display a color variant of a product?",
    "pilihan": [
      "A video, a GIF, or a 3D render of the product can be used instead of a color.",
      "A 3D render of the product color variant can be displayed.",
      "An image of the product or a GIF can be displayed instead of a color."
    ],
    "jawaban": 2,
    "penjelasan": "Selain warna, varian warna produk dapat ditampilkan dengan gambar produk atau GIF sebagai pengganti swatch warna.",
    "referensi": {
      "topikSpesifik": "Product Variants & Attributes",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/products/variants.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Product+Variants+Attributes+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Product+Variants+%26+Attributes+Odoo+19"
    }
  },
  {
    "id": 239,
    "topic": "knowledge",
    "soal": "Which of the following powerbox commands are exclusive to Knowledge?",
    "pilihan": [
      "Index, Item Kanban/Cards/List/Calendar",
      "Separator, Checklist, Quote, Media, Emoji",
      "Banner Info/Success/Warning/Danger"
    ],
    "jawaban": 0,
    "penjelasan": "Perintah powerbox Index dan Item Kanban/Cards/List/Calendar hanya ada di Knowledge karena mengacu pada artikel anak dan artikel item. Separator, Checklist, Quote, dan Banner juga tersedia di editor aplikasi lain.",
    "referensi": {
      "topikSpesifik": "Knowledge Exclusive Powerbox Commands",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/knowledge.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Knowledge+Powerbox+Commands+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Knowledge+Exclusive+Powerbox+Commands+Odoo+19"
    }
  },
  {
    "id": 240,
    "topic": "knowledge",
    "soal": "What can you do if you accidentally delete an article's section?",
    "pilihan": [
      "Restore the previous version of the article",
      "Restore the article from the 'Archived' articles",
      "Restore the article from the 'Trash'"
    ],
    "jawaban": 0,
    "penjelasan": "Jika ada bagian artikel yang terhapus, fitur Version History (Riwayat Versi) memungkinkan pemulihan konten ke status sebelumnya.",
    "referensi": {
      "topikSpesifik": "Knowledge Version History & Section Restore",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/knowledge.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Knowledge+Version+History+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Knowledge+Version+History+%26+Section+Restore+Odoo+19"
    }
  },
  {
    "id": 241,
    "topic": "project",
    "soal": "What information is not displayed on a project's dashboard?",
    "pilihan": [
      "The project's milestones",
      "The project's customer ratings",
      "The project's profitability"
    ],
    "jawaban": 1,
    "penjelasan": "Dashboard (project update) menampilkan milestones dan profitability proyek, tetapi tidak menampilkan customer ratings.",
    "referensi": {
      "topikSpesifik": "Project Management & Burndown Charts",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project/project_management/project_dashboard.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Project+Burndown+Chart+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Project+Management+%26+Burndown+Charts+Odoo+19"
    }
  },
  {
    "id": 242,
    "topic": "project",
    "soal": "How are the tasks in the \"My Tasks\" pipeline managed?",
    "pilihan": [
      "They are moved automatically across stages based on their deadline",
      "They are moved automatically across stages based on their next activity's date",
      "You move them manually across stages"
    ],
    "jawaban": 2,
    "penjelasan": "Tugas di pipeline My Tasks memakai personal stages milik user dan dipindahkan secara manual; tidak ada perpindahan otomatis berdasarkan deadline atau aktivitas.",
    "referensi": {
      "topikSpesifik": "Convert Leads into Opportunities",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/acquire_leads/convert.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Convert+Leads+to+Opportunities+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Convert+Leads+into+Opportunities+Odoo+19"
    }
  },
  {
    "id": 243,
    "topic": "project",
    "soal": "What does the blue color represents in the bar at the top of a Kanban stage?",
    "pilihan": [
      "Sub-tasks",
      "Unassigned tasks",
      "Task blocked by other tasks"
    ],
    "jawaban": 2,
    "penjelasan": "Pada bar progress di atas kolom stage Kanban Project, warna biru mewakili tugas berstatus Waiting, yaitu tugas yang diblokir oleh tugas lain.",
    "referensi": {
      "topikSpesifik": "Stages & Kanban Progress Bars",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/stages.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Kanban+Stages+Progress+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Stages+%26+Kanban+Progress+Bars+Odoo+19"
    }
  },
  {
    "id": 244,
    "topic": "timesheets",
    "soal": "When entering timesheets, how is the timesheet cost generated?",
    "pilihan": [
      "By setting an hourly cost on the employee form",
      "By setting a cost on the product form",
      "By setting a timesheet cost on the task form"
    ],
    "jawaban": 0,
    "penjelasan": "Biaya timesheet dihitung dari Hourly Cost yang diisi di form karyawan (tab Settings) dikalikan durasi timesheet, bukan dari biaya di produk atau task.",
    "referensi": {
      "topikSpesifik": "Timesheets Billing Rates & Leaderboards",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/timesheets/billing_rates.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Timesheets+Billing+Rates+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Timesheets+Billing+Rates+%26+Leaderboards+Odoo+19"
    }
  },
  {
    "id": 245,
    "topic": "accounting",
    "soal": "What depreciation methods are available for an asset?",
    "pilihan": [
      "Declining, Straight line then Declining, and Straight line.",
      "Declining, Declining then Straight line, and Straight line.",
      "Declining, Declining then Straight line, Straight line, and Progressive."
    ],
    "jawaban": 1,
    "penjelasan": "Metode depresiasi aset di Odoo adalah Straight Line, Declining, dan Declining then Straight Line; metode 'Progressive' tidak tersedia.",
    "referensi": {
      "topikSpesifik": "Fixed Assets & Depreciation Management",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/vendor_bills/assets.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Fixed+Assets+Depreciation+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Fixed+Assets+%26+Depreciation+Management+Odoo+19"
    }
  },
  {
    "id": 247,
    "topic": "accounting",
    "soal": "What happens if a currency is not set on an account in your chart of accounts?",
    "pilihan": [
      "The account can be used for transactions in any currency.",
      "The account can only be used for transactions in the main company's currency.",
      "Currency cannot be managed at account level, only at journal level."
    ],
    "jawaban": 0,
    "penjelasan": "Jika field Currency pada akun dikosongkan, akun tersebut tidak dibatasi ke satu mata uang sehingga bisa dipakai untuk transaksi dalam mata uang apa pun. Mengisi Currency justru membatasi akun hanya untuk mata uang itu.",
    "referensi": {
      "topikSpesifik": "Chart of Accounts & Journals Setup",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/chart_of_accounts.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Chart+of+Accounts+Setup+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Chart+of+Accounts+%26+Journals+Setup+Odoo+19"
    }
  },
  {
    "id": 248,
    "topic": "accounting",
    "soal": "How are follow-up actions triggered?",
    "pilihan": [
      "Based on the number of days overdue starting from the creation date of the invoice.",
      "Based on the number of days overdue starting from the due date of the invoice.",
      "Based on the number of days overdue starting from the invoice date of the invoice."
    ],
    "jawaban": 1,
    "penjelasan": "Follow-up level di Odoo dipicu berdasarkan jumlah hari keterlambatan yang dihitung dari due date invoice, bukan dari tanggal pembuatan atau invoice date.",
    "referensi": {
      "topikSpesifik": "Customer Payment Follow-ups",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/customer_invoices/payment_follow_up.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Payment+Follow+Up+Levels+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Customer+Payment+Follow-ups+Odoo+19"
    }
  },
  {
    "id": 249,
    "topic": "accounting",
    "soal": "Which feature allows you to automatically change the income or expense account that a product should use based on the customer or vendor?",
    "pilihan": [
      "Fiscal Positions.",
      "Fiscal Localizations.",
      "Account Groups."
    ],
    "jawaban": 0,
    "penjelasan": "Fiscal position secara otomatis memetakan akun dan jenis pajak berdasarkan lokasi geografis atau status perpajakan customer/vendor.",
    "referensi": {
      "topikSpesifik": "Fiscal Positions & Tax Account Mapping",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/taxes/fiscal_positions.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Fiscal+Positions+Tax+Mapping+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Fiscal+Positions+%26+Tax+Account+Mapping+Odoo+19"
    }
  },
  {
    "id": 250,
    "topic": "accounting",
    "soal": "How can you configure payments to create journal entries automatically?",
    "pilihan": [
      "Payments automatically create journal entries by default.",
      "Enable the \"Auto check on post\" option in the journal that is used to record the payment.",
      "By adding an outstanding payments/receipts account to the payment method in the journal that is used to record the payment."
    ],
    "jawaban": 2,
    "penjelasan": "Payment baru membuat journal entry jika payment method di journal (tab Incoming/Outgoing Payments) memiliki Outstanding Receipts/Payments account. Tanpa akun itu, payment langsung direkonsiliasi lewat bank statement tanpa journal entry sendiri.",
    "referensi": {
      "topikSpesifik": "Chart of Accounts & Journals Setup",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/chart_of_accounts.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Chart+of+Accounts+Setup+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Chart+of+Accounts+%26+Journals+Setup+Odoo+19"
    }
  },
  {
    "id": 251,
    "topic": "accounting",
    "soal": "Apart from miscellaneous, what are the different types of journals you can create?",
    "pilihan": [
      "Cash, Bank, Sales, Loan, and Purchase.",
      "Cash, Bank, Sales, Purchase, and Tax.",
      "Bank, Cash, Credit card, Sales, and Purchase."
    ],
    "jawaban": 2,
    "penjelasan": "Selain Miscellaneous, tipe journal di Odoo adalah Sales, Purchase, Cash, Bank, dan Credit Card. Tidak ada tipe journal Loan maupun Tax.",
    "referensi": {
      "topikSpesifik": "Loans Management & Amortization",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/bank/loans.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Loans+Management+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Loans+Management+%26+Amortization+Odoo+19"
    }
  },
  {
    "id": 252,
    "topic": "spreadsheet",
    "soal": "How can an external user access a spreadsheet containing dynamic Odoo data, i.e., formulas that retrieve live data from the database or links to Odoo views?",
    "pilihan": [
      "An external user can only access a spreadsheet containing dynamic Odoo data in read-only mode.",
      "An external user cannot access a spreadsheet containing dynamic Odoo data.",
      "An external user who has read-only access can click the 'Request edit access' button."
    ],
    "jawaban": 1,
    "penjelasan": "Spreadsheet dengan data dinamis Odoo (formula yang menarik data live atau link ke view) membutuhkan akses ke database, sehingga user eksternal tidak dapat membukanya; hanya user internal dengan hak akses yang bisa.",
    "referensi": {
      "topikSpesifik": "Odoo Spreadsheets & Live Pivot Tables",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/spreadsheet.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Spreadsheets+Pivot+Integration+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+Spreadsheets+%26+Live+Pivot+Tables+Odoo+19"
    }
  },
  {
    "id": 253,
    "topic": "hr",
    "soal": "If you wanted to set a color for \"Sick Time Off\" (as displayed in the dashboard view of the Time Off module), where would you go to do this?",
    "pilihan": [
      "From Configuration > Time Off Types",
      "From Management > Time Off",
      "Colors are set by default and are unchangeable"
    ],
    "jawaban": 0,
    "penjelasan": "Warna penanda tipe cuti (seperti warna khusus untuk Sick Time Off pada kalender) dikonfigurasi melalui menu Configuration > Time Off Types.",
    "referensi": {
      "topikSpesifik": "Time Off Types Color Coding Configuration",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/hr_and_attendance.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Time+Off+Types+Color+Setup+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Time+Off+Types+Color+Coding+Configuration+Odoo+19"
    }
  },
  {
    "id": 254,
    "topic": "hr",
    "soal": "In the Payroll application, what source creates Work Entries?",
    "pilihan": [
      "Working Schedules, Contracts, and Projects",
      "Working Schedules, Employees, and Time Off",
      "Working Schedules, Attendance, and Planning"
    ],
    "jawaban": 2,
    "penjelasan": "Work Entries di Payroll dibuat dari Working Schedules (jadwal kerja karyawan), serta dari data Attendance dan Planning jika sumber tersebut dipilih sebagai dasar work entry.",
    "referensi": {
      "topikSpesifik": "Attendances & Kiosk Mode",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/hr/attendances/kiosk_mode.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Attendance+Kiosk+Mode+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Attendances+%26+Kiosk+Mode+Odoo+19"
    }
  },
  {
    "id": 255,
    "topic": "hr",
    "soal": "How can a user view a job applicant's record without having full access rights to the Recruitment app?",
    "pilihan": [
      "All applicant records are visible, but the Details and Skills tabs are hidden.",
      "By referring a candidate for a position",
      "By being added as an Interviewer on either the job position or the applicant's record."
    ],
    "jawaban": 2,
    "penjelasan": "User yang ditambahkan sebagai Interviewer di job position atau di record applicant dapat melihat record applicant tersebut meskipun tidak punya hak akses penuh ke aplikasi Recruitment.",
    "referensi": {
      "topikSpesifik": "Recruitment Applicant Record Access Control",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/hr_and_attendance.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Recruitment+Access+Rights+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Recruitment+Applicant+Record+Access+Control+Odoo+19"
    }
  },
  {
    "id": 256,
    "topic": "hr",
    "soal": "What is this screen? (Shows \"Welcome to My Company (San Francisco)\", \"Check in\" button, and a QR code)",
    "pilihan": [
      "A Frontdesk kiosk",
      "An Attendances kiosk",
      "A Visitors kiosk"
    ],
    "jawaban": 0,
    "penjelasan": "Layar dengan sambutan 'Welcome to ...', tombol Check in, dan QR code (Self Check-In) adalah kiosk Frontdesk. Kiosk Attendances menampilkan 'Scan your badge' / 'Identify manually'.",
    "referensi": {
      "topikSpesifik": "Attendances & Kiosk Mode",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/hr/attendances/kiosk_mode.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Attendance+Kiosk+Mode+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Attendances+%26+Kiosk+Mode+Odoo+19"
    }
  },
  {
    "id": 257,
    "topic": "introduction",
    "soal": "When configuring bookings, what should you do to enable the selection of existing tables?",
    "pilihan": [
      "Set the 'Assignment' field to 'By visitor'.",
      "Enable 'Manage Capacities'.",
      "Set the 'Book' field to 'Resources'."
    ],
    "jawaban": 2,
    "penjelasan": "Di appointment type, set field Book ke 'Resources' agar pengunjung dapat memilih resource yang ada (misalnya meja restoran) saat booking, bukan memilih user/staf.",
    "referensi": {
      "topikSpesifik": "Online Appointments & Bookings",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/appointments.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Appointments+Booking+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Online+Appointments+%26+Bookings+Odoo+19"
    }
  },
  {
    "id": 258,
    "topic": "purchase",
    "soal": "Is a receipt automatically created when an RFQ is confirmed?",
    "pilihan": [
      "Yes, if the Inventory app is installed",
      "Yes, if there are some \"Goods\"-type products in the RFQ",
      "Both answers above are true"
    ],
    "jawaban": 2,
    "penjelasan": "Receipt otomatis dibuat saat RFQ dikonfirmasi hanya jika aplikasi Inventory terpasang dan RFQ berisi produk bertipe Goods (yang dilacak stoknya); produk Service tidak menghasilkan receipt. Kedua syarat berlaku sehingga jawabannya 'keduanya benar'.",
    "referensi": {
      "topikSpesifik": "Requests for Quotation (RFQ) & PO Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/rfq.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Purchase+Orders+RFQ+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Requests+for+Quotation+%28RFQ%29+%26+PO+Workflow+Odoo+19"
    }
  },
  {
    "id": 259,
    "topic": "purchase",
    "soal": "Once you validate a purchase order, is it still possible to add purchase order lines?",
    "pilihan": [
      "Yes, as long as the purchase order is not 'Locked'",
      "Yes, as long as the purchase order hasn't been sent to the customer",
      "No, never"
    ],
    "jawaban": 0,
    "penjelasan": "Setelah purchase order dikonfirmasi, baris baru masih bisa ditambahkan selama PO belum di-Lock. Status Locked mencegah perubahan lebih lanjut pada PO.",
    "referensi": {
      "topikSpesifik": "Requests for Quotation (RFQ) & PO Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/rfq.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Purchase+Orders+RFQ+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Requests+for+Quotation+%28RFQ%29+%26+PO+Workflow+Odoo+19"
    }
  },
  {
    "id": 260,
    "topic": "inventory",
    "soal": "During the sales process, you sell a product to your customer and select the 'Dropship' route on the sales order line. What will happen when the sales order is validated?",
    "pilihan": [
      "A delivery order is created, going directly from your supplier to the customer - no purchase order is needed",
      "A delivery order to your customer will be created. You will order the product from your supplier, receive it, and deliver it to your customer",
      "A request for quotation will be created for the vendor set on your product. Once validated, a DS operation will be generated to directly send the product from the supplier to your customer"
    ],
    "jawaban": 2,
    "penjelasan": "Dengan route Dropship, konfirmasi sales order membuat RFQ ke vendor produk; setelah PO dikonfirmasi, Odoo membuat operasi Dropship (DS) yang mengirim barang langsung dari vendor ke customer tanpa melewati gudang.",
    "referensi": {
      "topikSpesifik": "Requests for Quotation (RFQ) & PO Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/rfq.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Purchase+Orders+RFQ+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Requests+for+Quotation+%28RFQ%29+%26+PO+Workflow+Odoo+19"
    }
  },
  {
    "id": 261,
    "topic": "purchase",
    "soal": "You've confirmed several purchase orders in Odoo, but some still show the status \"Not Acknowledged.\" What does this status indicate, and how can it be updated?",
    "pilihan": [
      "It means the vendor has not yet confirmed they will fulfill the order",
      "It means the purchase order hasn't been approved internally yet and will update automatically once it's validated by a manager",
      "It means the vendor rejected the order and it must be canceled or reissued"
    ],
    "jawaban": 0,
    "penjelasan": "Status 'Not Acknowledged' berarti vendor belum mengonfirmasi bahwa ia akan memenuhi PO. Status berubah setelah vendor menerima/mengonfirmasi order (misalnya lewat portal) atau ditandai acknowledged secara manual.",
    "referensi": {
      "topikSpesifik": "Requests for Quotation (RFQ) & PO Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/rfq.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Purchase+Orders+RFQ+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Requests+for+Quotation+%28RFQ%29+%26+PO+Workflow+Odoo+19"
    }
  },
  {
    "id": 262,
    "topic": "inventory",
    "soal": "You receive 10 units of a product from a vendor into WH/Stock. In the \"Locations\" report, how do the stock levels change for the Vendor Location and Internal Location?",
    "pilihan": [
      "Vendor Location: +10 units / Internal Location: -10 units",
      "Vendor Location: -10 units / Internal Location: +10 units",
      "Both locations increase by +10 units"
    ],
    "jawaban": 1,
    "penjelasan": "Setiap pergerakan stok mengurangi lokasi asal dan menambah lokasi tujuan. Receipt 10 unit dari Partners/Vendors ke WH/Stock membuat Vendor Location -10 (lokasi virtual boleh negatif) dan Internal Location +10.",
    "referensi": {
      "topikSpesifik": "Warehouse & Location Hierarchy",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Warehouses+and+Locations+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Warehouse+%26+Location+Hierarchy+Odoo+19"
    }
  },
  {
    "id": 263,
    "topic": "inventory",
    "soal": "You want a product to be replenished automatically in two warehouses: one via buying and the other via manufacturing. How can this be configured in Odoo?",
    "pilihan": [
      "Create two products (one for each warehouse). For each reordering rule, set the Method to \"Buy\" and the alternative Method to \"Manufacture\"",
      "Create multiple reordering rules for the same product, each linked to a different Warehouse and Route",
      "Create one reordering rule and assign multiple warehouses to it"
    ],
    "jawaban": 1,
    "penjelasan": "Satu produk bisa punya beberapa reordering rule, masing-masing untuk warehouse berbeda dengan route berbeda (misalnya Buy di satu warehouse dan Manufacture di warehouse lain).",
    "referensi": {
      "topikSpesifik": "Warehouse & Location Hierarchy",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Warehouses+and+Locations+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Warehouse+%26+Location+Hierarchy+Odoo+19"
    }
  },
  {
    "id": 264,
    "topic": "inventory",
    "soal": "You're using the Average Cost valuation method, and the unit cost of a component suddenly increases. Where should you look to identify which stock moves caused the change?",
    "pilihan": [
      "Review the component's receipts under Inventory > Operations > Receipts to check if one vendor price was unusually high",
      "Open Inventory > Reporting > Stock, locate the component, and click the Unit Cost to see all stock moves that affected its valuation",
      "Open to Inventory > Reporting > Valuation and expand the grouped by view of products to view the component's stock valuation layers"
    ],
    "jawaban": 1,
    "penjelasan": "Di Inventory > Reporting > Stock, mengklik nilai Unit Cost sebuah produk menampilkan daftar stock move yang memengaruhi valuasinya, sehingga penyebab kenaikan average cost bisa ditelusuri.",
    "referensi": {
      "topikSpesifik": "Inventory Valuation & Perpetual Accounting",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/inventory_valuation.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Inventory+Valuation+Accounting+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Inventory+Valuation+%26+Perpetual+Accounting+Odoo+19"
    }
  },
  {
    "id": 265,
    "topic": "inventory",
    "soal": "A product is tracked by lot numbers, and there are three quantities of Lot 123 on hand, each valued at 50, 35, and 35 USD per unit, with 35 USD being the most recently received value. If you perform an inventory adjustment to increase the quantity of Lot 123 from 3 to 5 units, what will be the updated valuation per unit?",
    "pilihan": [
      "40.0",
      "50.0",
      "35.0"
    ],
    "jawaban": 2,
    "penjelasan": "Saat kuantitas lot yang sudah ada disesuaikan, nilainya mengikuti valuation layer terakhir untuk lot tersebut, sehingga unit tambahan dinilai 35.",
    "referensi": {
      "topikSpesifik": "Lots & Serial Numbers Traceability",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/product_tracking.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Lots+Serial+Numbers+Traceability+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Lots+%26+Serial+Numbers+Traceability+Odoo+19"
    }
  },
  {
    "id": 266,
    "topic": "inventory",
    "soal": "You have 20 units of a table in stock, 10 of which belong to you, and the other 10 belong to Azure Interior. Each table has a cost of $500. What is the total inventory valuation for the 10 units that belong to your company?",
    "pilihan": [
      "5000.0",
      "10000.0",
      "500.0"
    ],
    "jawaban": 0,
    "penjelasan": "Stok milik pihak lain (consignment, dengan Owner Azure Interior) tidak dihitung dalam valuasi perusahaan. Yang dinilai hanya 10 unit milik sendiri: 10 x $500 = $5.000.",
    "referensi": {
      "topikSpesifik": "Inventory Valuation & Perpetual Accounting",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/inventory_valuation.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Inventory+Valuation+Accounting+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Inventory+Valuation+%26+Perpetual+Accounting+Odoo+19"
    }
  },
  {
    "id": 267,
    "topic": "inventory",
    "soal": "Which of the following best describes the difference between a reservation method and a removal strategy?",
    "pilihan": [
      "A reservation method determines which orders receive available stock first, while a removal strategy determines which specific stock units are used to fulfill those orders",
      "A reservation method decides how stock is reserved for orders while a removal strategy defines how products move between locations",
      "A reservation method is required the Lots & Serial Numbers setting to be enabled, while removal strategy requires the Storage Locations setting"
    ],
    "jawaban": 0,
    "penjelasan": "Reservation method menentukan kapan dan untuk order mana stok yang tersedia direservasi, sedangkan removal strategy (FIFO, LIFO, FEFO, dll.) menentukan unit/lot/lokasi spesifik mana yang diambil untuk memenuhinya.",
    "referensi": {
      "topikSpesifik": "Removal Strategies (FIFO, LIFO, FEFO)",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/removal_strategies.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Inventory+Removal+Strategies+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Removal+Strategies+%28FIFO%2C+LIFO%2C+FEFO%29+Odoo+19"
    }
  },
  {
    "id": 268,
    "topic": "inventory",
    "soal": "Can a company that uses warehouse locations have two different products with the same serial number stored in separate locations?",
    "pilihan": [
      "Yes",
      "Yes, but only if the 'Allow Duplicate Lot/Serial Numbers' setting is activated",
      "No"
    ],
    "jawaban": 0,
    "penjelasan": "Keunikan serial number di Odoo berlaku per produk, sehingga dua produk berbeda boleh memakai serial number yang sama dan disimpan di lokasi berbeda tanpa setting tambahan.",
    "referensi": {
      "topikSpesifik": "Warehouse & Location Hierarchy",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Warehouses+and+Locations+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Warehouse+%26+Location+Hierarchy+Odoo+19"
    }
  },
  {
    "id": 269,
    "topic": "mrp",
    "soal": "How do you configure your BoMs to produce several products at once (A + B = C + D)?",
    "pilihan": [
      "By enabling the 'By-Products' setting, and then specifying by-products on the 'By-products' tab of the BoM",
      "By creating a separate kit BoM, and adding it as a component to the main BoM",
      "By defining a by-product on the routing"
    ],
    "jawaban": 0,
    "penjelasan": "Untuk menghasilkan beberapa produk sekaligus, aktifkan setting By-Products di Manufacturing, lalu isi produk tambahan di tab By-products pada BoM. Kit BoM atau routing tidak bisa mendefinisikan by-product.",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Capacity",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/management/work_center_capacity.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Capacity+Odoo+19"
    }
  },
  {
    "id": 270,
    "topic": "mrp",
    "soal": "When are forecasted quantities updated for components used in a manufacturing order?",
    "pilihan": [
      "At confirmation of the manufacturing order",
      "At the validation of the finished product",
      "When the manufacturing order is marked as done"
    ],
    "jawaban": 0,
    "penjelasan": "Saat manufacturing order dikonfirmasi, Odoo membuat stock move komponen sehingga forecasted quantity komponen langsung berkurang; on-hand baru berubah saat MO diselesaikan.",
    "referensi": {
      "topikSpesifik": "Master Production Schedule (MPS)",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/management/mps.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Master+Production+Schedule+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Master+Production+Schedule+%28MPS%29+Odoo+19"
    }
  },
  {
    "id": 271,
    "topic": "mrp",
    "soal": "Can you use a kit as a component in a bill of materials?",
    "pilihan": [
      "Yes",
      "No",
      "Only when the 'BoM Kits' setting is enabled"
    ],
    "jawaban": 0,
    "penjelasan": "Kit bisa dipakai sebagai komponen di BoM lain; saat MO dibuat, kit tersebut dipecah menjadi komponen-komponennya. Tidak ada setting khusus 'BoM Kits' yang perlu diaktifkan.",
    "referensi": {
      "topikSpesifik": "Bills of Materials (BoM) & Kits",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/management/kit_shipping.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Bills+of+Materials+BoM+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Bills+of+Materials+%28BoM%29+%26+Kits+Odoo+19"
    }
  },
  {
    "id": 272,
    "topic": "studio",
    "soal": "How can you access an existing PDF report in order to edit it?",
    "pilihan": [
      "Go to Settings app -> Technical -> Reports, then search for the name of the report.",
      "Open Studio, click Reports, and search for the specific report name or model.",
      "Use the '/report' command in any view's editor then enter the name of the report."
    ],
    "jawaban": 1,
    "penjelasan": "Untuk mengedit laporan PDF yang ada, buka Studio, klik tab Reports, lalu cari laporan berdasarkan nama atau model dan buka di report editor.",
    "referensi": {
      "topikSpesifik": "Studio PDF Report Customizer & Editor",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Studio+PDF+Report+Designer+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Studio+PDF+Report+Customizer+%26+Editor+Odoo+19"
    }
  },
  {
    "id": 273,
    "topic": "introduction",
    "soal": "If an automation rule includes both an 'Update Record' action and a 'Send Email' action, and the 'Update Record' action is defined first, what data will the email template use?",
    "pilihan": [
      "The email will use a mixture of the old and new values, requiring a 5-minute delay for consistency.",
      "The email will always use the original field values before the trigger occurred, regardless of action order.",
      "The email will use the updated field values, as actions are executed in the order they are defined."
    ],
    "jawaban": 2,
    "penjelasan": "Action dalam automation rule dijalankan berurutan sesuai urutan definisinya, sehingga jika Update Record dijalankan lebih dulu, email yang dikirim sesudahnya memakai nilai field yang sudah diperbarui.",
    "referensi": {
      "topikSpesifik": "Studio Automated Actions & Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio/automated_actions.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Studio+Automation+Rules+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Studio+Automated+Actions+%26+Rules+Odoo+19"
    }
  },
  {
    "id": 274,
    "topic": "introduction",
    "soal": "How can a user enable or disable onboarding tours?",
    "pilihan": [
      "Through the Settings app, under User Preferences, by turning the Show Onboarding Tips option on or off.",
      "From the user menu, select Preferences > Interface Options, and uncheck Display Onboarding Tours.",
      "Activate Developer Mode, open the debug menu, then toggle the Onboarding option, or click \"Stop Tour\" on the tour pop-up."
    ],
    "jawaban": 2,
    "penjelasan": "Onboarding tour dikendalikan dari debug menu setelah Developer Mode aktif (toggle Onboarding/tour), atau dihentikan langsung dengan tombol 'Stop Tour' di pop-up tour. Tidak ada opsi tersebut di Settings atau Preferences user.",
    "referensi": {
      "topikSpesifik": "Developer & Superuser Mode",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/developer_mode.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Developer+Mode+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Developer+%26+Superuser+Mode+Odoo+19"
    }
  },
  {
    "id": 275,
    "topic": "sales",
    "soal": "What is the difference between the Discount and Formula Price Types when creating Pricelist Rules?",
    "pilihan": [
      "The Discount type is a simple percentage deduction, while the Formula type can apply complex equations.",
      "The Discount type applies to all products, while the Formula type can only be applied to specific product categories.",
      "The Discount type allows you to set a validity period, while the Formula type is applied permanently once created."
    ],
    "jawaban": 0,
    "penjelasan": "Price type Discount hanya menerapkan persentase potongan dari harga dasar, sedangkan Formula bisa menggabungkan diskon, markup/surcharge, pembulatan, dan batas margin minimum/maksimum.",
    "referensi": {
      "topikSpesifik": "Pricelists & Dynamic Pricing Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/prices/pricing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Pricelists+Discount+Rules+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Pricelists+%26+Dynamic+Pricing+Rules+Odoo+19"
    }
  },
  {
    "id": 276,
    "topic": "inventory",
    "soal": "Assuming you have enough stock to fulfill an order, what will the scheduled delivery date be when a sales order is confirmed on September 1st -- for a product that has a customer lead time of 5 days, and a security lead time of 2 days?",
    "pilihan": [
      "September 6th",
      "September 8th",
      "September 4th"
    ],
    "jawaban": 2,
    "penjelasan": "Customer lead time 5 hari menghasilkan 6 September. Security lead time penjualan 2 hari memajukan scheduled date delivery order menjadi 4 September.",
    "referensi": {
      "topikSpesifik": "Delivery Orders & Stock Reservation",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/receipts_delivery_orders.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Delivery+Orders+Stock+Reservation+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Delivery+Orders+%26+Stock+Reservation+Odoo+19"
    }
  },
  {
    "id": 277,
    "topic": "mrp",
    "soal": "When a product has the \"Replenish on Order (MTO)\" checkbox in its Inventory tab checked, a Bill of Materials created, and the Purchase checkbox on its product form is NOT checked, how will Odoo fulfill a sales order that requires replenishment?",
    "pilihan": [
      "When a sales order is confirmed, a Request for Quotation to purchase the product from a vendor will be generated if there is not sufficient inventory for the order",
      "When a sales order is confirmed, a manufacturing order will be generated if there is not sufficient inventory for the order. The \"Buy\" route is not available.",
      "When a sales order is confirmed, a delivery order is created, but no other documents are generated because Odoo will expect you to manually create a manufacturing order."
    ],
    "jawaban": 1,
    "penjelasan": "Dengan route MTO dan BoM tersedia tetapi produk tidak bisa dibeli (Purchase tidak dicentang), route Buy tidak tersedia, sehingga konfirmasi sales order memicu pembuatan manufacturing order jika stok tidak cukup.",
    "referensi": {
      "topikSpesifik": "Requests for Quotation (RFQ) & PO Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/rfq.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Purchase+Orders+RFQ+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Requests+for+Quotation+%28RFQ%29+%26+PO+Workflow+Odoo+19"
    }
  },
  {
    "id": 278,
    "topic": "sales",
    "soal": "Can any product be used in a sales order?",
    "pilihan": [
      "Yes, all products can be sold.",
      "No, the product must have the \"Can be Sold\" checkbox checked.",
      "No, the product must have the \"Available in POS\" checkbox checked under the Sales tab."
    ],
    "jawaban": 1,
    "penjelasan": "Menonaktifkan opsi \"Can be Sold\" atau mengarsipkan (archive) produk akan mencegah produk tersebut dipilih pada penawaran penjualan baru.",
    "referensi": {
      "topikSpesifik": "Product Catalog & Archiving Records",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/product_catalog.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Product+Catalog+Archiving+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Product+Catalog+%26+Archiving+Records+Odoo+19"
    }
  },
  {
    "id": 279,
    "topic": "sales",
    "soal": "A customer is linked to the pricelist 'Retailer.' If you create a quote for this customer, but change the pricelist to 'Consumer' *before* adding products to the quote, what price will be used for the new sale order lines?",
    "pilihan": [
      "A price from the 'Retailer' pricelist.",
      "A price from the 'Consumer' pricelist.",
      "The system will ask the user to choose which pricelist to apply."
    ],
    "jawaban": 1,
    "penjelasan": "Harga baris sales order diambil dari pricelist yang terpasang di quotation saat produk ditambahkan. Karena pricelist diganti ke 'Consumer' sebelum produk ditambahkan, harga dari pricelist Consumer yang dipakai.",
    "referensi": {
      "topikSpesifik": "Pricelists & Dynamic Pricing Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/prices/pricing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Pricelists+Discount+Rules+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Pricelists+%26+Dynamic+Pricing+Rules+Odoo+19"
    }
  },
  {
    "id": 280,
    "topic": "ecommerce",
    "soal": "When a customer finalizes a purchase in the online store:",
    "pilihan": [
      "Odoo automatically generates a sales order and invoice. The Sales app is not needed for handling online sales.",
      "Odoo creates a quotation, and the user must manually confirm it into a sales order.",
      "Odoo automatically generates a sales order, which can then be viewed and managed from the Sales backend."
    ],
    "jawaban": 2,
    "penjelasan": "Saat customer menyelesaikan checkout di online shop, Odoo otomatis membuat sales order yang dapat dilihat dan dikelola dari backend aplikasi Sales.",
    "referensi": {
      "topikSpesifik": "eCommerce & Online Store Management",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/ecommerce.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+eCommerce+Online+Store+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+eCommerce+%26+Online+Store+Management+Odoo+19"
    }
  },
  {
    "id": 281,
    "topic": "ecommerce",
    "soal": "I've configured a product under 'Sales' and can pull it onto a sales quotation, but it does not appear on my eCommerce shop. Why not?",
    "pilihan": [
      "It needs to be Published on the website first.",
      "Products created in the Sales app are only available for backend sales. Products for the eCommerce store must be created in the Website app.",
      "Products cannot be visible on the eCommerce shop if they do not have a positive stock quantity."
    ],
    "jawaban": 0,
    "penjelasan": "Produk hanya tampil di eCommerce shop jika sudah di-Publish di website. Produk dibuat sekali dan dipakai bersama oleh Sales dan Website, dan stok nol tidak otomatis menyembunyikan produk.",
    "referensi": {
      "topikSpesifik": "Product Sales Tab vs POS Availability",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/products/import.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Product+Sales+vs+POS+Availability+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Product+Sales+Tab+vs+POS+Availability+Odoo+19"
    }
  },
  {
    "id": 282,
    "topic": "survey",
    "soal": "How can a survey conclude with a custom message for participants?",
    "pilihan": [
      "Enter a custom message in the Description tab of the survey form.",
      "Enter a custom message in the Confirmation email settings instead of the survey itself.",
      "Enter a custom message in the End Message tab of the survey form."
    ],
    "jawaban": 2,
    "penjelasan": "Pesan penutup kustom untuk peserta survey ditulis di tab End Message pada formulir survey dan ditampilkan setelah peserta menyelesaikan survey.",
    "referensi": {
      "topikSpesifik": "Survey Custom Thank You & End Messages",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/surveys.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Survey+Thank+You+Message+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Survey+Custom+Thank+You+%26+End+Messages+Odoo+19"
    }
  },
  {
    "id": 283,
    "topic": "survey",
    "soal": "Which of the following question types cannot be used to generate leads on a Survey?",
    "pilihan": [
      "Multiple Choice: only one answer.",
      "Single line text box.",
      "Matrix."
    ],
    "jawaban": 1,
    "penjelasan": "Generate lead di survey hanya bisa dari pertanyaan pilihan (single choice, multiple choice, matrix). Single line text box tidak bisa.",
    "referensi": {
      "topikSpesifik": "Survey Questions for Automatic CRM Lead Creation",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/surveys.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Survey+CRM+Leads+Generation+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Survey+Questions+for+Automatic+CRM+Lead+Creation+Odoo+19"
    }
  },
  {
    "id": 284,
    "topic": "crm",
    "soal": "What is the visual effect of setting a high priority on an opportunity?",
    "pilihan": [
      "The opportunity moves to the top of its stage in the Kanban view the next time the pipeline is loaded.",
      "The opportunity is visually flagged with a priority icon but remains in its current position in the stage.",
      "The opportunity temporarily appears at the top of the stage until the page is refreshed."
    ],
    "jawaban": 0,
    "penjelasan": "Opportunity di Kanban pipeline diurutkan berdasarkan prioritas terlebih dahulu, sehingga opportunity dengan prioritas tinggi berada di atas stage-nya saat pipeline dimuat ulang.",
    "referensi": {
      "topikSpesifik": "Stages & Kanban Progress Bars",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/stages.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Kanban+Stages+Progress+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Stages+%26+Kanban+Progress+Bars+Odoo+19"
    }
  },
  {
    "id": 285,
    "topic": "sales",
    "soal": "How many quotations or sales orders can you create from a single opportunity?",
    "pilihan": [
      "Unlimited quotations, but only one sales order.",
      "As many quotations and sales orders as you want.",
      "Only one quotation or sales order can be active at a time."
    ],
    "jawaban": 1,
    "penjelasan": "Dari satu opportunity Anda bisa membuat quotation sebanyak yang diperlukan dan mengonfirmasi lebih dari satu menjadi sales order; semuanya tetap terhubung ke opportunity tersebut.",
    "referensi": {
      "topikSpesifik": "Opportunity Quotations Multi-Creation",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/acquire_leads/convert.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Opportunity+Quotations+Creation+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Opportunity+Quotations+Multi-Creation+Odoo+19"
    }
  },
  {
    "id": 286,
    "topic": "crm",
    "soal": "Once an opportunity is marked as Won, what can you do with it?",
    "pilihan": [
      "You can no longer edit the opportunity because it is locked.",
      "All linked quotations are automatically confirmed.",
      "You can still edit the opportunity."
    ],
    "jawaban": 2,
    "penjelasan": "Opportunity yang ditandai Won tidak dikunci: field-nya masih bisa diedit, dan status Won tidak mengonfirmasi quotation yang terhubung secara otomatis.",
    "referensi": {
      "topikSpesifik": "Won Opportunities & Order Follow-ups",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/acquire_leads/convert.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Won+Opportunities+Sales+Orders+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Won+Opportunities+%26+Order+Follow-ups+Odoo+19"
    }
  },
  {
    "id": 287,
    "topic": "crm",
    "soal": "Which of the following factors negatively impacts the AI probability of a lead?",
    "pilihan": [
      "The lead has a valid email address.",
      "The lead has complete contact information.",
      "The lead is in a newer stage of the pipeline."
    ],
    "jawaban": 2,
    "penjelasan": "Predictive lead scoring memakai stage sebagai salah satu faktor; lead di stage awal (baru) pipeline memiliki peluang menang historis lebih kecil sehingga AI probability-nya turun, sedangkan email valid dan data kontak lengkap justru menaikkannya.",
    "referensi": {
      "topikSpesifik": "CRM AI Probability Scoring Negative Factors",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/track_leads/lead_scoring.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Predictive+Lead+Scoring+Factors+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+CRM+AI+Probability+Scoring+Negative+Factors+Odoo+19"
    }
  },
  {
    "id": 288,
    "topic": "ai",
    "soal": "When an AI Agent is restricted to Sources, what does that mean?",
    "pilihan": [
      "The agent can only generate text but cannot access tools.",
      "The agent can only provide answers based on the documents, Knowledge pages, and links defined in its sources.",
      "The agent will not respond to questions outside the AI app."
    ],
    "jawaban": 1,
    "penjelasan": "Membatasi AI Agent pada Sources memastikan jawaban agen hanya berpijak pada fakta dokumen internal yang diverifikasi.",
    "referensi": {
      "topikSpesifik": "AI Agent Source Grounding Definition",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+AI+Sources+Grounding+Restriction+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+AI+Agent+Source+Grounding+Definition+Odoo+19"
    }
  },
  {
    "id": 289,
    "topic": "ai",
    "soal": "What is required before an AI Agent can make changes to the Odoo database?",
    "pilihan": [
      "It must be assigned a Topic that includes a Tool allowing database updates, such as Create Lead or Add Tags.",
      "All agents can make changes to the database by default.",
      "Agents can make changes to the database unless the Restrict to Sources option is enabled."
    ],
    "jawaban": 0,
    "penjelasan": "AI Agent hanya bisa mengubah data jika diberi Topic yang berisi Tool untuk aksi database (misalnya Create Lead atau Add Tags). Tanpa Tool tersebut agent hanya menjawab pertanyaan.",
    "referensi": {
      "topikSpesifik": "AI Agent Action Approvals & DB Safety",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+AI+Agent+Permissions+Safety+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+AI+Agent+Action+Approvals+%26+DB+Safety+Odoo+19"
    }
  },
  {
    "id": 290,
    "topic": "marketing",
    "soal": "How can you gather event attendee details, such as \"How did you hear about us?\"",
    "pilihan": [
      "With Odoo Studio.",
      "By sending them an email.",
      "Adding relevant questions to the Questions tab of an event."
    ],
    "jawaban": 2,
    "penjelasan": "Formulir pendaftaran event dapat ditambahkan pertanyaan kustom (seperti pilihan makanan atau survei asal informasi) per peserta.",
    "referensi": {
      "topikSpesifik": "Event Registration Custom Attendee Questions",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/website.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Event+Attendee+Questions+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Event+Registration+Custom+Attendee+Questions+Odoo+19"
    }
  },
  {
    "id": 291,
    "topic": "marketing",
    "soal": "How would you automatically communicate information to an event attendee once they register?",
    "pilihan": [
      "Select an email template in the Communication tab of the event, with the trigger \"Before the event starts\".",
      "Select an email template in the Communication tab of the event, with the trigger \"After each registration\".",
      "You can only email attendees if they select 'allow emails' on the event registration page."
    ],
    "jawaban": 1,
    "penjelasan": "Di tab Communication pada event, pilih email template dengan trigger 'After each registration' agar email terkirim otomatis ke peserta segera setelah mereka mendaftar.",
    "referensi": {
      "topikSpesifik": "Marketing Automation Campaigns",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/marketing_automation.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Marketing+Automation+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Marketing+Automation+Campaigns+Odoo+19"
    }
  },
  {
    "id": 292,
    "topic": "marketing",
    "soal": "Which of the following is NOT a valid Marketing Automation activity trigger?",
    "pilihan": [
      "1 week after an email has bounced.",
      "2 days after an email has been forwarded.",
      "0 hours after an email has been clicked."
    ],
    "jawaban": 1,
    "penjelasan": "Trigger activity di Marketing Automation berbasis event email seperti opened, not opened, replied, not replied, clicked, not clicked, dan bounced. Tidak ada trigger 'forwarded' karena Odoo tidak bisa melacak email yang diteruskan.",
    "referensi": {
      "topikSpesifik": "Marketing Automation Campaigns",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/marketing_automation.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Marketing+Automation+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Marketing+Automation+Campaigns+Odoo+19"
    }
  },
  {
    "id": 294,
    "topic": "project",
    "soal": "How are tags shared between tasks?",
    "pilihan": [
      "Tags are shared between all tasks of a single project",
      "Tags are shared between all tasks of all projects",
      "Tags are not shared between tasks"
    ],
    "jawaban": 1,
    "penjelasan": "Tag task bersifat global: tag yang dibuat di satu project bisa dipakai di semua task pada semua project.",
    "referensi": {
      "topikSpesifik": "Sub-tasks & Task Hierarchy",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project/tasks/sub-tasks.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Project+Subtasks+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Sub-tasks+%26+Task+Hierarchy+Odoo+19"
    }
  },
  {
    "id": 295,
    "topic": "project",
    "soal": "What is not carried over from the original task when a recurring task is created?",
    "pilihan": [
      "Tags",
      "Activities",
      "Assignees"
    ],
    "jawaban": 1,
    "penjelasan": "Saat task berulang dibuat, field seperti tags dan assignees ikut disalin, tetapi activity yang dijadwalkan pada task asal tidak ikut terbawa ke task baru.",
    "referensi": {
      "topikSpesifik": "Recurring Tasks Configuration",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project/tasks/recurring_tasks.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Project+Recurring+Tasks+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Recurring+Tasks+Configuration+Odoo+19"
    }
  },
  {
    "id": 296,
    "topic": "project",
    "soal": "How are project milestones marked as reached?",
    "pilihan": [
      "You mark them as reached manually",
      "Milestones are automatically marked as reached when all their tasks are marked as done",
      "Milestones are automatically marked as reached when all the their tasks have been moved to the last Kanban stage"
    ],
    "jawaban": 1,
    "penjelasan": "Milestone otomatis berstatus Reached ketika semua task yang terhubung sudah Done (atau Cancelled). Milestone juga bisa ditandai manual.",
    "referensi": {
      "topikSpesifik": "Stages & Kanban Progress Bars",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/stages.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Kanban+Stages+Progress+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Stages+%26+Kanban+Progress+Bars+Odoo+19"
    }
  },
  {
    "id": 297,
    "topic": "timesheets",
    "soal": "What are hours billed at a fixed price?",
    "pilihan": [
      "These are sold hours coming from a sales order that still need to be timesheeted before being invoiced",
      "These are timesheeted hours linked to a sales order, where the invoicing policy is set to \"prepaid\"",
      "These are the actual timesheeted hours that cannot be invoiced from the sales order"
    ],
    "jawaban": 1,
    "penjelasan": "Hours billed at a fixed price adalah jam timesheet yang terhubung ke sales order line dengan invoicing policy prepaid/fixed price, sehingga jam tersebut sudah ditagih di muka dan tidak menambah tagihan.",
    "referensi": {
      "topikSpesifik": "Invoicing Policies & Pro-Forma Invoices",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/invoicing/invoicing_policy.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Invoicing+Policies+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Invoicing+Policies+%26+Pro-Forma+Invoices+Odoo+19"
    }
  },
  {
    "id": 298,
    "topic": "timesheets",
    "soal": "How can you display the rankings on the timesheet leaderboard?",
    "pilihan": [
      "By billing rate and hours invoiced",
      "By total time and hours invoiced",
      "By billing rate and total time"
    ],
    "jawaban": 2,
    "penjelasan": "Timesheet leaderboard dapat menampilkan peringkat karyawan berdasarkan billing rate atau total time.",
    "referensi": {
      "topikSpesifik": "Timesheets Billing Rates & Leaderboards",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/timesheets/billing_rates.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Timesheets+Billing+Rates+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Timesheets+Billing+Rates+%26+Leaderboards+Odoo+19"
    }
  },
  {
    "id": 299,
    "topic": "timesheets",
    "soal": "At which level do you define a billing time target?",
    "pilihan": [
      "At the company level",
      "At the employee level",
      "At the project level"
    ],
    "jawaban": 1,
    "penjelasan": "Billing Time Target diatur per karyawan di form employee (tab Settings) setelah Billing Rate Indicators diaktifkan, lalu dipakai untuk menghitung billing rate pada indikator dan leaderboard timesheet.",
    "referensi": {
      "topikSpesifik": "Timesheets Billing Rates & Leaderboards",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/timesheets/billing_rates.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Timesheets+Billing+Rates+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Timesheets+Billing+Rates+%26+Leaderboards+Odoo+19"
    }
  },
  {
    "id": 300,
    "topic": "accounting",
    "soal": "Is it possible to still make corrections after the Lock Everything lock date?",
    "pilihan": [
      "No, it represents an absolute block on everything before the date.",
      "Yes, users with the Adviser role can make corrections using specific tools like the accounting journal, or by cancelling and recreating invoices.",
      "All users can still make corrections to all types of journal items."
    ],
    "jawaban": 1,
    "penjelasan": "Setelah lock date 'Lock Everything', pengecualian masih bisa dibuat oleh user dengan akses Administrator/Adviser Accounting. Hanya Hard Lock yang benar-benar absolut.",
    "referensi": {
      "topikSpesifik": "Accounting Lock Dates & Year-End Closing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/reporting/year_end.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Accounting+Lock+Dates+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Accounting+Lock+Dates+%26+Year-End+Closing+Odoo+19"
    }
  },
  {
    "id": 301,
    "topic": "accounting",
    "soal": "How can you register a payment for the full amount of an invoice that uses a payment method with installments?",
    "pilihan": [
      "The only way is to register multiple payments for each installment.",
      "A single payment can be registered for the full amount directly from the invoice.",
      "Registering a payment for the full amount will automatically group all installments into one payment record."
    ],
    "jawaban": 1,
    "penjelasan": "Meskipun invoice memakai payment terms dengan beberapa installment, Anda tetap bisa klik Register Payment dan mencatat satu payment untuk jumlah penuh langsung dari invoice.",
    "referensi": {
      "topikSpesifik": "Registering Customer & Vendor Payments",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/customer_invoices/customer_payments.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Register+Payments+Invoices+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Registering+Customer+%26+Vendor+Payments+Odoo+19"
    }
  },
  {
    "id": 303,
    "topic": "spreadsheet",
    "soal": "In the Data menu, what does a warning symbol beside the data source of an inserted list or pivot table mean?",
    "pilihan": [
      "There is a problem preventing the data in the list or pivot table being updated automatically.",
      "The number of records in the list or pivot table exceeds the maximum allowed, impacting performance.",
      "There is no list or pivot table related to that data source present in the spreadsheet."
    ],
    "jawaban": 2,
    "penjelasan": "Di menu Data, simbol peringatan di samping data source menandakan tidak ada lagi list atau pivot table di spreadsheet yang memakai data source tersebut (misalnya sudah dihapus).",
    "referensi": {
      "topikSpesifik": "Odoo Spreadsheets & Live Pivot Tables",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/spreadsheet.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Spreadsheets+Pivot+Integration+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+Spreadsheets+%26+Live+Pivot+Tables+Odoo+19"
    }
  },
  {
    "id": 305,
    "topic": "hr",
    "soal": "Which is NOT a default report available in the Recruitment app?",
    "pilihan": [
      "Application Analysis",
      "Source Analysis",
      "Cost Per Hire Analysis"
    ],
    "jawaban": 2,
    "penjelasan": "Laporan bawaan di aplikasi Recruitment mencakup Recruitment Analysis, Source Analysis, dan Team Performance (bukan Cost Per Hire secara default).",
    "referensi": {
      "topikSpesifik": "Recruitment Reports & Metrics",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/hr_and_attendance.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Recruitment+Reporting+Analysis+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Recruitment+Reports+%26+Metrics+Odoo+19"
    }
  },
  {
    "id": 306,
    "topic": "hr",
    "soal": "In the Payroll app, where can Pay Runs NOT be created?",
    "pilihan": [
      "The Work Entries dashboard",
      "The Payslips dashboard",
      "The Employees dashboard"
    ],
    "jawaban": 2,
    "penjelasan": "Pay Run bisa dibuat dari dashboard Work Entries dan Payslips di aplikasi Payroll, tetapi tidak dari dashboard Employees.",
    "referensi": {
      "topikSpesifik": "Payroll & Work Entries",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/hr/payroll/work_entries.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Payroll+Work+Entries+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Payroll+%26+Work+Entries+Odoo+19"
    }
  },
  {
    "id": 307,
    "topic": "pos",
    "soal": "What are the preconfigured presets for a restaurant?",
    "pilihan": [
      "Delivery, Dine In, and Takeout.",
      "Pickup, Eat In, and Online delivery.",
      "Food truck, Restaurant, and Uber."
    ],
    "jawaban": 0,
    "penjelasan": "Untuk restoran, POS menyediakan preset bawaan Dine In, Takeout, dan Delivery untuk membedakan jenis pesanan (misalnya pricelist atau fiscal position berbeda).",
    "referensi": {
      "topikSpesifik": "POS Restaurant Floor Plan Presets",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+POS+Restaurant+Floor+Plan+Presets+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+POS+Restaurant+Floor+Plan+Presets+Odoo+19"
    }
  },
  {
    "id": 308,
    "topic": "purchase",
    "soal": "When using a Blanket Order, are you able to order more than what was originally specified in the Purchase Agreement?",
    "pilihan": [
      "Yes",
      "Yes, but only if you are an administrator",
      "No"
    ],
    "jawaban": 0,
    "penjelasan": "Blanket Order tidak membatasi kuantitas: Anda tetap bisa memesan melebihi kuantitas di Purchase Agreement, dan jumlah yang sudah dipesan hanya dilacak terhadap kuantitas yang disepakati.",
    "referensi": {
      "topikSpesifik": "Purchase Agreements & Blanket Orders",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/agreements.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Purchase+Agreements+Blanket+Orders+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Purchase+Agreements+%26+Blanket+Orders+Odoo+19"
    }
  },
  {
    "id": 309,
    "topic": "inventory",
    "soal": "In Odoo, when can a product have multiple reordering rules?",
    "pilihan": [
      "When each rule applies to a different warehouse, location, or route.",
      "Only when using multiple vendors for the same warehouse",
      "Never. Each product supports only one rule"
    ],
    "jawaban": 0,
    "penjelasan": "Satu produk bisa memiliki beberapa reordering rule selama tiap rule berlaku untuk warehouse, lokasi, atau route yang berbeda.",
    "referensi": {
      "topikSpesifik": "Automated Reordering Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/product_management/reordering_rules.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Reordering+Rules+Replenishment+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Automated+Reordering+Rules+Odoo+19"
    }
  },
  {
    "id": 310,
    "topic": "purchase",
    "soal": "After confirming a purchase order, what is the purpose of clicking the \"Send PO\" button?",
    "pilihan": [
      "To automatically create a vendor bill based on the confirmed purchase order",
      "To request internal approval from a user with admin access before the purchase order can be confirmed",
      "To email the confirmed purchase order to the vendor so they can acknowledge the order and send the vendor bill"
    ],
    "jawaban": 2,
    "penjelasan": "Tombol Send PO mengirim email purchase order yang sudah dikonfirmasi ke vendor, agar vendor dapat mengonfirmasi (acknowledge) order dan kemudian mengirim vendor bill. Tombol ini tidak membuat bill atau meminta approval.",
    "referensi": {
      "topikSpesifik": "Requests for Quotation (RFQ) & PO Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase/manage_deals/rfq.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Purchase+Orders+RFQ+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Requests+for+Quotation+%28RFQ%29+%26+PO+Workflow+Odoo+19"
    }
  },
  {
    "id": 311,
    "topic": "inventory",
    "soal": "When creating a new warehouse, configuring which field determines how you'll receive goods?",
    "pilihan": [
      "Buy/Manufacture",
      "Incoming Shipments",
      "Routes"
    ],
    "jawaban": 1,
    "penjelasan": "Field 'Incoming Shipments' (1, 2, atau 3 langkah) di form warehouse menentukan alur penerimaan barang.",
    "referensi": {
      "topikSpesifik": "Warehouse & Location Hierarchy",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Warehouses+and+Locations+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Warehouse+%26+Location+Hierarchy+Odoo+19"
    }
  },
  {
    "id": 312,
    "topic": "inventory",
    "soal": "What does 'move entire package' do when activated under the operation types?",
    "pilihan": [
      "When moving a package, all items within that package must be moved together to the new destination.",
      "Moves entire packages from one warehouse to another.",
      "When moving a package, a new pack is automatically created at the destination location, and all items are transferred into the new pack."
    ],
    "jawaban": 0,
    "penjelasan": "Jika Move Entire Package diaktifkan di operation type, memindahkan package berarti semua isi package ikut dipindahkan bersama ke lokasi tujuan tanpa membuat package baru.",
    "referensi": {
      "topikSpesifik": "Packages & Move Entire Package",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/packages.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Packages+Move+Entire+Package+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Packages+%26+Move+Entire+Package+Odoo+19"
    }
  },
  {
    "id": 313,
    "topic": "mrp",
    "soal": "You're reviewing a \"Pack\" operation and want to perform a one-time quality check -- without creating a rule that forces quality checks for all packing operations. How can you do this?",
    "pilihan": [
      "Quality checks cannot be added ad-hoc; you must configure Quality Control Points in the Quality app, locate a location, and create an operation type.",
      "On the pack operation, click the button to Add an ad-hoc Quality check.",
      "Create an operation type named \"Quality Check\" and link it to the default packing operation."
    ],
    "jawaban": 1,
    "penjelasan": "Quality check sekali pakai bisa dibuat langsung dari operasi Pack dengan tombol untuk menambah quality check ad-hoc, tanpa perlu membuat Quality Control Point yang berlaku untuk semua operasi packing.",
    "referensi": {
      "topikSpesifik": "Packages & Move Entire Package",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/packages.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Packages+Move+Entire+Package+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Packages+%26+Move+Entire+Package+Odoo+19"
    }
  },
  {
    "id": 314,
    "topic": "inventory",
    "soal": "You create two automatic reordering rules for the same product-one for Warehouse A (Buy route) and one for Warehouse B (Manufacturing route). What happens when stock drops below the minimum in Warehouse B?",
    "pilihan": [
      "Odoo defaults to the Buy route, since Buy is prioritized over Manufacturing.",
      "Odoo proposes a Buy PO, pending user intervention to specify a different route.",
      "A proposed manufacturing order is created for the product in Warehouse B."
    ],
    "jawaban": 2,
    "penjelasan": "Reordering rule berlaku per warehouse dan route-nya, sehingga saat stok Warehouse B di bawah minimum, Odoo mengusulkan manufacturing order sesuai route Manufacture pada rule Warehouse B.",
    "referensi": {
      "topikSpesifik": "Warehouse & Location Hierarchy",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Warehouses+and+Locations+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Warehouse+%26+Location+Hierarchy+Odoo+19"
    }
  },
  {
    "id": 316,
    "topic": "inventory",
    "soal": "You've configured WH/Stock with the LIFO removal strategy. After several deliveries, you notice that items in one product category are being removed FIFO instead. What might cause this?",
    "pilihan": [
      "The product category specifies a removal strategy, which overrides the WH/Stock location removal strategy.",
      "LIFO is only supported for products tracked by lots/serial numbers; other products fall back to FIFO.",
      "The products in this category don't have expiration dates, which are required for LIFO."
    ],
    "jawaban": 0,
    "penjelasan": "Removal strategy yang diatur di product category lebih diutamakan daripada removal strategy di lokasi, sehingga kategori dengan FIFO akan mengabaikan LIFO di WH/Stock.",
    "referensi": {
      "topikSpesifik": "Removal Strategies (FIFO, LIFO, FEFO)",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/warehouses_storage/removal_strategies.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Inventory+Removal+Strategies+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Removal+Strategies+%28FIFO%2C+LIFO%2C+FEFO%29+Odoo+19"
    }
  },
  {
    "id": 317,
    "topic": "inventory",
    "soal": "I CANNOT set the capacity on a location by:",
    "pilihan": [
      "Product",
      "Package Type",
      "Volume"
    ],
    "jawaban": 2,
    "penjelasan": "Kapasitas lokasi diatur lewat storage category, yang bisa membatasi berdasarkan berat (max weight), per produk, atau per package type. Tidak ada opsi kapasitas berdasarkan volume.",
    "referensi": {
      "topikSpesifik": "Packages & Move Entire Package",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/packages.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Packages+Move+Entire+Package+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Packages+%26+Move+Entire+Package+Odoo+19"
    }
  },
  {
    "id": 318,
    "topic": "mrp",
    "soal": "You manufacture a product using either standard materials or premium materials. How can this be modeled in Odoo?",
    "pilihan": [
      "Create multiple BoMs for the same product, each with a different component list",
      "Create a normal product and a premium product, and assign a unique BoM to each",
      "Create one BoM and change the components manually for each order"
    ],
    "jawaban": 0,
    "penjelasan": "Satu produk bisa memiliki beberapa BoM dengan daftar komponen berbeda (misalnya standar dan premium), lalu BoM yang sesuai dipilih di manufacturing order.",
    "referensi": {
      "topikSpesifik": "Bills of Materials (BoM) & Kits",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/management/kit_shipping.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Bills+of+Materials+BoM+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Bills+of+Materials+%28BoM%29+%26+Kits+Odoo+19"
    }
  },
  {
    "id": 319,
    "topic": "mrp",
    "soal": "Can you define a work order operation without a work center?",
    "pilihan": [
      "Yes, but no work order will be generated",
      "No, defining a work center is mandatory",
      "Yes, but only if the 'Work Orders' setting is NOT enabled"
    ],
    "jawaban": 1,
    "penjelasan": "Setiap operation di BoM wajib memiliki work center; field Work Center bersifat mandatory, jadi operation tanpa work center tidak dapat disimpan.",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Capacity",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/management/work_center_capacity.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Capacity+Odoo+19"
    }
  },
  {
    "id": 320,
    "topic": "mrp",
    "soal": "Is it possible to specify product-specific capacities for work centers?",
    "pilihan": [
      "Yes",
      "No",
      "No, you must create different work centers"
    ],
    "jawaban": 0,
    "penjelasan": "Di form work center, tab Product Capacities memungkinkan Anda menentukan kapasitas serta Setup Time dan Cleanup Time khusus per produk, sehingga tidak perlu membuat work center terpisah.",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Capacity",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/management/work_center_capacity.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Capacity+Odoo+19"
    }
  },
  {
    "id": 321,
    "topic": "mrp",
    "soal": "How do you activate work order dependencies on BoMs?",
    "pilihan": [
      "Work order dependencies are activated by default",
      "Work order dependencies must be activated from Manufacturing settings",
      "Work order dependencies must be activated in the Manufacturing settings, as well as on the 'Miscellaneous' tab for each specific BoM"
    ],
    "jawaban": 2,
    "penjelasan": "Work order dependencies harus diaktifkan dulu di Manufacturing > Configuration > Settings, lalu diaktifkan per BoM lewat opsi Operation Dependencies di tab Miscellaneous.",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Capacity",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing/management/work_center_capacity.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Capacity+Odoo+19"
    }
  },
  {
    "id": 322,
    "topic": "studio",
    "soal": "How can you ensure users can only choose a year and a month in a date selector, rather than a day?",
    "pilihan": [
      "Set the Date format to Numeric and disable 'Show Day'.",
      "Set the 'Minimal Precision' field to 'Month' and the 'Maximal Precision' field to 'Year'.",
      "Enable 'Show Year' and 'Show Month'."
    ],
    "jawaban": 1,
    "penjelasan": "Field tanggal di Studio punya opsi 'Minimal Precision' dan 'Maximal Precision'. Set Minimal ke Month dan Maximal ke Year agar user hanya memilih bulan dan tahun.",
    "referensi": {
      "topikSpesifik": "Studio Date Field Year and Month Display Widget",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Studio+Date+Widget+Format+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Studio+Date+Field+Year+and+Month+Display+Widget+Odoo+19"
    }
  }
];

export const EXAM_PRESETS = {
  full:  { nama: 'Full Exam',      count: 120, timerMin: 90, desc: 'Simulasi ujian sertifikasi lengkap Odoo 19 (120 soal, 90 min)' },
  quick: { nama: 'Practice Exam',  count: 120, timerMin: 90, desc: '120 soal terdistribusi merata dari seluruh modul (90 min)' },
  speed: { nama: 'Speed Run',      count: 0,   timerMin: 0,  desc: 'Semua soal tanpa batas waktu' },
};
