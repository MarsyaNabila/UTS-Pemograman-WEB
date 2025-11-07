// ========== DATA DUMMY ==========

// Akun pengguna demo
const users = [
  { email: "marsyanabila293@gmail.com", password: "marsya12345", nama: "Marsya Nabila" }
];

// Data katalog buku
const dataKatalogBuku = [
  { id: "B001", judul: "Pemrograman Web Dasar", penulis: "A. Programmer", stok: 12, harga: 75000 },
  { id: "B002", judul: "JavaScript untuk Pemula", penulis: "J. Script", stok: 8, harga: 85000 },
  { id: "B003", judul: "Desain UI/UX Ringkas", penulis: "D. Designer", stok: 5, harga: 65000 },
  { id: "B004", judul: "Database & SQL", penulis: "D. Query", stok: 6, harga: 90000 },
  { id: "B005", judul: "Algoritma dan Struktur Data", penulis: "A. Algoritma", stok: 3, harga: 98000 }
];

// Data contoh pengiriman
const sampleOrders = [
  {
    doNumber: "DO20251101-001",
    nama: "Siti Nur",
    items: [{ id: "B001", judul: "Pemrograman Web Dasar", qty: 1, harga: 75000 }],
    ekspedisi: "J&T Express",
    tanggalKirim: "2025-11-01",
    jenisPaket: "Reguler",
    total: 75000,
    statusIndex: 2
  },
  {
    doNumber: "DO20251105-002",
    nama: "Budi Santoso",
    items: [{ id: "B002", judul: "JavaScript untuk Pemula", qty: 2, harga: 85000 }],
    ekspedisi: "TIKI",
    tanggalKirim: "2025-11-05",
    jenisPaket: "YES",
    total: 170000,
    statusIndex: 1
  }
];

// Tahapan pengiriman
const deliveryStages = ["Packing", "Dikirim", "Dalam Perjalanan", "Tiba di Tujuan", "Selesai"];
