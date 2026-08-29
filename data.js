// data.js — 322 soal sertifikasi Odoo 19 (Enriched with Specific References & Explanations)

export const TOPICS = [
  {
    "id": "introduction",
    "nama": "Introduction",
    "icon": "home",
    "soalCount": 49
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
    "soalCount": 8
  },
  {
    "id": "crm",
    "nama": "CRM",
    "icon": "users",
    "soalCount": 27
  },
  {
    "id": "ai",
    "nama": "AI",
    "icon": "bot",
    "soalCount": 12
  },
  {
    "id": "marketing",
    "nama": "Marketing",
    "icon": "megaphone",
    "soalCount": 6
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
    "soalCount": 8
  },
  {
    "id": "knowledge",
    "nama": "Knowledge",
    "icon": "book",
    "soalCount": 7
  },
  {
    "id": "project",
    "nama": "Project",
    "icon": "clipboard",
    "soalCount": 19
  },
  {
    "id": "timesheets",
    "nama": "Timesheets",
    "icon": "clock",
    "soalCount": 6
  },
  {
    "id": "accounting",
    "nama": "Accounting",
    "icon": "dollar-sign",
    "soalCount": 24
  },
  {
    "id": "spreadsheet",
    "nama": "Spreadsheet",
    "icon": "table",
    "soalCount": 6
  },
  {
    "id": "hr",
    "nama": "HR",
    "icon": "user",
    "soalCount": 11
  },
  {
    "id": "pos",
    "nama": "POS",
    "icon": "monitor",
    "soalCount": 8
  },
  {
    "id": "purchase",
    "nama": "Purchase",
    "icon": "truck",
    "soalCount": 40
  },
  {
    "id": "inventory",
    "nama": "Inventory",
    "icon": "archive",
    "soalCount": 12
  },
  {
    "id": "mrp",
    "nama": "MRP",
    "icon": "settings",
    "soalCount": 31
  },
  {
    "id": "studio",
    "nama": "Studio",
    "icon": "pen-tool",
    "soalCount": 11
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
    "penjelasan": "Di Odoo multi-company, mengosongkan field \"Company\" pada contact record membuatnya bersifat global dan dapat diakses oleh seluruh entitas perusahaan.",
    "referensi": {
      "topikSpesifik": "Multi-Company Setup & Records Sharing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/companies/multi_companies.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Multi+Company+Customer+Share",
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
    "penjelasan": "Field One2Many di Odoo Studio membutuhkan field Many2One pada model target sebagai relasi penghubungnya.",
    "referensi": {
      "topikSpesifik": "Odoo Studio & Relational Fields",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Studio+Customization",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+Studio+%26+Relational+Fields+Odoo+19"
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
    "jawaban": 2,
    "penjelasan": "Pesan (discussion) di chatter bersifat publik/notifikasi ke followers dan customer, sedangkan log note ditujukan untuk catatan internal tim.",
    "referensi": {
      "topikSpesifik": "Chatter, Log Notes & Activities",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/activities.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Chatter+Log+Notes+Activities",
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
    "penjelasan": "Point of Sale (POS) mendukung penjualan kasir offline, pengelolaan meja restoran, dan kontrol uang kas harian.",
    "referensi": {
      "topikSpesifik": "Point of Sale (POS) Operations",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Point+of+Sale+POS",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Point+of+Sale+%28POS%29+Operations+Odoo+19"
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
    "penjelasan": "Pesan (discussion) di chatter bersifat publik/notifikasi ke followers dan customer, sedangkan log note ditujukan untuk catatan internal tim.",
    "referensi": {
      "topikSpesifik": "Chatter, Log Notes & Activities",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/activities.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Chatter+Log+Notes+Activities",
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
    "penjelasan": "Saat menggabungkan kontak (merge), field master tetap dipertahankan dan data non-kosong dari kontak sekunder digabungkan ke master.",
    "referensi": {
      "topikSpesifik": "Merge Duplicate Contacts",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/contacts/merge.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Merge+Contacts+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Merge+Duplicate+Contacts+Odoo+19"
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
    "penjelasan": "Pricelist Odoo mendukung diskon persentase, formula berbasis cost/sales price, pembulatan (rounding), dan biaya tambahan (extra fee).",
    "referensi": {
      "topikSpesifik": "Pricelists, Discount & Price Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/prices/pricing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Pricelists+Discount+Rules",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Pricelists%2C+Discount+%26+Price+Rules+Odoo+19"
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
    "penjelasan": "Margin dihitung dari selisih harga jual dan harga pokok (cost). Di Sales Order, margin tampil langsung di baris order atau laporan analisis penjualan.",
    "referensi": {
      "topikSpesifik": "Sales Margins & Profitability Analysis",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/margin.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Sales+Margins+Profitability",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Sales+Margins+%26+Profitability+Analysis+Odoo+19"
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
    "penjelasan": "Margin dihitung dari selisih harga jual dan harga pokok (cost). Di Sales Order, margin tampil langsung di baris order atau laporan analisis penjualan.",
    "referensi": {
      "topikSpesifik": "Sales Margins & Profitability Analysis",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/margin.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Sales+Margins+Profitability",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Sales+Margins+%26+Profitability+Analysis+Odoo+19"
    }
  },
  {
    "id": 10,
    "topic": "sales",
    "soal": "What condition must be true when using a default unit of measure and purchase unit of measure?",
    "pilihan": [
      "The two units of measure must share the same reference unit",
      "The two units of measure cannot share the same reference unit",
      "The two units of measure must have the same unit name as each other"
    ],
    "jawaban": 0,
    "penjelasan": "Konversi satuan hanya dapat dilakukan antar Unit of Measure yang berada dalam Kategori Satuan yang sama.",
    "referensi": {
      "topikSpesifik": "Units of Measure (UoM) & Conversions",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Units+of+Measure",
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
    "penjelasan": "Pricelist Odoo mendukung diskon persentase, formula berbasis cost/sales price, pembulatan (rounding), dan biaya tambahan (extra fee).",
    "referensi": {
      "topikSpesifik": "Pricelists, Discount & Price Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/prices/pricing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Pricelists+Discount+Rules",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Pricelists%2C+Discount+%26+Price+Rules+Odoo+19"
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
    "jawaban": 2,
    "penjelasan": "Jawaban yang tepat adalah: \"Both solutions are correct\" sesuai dengan standar alur kerja aplikasi Sales & Quotations Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Sales & Quotations Management: How could you prevent",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+could+you+prevent",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+could+you+prevent"
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
    "penjelasan": "Kebijakan faktur menentukan apakah penagihan dilakukan berdasarkan Ordered Quantities (sebelum kirim) atau Delivered Quantities (setelah barang diterima).",
    "referensi": {
      "topikSpesifik": "Invoicing Policies & Down Payments",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/invoicing/invoicing_policy.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Invoicing+Policies+Down+Payments",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Invoicing+Policies+%26+Down+Payments+Odoo+19"
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
    "penjelasan": "Program eWallet, kartu hadiah, dan poin loyalitas dapat digunakan lintas Sales, POS, dan eCommerce.",
    "referensi": {
      "topikSpesifik": "eWallets, Gift Cards & Loyalty Programs",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/ewallets_giftcards.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Gift+Cards+eWallets+Loyalty",
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
    "penjelasan": "Jawaban yang tepat adalah: \"The at-home breadmaking classes, since you are selling an experience and not a physical good\" sesuai dengan standar alur kerja aplikasi Sales & Quotations Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Sales & Quotations Management: You run small business",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+You+run+small+business",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+You+run+small+business"
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
    "jawaban": 1,
    "penjelasan": "Margin dihitung dari selisih harga jual dan harga pokok (cost). Di Sales Order, margin tampil langsung di baris order atau laporan analisis penjualan.",
    "referensi": {
      "topikSpesifik": "Sales Margins & Profitability Analysis",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/margin.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Sales+Margins+Profitability",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Sales+Margins+%26+Profitability+Analysis+Odoo+19"
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
    "penjelasan": "Program eWallet, kartu hadiah, dan poin loyalitas dapat digunakan lintas Sales, POS, dan eCommerce.",
    "referensi": {
      "topikSpesifik": "eWallets, Gift Cards & Loyalty Programs",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/ewallets_giftcards.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Gift+Cards+eWallets+Loyalty",
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
    "penjelasan": "Modul Survey mendukung pembuatan kuis bersertifikasi dengan penilaian otomatis dan passing score.",
    "referensi": {
      "topikSpesifik": "Surveys & Online Certifications",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/surveys.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Surveys+Certifications",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Surveys+%26+Online+Certifications+Odoo+19"
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
    "penjelasan": "Odoo Spreadsheet memungkinkan analisis data dinamis langsung dari pivot view dengan sinkronisasi data live.",
    "referensi": {
      "topikSpesifik": "Odoo Spreadsheets & Live Pivot Tables",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/spreadsheet.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Spreadsheet+Integration",
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
    "penjelasan": "Jawaban yang tepat adalah: \"Odoo filters opportunities in that stage by the color code, which represents the current activity status.\" sesuai dengan standar alur kerja aplikasi CRM & Opportunity Pipeline di Odoo 19.",
    "referensi": {
      "topikSpesifik": "CRM & Opportunity Pipeline: What happens when you",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+happens+when+you",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+happens+when+you"
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
    "penjelasan": "Field Probability di CRM memperkirakan kemungkinan deal berhasil ditutup berdasarkan riwayat stage dan algoritma scoring.",
    "referensi": {
      "topikSpesifik": "Predictive Lead Scoring & Probabilities",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/track_leads/lead_scoring.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Predictive+Lead+Scoring+Probability",
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
    "penjelasan": "Lead yang memenuhi kualifikasi dapat dikonversi menjadi Opportunity dan ditugaskan ke Sales Team yang sesuai.",
    "referensi": {
      "topikSpesifik": "CRM Pipeline & Lead Management",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/pipeline/manage_sales_teams.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+CRM+Pipeline+Lead+Management",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+CRM+Pipeline+%26+Lead+Management+Odoo+19"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Under the Other Info tab on the sales order.\" sesuai dengan standar alur kerja aplikasi CRM & Opportunity Pipeline di Odoo 19.",
    "referensi": {
      "topikSpesifik": "CRM & Opportunity Pipeline: How can you manually",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+can+you+manually",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+can+you+manually"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Enrich leads based on customer behavior.\" sesuai dengan standar alur kerja aplikasi CRM & Opportunity Pipeline di Odoo 19.",
    "referensi": {
      "topikSpesifik": "CRM & Opportunity Pipeline: Which the following not",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Which+the+following+not",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Which+the+following+not"
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
    "penjelasan": "Superuser mode memberikan akses bypass terhadap record rules dan hak akses keamanan untuk keperluan perbaikan administratif.",
    "referensi": {
      "topikSpesifik": "Developer & Superuser Mode",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/developer_mode.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Developer+Mode+Superuser",
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
    "penjelasan": "Lead yang memenuhi kualifikasi dapat dikonversi menjadi Opportunity dan ditugaskan ke Sales Team yang sesuai.",
    "referensi": {
      "topikSpesifik": "CRM Pipeline & Lead Management",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/pipeline/manage_sales_teams.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+CRM+Pipeline+Lead+Management",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+CRM+Pipeline+%26+Lead+Management+Odoo+19"
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
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"Seconds\" sesuai dengan standar alur kerja aplikasi CRM & Opportunity Pipeline di Odoo 19.",
    "referensi": {
      "topikSpesifik": "CRM & Opportunity Pipeline: What the shortest interval",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+the+shortest+interval",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+the+shortest+interval"
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
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"A red warning icon appears next to the opportunity name in the list view.\" sesuai dengan standar alur kerja aplikasi CRM & Opportunity Pipeline di Odoo 19.",
    "referensi": {
      "topikSpesifik": "CRM & Opportunity Pipeline: What visual indicator shows",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+visual+indicator+shows",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+visual+indicator+shows"
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
    "penjelasan": "Lead yang memenuhi kualifikasi dapat dikonversi menjadi Opportunity dan ditugaskan ke Sales Team yang sesuai.",
    "referensi": {
      "topikSpesifik": "CRM Pipeline & Lead Management",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/pipeline/manage_sales_teams.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+CRM+Pipeline+Lead+Management",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+CRM+Pipeline+%26+Lead+Management+Odoo+19"
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
    "penjelasan": "Fitur AI Agent dengan \"Restrict to Sources\" membatasi jawaban hanya berdasarkan sumber data internal yang diizinkan.",
    "referensi": {
      "topikSpesifik": "Odoo AI Agents & Data Sources",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+AI+Agents",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+AI+Agents+%26+Data+Sources+Odoo+19"
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
    "penjelasan": "Point of Sale (POS) mendukung penjualan kasir offline, pengelolaan meja restoran, dan kontrol uang kas harian.",
    "referensi": {
      "topikSpesifik": "Point of Sale (POS) Operations",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Point+of+Sale+POS",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Point+of+Sale+%28POS%29+Operations+Odoo+19"
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
    "penjelasan": "Fitur AI Agent dengan \"Restrict to Sources\" membatasi jawaban hanya berdasarkan sumber data internal yang diizinkan.",
    "referensi": {
      "topikSpesifik": "Odoo AI Agents & Data Sources",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+AI+Agents",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+AI+Agents+%26+Data+Sources+Odoo+19"
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
    "penjelasan": "Fitur AI Agent dengan \"Restrict to Sources\" membatasi jawaban hanya berdasarkan sumber data internal yang diizinkan.",
    "referensi": {
      "topikSpesifik": "Odoo AI Agents & Data Sources",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+AI+Agents",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+AI+Agents+%26+Data+Sources+Odoo+19"
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
    "jawaban": 0,
    "penjelasan": "Fitur AI Agent dengan \"Restrict to Sources\" membatasi jawaban hanya berdasarkan sumber data internal yang diizinkan.",
    "referensi": {
      "topikSpesifik": "Odoo AI Agents & Data Sources",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+AI+Agents",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+AI+Agents+%26+Data+Sources+Odoo+19"
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
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"No, mailing list contacts are specific to the delivery method, and are not interchangeable.\" sesuai dengan standar alur kerja aplikasi Email Marketing & Campaigns di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Email Marketing & Campaigns: Can you use the",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/email_marketing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Can+you+use+the",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Can+you+use+the"
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
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"No, registrants MUST register in advance.\" sesuai dengan standar alur kerja aplikasi Email Marketing & Campaigns di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Email Marketing & Campaigns: Can you create new",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/email_marketing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Can+you+create+new",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Can+you+create+new"
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
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"Success Rate and Opt-Out Report.\" sesuai dengan standar alur kerja aplikasi Email Marketing & Campaigns di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Email Marketing & Campaigns: What are the two",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/email_marketing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+are+the+two",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+are+the+two"
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
    "penjelasan": "Jawaban yang tepat adalah: \"You can save it and reuse it anywhere on your website.\" sesuai dengan standar alur kerja aplikasi Website Builder & Pages di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Website Builder & Pages: Youve just customized building",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/website.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Youve+just+customized+building",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Youve+just+customized+building"
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
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"No, the search bar is only searching for products.\" sesuai dengan standar alur kerja aplikasi Website Builder & Pages di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Website Builder & Pages: Regarding the Search Bar",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/website.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Regarding+the+Search+Bar",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Regarding+the+Search+Bar"
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
    "penjelasan": "Jawaban yang tepat adalah: \"You can reorder elements, resize columns, and hide specific blocks for mobile without changing the desktop layout.\" sesuai dengan standar alur kerja aplikasi Website Builder & Pages di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Website Builder & Pages: Youve finished designing the",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/website.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Youve+finished+designing+the",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Youve+finished+designing+the"
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
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"Yes, but only the title and description.\" sesuai dengan standar alur kerja aplikasi Website Builder & Pages di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Website Builder & Pages: the Optimize SEO tool",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/website.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+the+Optimize+SEO+tool",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+the+Optimize+SEO+tool"
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
    "penjelasan": "Jawaban yang tepat adalah: \"On the product form in the backend, click the Variant smart button.\" sesuai dengan standar alur kerja aplikasi eCommerce & Online Store di Odoo 19.",
    "referensi": {
      "topikSpesifik": "eCommerce & Online Store: Where can you set",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/ecommerce.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Where+can+you+set",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Where+can+you+set"
    }
  },
  {
    "id": 43,
    "topic": "ecommerce",
    "soal": "According to the screenshot below (assuming the attributes 'Fabric' and 'Legs' always generate variants), how many variants will be generated?",
    "pilihan": [
      "5",
      "6",
      "2"
    ],
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"5\" sesuai dengan standar alur kerja aplikasi eCommerce & Online Store di Odoo 19.",
    "referensi": {
      "topikSpesifik": "eCommerce & Online Store: According the screenshot below",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/ecommerce.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+According+the+screenshot+below",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+According+the+screenshot+below"
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
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"No, they are always visible.\" sesuai dengan standar alur kerja aplikasi eCommerce & Online Store di Odoo 19.",
    "referensi": {
      "topikSpesifik": "eCommerce & Online Store: Are there specific ways",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/ecommerce.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Are+there+specific+ways",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Are+there+specific+ways"
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
    "jawaban": 0,
    "penjelasan": "Template penawaran mempercepat pembuatan order dengan default produk, syarat pembayaran, dan produk opsional yang dapat dipilih customer.",
    "referensi": {
      "topikSpesifik": "Quotation Templates & PDF Builder",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/quote_template.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Quotation+Templates+PDF+Builder",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Quotation+Templates+%26+PDF+Builder+Odoo+19"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Articles shared with specific users with no default access.\" sesuai dengan standar alur kerja aplikasi Knowledge Articles & Collaborative Docs di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Knowledge Articles & Collaborative Docs: What articles feature the",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/knowledge.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+articles+feature+the",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+articles+feature+the"
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
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"Any user accessing an article\" sesuai dengan standar alur kerja aplikasi Knowledge Articles & Collaborative Docs di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Knowledge Articles & Collaborative Docs: What type users can",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/knowledge.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+type+users+can",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+type+users+can"
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
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"Index\" sesuai dengan standar alur kerja aplikasi Knowledge Articles & Collaborative Docs di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Knowledge Articles & Collaborative Docs: Which the following commands",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/knowledge.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Which+the+following+commands",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Which+the+following+commands"
    }
  },
  {
    "id": 49,
    "topic": "project",
    "soal": "How can you share a task publicly?",
    "pilihan": [
      "By sharing a public link to the task or project",
      "By setting the task visibility to public",
      "By setting the project visibility to public"
    ],
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"By sharing a public link to the task or project\" sesuai dengan standar alur kerja aplikasi Project & Task Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Project & Task Management: How can you share",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+can+you+share",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+can+you+share"
    }
  },
  {
    "id": 50,
    "topic": "project",
    "soal": "Which users can view a private task?",
    "pilihan": [
      "Only the user who created the task and users with the access right \"Project Administrator\"",
      "All users assigned to the task and all users added as followers of the task",
      "All users added as followers of the task and users with the access right \"Project Administrator\""
    ],
    "jawaban": 1,
    "penjelasan": "Pesan (discussion) di chatter bersifat publik/notifikasi ke followers dan customer, sedangkan log note ditujukan untuk catatan internal tim.",
    "referensi": {
      "topikSpesifik": "Chatter, Log Notes & Activities",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/activities.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Chatter+Log+Notes+Activities",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Chatter%2C+Log+Notes+%26+Activities+Odoo+19"
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
    "penjelasan": "Burndown chart memvisualisasikan sisa jam kerja terhadap tenggat waktu proyek secara realtime.",
    "referensi": {
      "topikSpesifik": "Project Management & Burndown Charts",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Project+Management+Gantt",
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
    "penjelasan": "Burndown chart memvisualisasikan sisa jam kerja terhadap tenggat waktu proyek secara realtime.",
    "referensi": {
      "topikSpesifik": "Project Management & Burndown Charts",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Project+Management+Gantt",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Project+Management+%26+Burndown+Charts+Odoo+19"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Allocate 24 hours to the task\" sesuai dengan standar alur kerja aplikasi Project & Task Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Project & Task Management: When creating task from",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+When+creating+task+from",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+When+creating+task+from"
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
    "jawaban": 1,
    "penjelasan": "Jawaban yang tepat adalah: \"Set's the task's priority to high\" sesuai dengan standar alur kerja aplikasi Project & Task Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Project & Task Management: When creating task from",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+When+creating+task+from",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+When+creating+task+from"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Automate task moves between stages\" sesuai dengan standar alur kerja aplikasi Project & Task Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Project & Task Management: The top bar does",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+The+top+bar+does",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+The+top+bar+does"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Analytic plans in the project\" sesuai dengan standar alur kerja aplikasi Project & Task Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Project & Task Management: The number analytic accounts",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+The+number+analytic+accounts",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+The+number+analytic+accounts"
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
    "jawaban": 0,
    "penjelasan": "Timesheet mencatat waktu kerja karyawan pada tugas/proyek dan terintegrasi dengan modul Penagihan (Invoicing) dan Cuti (Time Off).",
    "referensi": {
      "topikSpesifik": "Timesheets & Time Off Integration",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/timesheets.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Timesheets+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Timesheets+%26+Time+Off+Integration+Odoo+19"
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
    "jawaban": 1,
    "penjelasan": "Timesheet mencatat waktu kerja karyawan pada tugas/proyek dan terintegrasi dengan modul Penagihan (Invoicing) dan Cuti (Time Off).",
    "referensi": {
      "topikSpesifik": "Timesheets & Time Off Integration",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/timesheets.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Timesheets+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Timesheets+%26+Time+Off+Integration+Odoo+19"
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
    "penjelasan": "Timesheet mencatat waktu kerja karyawan pada tugas/proyek dan terintegrasi dengan modul Penagihan (Invoicing) dan Cuti (Time Off).",
    "referensi": {
      "topikSpesifik": "Timesheets & Time Off Integration",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/timesheets.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Timesheets+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Timesheets+%26+Time+Off+Integration+Odoo+19"
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
    "penjelasan": "Timesheet mencatat waktu kerja karyawan pada tugas/proyek dan terintegrasi dengan modul Penagihan (Invoicing) dan Cuti (Time Off).",
    "referensi": {
      "topikSpesifik": "Timesheets & Time Off Integration",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/timesheets.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Timesheets+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Timesheets+%26+Time+Off+Integration+Odoo+19"
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
    "penjelasan": "Timesheet mencatat waktu kerja karyawan pada tugas/proyek dan terintegrasi dengan modul Penagihan (Invoicing) dan Cuti (Time Off).",
    "referensi": {
      "topikSpesifik": "Timesheets & Time Off Integration",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/timesheets.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Timesheets+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Timesheets+%26+Time+Off+Integration+Odoo+19"
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
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"2 journal items\" sesuai dengan standar alur kerja aplikasi Accounting & Financial Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Accounting & Financial Management: customer invoice with two",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+customer+invoice+with+two",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+customer+invoice+with+two"
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
    "jawaban": 0,
    "penjelasan": "Rekonsiliasi bank mencocokkan mutasi rekening koran dengan transaksi invoice/bill menggunakan aturan model rekonsiliasi otomatis.",
    "referensi": {
      "topikSpesifik": "Bank Reconciliation & Reconciliation Models",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/bank/reconciliation.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Bank+Reconciliation+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Bank+Reconciliation+%26+Reconciliation+Models+Odoo+19"
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
    "penjelasan": "Superuser mode memberikan akses bypass terhadap record rules dan hak akses keamanan untuk keperluan perbaikan administratif.",
    "referensi": {
      "topikSpesifik": "Developer & Superuser Mode",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/developer_mode.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Developer+Mode+Superuser",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Developer+%26+Superuser+Mode+Odoo+19"
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
    "penjelasan": "Superuser mode memberikan akses bypass terhadap record rules dan hak akses keamanan untuk keperluan perbaikan administratif.",
    "referensi": {
      "topikSpesifik": "Developer & Superuser Mode",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/developer_mode.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Developer+Mode+Superuser",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Developer+%26+Superuser+Mode+Odoo+19"
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
    "penjelasan": "Dalam akuntansi perpetual (Automated Valuation), setiap mutasi stok (penerimaan barang dan pengiriman) otomatis membentuk jurnal akuntansi realtime.",
    "referensi": {
      "topikSpesifik": "Perpetual Inventory Valuation & Costing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/inventory_valuation.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Perpetual+Inventory+Valuation+FIFO",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Perpetual+Inventory+Valuation+%26+Costing+Odoo+19"
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
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"Set up analytic plans and accounts first, then create a budget via Accounting > Accounting > Analytic Budget.\" sesuai dengan standar alur kerja aplikasi Accounting & Financial Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Accounting & Financial Management: How can you create",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+can+you+create",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+can+you+create"
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
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"Yes, but only if the companies are set as branch offices.\" sesuai dengan standar alur kerja aplikasi Accounting & Financial Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Accounting & Financial Management: Can accounts belong multiple",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Can+accounts+belong+multiple",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Can+accounts+belong+multiple"
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
    "penjelasan": "Rekonsiliasi bank mencocokkan mutasi rekening koran dengan transaksi invoice/bill menggunakan aturan model rekonsiliasi otomatis.",
    "referensi": {
      "topikSpesifik": "Bank Reconciliation & Reconciliation Models",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/bank/reconciliation.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Bank+Reconciliation+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Bank+Reconciliation+%26+Reconciliation+Models+Odoo+19"
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
    "penjelasan": "Jawaban yang tepat adalah: \"In the customer Follow-up report, enable the toggle in the No Follow-up column for the invoice you want to exclude.\" sesuai dengan standar alur kerja aplikasi Accounting & Financial Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Accounting & Financial Management: How can you send",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+can+you+send",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+can+you+send"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Both review working files and generate a customizable audit report, and control and track changes with a non-restrictive audit trail that is accessible by default to everyone.\" sesuai dengan standar alur kerja aplikasi Accounting & Financial Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Accounting & Financial Management: What the audit features",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+the+audit+features",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+the+audit+features"
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
    "penjelasan": "Dalam akuntansi perpetual (Automated Valuation), setiap mutasi stok (penerimaan barang dan pengiriman) otomatis membentuk jurnal akuntansi realtime.",
    "referensi": {
      "topikSpesifik": "Perpetual Inventory Valuation & Costing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/inventory_valuation.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Perpetual+Inventory+Valuation+FIFO",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Perpetual+Inventory+Valuation+%26+Costing+Odoo+19"
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
    "penjelasan": "Odoo Spreadsheet memungkinkan analisis data dinamis langsung dari pivot view dengan sinkronisasi data live.",
    "referensi": {
      "topikSpesifik": "Odoo Spreadsheets & Live Pivot Tables",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/spreadsheet.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Spreadsheet+Integration",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+Spreadsheets+%26+Live+Pivot+Tables+Odoo+19"
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
    "jawaban": 0,
    "penjelasan": "Odoo Spreadsheet memungkinkan analisis data dinamis langsung dari pivot view dengan sinkronisasi data live.",
    "referensi": {
      "topikSpesifik": "Odoo Spreadsheets & Live Pivot Tables",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/spreadsheet.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Spreadsheet+Integration",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+Spreadsheets+%26+Live+Pivot+Tables+Odoo+19"
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
    "penjelasan": "Di Odoo multi-company, mengosongkan field \"Company\" pada contact record membuatnya bersifat global dan dapat diakses oleh seluruh entitas perusahaan.",
    "referensi": {
      "topikSpesifik": "Multi-Company Setup & Records Sharing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/companies/multi_companies.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Multi+Company+Customer+Share",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Multi-Company+Setup+%26+Records+Sharing+Odoo+19"
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
    "penjelasan": "Jawaban yang tepat adalah: \"You create a new Allocation and set the Allocation Type to \"Accrual Allocation\"\" sesuai dengan standar alur kerja aplikasi Human Resources & Employee Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Human Resources & Employee Management: How would you set",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/hr_and_attendance.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+would+you+set",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+would+you+set"
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
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"Allows you to revert to any previous contract\" sesuai dengan standar alur kerja aplikasi Human Resources & Employee Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Human Resources & Employee Management: the Employees app what",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/hr_and_attendance.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+the+Employees+app+what",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+the+Employees+app+what"
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
    "penjelasan": "Point of Sale (POS) mendukung penjualan kasir offline, pengelolaan meja restoran, dan kontrol uang kas harian.",
    "referensi": {
      "topikSpesifik": "Point of Sale (POS) Operations",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Point+of+Sale+POS",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Point+of+Sale+%28POS%29+Operations+Odoo+19"
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
    "jawaban": 1,
    "penjelasan": "Jawaban yang tepat adalah: \"In the Employees app dashboard, click Presence Icon > Absent\" sesuai dengan standar alur kerja aplikasi Human Resources & Employee Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Human Resources & Employee Management: How can user with",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/hr_and_attendance.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+can+user+with",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+can+user+with"
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
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"A red stethoscope icon appears on their employee profile\" sesuai dengan standar alur kerja aplikasi Human Resources & Employee Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Human Resources & Employee Management: How can you determine",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/hr_and_attendance.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+can+you+determine",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+can+you+determine"
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
    "penjelasan": "Jawaban yang tepat adalah: \"A sub-order is created.\" sesuai dengan standar alur kerja aplikasi Point of Sale Operations di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Point of Sale Operations: What happens order when",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+happens+order+when",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+happens+order+when"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Cash.\" sesuai dengan standar alur kerja aplikasi Point of Sale Operations di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Point of Sale Operations: payment method selected what",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+payment+method+selected+what",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+payment+method+selected+what"
    }
  },
  {
    "id": 83,
    "topic": "pos",
    "soal": "If a product set for a late ship is not available, what should you do?",
    "pilihan": [
      "Cancel the order until more units are ordered.",
      "Update the unit quantity.",
      "Refund the customer."
    ],
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"Cancel the order until more units are ordered.\" sesuai dengan standar alur kerja aplikasi Point of Sale Operations di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Point of Sale Operations: product set for late",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+product+set+for+late",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+product+set+for+late"
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
    "jawaban": 0,
    "penjelasan": "Alur pembelian dimulai dari RFQ (Permintaan Penawaran) yang dikonfirmasi menjadi Purchase Order resmi ke vendor.",
    "referensi": {
      "topikSpesifik": "RFQ & Purchase Orders Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+RFQ+Purchase+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+RFQ+%26+Purchase+Orders+Workflow+Odoo+19"
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
    "penjelasan": "Kebijakan faktur menentukan apakah penagihan dilakukan berdasarkan Ordered Quantities (sebelum kirim) atau Delivered Quantities (setelah barang diterima).",
    "referensi": {
      "topikSpesifik": "Invoicing Policies & Down Payments",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/invoicing/invoicing_policy.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Invoicing+Policies+Down+Payments",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Invoicing+Policies+%26+Down+Payments+Odoo+19"
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
    "penjelasan": "Alur pembelian dimulai dari RFQ (Permintaan Penawaran) yang dikonfirmasi menjadi Purchase Order resmi ke vendor.",
    "referensi": {
      "topikSpesifik": "RFQ & Purchase Orders Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+RFQ+Purchase+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+RFQ+%26+Purchase+Orders+Workflow+Odoo+19"
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
    "penjelasan": "Dalam akuntansi perpetual (Automated Valuation), setiap mutasi stok (penerimaan barang dan pengiriman) otomatis membentuk jurnal akuntansi realtime.",
    "referensi": {
      "topikSpesifik": "Perpetual Inventory Valuation & Costing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/inventory_valuation.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Perpetual+Inventory+Valuation+FIFO",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Perpetual+Inventory+Valuation+%26+Costing+Odoo+19"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Order Date + Vendor Lead Time\" sesuai dengan standar alur kerja aplikasi Purchase Orders & Vendor Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Purchase Orders & Vendor Management: When you purchase new",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+When+you+purchase+new",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+When+you+purchase+new"
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
    "jawaban": 0,
    "penjelasan": "Alur pembelian dimulai dari RFQ (Permintaan Penawaran) yang dikonfirmasi menjadi Purchase Order resmi ke vendor.",
    "referensi": {
      "topikSpesifik": "RFQ & Purchase Orders Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+RFQ+Purchase+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+RFQ+%26+Purchase+Orders+Workflow+Odoo+19"
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
    "jawaban": 0,
    "penjelasan": "Kebijakan faktur menentukan apakah penagihan dilakukan berdasarkan Ordered Quantities (sebelum kirim) atau Delivered Quantities (setelah barang diterima).",
    "referensi": {
      "topikSpesifik": "Invoicing Policies & Down Payments",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/invoicing/invoicing_policy.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Invoicing+Policies+Down+Payments",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Invoicing+Policies+%26+Down+Payments+Odoo+19"
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
    "penjelasan": "Alur pembelian dimulai dari RFQ (Permintaan Penawaran) yang dikonfirmasi menjadi Purchase Order resmi ke vendor.",
    "referensi": {
      "topikSpesifik": "RFQ & Purchase Orders Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+RFQ+Purchase+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+RFQ+%26+Purchase+Orders+Workflow+Odoo+19"
    }
  },
  {
    "id": 92,
    "topic": "purchase",
    "soal": "You're reviewing the Forecasted report for a product that's running low. The \"Time to Replenish\" field shows 5 days. What does this tell you?",
    "pilihan": [
      "You have 5 days to decide to replenish before your stock runs into critically low levels",
      "The product can't be replenished sooner than 5 days because the vendor is out",
      "If you order today, the product would arrive in 5 days, based on today's date and configured lead times"
    ],
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"You have 5 days to decide to replenish before your stock runs into critically low levels\" sesuai dengan standar alur kerja aplikasi Purchase Orders & Vendor Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Purchase Orders & Vendor Management: Youre reviewing the Forecasted",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Youre+reviewing+the+Forecasted",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Youre+reviewing+the+Forecasted"
    }
  },
  {
    "id": 93,
    "topic": "purchase",
    "soal": "Your warehouse is set up to deliver in three steps: pick, pack, and ship. In the 'Pick' step, you are supposed to pick 10 chairs and 5 desks, but you accidentally pick 15 chairs and 2 desks. You select 'No Backorder' during the process. What will be the result in the 'Pack' step?",
    "pilihan": [
      "15 chairs, 2 desks",
      "10 chairs and 5 desks",
      "10 chairs, 2 desks"
    ],
    "jawaban": 0,
    "penjelasan": "Point of Sale (POS) mendukung penjualan kasir offline, pengelolaan meja restoran, dan kontrol uang kas harian.",
    "referensi": {
      "topikSpesifik": "Point of Sale (POS) Operations",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Point+of+Sale+POS",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Point+of+Sale+%28POS%29+Operations+Odoo+19"
    }
  },
  {
    "id": 94,
    "topic": "purchase",
    "soal": "When performing an inventory adjustment that increases a product's stock from 0 to 5 units, what are the 'Location Types' of the locations involved in the resulting stock move?",
    "pilihan": [
      "A move from an 'Internal Location' to an 'Inventory Adjustment' location",
      "A move from an 'Inventory Loss' location to an 'Internal Location'",
      "A move between two 'Internal Locations'"
    ],
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"A move from an 'Internal Location' to an 'Inventory Adjustment' location\" sesuai dengan standar alur kerja aplikasi Purchase Orders & Vendor Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Purchase Orders & Vendor Management: When performing inventory adjustment",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+When+performing+inventory+adjustment",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+When+performing+inventory+adjustment"
    }
  },
  {
    "id": 95,
    "topic": "purchase",
    "soal": "Which of the following does NOT create stock moves?",
    "pilihan": [
      "Dragging serial or lot numbers between locations in the Locations (Kanban) view",
      "Using the Relocate button on the Inventory Adjustments dashboard",
      "Going to Inventory > Reporting > Moves History page and clicking New"
    ],
    "jawaban": 0,
    "penjelasan": "Pelacakan lot/serial number memungkinkan penelusuran riwayat pergerakan produk dari penerimaan vendor hingga pengiriman ke customer.",
    "referensi": {
      "topikSpesifik": "Lots & Serial Numbers Traceability",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Lots+Serial+Numbers+Traceability",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Lots+%26+Serial+Numbers+Traceability+Odoo+19"
    }
  },
  {
    "id": 96,
    "topic": "purchase",
    "soal": "If a product has been reserved for sales orders and you perform an 'Inventory Adjustment' to set the on-hand quantity to 0, what will happen to the forecasted quantity of that product?",
    "pilihan": [
      "The forecasted quantity is updated to 0",
      "There's no change to the forecasted quantity",
      "The forecasted quantity becomes negative, and the product is marked as \"Not Available\" on any current delivery orders"
    ],
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"The forecasted quantity is updated to 0\" sesuai dengan standar alur kerja aplikasi Purchase Orders & Vendor Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Purchase Orders & Vendor Management: product has been reserved",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+product+has+been+reserved",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+product+has+been+reserved"
    }
  },
  {
    "id": 97,
    "topic": "purchase",
    "soal": "When you update on-hand quantities from 5 units to 4 for a specific product, what stock moves are created?",
    "pilihan": [
      "A move of 4 units from an 'Internal Location' to an 'Inventory Loss' location",
      "A move of 1 unit from an 'Internal Location' to an 'Inventory Loss' location",
      "A move of 1 unit from an 'Inventory Loss' location to an 'Internal Location'"
    ],
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"A move of 4 units from an 'Internal Location' to an 'Inventory Loss' location\" sesuai dengan standar alur kerja aplikasi Purchase Orders & Vendor Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Purchase Orders & Vendor Management: When you update onhand",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+When+you+update+onhand",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+When+you+update+onhand"
    }
  },
  {
    "id": 98,
    "topic": "purchase",
    "soal": "You're configuring a packaging called \"Pack of 6\" to sell six soda bottles together. Soda's base unit of measure is units. You set the Package Type to Carton (representing the cardboard six-pack holder). On a delivery order for 6 units of soda and click \"Put in Pack\", what effect does this configuration have?",
    "pilihan": [
      "Create a new package with the Package Type \"Carton\", with all 6 sodas inside",
      "Create a new package with the Package Type \"Carton\", with all 6 sodas inside, but the unit is converted to 1 \"Pack of 6\" on the delivery order",
      "Creates one package containing all 6 sodas, but no Package Type is set, because it's not a thing"
    ],
    "jawaban": 0,
    "penjelasan": "Fitur Put in Pack mengelompokkan barang ke dalam koli/paket saat picking, sedangkan Scrap mencatat barang rusak/hilang dari stok.",
    "referensi": {
      "topikSpesifik": "Packages, Packaging & Scrap Orders",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Packages+Packaging+Scrap",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Packages%2C+Packaging+%26+Scrap+Orders+Odoo+19"
    }
  },
  {
    "id": 99,
    "topic": "purchase",
    "soal": "Where is the \"Count Entire Locations\" Barcode feature configured?",
    "pilihan": [
      "In Inventory > Configuration > Settings, under the Barcode section, enable the \"Count Entire Locations\" feature",
      "Go to the Locations configuration page and enable the \"Count Entire Locations\" feature",
      "In the Barcode app, click \"Count inventory\", click the gear icon (settings) menu, and enable \"Count Entire Locations\""
    ],
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"In Inventory > Configuration > Settings, under the Barcode section, enable the \"Count Entire Locations\" feature\" sesuai dengan standar alur kerja aplikasi Purchase Orders & Vendor Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Purchase Orders & Vendor Management: Where the Count Entire",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Where+the+Count+Entire",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Where+the+Count+Entire"
    }
  },
  {
    "id": 100,
    "topic": "purchase",
    "soal": "What does the 'i' button on the Replenishment dashboard NOT do?",
    "pilihan": [
      "Display the forecasted arrival date of the product",
      "Triggers the reordering rule",
      "Display lead times"
    ],
    "jawaban": 0,
    "penjelasan": "Aturan Reordering otomatis memicu pembuatan RFQ atau Order Produksi saat stok menyentuh batas Minimum Quantity.",
    "referensi": {
      "topikSpesifik": "Automated Reordering Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Reordering+Rules+Inventory",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Automated+Reordering+Rules+Odoo+19"
    }
  },
  {
    "id": 101,
    "topic": "purchase",
    "soal": "I want to configure a specific route in my warehouse for FedEx, but it needs to be different than the route we use for DHL. I can do this by:",
    "pilihan": [
      "Going to Inventory > Configuration > Shipping Methods and choosing a routes for the Routes field.",
      "Click the \"Quality Checks\" button available on transfers configured with a quality control point",
      "Create a custom route for the shipping method and setting it in the Routes field in Inventory > Configuration > Delivery Methods"
    ],
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"Going to Inventory > Configuration > Shipping Methods and choosing a routes for the Routes field.\" sesuai dengan standar alur kerja aplikasi Purchase Orders & Vendor Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Purchase Orders & Vendor Management: want configure specific route",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+want+configure+specific+route",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+want+configure+specific+route"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Create a quality control point on the \"Receipt\" operation type\" sesuai dengan standar alur kerja aplikasi Manufacturing & Shop Floor Operations di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Manufacturing & Shop Floor Operations: You want trigger quality",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+You+want+trigger+quality",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+You+want+trigger+quality"
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
    "penjelasan": "Bill of Materials (BoM) mendefinisikan daftar komponen dan tahapan operasi yang dibutuhkan untuk memproduksi sebuah barang.",
    "referensi": {
      "topikSpesifik": "Bills of Materials (BoM) & Kits",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Bills+of+Materials+BoM",
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
    "penjelasan": "Pelacakan lot/serial number memungkinkan penelusuran riwayat pergerakan produk dari penerimaan vendor hingga pengiriman ke customer.",
    "referensi": {
      "topikSpesifik": "Lots & Serial Numbers Traceability",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Lots+Serial+Numbers+Traceability",
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
    "penjelasan": "MPS merencanakan kebutuhan produksi dan pengadaan jangka panjang berdasarkan ramalan penjualan (demand forecast).",
    "referensi": {
      "topikSpesifik": "Master Production Schedule (MPS)",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Master+Production+Schedule",
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
    "penjelasan": "Work Center mengatur kapasitas mesin/stasiun kerja, estimasi waktu operasi, dan pelacakan efisiensi produksi (OEE).",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Work Orders",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Work+Orders+Odoo+19"
    }
  },
  {
    "id": 107,
    "topic": "mrp",
    "soal": "You've configured your manufacturing process to happen in two steps: pick components, and then manufacture. You decide to produce more, what happens with the pre-production picking?",
    "pilihan": [
      "Nothing at first, and once you confirm the picking, a backorder is created to make up the missing quantities",
      "The component quantities are updated to reflect the new quantities needed",
      "A warning is raised to reflect that the original quantity does not fulfill the updated demand. You have to click \"Update Quantity\""
    ],
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"Nothing at first, and once you confirm the picking, a backorder is created to make up the missing quantities\" sesuai dengan standar alur kerja aplikasi Manufacturing & Shop Floor Operations di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Manufacturing & Shop Floor Operations: Youve configured your manufacturing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Youve+configured+your+manufacturing",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Youve+configured+your+manufacturing"
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
    "jawaban": 0,
    "penjelasan": "Subkontrak memungkinkan pengiriman bahan baku ke pihak ketiga untuk diproduksi dan diterima kembali sebagai barang jadi.",
    "referensi": {
      "topikSpesifik": "Subcontracting in Manufacturing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Subcontracting+Manufacturing",
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
    "jawaban": 0,
    "penjelasan": "Point of Sale (POS) mendukung penjualan kasir offline, pengelolaan meja restoran, dan kontrol uang kas harian.",
    "referensi": {
      "topikSpesifik": "Point of Sale (POS) Operations",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Point+of+Sale+POS",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Point+of+Sale+%28POS%29+Operations+Odoo+19"
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
    "penjelasan": "Point of Sale (POS) mendukung penjualan kasir offline, pengelolaan meja restoran, dan kontrol uang kas harian.",
    "referensi": {
      "topikSpesifik": "Point of Sale (POS) Operations",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Point+of+Sale+POS",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Point+of+Sale+%28POS%29+Operations+Odoo+19"
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
    "penjelasan": "Work Center mengatur kapasitas mesin/stasiun kerja, estimasi waktu operasi, dan pelacakan efisiensi produksi (OEE).",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Work Orders",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Work+Orders+Odoo+19"
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
    "penjelasan": "Work Center mengatur kapasitas mesin/stasiun kerja, estimasi waktu operasi, dan pelacakan efisiensi produksi (OEE).",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Work Orders",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Work+Orders+Odoo+19"
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
    "jawaban": 0,
    "penjelasan": "Work Center mengatur kapasitas mesin/stasiun kerja, estimasi waktu operasi, dan pelacakan efisiensi produksi (OEE).",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Work Orders",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Work+Orders+Odoo+19"
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
    "penjelasan": "Field One2Many di Odoo Studio membutuhkan field Many2One pada model target sebagai relasi penghubungnya.",
    "referensi": {
      "topikSpesifik": "Odoo Studio & Relational Fields",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Studio+Customization",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+Studio+%26+Relational+Fields+Odoo+19"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Placeholder.\" sesuai dengan standar alur kerja aplikasi Odoo Studio Customizations di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo Studio Customizations: Which property should you",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Which+property+should+you",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Which+property+should+you"
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
    "penjelasan": "Field One2Many di Odoo Studio membutuhkan field Many2One pada model target sebagai relasi penghubungnya.",
    "referensi": {
      "topikSpesifik": "Odoo Studio & Relational Fields",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Studio+Customization",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+Studio+%26+Relational+Fields+Odoo+19"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Exclusive Approval.\" sesuai dengan standar alur kerja aplikasi Odoo Studio Customizations di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo Studio Customizations: When setting approval step",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+When+setting+approval+step",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+When+setting+approval+step"
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
    "penjelasan": "Pesan (discussion) di chatter bersifat publik/notifikasi ke followers dan customer, sedangkan log note ditujukan untuk catatan internal tim.",
    "referensi": {
      "topikSpesifik": "Chatter, Log Notes & Activities",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/activities.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Chatter+Log+Notes+Activities",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Chatter%2C+Log+Notes+%26+Activities+Odoo+19"
    }
  },
  {
    "id": 119,
    "topic": "studio",
    "soal": "When updating a record using AI, how can you insert dynamic values in prompts?",
    "pilihan": [
      "Right-click, select 'Insert Dynamic Placeholder', then select the field.",
      "Type a field's technical name enclosed in curly brackets, e.g., {customer_id}.",
      "Type '/' then click 'Field selector' and select the field."
    ],
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"Right-click, select 'Insert Dynamic Placeholder', then select the field.\" sesuai dengan standar alur kerja aplikasi Odoo Studio Customizations di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo Studio Customizations: When updating record using",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+When+updating+record+using",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+When+updating+record+using"
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
    "penjelasan": "Di Odoo multi-company, mengosongkan field \"Company\" pada contact record membuatnya bersifat global dan dapat diakses oleh seluruh entitas perusahaan.",
    "referensi": {
      "topikSpesifik": "Multi-Company Setup & Records Sharing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/companies/multi_companies.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Multi+Company+Customer+Share",
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
    "penjelasan": "Mengarsipkan record (archive) menyembunyikannya dari tampilan reguler tanpa menghapus data historis/audit trail.",
    "referensi": {
      "topikSpesifik": "Record Archiving & Filters",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/search.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Archive+Records+Filters",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Record+Archiving+%26+Filters+Odoo+19"
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
    "penjelasan": "Pesan (discussion) di chatter bersifat publik/notifikasi ke followers dan customer, sedangkan log note ditujukan untuk catatan internal tim.",
    "referensi": {
      "topikSpesifik": "Chatter, Log Notes & Activities",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/activities.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Chatter+Log+Notes+Activities",
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
    "jawaban": 0,
    "penjelasan": "Superuser mode memberikan akses bypass terhadap record rules dan hak akses keamanan untuk keperluan perbaikan administratif.",
    "referensi": {
      "topikSpesifik": "Developer & Superuser Mode",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/developer_mode.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Developer+Mode+Superuser",
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
    "penjelasan": "Program eWallet, kartu hadiah, dan poin loyalitas dapat digunakan lintas Sales, POS, dan eCommerce.",
    "referensi": {
      "topikSpesifik": "eWallets, Gift Cards & Loyalty Programs",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/ewallets_giftcards.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Gift+Cards+eWallets+Loyalty",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+eWallets%2C+Gift+Cards+%26+Loyalty+Programs+Odoo+19"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Sections\" sesuai dengan standar alur kerja aplikasi Sales & Quotations Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Sales & Quotations Management: you would like group",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+you+would+like+group",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+you+would+like+group"
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
    "penjelasan": "Pricelist Odoo mendukung diskon persentase, formula berbasis cost/sales price, pembulatan (rounding), dan biaya tambahan (extra fee).",
    "referensi": {
      "topikSpesifik": "Pricelists, Discount & Price Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/prices/pricing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Pricelists+Discount+Rules",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Pricelists%2C+Discount+%26+Price+Rules+Odoo+19"
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
    "penjelasan": "Jawaban yang tepat adalah: \"The number of days, promised to the customer, between the confirmation of the sales order and the delivery\" sesuai dengan standar alur kerja aplikasi Sales & Quotations Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Sales & Quotations Management: What does the Customer",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+does+the+Customer",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+does+the+Customer"
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
    "jawaban": 0,
    "penjelasan": "Pricelist Odoo mendukung diskon persentase, formula berbasis cost/sales price, pembulatan (rounding), dan biaya tambahan (extra fee).",
    "referensi": {
      "topikSpesifik": "Pricelists, Discount & Price Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/prices/pricing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Pricelists+Discount+Rules",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Pricelists%2C+Discount+%26+Price+Rules+Odoo+19"
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
    "penjelasan": "Program eWallet, kartu hadiah, dan poin loyalitas dapat digunakan lintas Sales, POS, dan eCommerce.",
    "referensi": {
      "topikSpesifik": "eWallets, Gift Cards & Loyalty Programs",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/ewallets_giftcards.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Gift+Cards+eWallets+Loyalty",
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
    "penjelasan": "Jawaban yang tepat adalah: \"Formula-based\" sesuai dengan standar alur kerja aplikasi Sales & Quotations Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Sales & Quotations Management: Which the following NOT",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Which+the+following+NOT",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Which+the+following+NOT"
    }
  },
  {
    "id": 131,
    "topic": "sales",
    "soal": "How do you configure an upsell product to appear on the bottom of another product page in your eCommerce store?",
    "pilihan": [
      "In the 'Sales' tab of your eCommerce product, enter the upsell product in the 'Alternative Products' field",
      "In your eCommerce website, drag and drop the product from the Odoo product page (open on a separate tab)",
      "There is no way to add an upsell product to the bottom a product page in the eCommerce store."
    ],
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"In the 'Sales' tab of your eCommerce product, enter the upsell product in the 'Alternative Products' field\" sesuai dengan standar alur kerja aplikasi Sales & Quotations Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Sales & Quotations Management: How you configure upsell",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+you+configure+upsell",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+you+configure+upsell"
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
    "jawaban": 0,
    "penjelasan": "Modul Survey mendukung pembuatan kuis bersertifikasi dengan penilaian otomatis dan passing score.",
    "referensi": {
      "topikSpesifik": "Surveys & Online Certifications",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/surveys.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Surveys+Certifications",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Surveys+%26+Online+Certifications+Odoo+19"
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
    "jawaban": 2,
    "penjelasan": "Modul Survey mendukung pembuatan kuis bersertifikasi dengan penilaian otomatis dan passing score.",
    "referensi": {
      "topikSpesifik": "Surveys & Online Certifications",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/surveys.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Surveys+Certifications",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Surveys+%26+Online+Certifications+Odoo+19"
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
    "penjelasan": "Modul Survey mendukung pembuatan kuis bersertifikasi dengan penilaian otomatis dan passing score.",
    "referensi": {
      "topikSpesifik": "Surveys & Online Certifications",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/surveys.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Surveys+Certifications",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Surveys+%26+Online+Certifications+Odoo+19"
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
    "penjelasan": "Lead yang memenuhi kualifikasi dapat dikonversi menjadi Opportunity dan ditugaskan ke Sales Team yang sesuai.",
    "referensi": {
      "topikSpesifik": "CRM Pipeline & Lead Management",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/pipeline/manage_sales_teams.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+CRM+Pipeline+Lead+Management",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+CRM+Pipeline+%26+Lead+Management+Odoo+19"
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
    "penjelasan": "Lead yang memenuhi kualifikasi dapat dikonversi menjadi Opportunity dan ditugaskan ke Sales Team yang sesuai.",
    "referensi": {
      "topikSpesifik": "CRM Pipeline & Lead Management",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/pipeline/manage_sales_teams.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+CRM+Pipeline+Lead+Management",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+CRM+Pipeline+%26+Lead+Management+Odoo+19"
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
    "penjelasan": "Di Odoo multi-company, mengosongkan field \"Company\" pada contact record membuatnya bersifat global dan dapat diakses oleh seluruh entitas perusahaan.",
    "referensi": {
      "topikSpesifik": "Multi-Company Setup & Records Sharing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/companies/multi_companies.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Multi+Company+Customer+Share",
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
    "penjelasan": "Jawaban yang tepat adalah: \"All CRM users.\" sesuai dengan standar alur kerja aplikasi CRM & Opportunity Pipeline di Odoo 19.",
    "referensi": {
      "topikSpesifik": "CRM & Opportunity Pipeline: Who can access Reporting",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Who+can+access+Reporting",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Who+can+access+Reporting"
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
    "penjelasan": "Lead yang memenuhi kualifikasi dapat dikonversi menjadi Opportunity dan ditugaskan ke Sales Team yang sesuai.",
    "referensi": {
      "topikSpesifik": "CRM Pipeline & Lead Management",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/pipeline/manage_sales_teams.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+CRM+Pipeline+Lead+Management",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+CRM+Pipeline+%26+Lead+Management+Odoo+19"
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
    "penjelasan": "Jawaban yang tepat adalah: \"The activity is due today.\" sesuai dengan standar alur kerja aplikasi CRM & Opportunity Pipeline di Odoo 19.",
    "referensi": {
      "topikSpesifik": "CRM & Opportunity Pipeline: What does orange activity",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+does+orange+activity",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+does+orange+activity"
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
    "penjelasan": "Fitur AI Agent dengan \"Restrict to Sources\" membatasi jawaban hanya berdasarkan sumber data internal yang diizinkan.",
    "referensi": {
      "topikSpesifik": "Odoo AI Agents & Data Sources",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+AI+Agents",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+AI+Agents+%26+Data+Sources+Odoo+19"
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
    "penjelasan": "Fitur AI Agent dengan \"Restrict to Sources\" membatasi jawaban hanya berdasarkan sumber data internal yang diizinkan.",
    "referensi": {
      "topikSpesifik": "Odoo AI Agents & Data Sources",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+AI+Agents",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+AI+Agents+%26+Data+Sources+Odoo+19"
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
    "jawaban": 0,
    "penjelasan": "Fitur AI Agent dengan \"Restrict to Sources\" membatasi jawaban hanya berdasarkan sumber data internal yang diizinkan.",
    "referensi": {
      "topikSpesifik": "Odoo AI Agents & Data Sources",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+AI+Agents",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+AI+Agents+%26+Data+Sources+Odoo+19"
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
    "penjelasan": "Modul Survey mendukung pembuatan kuis bersertifikasi dengan penilaian otomatis dan passing score.",
    "referensi": {
      "topikSpesifik": "Surveys & Online Certifications",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/surveys.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Surveys+Certifications",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Surveys+%26+Online+Certifications+Odoo+19"
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
    "penjelasan": "Mengarsipkan record (archive) menyembunyikannya dari tampilan reguler tanpa menghapus data historis/audit trail.",
    "referensi": {
      "topikSpesifik": "Record Archiving & Filters",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/search.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Archive+Records+Filters",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Record+Archiving+%26+Filters+Odoo+19"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Highest Click Rate\" sesuai dengan standar alur kerja aplikasi Email Marketing & Campaigns di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Email Marketing & Campaigns: SMS Marketing under the",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/email_marketing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+SMS+Marketing+under+the",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+SMS+Marketing+under+the"
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
    "penjelasan": "Superuser mode memberikan akses bypass terhadap record rules dan hak akses keamanan untuk keperluan perbaikan administratif.",
    "referensi": {
      "topikSpesifik": "Developer & Superuser Mode",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/developer_mode.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Developer+Mode+Superuser",
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
    "penjelasan": "Jawaban yang tepat adalah: \"By clicking on 'Newsletter Popup' in the 'Invisible Elements' section at the bottom of the website editor.\" sesuai dengan standar alur kerja aplikasi Website Builder & Pages di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Website Builder & Pages: You added the Newsletter",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/website.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+You+added+the+Newsletter",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+You+added+the+Newsletter"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Desktop and mobile\" sesuai dengan standar alur kerja aplikasi Website Builder & Pages di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Website Builder & Pages: which device can you",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/website.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+which+device+can+you",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+which+device+can+you"
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
    "penjelasan": "Superuser mode memberikan akses bypass terhadap record rules dan hak akses keamanan untuk keperluan perbaikan administratif.",
    "referensi": {
      "topikSpesifik": "Developer & Superuser Mode",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/developer_mode.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Developer+Mode+Superuser",
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
    "penjelasan": "Template penawaran mempercepat pembuatan order dengan default produk, syarat pembayaran, dan produk opsional yang dapat dipilih customer.",
    "referensi": {
      "topikSpesifik": "Quotation Templates & PDF Builder",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/quote_template.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Quotation+Templates+PDF+Builder",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Quotation+Templates+%26+PDF+Builder+Odoo+19"
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
    "jawaban": 1,
    "penjelasan": "Template penawaran mempercepat pembuatan order dengan default produk, syarat pembayaran, dan produk opsional yang dapat dipilih customer.",
    "referensi": {
      "topikSpesifik": "Quotation Templates & PDF Builder",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/sales_quotations/quote_template.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Quotation+Templates+PDF+Builder",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Quotation+Templates+%26+PDF+Builder+Odoo+19"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Both options are valid.\" sesuai dengan standar alur kerja aplikasi eCommerce & Online Store di Odoo 19.",
    "referensi": {
      "topikSpesifik": "eCommerce & Online Store: the frontend where can",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/ecommerce.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+the+frontend+where+can",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+the+frontend+where+can"
    }
  },
  {
    "id": 154,
    "topic": "ecommerce",
    "soal": "What can you add to a product to highlight it in your catalog and/or on the product page?",
    "pilihan": [
      "A ribbon.",
      "A badge.",
      "A ribbon or a badge."
    ],
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"A ribbon.\" sesuai dengan standar alur kerja aplikasi eCommerce & Online Store di Odoo 19.",
    "referensi": {
      "topikSpesifik": "eCommerce & Online Store: What can you add",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/ecommerce.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+can+you+add",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+can+you+add"
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
    "jawaban": 1,
    "penjelasan": "Jawaban yang tepat adalah: \"The author only.\" sesuai dengan standar alur kerja aplikasi Knowledge Articles & Collaborative Docs di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Knowledge Articles & Collaborative Docs: Who can edit article",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/knowledge.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Who+can+edit+article",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Who+can+edit+article"
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
    "penjelasan": "Jawaban yang tepat adalah: \"You can only read the article.\" sesuai dengan standar alur kerja aplikasi Knowledge Articles & Collaborative Docs di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Knowledge Articles & Collaborative Docs: What happens you lock",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/knowledge.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+happens+you+lock",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+happens+you+lock"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Yes, any header can be copied.\" sesuai dengan standar alur kerja aplikasi Knowledge Articles & Collaborative Docs di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Knowledge Articles & Collaborative Docs: Can you copy the",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/knowledge.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Can+you+copy+the",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Can+you+copy+the"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Both when a task reaches a specific stage or on a periodic basis\" sesuai dengan standar alur kerja aplikasi Project & Task Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Project & Task Management: When can Odoo send",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+When+can+Odoo+send",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+When+can+Odoo+send"
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
    "jawaban": 1,
    "penjelasan": "Jawaban yang tepat adalah: \"All internal users\" sesuai dengan standar alur kerja aplikasi Project & Task Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Project & Task Management: Which the following project",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Which+the+following+project",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Which+the+following+project"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Only invited internal users and users with the access right \"Project Administrator\"\" sesuai dengan standar alur kerja aplikasi Project & Task Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Project & Task Management: Who can potentially view",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Who+can+potentially+view",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Who+can+potentially+view"
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
    "penjelasan": "Burndown chart memvisualisasikan sisa jam kerja terhadap tenggat waktu proyek secara realtime.",
    "referensi": {
      "topikSpesifik": "Project Management & Burndown Charts",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Project+Management+Gantt",
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
    "penjelasan": "Jawaban yang tepat adalah: \"Analytic items\" sesuai dengan standar alur kerja aplikasi Project & Task Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Project & Task Management: What element cannot added",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+element+cannot+added",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+element+cannot+added"
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
    "penjelasan": "Timesheet mencatat waktu kerja karyawan pada tugas/proyek dan terintegrasi dengan modul Penagihan (Invoicing) dan Cuti (Time Off).",
    "referensi": {
      "topikSpesifik": "Timesheets & Time Off Integration",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/timesheets.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Timesheets+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Timesheets+%26+Time+Off+Integration+Odoo+19"
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
    "penjelasan": "Fiscal position secara otomatis memetakan akun dan jenis pajak berdasarkan lokasi geografis atau status perpajakan mitra bisnis.",
    "referensi": {
      "topikSpesifik": "Fiscal Positions & Tax Mapping",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/taxes/fiscal_positions.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Fiscal+Positions+Taxes",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Fiscal+Positions+%26+Tax+Mapping+Odoo+19"
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
    "jawaban": 2,
    "penjelasan": "Jawaban yang tepat adalah: \"Create follow-up levels then set reminders in Accounting > Customers > Follow-up Reports.\" sesuai dengan standar alur kerja aplikasi Accounting & Financial Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Accounting & Financial Management: How can you set",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+can+you+set",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+can+you+set"
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
    "penjelasan": "Superuser mode memberikan akses bypass terhadap record rules dan hak akses keamanan untuk keperluan perbaikan administratif.",
    "referensi": {
      "topikSpesifik": "Developer & Superuser Mode",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/developer_mode.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Developer+Mode+Superuser",
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
    "jawaban": 2,
    "penjelasan": "Field One2Many di Odoo Studio membutuhkan field Many2One pada model target sebagai relasi penghubungnya.",
    "referensi": {
      "topikSpesifik": "Odoo Studio & Relational Fields",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Studio+Customization",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+Studio+%26+Relational+Fields+Odoo+19"
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
    "jawaban": 2,
    "penjelasan": "Jawaban yang tepat adalah: \"Enable inter-company transactions in the general settings, then select the \"Create Vendor Bills\" option in Company B.\" sesuai dengan standar alur kerja aplikasi Accounting & Financial Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Accounting & Financial Management: How can you automatically",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+can+you+automatically",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+can+you+automatically"
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
    "penjelasan": "Lock dates mengunci periode pembukuan agar transaksi sebelum tanggal tersebut tidak dapat diubah lagi oleh staf akuntansi.",
    "referensi": {
      "topikSpesifik": "Accounting Lock Dates & Year-End Closing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/reporting/year_end.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Accounting+Lock+Dates",
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
    "penjelasan": "Dalam akuntansi perpetual (Automated Valuation), setiap mutasi stok (penerimaan barang dan pengiriman) otomatis membentuk jurnal akuntansi realtime.",
    "referensi": {
      "topikSpesifik": "Perpetual Inventory Valuation & Costing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/inventory_valuation.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Perpetual+Inventory+Valuation+FIFO",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Perpetual+Inventory+Valuation+%26+Costing+Odoo+19"
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
    "jawaban": 0,
    "penjelasan": "Modul Aset mengelola jadwal depresiasi aset tetap secara otomatis ke dalam jurnal akuntansi sesuai metode penyusutan yang dipilih.",
    "referensi": {
      "topikSpesifik": "Fixed Assets & Depreciation Management",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/vendor_bills/assets.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Fixed+Assets+Depreciation",
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
    "penjelasan": "Alur pembelian dimulai dari RFQ (Permintaan Penawaran) yang dikonfirmasi menjadi Purchase Order resmi ke vendor.",
    "referensi": {
      "topikSpesifik": "RFQ & Purchase Orders Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+RFQ+Purchase+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+RFQ+%26+Purchase+Orders+Workflow+Odoo+19"
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
    "penjelasan": "Odoo Spreadsheet memungkinkan analisis data dinamis langsung dari pivot view dengan sinkronisasi data live.",
    "referensi": {
      "topikSpesifik": "Odoo Spreadsheets & Live Pivot Tables",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/spreadsheet.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Spreadsheet+Integration",
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
      "Real\u2212time data streaming shows live updates to the data while the chart is expanded."
    ],
    "jawaban": 1,
    "penjelasan": "Point of Sale (POS) mendukung penjualan kasir offline, pengelolaan meja restoran, dan kontrol uang kas harian.",
    "referensi": {
      "topikSpesifik": "Point of Sale (POS) Operations",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Point+of+Sale+POS",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Point+of+Sale+%28POS%29+Operations+Odoo+19"
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
    "penjelasan": "Jawaban yang tepat adalah: \"It allows scheduling multiple appraisals at once\" sesuai dengan standar alur kerja aplikasi Human Resources & Employee Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Human Resources & Employee Management: What does the Launch",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/hr_and_attendance.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+does+the+Launch",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+does+the+Launch"
    }
  },
  {
    "id": 176,
    "topic": "hr",
    "soal": "Is it possible for employees to view the onboarding slides in the Referrals app after they've already seen them?",
    "pilihan": [
      "Yes, by going to 'Referrals' app > 'Configuration' > 'Onboarding' and click 'Restart Onboarding'.",
      "Yes, by setting the 'Onboarding' option to 'always show'.",
      "No, they can only be viewed once and cannot be shown again."
    ],
    "jawaban": 0,
    "penjelasan": "Point of Sale (POS) mendukung penjualan kasir offline, pengelolaan meja restoran, dan kontrol uang kas harian.",
    "referensi": {
      "topikSpesifik": "Point of Sale (POS) Operations",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Point+of+Sale+POS",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Point+of+Sale+%28POS%29+Operations+Odoo+19"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Vehicle Categories\" sesuai dengan standar alur kerja aplikasi Human Resources & Employee Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Human Resources & Employee Management: What preconfigured the Fleet",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/hr_and_attendance.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+preconfigured+the+Fleet",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+preconfigured+the+Fleet"
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
    "penjelasan": "Jawaban yang tepat adalah: \"For all orders from the same client.\" sesuai dengan standar alur kerja aplikasi Point of Sale Operations di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Point of Sale Operations: what case would you",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+what+case+would+you",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+what+case+would+you"
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
    "penjelasan": "Point of Sale (POS) mendukung penjualan kasir offline, pengelolaan meja restoran, dan kontrol uang kas harian.",
    "referensi": {
      "topikSpesifik": "Point of Sale (POS) Operations",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Point+of+Sale+POS",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Point+of+Sale+%28POS%29+Operations+Odoo+19"
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
    "penjelasan": "Kebijakan faktur menentukan apakah penagihan dilakukan berdasarkan Ordered Quantities (sebelum kirim) atau Delivered Quantities (setelah barang diterima).",
    "referensi": {
      "topikSpesifik": "Invoicing Policies & Down Payments",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/invoicing/invoicing_policy.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Invoicing+Policies+Down+Payments",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Invoicing+Policies+%26+Down+Payments+Odoo+19"
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
    "penjelasan": "Pricelist Odoo mendukung diskon persentase, formula berbasis cost/sales price, pembulatan (rounding), dan biaya tambahan (extra fee).",
    "referensi": {
      "topikSpesifik": "Pricelists, Discount & Price Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/prices/pricing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Pricelists+Discount+Rules",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Pricelists%2C+Discount+%26+Price+Rules+Odoo+19"
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
    "penjelasan": "Jawaban yang tepat adalah: \"The cheapest if the condition of quantity is met\" sesuai dengan standar alur kerja aplikasi Purchase Orders & Vendor Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Purchase Orders & Vendor Management: you have several lines",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+you+have+several+lines",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+you+have+several+lines"
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
    "jawaban": 1,
    "penjelasan": "Alur pembelian dimulai dari RFQ (Permintaan Penawaran) yang dikonfirmasi menjadi Purchase Order resmi ke vendor.",
    "referensi": {
      "topikSpesifik": "RFQ & Purchase Orders Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+RFQ+Purchase+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+RFQ+%26+Purchase+Orders+Workflow+Odoo+19"
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
    "penjelasan": "Pricelist Odoo mendukung diskon persentase, formula berbasis cost/sales price, pembulatan (rounding), dan biaya tambahan (extra fee).",
    "referensi": {
      "topikSpesifik": "Pricelists, Discount & Price Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/prices/pricing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Pricelists+Discount+Rules",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Pricelists%2C+Discount+%26+Price+Rules+Odoo+19"
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
    "penjelasan": "Alur pembelian dimulai dari RFQ (Permintaan Penawaran) yang dikonfirmasi menjadi Purchase Order resmi ke vendor.",
    "referensi": {
      "topikSpesifik": "RFQ & Purchase Orders Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+RFQ+Purchase+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+RFQ+%26+Purchase+Orders+Workflow+Odoo+19"
    }
  },
  {
    "id": 186,
    "topic": "purchase",
    "soal": "The Forecasted report shows \"Time to Replenish = 8 days\" for a product with low on-hand quantity. The forecasted quantity will reach 0 in 8 days. What should you do based on this information?",
    "pilihan": [
      "Click \"Replenish\" to trigger replenishment to ensure the product arrives in 8 days",
      "Wait until the on-hand quantity reaches 0 before reordering",
      "Ignore the field, it only affects products managed by reordering rules"
    ],
    "jawaban": 0,
    "penjelasan": "Aturan Reordering otomatis memicu pembuatan RFQ atau Order Produksi saat stok menyentuh batas Minimum Quantity.",
    "referensi": {
      "topikSpesifik": "Automated Reordering Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Reordering+Rules+Inventory",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Automated+Reordering+Rules+Odoo+19"
    }
  },
  {
    "id": 187,
    "topic": "purchase",
    "soal": "A delivery method is set to Based on Rules. (1) Order total < $50, Delivery fee = $13 (2) Order total > $50, Delivery fee = $0. Question: You confirm a sales order totalling $55. How much is delivery?",
    "pilihan": [
      "$13",
      "$0",
      "$55"
    ],
    "jawaban": 1,
    "penjelasan": "Jawaban yang tepat adalah: \"$0\" sesuai dengan standar alur kerja aplikasi Purchase Orders & Vendor Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Purchase Orders & Vendor Management: delivery method set Based",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+delivery+method+set+Based",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+delivery+method+set+Based"
    }
  },
  {
    "id": 188,
    "topic": "purchase",
    "soal": "Which of the following is true about the Dispatch Management System?",
    "pilihan": [
      "You can get Google Maps directions to all delivery destinations for an in-progress batch or wave transfer",
      "You can set a vehicle's capacity based on the number of products it can carry",
      "It's not necessary to configure dock locations to load items onto a delivery vehicle"
    ],
    "jawaban": 0,
    "penjelasan": "Work Center mengatur kapasitas mesin/stasiun kerja, estimasi waktu operasi, dan pelacakan efisiensi produksi (OEE).",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Work Orders",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Work+Orders+Odoo+19"
    }
  },
  {
    "id": 189,
    "topic": "purchase",
    "soal": "What happens when the on-hand quantity of a product is manually updated to increase by 10 units?",
    "pilihan": [
      "Nothing; on-hand quantity can only be updated by following the purchasing process",
      "The forecasted quantity increases by 10 units",
      "The on-hand quantity updates to 10, and an inventory adjustment is created to account for the difference"
    ],
    "jawaban": 2,
    "penjelasan": "Jawaban yang tepat adalah: \"The on-hand quantity updates to 10, and an inventory adjustment is created to account for the difference\" sesuai dengan standar alur kerja aplikasi Purchase Orders & Vendor Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Purchase Orders & Vendor Management: What happens when the",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+happens+when+the",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+happens+when+the"
    }
  },
  {
    "id": 190,
    "topic": "purchase",
    "soal": "Which of the following statements about 'Inventory Adjustments' is FALSE?",
    "pilihan": [
      "A stock move with 0 quantity is created from the storage location to the Inventory Loss location when the on-hand and counted quantities match",
      "You can set the frequency of inventory counts for product categories",
      "The barcode app shows all inventory counts to do at the selected location"
    ],
    "jawaban": 2,
    "penjelasan": "Jawaban yang tepat adalah: \"The barcode app shows all inventory counts to do at the selected location\" sesuai dengan standar alur kerja aplikasi Purchase Orders & Vendor Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Purchase Orders & Vendor Management: Which the following statements",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Which+the+following+statements",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Which+the+following+statements"
    }
  },
  {
    "id": 191,
    "topic": "purchase",
    "soal": "Your product uses the FIFO costing method. You (1) receive 3 units at $20 each, (2) receive 1 unit at $50, then (3) deliver 2 units.Which of the following correctly describes the cost of your remaining stock?",
    "pilihan": [
      "Two remaining units, both valued at $20",
      "One unit valued at $20 and one unit valued at $50",
      "Two remaining units, both valued at $35"
    ],
    "jawaban": 1,
    "penjelasan": "Dalam akuntansi perpetual (Automated Valuation), setiap mutasi stok (penerimaan barang dan pengiriman) otomatis membentuk jurnal akuntansi realtime.",
    "referensi": {
      "topikSpesifik": "Perpetual Inventory Valuation & Costing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/inventory_valuation.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Perpetual+Inventory+Valuation+FIFO",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Perpetual+Inventory+Valuation+%26+Costing+Odoo+19"
    }
  },
  {
    "id": 192,
    "topic": "purchase",
    "soal": "Your warehouse uses the \"Before Scheduled Date\" reservation method. In the Delivery Order operation settings, \"days before\" = 5, and \"days before when starred\" = 10. You have 2 deliveries for June 30, one starred, one not. Today is June 21. Which of the following best describes what happens?",
    "pilihan": [
      "Both deliveries are reserved, because they're within 10 days of the scheduled date",
      "Only the starred delivery is reserved, because it's within 10 days of the scheduled date",
      "Neither delivery is reserved, because the scheduled date hasn't yet arrived"
    ],
    "jawaban": 1,
    "penjelasan": "Jawaban yang tepat adalah: \"Only the starred delivery is reserved, because it's within 10 days of the scheduled date\" sesuai dengan standar alur kerja aplikasi Purchase Orders & Vendor Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Purchase Orders & Vendor Management: Your warehouse uses the",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Your+warehouse+uses+the",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Your+warehouse+uses+the"
    }
  },
  {
    "id": 193,
    "topic": "purchase",
    "soal": "You receive a pallet of Teakwood Planks and the following putaway rules exist (see image below). Which location will Odoo choose for the stock move?",
    "pilihan": [
      "WH/Stock/Shelf 2/Small Refrigerator",
      "WH/Stock/Shelf 1",
      "WH/Stock"
    ],
    "jawaban": 2,
    "penjelasan": "Jawaban yang tepat adalah: \"WH/Stock\" sesuai dengan standar alur kerja aplikasi Purchase Orders & Vendor Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Purchase Orders & Vendor Management: You receive pallet Teakwood",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+You+receive+pallet+Teakwood",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+You+receive+pallet+Teakwood"
    }
  },
  {
    "id": 194,
    "topic": "purchase",
    "soal": "Which of the following types of record(s) can NOT have barcodes added to them?",
    "pilihan": [
      "Products, Packagings, and Package Types",
      "Locations and Operation Types",
      "Product Categories"
    ],
    "jawaban": 2,
    "penjelasan": "Fitur Put in Pack mengelompokkan barang ke dalam koli/paket saat picking, sedangkan Scrap mencatat barang rusak/hilang dari stok.",
    "referensi": {
      "topikSpesifik": "Packages, Packaging & Scrap Orders",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Packages+Packaging+Scrap",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Packages%2C+Packaging+%26+Scrap+Orders+Odoo+19"
    }
  },
  {
    "id": 195,
    "topic": "purchase",
    "soal": "Can you enter barcodes manually in the Barcode app?",
    "pilihan": [
      "Yes, but only for products and packages",
      "Yes, including barcodes for products, packages, delivery orders, and warehouse receipts",
      "No"
    ],
    "jawaban": 1,
    "penjelasan": "Fitur Put in Pack mengelompokkan barang ke dalam koli/paket saat picking, sedangkan Scrap mencatat barang rusak/hilang dari stok.",
    "referensi": {
      "topikSpesifik": "Packages, Packaging & Scrap Orders",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Packages+Packaging+Scrap",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Packages%2C+Packaging+%26+Scrap+Orders+Odoo+19"
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
    "penjelasan": "Aturan Reordering otomatis memicu pembuatan RFQ atau Order Produksi saat stok menyentuh batas Minimum Quantity.",
    "referensi": {
      "topikSpesifik": "Automated Reordering Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Reordering+Rules+Inventory",
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
    "penjelasan": "Timesheet mencatat waktu kerja karyawan pada tugas/proyek dan terintegrasi dengan modul Penagihan (Invoicing) dan Cuti (Time Off).",
    "referensi": {
      "topikSpesifik": "Timesheets & Time Off Integration",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/timesheets.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Timesheets+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Timesheets+%26+Time+Off+Integration+Odoo+19"
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
    "jawaban": 2,
    "penjelasan": "Work Center mengatur kapasitas mesin/stasiun kerja, estimasi waktu operasi, dan pelacakan efisiensi produksi (OEE).",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Work Orders",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Work+Orders+Odoo+19"
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
    "penjelasan": "Subkontrak memungkinkan pengiriman bahan baku ke pihak ketiga untuk diproduksi dan diterima kembali sebagai barang jadi.",
    "referensi": {
      "topikSpesifik": "Subcontracting in Manufacturing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Subcontracting+Manufacturing",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Subcontracting+in+Manufacturing+Odoo+19"
    }
  },
  {
    "id": 200,
    "topic": "mrp",
    "soal": "Your subcontractor may consume slightly more or fewer components than expected. How can Odoo accommodate this?",
    "pilihan": [
      "By setting Flexible Consumption to \"Allowed\" on the BoM",
      "By sending more products than necessary on the Resupply Subcontractor route, and if there are extras, they can send them back",
      "By setting Flexible Consumption to \"Allowed with warning\" on the BoM"
    ],
    "jawaban": 2,
    "penjelasan": "Subkontrak memungkinkan pengiriman bahan baku ke pihak ketiga untuk diproduksi dan diterima kembali sebagai barang jadi.",
    "referensi": {
      "topikSpesifik": "Subcontracting in Manufacturing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Subcontracting+Manufacturing",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Subcontracting+in+Manufacturing+Odoo+19"
    }
  },
  {
    "id": 201,
    "topic": "mrp",
    "soal": "In the MPS, what does an orange-colored cell indicate about replenishment?",
    "pilihan": [
      "A replenishment order has already been generated, but more quantities need to be ordered to meet the Safety Stock Target",
      "The forecasted demand is higher than the actual demand, so the quantity to replenish is uncertain",
      "Too many units have already been replenished"
    ],
    "jawaban": 0,
    "penjelasan": "MPS merencanakan kebutuhan produksi dan pengadaan jangka panjang berdasarkan ramalan penjualan (demand forecast).",
    "referensi": {
      "topikSpesifik": "Master Production Schedule (MPS)",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Master+Production+Schedule",
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
    "penjelasan": "Work Center mengatur kapasitas mesin/stasiun kerja, estimasi waktu operasi, dan pelacakan efisiensi produksi (OEE).",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Work Orders",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Work+Orders+Odoo+19"
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
    "jawaban": 2,
    "penjelasan": "Bill of Materials (BoM) mendefinisikan daftar komponen dan tahapan operasi yang dibutuhkan untuk memproduksi sebuah barang.",
    "referensi": {
      "topikSpesifik": "Bills of Materials (BoM) & Kits",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Bills+of+Materials+BoM",
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
    "jawaban": 0,
    "penjelasan": "Work Center mengatur kapasitas mesin/stasiun kerja, estimasi waktu operasi, dan pelacakan efisiensi produksi (OEE).",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Work Orders",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Work+Orders+Odoo+19"
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
    "penjelasan": "Work Center mengatur kapasitas mesin/stasiun kerja, estimasi waktu operasi, dan pelacakan efisiensi produksi (OEE).",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Work Orders",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Work+Orders+Odoo+19"
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
    "penjelasan": "Field One2Many di Odoo Studio membutuhkan field Many2One pada model target sebagai relasi penghubungnya.",
    "referensi": {
      "topikSpesifik": "Odoo Studio & Relational Fields",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Studio+Customization",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+Studio+%26+Relational+Fields+Odoo+19"
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
    "jawaban": 1,
    "penjelasan": "Jawaban yang tepat adalah: \"This can't be controlled; the width is determined by the longest value in the column.\" sesuai dengan standar alur kerja aplikasi Odoo Studio Customizations di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo Studio Customizations: List view how can",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+List+view+how+can",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+List+view+how+can"
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
    "penjelasan": "Jawaban yang tepat adalah: \"When setting up an approval step, click the filter icon and define the relevant conditions.\" sesuai dengan standar alur kerja aplikasi Odoo Studio Customizations di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo Studio Customizations: action only needs approval",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+action+only+needs+approval",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+action+only+needs+approval"
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
    "penjelasan": "Jawaban yang tepat adalah: \"It defines the conditions a record must meet before the trigger event occurs.\" sesuai dengan standar alur kerja aplikasi Odoo Studio Customizations di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo Studio Customizations: What the primary function",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+the+primary+function",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+the+primary+function"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Set the Trigger to 'On create'.\" sesuai dengan standar alur kerja aplikasi Odoo Studio Customizations di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo Studio Customizations: How can you trigger",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+can+you+trigger",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+can+you+trigger"
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
    "penjelasan": "Jawaban yang tepat adalah: \"By clicking on the page indicator next to the view options and entering 1-1000.\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: you were any list",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+you+were+any+list",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+you+were+any+list"
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
    "penjelasan": "Di Odoo multi-company, mengosongkan field \"Company\" pada contact record membuatnya bersifat global dan dapat diakses oleh seluruh entitas perusahaan.",
    "referensi": {
      "topikSpesifik": "Multi-Company Setup & Records Sharing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/companies/multi_companies.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Multi+Company+Customer+Share",
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
    "penjelasan": "Jawaban yang tepat adalah: \"2FA (Two-Factor Authentication).\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: What option Odoo can",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+option+Odoo+can",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+option+Odoo+can"
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
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"In the Contacts app, open a customer's contact form. Under the Contacts tab, click \"Add Contact\". Then enter addresses under both the \"Invoice\" and \"Delivery\" radio buttons. This automatically fills out the invoice and delivery address fields in quotations\" sesuai dengan standar alur kerja aplikasi Sales & Quotations Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Sales & Quotations Management: How can set separate",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+can+set+separate",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+can+set+separate"
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
    "penjelasan": "Alur pembelian dimulai dari RFQ (Permintaan Penawaran) yang dikonfirmasi menjadi Purchase Order resmi ke vendor.",
    "referensi": {
      "topikSpesifik": "RFQ & Purchase Orders Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+RFQ+Purchase+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+RFQ+%26+Purchase+Orders+Workflow+Odoo+19"
    }
  },
  {
    "id": 216,
    "topic": "introduction",
    "soal": "What does it mean if the forecasted quantity of a product is higher than the quantity on hand?",
    "pilihan": [
      "You have enabled \"Include Components In Forecasts\" and your forecast is including potential units you may choose to manufacture at a future date",
      "New products are planned to be added to inventory because of a purchase or manufacturing order or because of returns",
      "A sales order has failed and product has not been removed from inventory"
    ],
    "jawaban": 1,
    "penjelasan": "Jawaban yang tepat adalah: \"New products are planned to be added to inventory because of a purchase or manufacturing order or because of returns\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: What does mean the",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+does+mean+the",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+does+mean+the"
    }
  },
  {
    "id": 217,
    "topic": "introduction",
    "soal": "What does it mean when a product is labeled under the product type, \"Combo\"?",
    "pilihan": [
      "When purchasing this product type, the customer can choose one product amongst a selection of multiple",
      "This product is a combination of a \"Good\" and a \"Service\"",
      "When purchasing this product, the customer must choose multiple product variants to submit an order"
    ],
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"When purchasing this product type, the customer can choose one product amongst a selection of multiple\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: What does mean when",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+does+mean+when",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+does+mean+when"
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
    "jawaban": 1,
    "penjelasan": "Jawaban yang tepat adalah: \"When salespeople typically recommend specific product variants to clients\" sesuai dengan standar alur kerja aplikasi Sales & Quotations Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Sales & Quotations Management: When would most useful",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+When+would+most+useful",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+When+would+most+useful"
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
    "jawaban": 1,
    "penjelasan": "Kebijakan faktur menentukan apakah penagihan dilakukan berdasarkan Ordered Quantities (sebelum kirim) atau Delivered Quantities (setelah barang diterima).",
    "referensi": {
      "topikSpesifik": "Invoicing Policies & Down Payments",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/invoicing/invoicing_policy.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Invoicing+Policies+Down+Payments",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Invoicing+Policies+%26+Down+Payments+Odoo+19"
    }
  },
  {
    "id": 220,
    "topic": "introduction",
    "soal": "Which of the following is NOT a valid option when setting an achievement-based commission plan for your team?",
    "pilihan": [
      "A plan based on the total amount of sales invoiced",
      "A plan based on the total amount of sales quoted",
      "A plan based on the total quantity of products sold"
    ],
    "jawaban": 1,
    "penjelasan": "Jawaban yang tepat adalah: \"A plan based on the total amount of sales quoted\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: Which the following NOT",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Which+the+following+NOT",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Which+the+following+NOT"
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
    "penjelasan": "Modul Survey mendukung pembuatan kuis bersertifikasi dengan penilaian otomatis dan passing score.",
    "referensi": {
      "topikSpesifik": "Surveys & Online Certifications",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/surveys.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Surveys+Certifications",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Surveys+%26+Online+Certifications+Odoo+19"
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
    "penjelasan": "Mengarsipkan record (archive) menyembunyikannya dari tampilan reguler tanpa menghapus data historis/audit trail.",
    "referensi": {
      "topikSpesifik": "Record Archiving & Filters",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/search.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Archive+Records+Filters",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Record+Archiving+%26+Filters+Odoo+19"
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
    "penjelasan": "Lead yang memenuhi kualifikasi dapat dikonversi menjadi Opportunity dan ditugaskan ke Sales Team yang sesuai.",
    "referensi": {
      "topikSpesifik": "CRM Pipeline & Lead Management",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm/pipeline/manage_sales_teams.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+CRM+Pipeline+Lead+Management",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+CRM+Pipeline+%26+Lead+Management+Odoo+19"
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
    "penjelasan": "Mengarsipkan record (archive) menyembunyikannya dari tampilan reguler tanpa menghapus data historis/audit trail.",
    "referensi": {
      "topikSpesifik": "Record Archiving & Filters",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/search.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Archive+Records+Filters",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Record+Archiving+%26+Filters+Odoo+19"
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
    "penjelasan": "Jawaban yang tepat adalah: \"It can be set or modified manually at any time.\" sesuai dengan standar alur kerja aplikasi CRM & Opportunity Pipeline di Odoo 19.",
    "referensi": {
      "topikSpesifik": "CRM & Opportunity Pipeline: When can the Expected",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+When+can+the+Expected",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+When+can+the+Expected"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Click the gear icon on the stage, select Edit, and enter the number of days in the Days to Rot field.\" sesuai dengan standar alur kerja aplikasi CRM & Opportunity Pipeline di Odoo 19.",
    "referensi": {
      "topikSpesifik": "CRM & Opportunity Pipeline: How can you set",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+can+you+set",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+can+you+set"
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
    "penjelasan": "Fitur AI Agent dengan \"Restrict to Sources\" membatasi jawaban hanya berdasarkan sumber data internal yang diizinkan.",
    "referensi": {
      "topikSpesifik": "Odoo AI Agents & Data Sources",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+AI+Agents",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+AI+Agents+%26+Data+Sources+Odoo+19"
    }
  },
  {
    "id": 228,
    "topic": "introduction",
    "soal": "How can you enable AI to transcribe meetings in Odoo?",
    "pilihan": [
      "In the Discuss app, go to Configuration > Voice & Video Settings and enable AI Transcription.",
      "In Knowledge > Browse Templates, select Meeting Minutes.",
      "Type \"/\" to open the command palette on an article, note tab, or description tab, and select Voice Transcript."
    ],
    "jawaban": 2,
    "penjelasan": "Jawaban yang tepat adalah: \"Type \"/\" to open the command palette on an article, note tab, or description tab, and select Voice Transcript.\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: How can you enable",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+can+you+enable",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+can+you+enable"
    }
  },
  {
    "id": 229,
    "topic": "introduction",
    "soal": "What does the \"Ask AI Search\" feature do?",
    "pilihan": [
      "To turn a plain-language search into the right database filters automatically.",
      "To generate AI suggestions for improving your search terms.",
      "To search only within Knowledge articles and uploaded files."
    ],
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"To turn a plain-language search into the right database filters automatically.\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: What does the Ask",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+does+the+Ask",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+does+the+Ask"
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
    "penjelasan": "Fitur AI Agent dengan \"Restrict to Sources\" membatasi jawaban hanya berdasarkan sumber data internal yang diizinkan.",
    "referensi": {
      "topikSpesifik": "Odoo AI Agents & Data Sources",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+AI+Agents",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+AI+Agents+%26+Data+Sources+Odoo+19"
    }
  },
  {
    "id": 231,
    "topic": "introduction",
    "soal": "What happens when you change an event state to 'cancelled'?",
    "pilihan": [
      "Event attendees are automatically sent an email using the email template 'Event: Cancelled', and the 'Register' button changes to a 'Cancelled' button on the website.",
      "Automatically moves the event to the 'Ended' stage, and emails attendees using the 'Event: Cancelled' email template.",
      "Replaces the 'Register' button with a 'Cancelled' image on the event website and even Kanban card, and disables outgoing emails for the event."
    ],
    "jawaban": 2,
    "penjelasan": "Jawaban yang tepat adalah: \"Replaces the 'Register' button with a 'Cancelled' image on the event website and even Kanban card, and disables outgoing emails for the event.\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: What happens when you",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+happens+when+you",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+happens+when+you"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Instagram\" sesuai dengan standar alur kerja aplikasi Website Builder & Pages di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Website Builder & Pages: What social media wall",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/website.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+social+media+wall",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+social+media+wall"
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
    "penjelasan": "Jawaban yang tepat adalah: \"You can add On Scroll & On Appearance animation on most text, images, and blocks. And you can add On Hover animation on images.\" sesuai dengan standar alur kerja aplikasi Website Builder & Pages di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Website Builder & Pages: How can you animate",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/website.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+can+you+animate",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+can+you+animate"
    }
  },
  {
    "id": 234,
    "topic": "introduction",
    "soal": "How can you hide the header and/or footer on pages?",
    "pilihan": [
      "You can do this upon activating developer mode.",
      "You can do this in the website editor, in the Styles tab.",
      "You can do this in the website editor, in the Blocks tab."
    ],
    "jawaban": 1,
    "penjelasan": "Superuser mode memberikan akses bypass terhadap record rules dan hak akses keamanan untuk keperluan perbaikan administratif.",
    "referensi": {
      "topikSpesifik": "Developer & Superuser Mode",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/developer_mode.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Developer+Mode+Superuser",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Developer+%26+Superuser+Mode+Odoo+19"
    }
  },
  {
    "id": 235,
    "topic": "introduction",
    "soal": "All products with attribute value 'A' should be priced $50 higher than products with attribute value 'B'. How can you automate this price difference?",
    "pilihan": [
      "By changing the 'Default Extra Price' value in the backend of that attribute.",
      "In 'Sales Price' on product variants.",
      "This can only be done with a pricelist."
    ],
    "jawaban": 0,
    "penjelasan": "Pricelist Odoo mendukung diskon persentase, formula berbasis cost/sales price, pembulatan (rounding), dan biaya tambahan (extra fee).",
    "referensi": {
      "topikSpesifik": "Pricelists, Discount & Price Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/prices/pricing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Pricelists+Discount+Rules",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Pricelists%2C+Discount+%26+Price+Rules+Odoo+19"
    }
  },
  {
    "id": 236,
    "topic": "introduction",
    "soal": "How can you allow customers to order online and then pay in person at your stores?",
    "pilihan": [
      "By enabling the \"Pay in Site\" payment provider.",
      "By enabling the 'Click & Collect' feature, configuring a picking site, and activating the 'Pay in Site' payment provider.",
      "By activating the 'Pick-up in Store' feature in the website settings."
    ],
    "jawaban": 1,
    "penjelasan": "Jawaban yang tepat adalah: \"By enabling the 'Click & Collect' feature, configuring a picking site, and activating the 'Pay in Site' payment provider.\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: How can you allow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+can+you+allow",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+can+you+allow"
    }
  },
  {
    "id": 237,
    "topic": "introduction",
    "soal": "What other option is there to display a color variant of a product?",
    "pilihan": [
      "A video, a GIF, or a 3D render of the product can be used instead of a color.",
      "A 3D render of the product color variant can be displayed.",
      "An image of the product or a GIF can be displayed instead of a color."
    ],
    "jawaban": 2,
    "penjelasan": "Jawaban yang tepat adalah: \"An image of the product or a GIF can be displayed instead of a color.\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: What other option there",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+other+option+there",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+other+option+there"
    }
  },
  {
    "id": 238,
    "topic": "introduction",
    "soal": "How can you automatically generate a product description?",
    "pilihan": [
      "First, download the AI app and add your API key. Then you can use it to generate a product description.",
      "In Website > Configuration > Settings, enable \"Generate Product Description Automatically\".",
      "In the product backend, on the Sales tab, click the generate description button."
    ],
    "jawaban": 1,
    "penjelasan": "Jawaban yang tepat adalah: \"In Website > Configuration > Settings, enable \"Generate Product Description Automatically\".\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: How can you automatically",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+can+you+automatically",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+can+you+automatically"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Index, Item Kanban/Cards/List/Calendar\" sesuai dengan standar alur kerja aplikasi Knowledge Articles & Collaborative Docs di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Knowledge Articles & Collaborative Docs: Which the following powerbox",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/knowledge.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Which+the+following+powerbox",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Which+the+following+powerbox"
    }
  },
  {
    "id": 240,
    "topic": "introduction",
    "soal": "What can you do if you accidentally delete an article's section?",
    "pilihan": [
      "Restore the previous version of the article",
      "Restore the article from the 'Archived' articles",
      "Restore the article from the 'Trash'"
    ],
    "jawaban": 0,
    "penjelasan": "Mengarsipkan record (archive) menyembunyikannya dari tampilan reguler tanpa menghapus data historis/audit trail.",
    "referensi": {
      "topikSpesifik": "Record Archiving & Filters",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/essentials/search.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Archive+Records+Filters",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Record+Archiving+%26+Filters+Odoo+19"
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
    "penjelasan": "Burndown chart memvisualisasikan sisa jam kerja terhadap tenggat waktu proyek secara realtime.",
    "referensi": {
      "topikSpesifik": "Project Management & Burndown Charts",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Project+Management+Gantt",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Project+Management+%26+Burndown+Charts+Odoo+19"
    }
  },
  {
    "id": 242,
    "topic": "crm",
    "soal": "How are the tasks in the \"My Tasks\" pipeline managed?",
    "pilihan": [
      "They are moved automatically across stages based on their deadline",
      "They are moved automatically across stages based on their next activity's date",
      "You move them manually across stages"
    ],
    "jawaban": 2,
    "penjelasan": "Jawaban yang tepat adalah: \"You move them manually across stages\" sesuai dengan standar alur kerja aplikasi CRM & Opportunity Pipeline di Odoo 19.",
    "referensi": {
      "topikSpesifik": "CRM & Opportunity Pipeline: How are the tasks",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+are+the+tasks",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+are+the+tasks"
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
    "penjelasan": "Dependensi tugas menghubungkan tugas yang saling bergantung dan memungkinkan penjadwalan ulang otomatis pada Gantt view.",
    "referensi": {
      "topikSpesifik": "Sub-tasks, Task Hierarchy & Dependencies",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Project+Subtasks+Dependencies",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Sub-tasks%2C+Task+Hierarchy+%26+Dependencies+Odoo+19"
    }
  },
  {
    "id": 244,
    "topic": "project",
    "soal": "When entering timesheets, how is the timesheet cost generated?",
    "pilihan": [
      "By setting an hourly cost on the employee form",
      "By setting a cost on the product form",
      "By setting a timesheet cost on the task form"
    ],
    "jawaban": 0,
    "penjelasan": "Timesheet mencatat waktu kerja karyawan pada tugas/proyek dan terintegrasi dengan modul Penagihan (Invoicing) dan Cuti (Time Off).",
    "referensi": {
      "topikSpesifik": "Timesheets & Time Off Integration",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/timesheets.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Timesheets+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Timesheets+%26+Time+Off+Integration+Odoo+19"
    }
  },
  {
    "id": 245,
    "topic": "introduction",
    "soal": "What depreciation methods are available for an asset?",
    "pilihan": [
      "Declining, Straight line then Declining, and Straight line.",
      "Declining, Declining then Straight line, and Straight line.",
      "Declining, Declining then Straight line, Straight line, and Progressive."
    ],
    "jawaban": 1,
    "penjelasan": "Modul Aset mengelola jadwal depresiasi aset tetap secara otomatis ke dalam jurnal akuntansi sesuai metode penyusutan yang dipilih.",
    "referensi": {
      "topikSpesifik": "Fixed Assets & Depreciation Management",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/vendor_bills/assets.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Fixed+Assets+Depreciation",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Fixed+Assets+%26+Depreciation+Management+Odoo+19"
    }
  },
  {
    "id": 246,
    "topic": "introduction",
    "soal": "What happens if a customer account is managed in a different currency than the company's currency?",
    "pilihan": [
      "The invoice/bill and the journal items are recorded using the account currency.",
      "The invoice/bill is recorded using the company's currency even if the account is managed in a different currency.",
      "The invoice/bill is recorded using the account currency but the journal items are set in the company currency."
    ],
    "jawaban": 2,
    "penjelasan": "Jawaban yang tepat adalah: \"The invoice/bill is recorded using the account currency but the journal items are set in the company currency.\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: What happens customer account",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+happens+customer+account",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+happens+customer+account"
    }
  },
  {
    "id": 247,
    "topic": "introduction",
    "soal": "What happens if a currency is not set on an account in your chart of accounts?",
    "pilihan": [
      "The account can be used for transactions in any currency.",
      "The account can only be used for transactions in the main company's currency.",
      "Currency cannot be managed at account level, only at journal level."
    ],
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"The account can be used for transactions in any currency.\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: What happens currency not",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+happens+currency+not",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+happens+currency+not"
    }
  },
  {
    "id": 248,
    "topic": "introduction",
    "soal": "How are follow-up actions triggered?",
    "pilihan": [
      "Based on the number of days overdue starting from the creation date of the invoice.",
      "Based on the number of days overdue starting from the due date of the invoice.",
      "Based on the number of days overdue starting from the invoice date of the invoice."
    ],
    "jawaban": 1,
    "penjelasan": "Jawaban yang tepat adalah: \"Based on the number of days overdue starting from the due date of the invoice.\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: How are followup actions",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+are+followup+actions",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+are+followup+actions"
    }
  },
  {
    "id": 249,
    "topic": "purchase",
    "soal": "Which feature allows you to automatically change the income or expense account that a product should use based on the customer or vendor?",
    "pilihan": [
      "Fiscal Positions.",
      "Fiscal Localizations.",
      "Account Groups."
    ],
    "jawaban": 0,
    "penjelasan": "Fiscal position secara otomatis memetakan akun dan jenis pajak berdasarkan lokasi geografis atau status perpajakan mitra bisnis.",
    "referensi": {
      "topikSpesifik": "Fiscal Positions & Tax Mapping",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/taxes/fiscal_positions.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Fiscal+Positions+Taxes",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Fiscal+Positions+%26+Tax+Mapping+Odoo+19"
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
    "penjelasan": "Point of Sale (POS) mendukung penjualan kasir offline, pengelolaan meja restoran, dan kontrol uang kas harian.",
    "referensi": {
      "topikSpesifik": "Point of Sale (POS) Operations",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Point+of+Sale+POS",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Point+of+Sale+%28POS%29+Operations+Odoo+19"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Bank, Cash, Credit card, Sales, and Purchase.\" sesuai dengan standar alur kerja aplikasi Accounting & Financial Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Accounting & Financial Management: Apart from miscellaneous what",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Apart+from+miscellaneous+what",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Apart+from+miscellaneous+what"
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
    "penjelasan": "Odoo Spreadsheet memungkinkan analisis data dinamis langsung dari pivot view dengan sinkronisasi data live.",
    "referensi": {
      "topikSpesifik": "Odoo Spreadsheets & Live Pivot Tables",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/spreadsheet.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Spreadsheet+Integration",
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
    "penjelasan": "Jawaban yang tepat adalah: \"From Configuration > Time Off Types\" sesuai dengan standar alur kerja aplikasi Human Resources & Employee Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Human Resources & Employee Management: you wanted set color",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/hr_and_attendance.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+you+wanted+set+color",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+you+wanted+set+color"
    }
  },
  {
    "id": 254,
    "topic": "introduction",
    "soal": "In the Payroll application, what source creates Work Entries?",
    "pilihan": [
      "Working Schedules, Contracts, and Projects",
      "Working Schedules, Employees, and Time Off",
      "Working Schedules, Attendance, and Planning"
    ],
    "jawaban": 2,
    "penjelasan": "Jawaban yang tepat adalah: \"Working Schedules, Attendance, and Planning\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: the Payroll application what",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+the+Payroll+application+what",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+the+Payroll+application+what"
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
    "penjelasan": "Point of Sale (POS) mendukung penjualan kasir offline, pengelolaan meja restoran, dan kontrol uang kas harian.",
    "referensi": {
      "topikSpesifik": "Point of Sale (POS) Operations",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Point+of+Sale+POS",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Point+of+Sale+%28POS%29+Operations+Odoo+19"
    }
  },
  {
    "id": 256,
    "topic": "introduction",
    "soal": "What is this screen? (Shows \"Welcome to My Company (San Francisco)\", \"Check in\" button, and a QR code)",
    "pilihan": [
      "A Frontdesk kiosk",
      "An Attendances kiosk",
      "A Visitors kiosk"
    ],
    "jawaban": 1,
    "penjelasan": "Jawaban yang tepat adalah: \"An Attendances kiosk\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: What this screen Shows",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+this+screen+Shows",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+this+screen+Shows"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Set the 'Book' field to 'Resources'.\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: When configuring bookings what",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+When+configuring+bookings+what",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+When+configuring+bookings+what"
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
    "penjelasan": "Alur pembelian dimulai dari RFQ (Permintaan Penawaran) yang dikonfirmasi menjadi Purchase Order resmi ke vendor.",
    "referensi": {
      "topikSpesifik": "RFQ & Purchase Orders Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+RFQ+Purchase+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+RFQ+%26+Purchase+Orders+Workflow+Odoo+19"
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
    "penjelasan": "Alur pembelian dimulai dari RFQ (Permintaan Penawaran) yang dikonfirmasi menjadi Purchase Order resmi ke vendor.",
    "referensi": {
      "topikSpesifik": "RFQ & Purchase Orders Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+RFQ+Purchase+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+RFQ+%26+Purchase+Orders+Workflow+Odoo+19"
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
    "penjelasan": "Alur pembelian dimulai dari RFQ (Permintaan Penawaran) yang dikonfirmasi menjadi Purchase Order resmi ke vendor.",
    "referensi": {
      "topikSpesifik": "RFQ & Purchase Orders Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+RFQ+Purchase+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+RFQ+%26+Purchase+Orders+Workflow+Odoo+19"
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
    "penjelasan": "Alur pembelian dimulai dari RFQ (Permintaan Penawaran) yang dikonfirmasi menjadi Purchase Order resmi ke vendor.",
    "referensi": {
      "topikSpesifik": "RFQ & Purchase Orders Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+RFQ+Purchase+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+RFQ+%26+Purchase+Orders+Workflow+Odoo+19"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Vendor Location: -10 units / Internal Location: +10 units\" sesuai dengan standar alur kerja aplikasi Inventory & Warehouse Operations di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Inventory & Warehouse Operations: You receive units product",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+You+receive+units+product",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+You+receive+units+product"
    }
  },
  {
    "id": 263,
    "topic": "mrp",
    "soal": "You want a product to be replenished automatically in two warehouses: one via buying and the other via manufacturing. How can this be configured in Odoo?",
    "pilihan": [
      "Create two products (one for each warehouse). For each reordering rule, set the Method to \"Buy\" and the alternative Method to \"Manufacture\"",
      "Create multiple reordering rules for the same product, each linked to a different Warehouse and Route",
      "Create one reordering rule and assign multiple warehouses to it"
    ],
    "jawaban": 1,
    "penjelasan": "Aturan Reordering otomatis memicu pembuatan RFQ atau Order Produksi saat stok menyentuh batas Minimum Quantity.",
    "referensi": {
      "topikSpesifik": "Automated Reordering Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Reordering+Rules+Inventory",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Automated+Reordering+Rules+Odoo+19"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Open Inventory > Reporting > Stock, locate the component, and click the Unit Cost to see all stock moves that affected its valuation\" sesuai dengan standar alur kerja aplikasi Inventory & Warehouse Operations di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Inventory & Warehouse Operations: Youre using the Average",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Youre+using+the+Average",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Youre+using+the+Average"
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
    "jawaban": 0,
    "penjelasan": "Pelacakan lot/serial number memungkinkan penelusuran riwayat pergerakan produk dari penerimaan vendor hingga pengiriman ke customer.",
    "referensi": {
      "topikSpesifik": "Lots & Serial Numbers Traceability",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Lots+Serial+Numbers+Traceability",
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
    "penjelasan": "Dalam akuntansi perpetual (Automated Valuation), setiap mutasi stok (penerimaan barang dan pengiriman) otomatis membentuk jurnal akuntansi realtime.",
    "referensi": {
      "topikSpesifik": "Perpetual Inventory Valuation & Costing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started/inventory_valuation.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Perpetual+Inventory+Valuation+FIFO",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Perpetual+Inventory+Valuation+%26+Costing+Odoo+19"
    }
  },
  {
    "id": 267,
    "topic": "introduction",
    "soal": "Which of the following best describes the difference between a reservation method and a removal strategy?",
    "pilihan": [
      "A reservation method determines which orders receive available stock first, while a removal strategy determines which specific stock units are used to fulfill those orders",
      "A reservation method decides how stock is reserved for orders while a removal strategy defines how products move between locations",
      "A reservation method is required the Lots & Serial Numbers setting to be enabled, while removal strategy requires the Storage Locations setting"
    ],
    "jawaban": 0,
    "penjelasan": "Pelacakan lot/serial number memungkinkan penelusuran riwayat pergerakan produk dari penerimaan vendor hingga pengiriman ke customer.",
    "referensi": {
      "topikSpesifik": "Lots & Serial Numbers Traceability",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Lots+Serial+Numbers+Traceability",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Lots+%26+Serial+Numbers+Traceability+Odoo+19"
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
    "penjelasan": "Pelacakan lot/serial number memungkinkan penelusuran riwayat pergerakan produk dari penerimaan vendor hingga pengiriman ke customer.",
    "referensi": {
      "topikSpesifik": "Lots & Serial Numbers Traceability",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Lots+Serial+Numbers+Traceability",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Lots+%26+Serial+Numbers+Traceability+Odoo+19"
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
    "penjelasan": "Work Center mengatur kapasitas mesin/stasiun kerja, estimasi waktu operasi, dan pelacakan efisiensi produksi (OEE).",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Work Orders",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Work+Orders+Odoo+19"
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
    "penjelasan": "Jawaban yang tepat adalah: \"At confirmation of the manufacturing order\" sesuai dengan standar alur kerja aplikasi Manufacturing & Shop Floor Operations di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Manufacturing & Shop Floor Operations: When are forecasted quantities",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+When+are+forecasted+quantities",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+When+are+forecasted+quantities"
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
    "penjelasan": "Bill of Materials (BoM) mendefinisikan daftar komponen dan tahapan operasi yang dibutuhkan untuk memproduksi sebuah barang.",
    "referensi": {
      "topikSpesifik": "Bills of Materials (BoM) & Kits",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Bills+of+Materials+BoM",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Bills+of+Materials+%28BoM%29+%26+Kits+Odoo+19"
    }
  },
  {
    "id": 272,
    "topic": "introduction",
    "soal": "How can you access an existing PDF report in order to edit it?",
    "pilihan": [
      "Go to Settings app -> Technical -> Reports, then search for the name of the report.",
      "Open Studio, click Reports, and search for the specific report name or model.",
      "Use the '/report' command in any view's editor then enter the name of the report."
    ],
    "jawaban": 1,
    "penjelasan": "Field One2Many di Odoo Studio membutuhkan field Many2One pada model target sebagai relasi penghubungnya.",
    "referensi": {
      "topikSpesifik": "Odoo Studio & Relational Fields",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Studio+Customization",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+Studio+%26+Relational+Fields+Odoo+19"
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
    "penjelasan": "Jawaban yang tepat adalah: \"The email will use the updated field values, as actions are executed in the order they are defined.\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: automation rule includes both",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+automation+rule+includes+both",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+automation+rule+includes+both"
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
    "penjelasan": "Superuser mode memberikan akses bypass terhadap record rules dan hak akses keamanan untuk keperluan perbaikan administratif.",
    "referensi": {
      "topikSpesifik": "Developer & Superuser Mode",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/developer_mode.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Developer+Mode+Superuser",
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
    "penjelasan": "Pricelist Odoo mendukung diskon persentase, formula berbasis cost/sales price, pembulatan (rounding), dan biaya tambahan (extra fee).",
    "referensi": {
      "topikSpesifik": "Pricelists, Discount & Price Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/prices/pricing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Pricelists+Discount+Rules",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Pricelists%2C+Discount+%26+Price+Rules+Odoo+19"
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
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"September 6th\" sesuai dengan standar alur kerja aplikasi Inventory & Warehouse Operations di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Inventory & Warehouse Operations: Assuming you have enough",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Assuming+you+have+enough",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Assuming+you+have+enough"
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
    "penjelasan": "Alur pembelian dimulai dari RFQ (Permintaan Penawaran) yang dikonfirmasi menjadi Purchase Order resmi ke vendor.",
    "referensi": {
      "topikSpesifik": "RFQ & Purchase Orders Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+RFQ+Purchase+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+RFQ+%26+Purchase+Orders+Workflow+Odoo+19"
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
    "penjelasan": "Point of Sale (POS) mendukung penjualan kasir offline, pengelolaan meja restoran, dan kontrol uang kas harian.",
    "referensi": {
      "topikSpesifik": "Point of Sale (POS) Operations",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Point+of+Sale+POS",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Point+of+Sale+%28POS%29+Operations+Odoo+19"
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
    "penjelasan": "Pricelist Odoo mendukung diskon persentase, formula berbasis cost/sales price, pembulatan (rounding), dan biaya tambahan (extra fee).",
    "referensi": {
      "topikSpesifik": "Pricelists, Discount & Price Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/products_prices/prices/pricing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Pricelists+Discount+Rules",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Pricelists%2C+Discount+%26+Price+Rules+Odoo+19"
    }
  },
  {
    "id": 280,
    "topic": "purchase",
    "soal": "When a customer finalizes a purchase in the online store:",
    "pilihan": [
      "Odoo automatically generates a sales order and invoice. The Sales app is not needed for handling online sales.",
      "Odoo creates a quotation, and the user must manually confirm it into a sales order.",
      "Odoo automatically generates a sales order, which can then be viewed and managed from the Sales backend."
    ],
    "jawaban": 2,
    "penjelasan": "Jawaban yang tepat adalah: \"Odoo automatically generates a sales order, which can then be viewed and managed from the Sales backend.\" sesuai dengan standar alur kerja aplikasi Purchase Orders & Vendor Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Purchase Orders & Vendor Management: When customer finalizes purchase",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+When+customer+finalizes+purchase",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+When+customer+finalizes+purchase"
    }
  },
  {
    "id": 281,
    "topic": "sales",
    "soal": "I've configured a product under 'Sales' and can pull it onto a sales quotation, but it does not appear on my eCommerce shop. Why not?",
    "pilihan": [
      "It needs to be Published on the website first.",
      "Products created in the Sales app are only available for backend sales. Products for the eCommerce store must be created in the Website app.",
      "Products cannot be visible on the eCommerce shop if they do not have a positive stock quantity."
    ],
    "jawaban": 0,
    "penjelasan": "Point of Sale (POS) mendukung penjualan kasir offline, pengelolaan meja restoran, dan kontrol uang kas harian.",
    "referensi": {
      "topikSpesifik": "Point of Sale (POS) Operations",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Point+of+Sale+POS",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Point+of+Sale+%28POS%29+Operations+Odoo+19"
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
    "penjelasan": "Modul Survey mendukung pembuatan kuis bersertifikasi dengan penilaian otomatis dan passing score.",
    "referensi": {
      "topikSpesifik": "Surveys & Online Certifications",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/surveys.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Surveys+Certifications",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Surveys+%26+Online+Certifications+Odoo+19"
    }
  },
  {
    "id": 283,
    "topic": "crm",
    "soal": "Which of the following question types cannot be used to generate leads on a Survey?",
    "pilihan": [
      "Multiple Choice: only one answer.",
      "Single line text box.",
      "Matrix."
    ],
    "jawaban": 2,
    "penjelasan": "Modul Survey mendukung pembuatan kuis bersertifikasi dengan penilaian otomatis dan passing score.",
    "referensi": {
      "topikSpesifik": "Surveys & Online Certifications",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/marketing/surveys.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Surveys+Certifications",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Surveys+%26+Online+Certifications+Odoo+19"
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
    "penjelasan": "Point of Sale (POS) mendukung penjualan kasir offline, pengelolaan meja restoran, dan kontrol uang kas harian.",
    "referensi": {
      "topikSpesifik": "Point of Sale (POS) Operations",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Point+of+Sale+POS",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Point+of+Sale+%28POS%29+Operations+Odoo+19"
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
    "penjelasan": "Jawaban yang tepat adalah: \"As many quotations and sales orders as you want.\" sesuai dengan standar alur kerja aplikasi Sales & Quotations Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Sales & Quotations Management: How many quotations sales",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+many+quotations+sales",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+many+quotations+sales"
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
    "penjelasan": "Jawaban yang tepat adalah: \"You can still edit the opportunity.\" sesuai dengan standar alur kerja aplikasi CRM & Opportunity Pipeline di Odoo 19.",
    "referensi": {
      "topikSpesifik": "CRM & Opportunity Pipeline: Once opportunity marked Won",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Once+opportunity+marked+Won",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Once+opportunity+marked+Won"
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
    "penjelasan": "Jawaban yang tepat adalah: \"The lead is in a newer stage of the pipeline.\" sesuai dengan standar alur kerja aplikasi CRM & Opportunity Pipeline di Odoo 19.",
    "referensi": {
      "topikSpesifik": "CRM & Opportunity Pipeline: Which the following factors",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/crm.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Which+the+following+factors",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Which+the+following+factors"
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
    "penjelasan": "Fitur AI Agent dengan \"Restrict to Sources\" membatasi jawaban hanya berdasarkan sumber data internal yang diizinkan.",
    "referensi": {
      "topikSpesifik": "Odoo AI Agents & Data Sources",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+AI+Agents",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+AI+Agents+%26+Data+Sources+Odoo+19"
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
    "penjelasan": "Fitur AI Agent dengan \"Restrict to Sources\" membatasi jawaban hanya berdasarkan sumber data internal yang diizinkan.",
    "referensi": {
      "topikSpesifik": "Odoo AI Agents & Data Sources",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general/ai.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+AI+Agents",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+AI+Agents+%26+Data+Sources+Odoo+19"
    }
  },
  {
    "id": 290,
    "topic": "introduction",
    "soal": "How can you gather event attendee details, such as \"How did you hear about us?\"",
    "pilihan": [
      "With Odoo Studio.",
      "By sending them an email.",
      "Adding relevant questions to the Questions tab of an event."
    ],
    "jawaban": 2,
    "penjelasan": "Field One2Many di Odoo Studio membutuhkan field Many2One pada model target sebagai relasi penghubungnya.",
    "referensi": {
      "topikSpesifik": "Odoo Studio & Relational Fields",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/studio.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Studio+Customization",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+Studio+%26+Relational+Fields+Odoo+19"
    }
  },
  {
    "id": 291,
    "topic": "introduction",
    "soal": "How would you automatically communicate information to an event attendee once they register?",
    "pilihan": [
      "Select an email template in the Communication tab of the event, with the trigger \"Before the event starts\".",
      "Select an email template in the Communication tab of the event, with the trigger \"After each registration\".",
      "You can only email attendees if they select 'allow emails' on the event registration page."
    ],
    "jawaban": 1,
    "penjelasan": "Jawaban yang tepat adalah: \"Select an email template in the Communication tab of the event, with the trigger \"After each registration\".\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: How would you automatically",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+would+you+automatically",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+would+you+automatically"
    }
  },
  {
    "id": 292,
    "topic": "introduction",
    "soal": "Which of the following is NOT a valid Marketing Automation activity trigger?",
    "pilihan": [
      "1 week after an email has bounced.",
      "2 days after an email has been forwarded.",
      "0 hours after an email has been clicked."
    ],
    "jawaban": 1,
    "penjelasan": "Jawaban yang tepat adalah: \"2 days after an email has been forwarded.\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: Which the following NOT",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Which+the+following+NOT",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Which+the+following+NOT"
    }
  },
  {
    "id": 293,
    "topic": "website",
    "soal": "How can you optimize product images on your website?",
    "pilihan": [
      "Upload them from the form view in the backend, where Odoo automatically converts them to the WebP format.",
      "Upload them from the form view, and click \"Customize\" to resize the image.",
      "Convert them online then upload them from the frontend of the product page."
    ],
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"Upload them from the form view in the backend, where Odoo automatically converts them to the WebP format.\" sesuai dengan standar alur kerja aplikasi Website Builder & Pages di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Website Builder & Pages: How can you optimize",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/websites/website.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+can+you+optimize",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+can+you+optimize"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Tags are shared between all tasks of all projects\" sesuai dengan standar alur kerja aplikasi Project & Task Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Project & Task Management: How are tags shared",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+are+tags+shared",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+are+tags+shared"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Activities\" sesuai dengan standar alur kerja aplikasi Project & Task Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Project & Task Management: What not carried over",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+not+carried+over",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+not+carried+over"
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
    "jawaban": 0,
    "penjelasan": "Burndown chart memvisualisasikan sisa jam kerja terhadap tenggat waktu proyek secara realtime.",
    "referensi": {
      "topikSpesifik": "Project Management & Burndown Charts",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/project.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Project+Management+Gantt",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Project+Management+%26+Burndown+Charts+Odoo+19"
    }
  },
  {
    "id": 297,
    "topic": "introduction",
    "soal": "What are hours billed at a fixed price?",
    "pilihan": [
      "These are sold hours coming from a sales order that still need to be timesheeted before being invoiced",
      "These are timesheeted hours linked to a sales order, where the invoicing policy is set to \"prepaid\"",
      "These are the actual timesheeted hours that cannot be invoiced from the sales order"
    ],
    "jawaban": 1,
    "penjelasan": "Kebijakan faktur menentukan apakah penagihan dilakukan berdasarkan Ordered Quantities (sebelum kirim) atau Delivered Quantities (setelah barang diterima).",
    "referensi": {
      "topikSpesifik": "Invoicing Policies & Down Payments",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/sales/invoicing/invoicing_policy.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Invoicing+Policies+Down+Payments",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Invoicing+Policies+%26+Down+Payments+Odoo+19"
    }
  },
  {
    "id": 298,
    "topic": "crm",
    "soal": "How can you display the rankings on the timesheet leaderboard?",
    "pilihan": [
      "By billing rate and hours invoiced",
      "By total time and hours invoiced",
      "By billing rate and total time"
    ],
    "jawaban": 2,
    "penjelasan": "Timesheet mencatat waktu kerja karyawan pada tugas/proyek dan terintegrasi dengan modul Penagihan (Invoicing) dan Cuti (Time Off).",
    "referensi": {
      "topikSpesifik": "Timesheets & Time Off Integration",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/services/timesheets.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Timesheets+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Timesheets+%26+Time+Off+Integration+Odoo+19"
    }
  },
  {
    "id": 299,
    "topic": "introduction",
    "soal": "At which level do you define a billing time target?",
    "pilihan": [
      "At the company level",
      "At the employee level",
      "At the project level"
    ],
    "jawaban": 1,
    "penjelasan": "Jawaban yang tepat adalah: \"At the employee level\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: which level you define",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+which+level+you+define",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+which+level+you+define"
    }
  },
  {
    "id": 300,
    "topic": "pos",
    "soal": "Is it possible to still make corrections after the Lock Everything lock date?",
    "pilihan": [
      "No, it represents an absolute block on everything before the date.",
      "Yes, users with the Adviser role can make corrections using specific tools like the accounting journal, or by cancelling and recreating invoices.",
      "All users can still make corrections to all types of journal items."
    ],
    "jawaban": 0,
    "penjelasan": "Lock dates mengunci periode pembukuan agar transaksi sebelum tanggal tersebut tidak dapat diubah lagi oleh staf akuntansi.",
    "referensi": {
      "topikSpesifik": "Accounting Lock Dates & Year-End Closing",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/reporting/year_end.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Accounting+Lock+Dates",
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
    "penjelasan": "Jawaban yang tepat adalah: \"A single payment can be registered for the full amount directly from the invoice.\" sesuai dengan standar alur kerja aplikasi Accounting & Financial Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Accounting & Financial Management: How can you register",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+can+you+register",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+can+you+register"
    }
  },
  {
    "id": 302,
    "topic": "accounting",
    "soal": "Manually closing a loan will:",
    "pilihan": [
      "Stop the automatic generation of entries for the remaining installments.",
      "Automatically delete all unposted entries related to the loan.",
      "Require a manual reconciliation of the outstanding balance."
    ],
    "jawaban": 0,
    "penjelasan": "Rekonsiliasi bank mencocokkan mutasi rekening koran dengan transaksi invoice/bill menggunakan aturan model rekonsiliasi otomatis.",
    "referensi": {
      "topikSpesifik": "Bank Reconciliation & Reconciliation Models",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/finance/accounting/bank/reconciliation.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Bank+Reconciliation+Tutorial",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Bank+Reconciliation+%26+Reconciliation+Models+Odoo+19"
    }
  },
  {
    "id": 303,
    "topic": "introduction",
    "soal": "In the Data menu, what does a warning symbol beside the data source of an inserted list or pivot table mean?",
    "pilihan": [
      "There is a problem preventing the data in the list or pivot table being updated automatically.",
      "The number of records in the list or pivot table exceeds the maximum allowed, impacting performance.",
      "There is no list or pivot table related to that data source present in the spreadsheet."
    ],
    "jawaban": 2,
    "penjelasan": "Odoo Spreadsheet memungkinkan analisis data dinamis langsung dari pivot view dengan sinkronisasi data live.",
    "referensi": {
      "topikSpesifik": "Odoo Spreadsheets & Live Pivot Tables",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/productivity/spreadsheet.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Spreadsheet+Integration",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Odoo+Spreadsheets+%26+Live+Pivot+Tables+Odoo+19"
    }
  },
  {
    "id": 304,
    "topic": "introduction",
    "soal": "What is this screen? (Shows \"Welcome to My Company\", \"Check in\", and QR code)",
    "pilihan": [
      "A Frontdesk kiosk",
      "An Attendances kiosk",
      "A Visitors kiosk"
    ],
    "jawaban": 1,
    "penjelasan": "Jawaban yang tepat adalah: \"An Attendances kiosk\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: What this screen Shows",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+What+this+screen+Shows",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+What+this+screen+Shows"
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
    "penjelasan": "Jawaban yang tepat adalah: \"Cost Per Hire Analysis\" sesuai dengan standar alur kerja aplikasi Human Resources & Employee Management di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Human Resources & Employee Management: Which NOT default report",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/hr_and_attendance.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Which+NOT+default+report",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Which+NOT+default+report"
    }
  },
  {
    "id": 306,
    "topic": "introduction",
    "soal": "In the Payroll app, where can Pay Runs NOT be created?",
    "pilihan": [
      "The Work Entries dashboard",
      "The Payslips dashboard",
      "The Employees dashboard"
    ],
    "jawaban": 2,
    "penjelasan": "Jawaban yang tepat adalah: \"The Employees dashboard\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: the Payroll app where",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+the+Payroll+app+where",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+the+Payroll+app+where"
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
    "penjelasan": "Point of Sale (POS) mendukung penjualan kasir offline, pengelolaan meja restoran, dan kontrol uang kas harian.",
    "referensi": {
      "topikSpesifik": "Point of Sale (POS) Operations",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/sales/point_of_sale.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Point+of+Sale+POS",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Point+of+Sale+%28POS%29+Operations+Odoo+19"
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
    "penjelasan": "Purchase Agreement (Blanket Order) mengunci kesepakatan harga dan kuantitas jangka panjang dengan vendor untuk pemesanan bertahap.",
    "referensi": {
      "topikSpesifik": "Purchase Agreements & Blanket Orders",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Purchase+Agreements+Blanket+Orders",
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
    "penjelasan": "Aturan Reordering otomatis memicu pembuatan RFQ atau Order Produksi saat stok menyentuh batas Minimum Quantity.",
    "referensi": {
      "topikSpesifik": "Automated Reordering Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Reordering+Rules+Inventory",
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
    "penjelasan": "Alur pembelian dimulai dari RFQ (Permintaan Penawaran) yang dikonfirmasi menjadi Purchase Order resmi ke vendor.",
    "referensi": {
      "topikSpesifik": "RFQ & Purchase Orders Workflow",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/purchase.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+RFQ+Purchase+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+RFQ+%26+Purchase+Orders+Workflow+Odoo+19"
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
    "jawaban": 2,
    "penjelasan": "Jawaban yang tepat adalah: \"Routes\" sesuai dengan standar alur kerja aplikasi Inventory & Warehouse Operations di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Inventory & Warehouse Operations: When creating new warehouse",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+When+creating+new+warehouse",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+When+creating+new+warehouse"
    }
  },
  {
    "id": 312,
    "topic": "introduction",
    "soal": "What does 'move entire package' do when activated under the operation types?",
    "pilihan": [
      "When moving a package, all items within that package must be moved together to the new destination.",
      "Moves entire packages from one warehouse to another.",
      "When moving a package, a new pack is automatically created at the destination location, and all items are transferred into the new pack."
    ],
    "jawaban": 0,
    "penjelasan": "Fitur Put in Pack mengelompokkan barang ke dalam koli/paket saat picking, sedangkan Scrap mencatat barang rusak/hilang dari stok.",
    "referensi": {
      "topikSpesifik": "Packages, Packaging & Scrap Orders",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Packages+Packaging+Scrap",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Packages%2C+Packaging+%26+Scrap+Orders+Odoo+19"
    }
  },
  {
    "id": 313,
    "topic": "introduction",
    "soal": "You're reviewing a \"Pack\" operation and want to perform a one-time quality check -- without creating a rule that forces quality checks for all packing operations. How can you do this?",
    "pilihan": [
      "Quality checks cannot be added ad-hoc; you must configure Quality Control Points in the Quality app, locate a location, and create an operation type.",
      "On the pack operation, click the button to Add an ad-hoc Quality check.",
      "Create an operation type named \"Quality Check\" and link it to the default packing operation."
    ],
    "jawaban": 1,
    "penjelasan": "Jawaban yang tepat adalah: \"On the pack operation, click the button to Add an ad-hoc Quality check.\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: Youre reviewing Pack operation",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Youre+reviewing+Pack+operation",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Youre+reviewing+Pack+operation"
    }
  },
  {
    "id": 314,
    "topic": "mrp",
    "soal": "You create two automatic reordering rules for the same product-one for Warehouse A (Buy route) and one for Warehouse B (Manufacturing route). What happens when stock drops below the minimum in Warehouse B?",
    "pilihan": [
      "Odoo defaults to the Buy route, since Buy is prioritized over Manufacturing.",
      "Odoo proposes a Buy PO, pending user intervention to specify a different route.",
      "A proposed manufacturing order is created for the product in Warehouse B."
    ],
    "jawaban": 2,
    "penjelasan": "Aturan Reordering otomatis memicu pembuatan RFQ atau Order Produksi saat stok menyentuh batas Minimum Quantity.",
    "referensi": {
      "topikSpesifik": "Automated Reordering Rules",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Reordering+Rules+Inventory",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Automated+Reordering+Rules+Odoo+19"
    }
  },
  {
    "id": 315,
    "topic": "inventory",
    "soal": "Two delivery orders are waiting for the same product. Your warehouse uses the \"At Confirmation\" reservation method. Only one delivery can be fulfilled immediately because stock is limited. You decide to star one of the pickings in the Delivery Orders list view. What happens when you check reservations again?",
    "pilihan": [
      "The starred picking gets priority, and the product is reserved for it first.",
      "The starred picking is fulfilled first only if it has an earlier 'Scheduled Date'.",
      "Both deliveries remain unreserved until more stock is received."
    ],
    "jawaban": 0,
    "penjelasan": "Jawaban yang tepat adalah: \"The starred picking gets priority, and the product is reserved for it first.\" sesuai dengan standar alur kerja aplikasi Inventory & Warehouse Operations di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Inventory & Warehouse Operations: Two delivery orders are",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Two+delivery+orders+are",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Two+delivery+orders+are"
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
    "penjelasan": "Pelacakan lot/serial number memungkinkan penelusuran riwayat pergerakan produk dari penerimaan vendor hingga pengiriman ke customer.",
    "referensi": {
      "topikSpesifik": "Lots & Serial Numbers Traceability",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Lots+Serial+Numbers+Traceability",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Lots+%26+Serial+Numbers+Traceability+Odoo+19"
    }
  },
  {
    "id": 317,
    "topic": "introduction",
    "soal": "I CANNOT set the capacity on a location by:",
    "pilihan": [
      "Product",
      "Package Type",
      "Volume"
    ],
    "jawaban": 2,
    "penjelasan": "Fitur Put in Pack mengelompokkan barang ke dalam koli/paket saat picking, sedangkan Scrap mencatat barang rusak/hilang dari stok.",
    "referensi": {
      "topikSpesifik": "Packages, Packaging & Scrap Orders",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/inventory.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Packages+Packaging+Scrap",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Packages%2C+Packaging+%26+Scrap+Orders+Odoo+19"
    }
  },
  {
    "id": 318,
    "topic": "introduction",
    "soal": "You manufacture a product using either standard materials or premium materials. How can this be modeled in Odoo?",
    "pilihan": [
      "Create multiple BoMs for the same product, each with a different component list",
      "Create a normal product and a premium product, and assign a unique BoM to each",
      "Create one BoM and change the components manually for each order"
    ],
    "jawaban": 0,
    "penjelasan": "Bill of Materials (BoM) mendefinisikan daftar komponen dan tahapan operasi yang dibutuhkan untuk memproduksi sebuah barang.",
    "referensi": {
      "topikSpesifik": "Bills of Materials (BoM) & Kits",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Bills+of+Materials+BoM",
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
    "penjelasan": "Work Center mengatur kapasitas mesin/stasiun kerja, estimasi waktu operasi, dan pelacakan efisiensi produksi (OEE).",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Work Orders",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Work+Orders+Odoo+19"
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
    "penjelasan": "Work Center mengatur kapasitas mesin/stasiun kerja, estimasi waktu operasi, dan pelacakan efisiensi produksi (OEE).",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Work Orders",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Work+Orders+Odoo+19"
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
    "penjelasan": "Work Center mengatur kapasitas mesin/stasiun kerja, estimasi waktu operasi, dan pelacakan efisiensi produksi (OEE).",
    "referensi": {
      "topikSpesifik": "Work Centers, Routings & Work Orders",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp/manufacturing.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+Work+Centers+Work+Orders",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+Work+Centers%2C+Routings+%26+Work+Orders+Odoo+19"
    }
  },
  {
    "id": 322,
    "topic": "introduction",
    "soal": "How can you ensure users can only choose a year and a month in a date selector, rather than a day?",
    "pilihan": [
      "Set the Date format to Numeric and disable 'Show Day'.",
      "Set the 'Minimal Precision' field to 'Month' and the 'Maximal Precision' field to 'Year'.",
      "Enable 'Show Year' and 'Show Month'."
    ],
    "jawaban": 2,
    "penjelasan": "Jawaban yang tepat adalah: \"Enable 'Show Year' and 'Show Month'.\" sesuai dengan standar alur kerja aplikasi Odoo 19 Essentials & General Concepts di Odoo 19.",
    "referensi": {
      "topikSpesifik": "Odoo 19 Essentials & General Concepts: How can you ensure",
      "docsUrl": "https://www.odoo.com/documentation/19.0/applications/general.html",
      "videoUrl": "https://www.youtube.com/results?search_query=Odoo+19+How+can+you+ensure",
      "searchUrl": "https://www.google.com/search?q=site:odoo.com/documentation/19.0+How+can+you+ensure"
    }
  }
];

export const EXAM_PRESETS = {
  full:  { nama: 'Full Exam',   count: 114, timerMin: 90, desc: 'Simulasi ujian sertifikasi asli' },
  quick: { nama: 'Quick Quiz',  count: 20,  timerMin: 0,  desc: '20 soal random campur topik' },
  speed: { nama: 'Speed Run',   count: 0,   timerMin: 0,  desc: 'Semua soal, kejar kecepatan' },
};
