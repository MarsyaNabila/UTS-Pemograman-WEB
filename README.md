# UTS-Pemograman-WEB

NAMA: MARSYA NABILA PUTRI

NIM: 312410338

KELAS: TI.24.A4

# Tujuan Tugas
Membuat **Aplikasi Web sederhana untuk pemesanan buku online** menggunakan **HTML, CSS, dan JavaScript**

# Struktur Project

```css
project/
│
├── Index.html
├── dashboard.html
├── stok.html
├── checkout.html
├── tracking.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   └── data.js
│
└── assets/
    └── images/
```

# 1. Login.html

Input: email dan password

Tombol: Login

Jika salah → tampilkan alert("email/password yang anda masukkan salah")

Tambahan:

Tombol “Lupa Password” dan “Daftar” → muncul dalam modal box/pop up

Validasi menggunakan JavaScript

# 2. Dashboard.html

Menu navigasi ke:

Informasi Stok/Katalog

Tracking Pengiriman

Laporan Pemesanan

History Transaksi

Tampilkan greeting otomatis:

“Selamat pagi/siang/sore” sesuai waktu lokal (gunakan Date() di JS)

# 3. Stok.html

Ambil data dari file data.js:

Tampilkan tabel katalog buku secara dinamis (JS DOM)

Ada tombol Tambah Stok Baru → menambah baris baru ke tabel dengan JS

# 4. Checkout.html

Menampilkan data pemesanan (bisa tambah/ubah)

Form:

Nama Pemesan

Alamat

Metode Pembayaran

Jumlah buku

Gunakan JS untuk validasi & menampilkan total harga

# 5. Tracking.html

Input: Nomor Delivery Order

Ketika tombol "Cari" ditekan → tampilkan:

Nama Pemesan

Status Pengiriman (pakai progress bar / warna / list)

Detail ekspedisi, tanggal kirim, jenis paket, total pembayaran


