# UTS-Pemograman-WEB 1

NAMA: MARSYA NABILA PUTRI

NIM: 312410338

KELAS: TI.24.A4

# Tujuan Tugas

Website ini dibuat untuk memenuhi tuga **Ujian Tengah Semester (UTS) Pemograman Web 1** Proyek ini menampilkan **aplikasi web sederhana** untuk **pemesanan buku online** menggunakan **HTML, CSS, dan JavaScript murni** tanpa database.

Website terdiri dari beberapa halaman utama: login, dashboard, stok buku, checkout, dan tracking pengiriman.


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

# 1. Index.html

- Input: email dan password

- Tombol: Login
  - Jika salah → tampilkan alert("email/password yang anda masukkan salah")

- Tambahan:
  - Tombol “Lupa Password” dan “Daftar” → muncul dalam modal box/pop up

- Validasi menggunakan JavaScript

# 2. Dashboard.html

- Menu navigasi ke:
  - Informasi Stok/Katalog
  - Tracking Pengiriman
  - Laporan Pemesanan
  - History Transaksi

- Tampilkan greeting otomatis:
 - “Selamat pagi/siang/sore” sesuai waktu lokal (gunakan Date() di JS)

# 3. Stok.html

- Ambil data dari file **data.js:**

- Tampilkan tabel katalog buku secara **dinamis (JS DOM)**

- Ada tombol **Tambah Stok Baru** → menambah baris baru ke tabel dengan JS

# 4. Checkout.html

- Menampilkan data pemesanan (bisa tambah/ubah)

- Form:
  - Nama Pemesan
  - Alamat
  - Metode Pembayaran
  - Jumlah buku

- Gunakan JS untuk validasi & menampilkan total harga

# 5. Tracking.html

- Input: **Nomor Delivery Order**

- Ketika tombol "Cari" ditekan → tampilkan:
  - Nama Pemesan
  - Status Pengiriman (pakai progress bar / warna / list)
  - Detail ekspedisi, tanggal kirim, jenis paket, total pembayaran
 
# 6. css/style.css
File gaya tampilan (UI).

- Warna utama: biru & putih.

- Desain modern, bersih, dan responsif.

- Mengatur tabel, tombol, modal, progress bar, dan layout.


# 7. js/data.js
Data dummy aplikasi:

- User login (email & password).

- Katalog buku (judul, harga, stok, gambar).

- Data pesanan untuk tracking.

→ Sebagai pengganti database.

# 8. js/main.js

Logika utama website.

- Fungsi login, logout, dan validasi form.

- Render data buku ke tabel HTML.

- Tambah / hapus / edit data katalog.

- itung total checkout dan export CSV.

- Simpan data ke localStorage.
 

# Index.html

````html
<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Login - Toko Buku</title>
<link rel="stylesheet" href="css/style.css">
</head>
<body id="login">
<div class="container">
  <h2>Login Toko Buku</h2>
  <form id="loginForm">
    <div class="form-row"><label>Email</label><input id="email" type="email"></div>
    <div class="form-row"><label>Password</label><input id="password" type="password"></div>
    <div class="actions">
      <button class="btn" type="submit">Login</button>
      <button class="btn secondary" type="button" id="forgotBtn">Lupa Password</button>
      <button class="btn secondary" type="button" id="registerBtn">Daftar</button>
    </div>
  </form>
</div>
<script src="js/data.js"></script>
<script src="js/main.js"></script>
</body>
</html>
````




<img width="1919" height="712" alt="Screenshot 2025-11-07 095948" src="https://github.com/user-attachments/assets/f75f7541-cf15-4648-bdbd-0d3589e78185" />

<img width="1915" height="837" alt="Screenshot 2025-11-07 113239" src="https://github.com/user-attachments/assets/12873114-5187-4e13-9767-679b095b58dc" />

<img width="1913" height="824" alt="image" src="https://github.com/user-attachments/assets/0901d131-937d-46b3-8b53-7bcdc8a40fc9" />

- Login menggunakan data dummy
  - Email: marsyanabila293@gmail.com
  - Password: marsya12345

- Jika data login salah, akan muncul alert pemberitahuan kesalahan
(contoh: “Email atau kata sandi salah!”)

- Tersedia modal box interaktif untuk fitur:
  - “Lupa Password” — menampilkan pesan panduan reset sandi
  - “Daftar” — menampilkan pesan bahwa fitur pendaftaran masih dalam pengembangan
 

# Dashboard.html

````html
<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Dashboard - Toko Buku</title>
<link rel="stylesheet" href="css/style.css">
</head>
<body id="dashboard">
<div class="container">
  <div class="header">
    <div class="logo">Dashboard</div>
    <div class="nav">
      <a href="stok.html" class="btn">Stok</a>
      <a href="checkout.html" class="btn">Pemesanan</a>
      <a href="tracking.html" class="btn">Tracking</a>
      <button class="btn secondary" id="logout">Logout</button>
    </div>
  </div>
  <h3 id="greet"></h3>
</div>
<script src="js/data.js"></script>
<script src="js/main.js"></script>
</body>
</html>
````

<img width="1866" height="479" alt="Screenshot 2025-11-07 114348" src="https://github.com/user-attachments/assets/4593007f-770e-4a24-9fe7-326d8a55a350" />


- Halaman ini muncul setelah pengguna berhasil login dengan data yang benar (marsyanabila293@gmail.com / marsya12345).
  
  - Menampilkan sapaan otomatis sesuai waktu, misalnya:
   
  “Selamat pagi, Marsya Nabila!” atau “Selamat siang, Marsya Nabila!”

- Di bagian kanan atas terdapat tombol navigasi cepat:
  
  -🔵 Stok → menuju halaman daftar buku
  
  -🔵 Pemesanan → menuju halaman pembelian
  
  -🔵 Tracking → menuju pelacakan pesanan
  
  -⚫ Logout → keluar dari akun dan kembali ke halaman login


# Stok.html

````html
<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Stok Buku</title>
<link rel="stylesheet" href="css/style.css">
</head>
<body id="stok">
<div class="container">
  <h2>Data Stok Buku</h2>
  <button class="btn" id="tambah">Tambah</button>

  <div id="formTambah" style="display:none;margin-top:10px;">
    <input id="id" placeholder="ID">
    <input id="judul" placeholder="Judul Buku">
    <input id="stok" type="number" placeholder="Stok">
    <input id="harga" type="number" placeholder="Harga">
    <button class="btn" id="simpan">Simpan</button>
  </div>

  <table class="table">
    <thead><tr><th>ID</th><th>Judul</th><th
````

<img width="1918" height="698" alt="Screenshot 2025-11-07 123609" src="https://github.com/user-attachments/assets/17d2ff01-4030-4067-a43a-a0570774c7aa" />

<img width="1916" height="817" alt="Screenshot 2025-11-07 123652" src="https://github.com/user-attachments/assets/b46461e0-aad6-468e-8504-05be70572eb1" />

<img width="1905" height="700" alt="Screenshot 2025-11-07 123703" src="https://github.com/user-attachments/assets/6b7c822a-a1b7-4615-a6c5-d3132b696326" />


Pada bagian halaman **stok.html** yang menampilkan daftar buku dalam tabel.
Bagian HTML berisi form untuk menambah data baru (ID, judul, stok, harga) dan tombol **Tambah** untuk menampilkan form input.
Bagian CSS mengatur tampilan agar rapi dan berwarna biru.
JavaScript digunakan untuk menampilkan data awal dari array `dataBuku`, menambah buku baru ke tabel, serta menampilkan pesan saat data berhasil disimpan atau belum lengkap.



# Checkout.html

````html
<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Pemesanan Buku - Toko Buku Online</title>
<link rel="stylesheet" href="css/style.css">
</head>
<body id="checkout">
<div class="container">
  <div class="header">
    <div class="logo">Pemesanan Buku</div>
    <div class="nav">
      <a href="dashboard.html" class="btn">Dashboard</a>
      <a href="stok.html" class="btn">Stok</a>
      <a href="tracking.html" class="btn">Tracking</a>
    </div>
  </div>

  <h3>Form Pemesanan</h3>
  <div class="row">
    <div class="col">
      <div class="form-row">
        <label>Pilih Buku</label>
        <select id="buku">
          <option value="">-- Pilih Buku --</option>
        </select>
      </div>
      <div class="form-row">
        <label>Jumlah</label>
        <input id="qty" type="number" min="1" value="1">
      </div>
      <div class="actions">
        <button class="btn" id="tambahCart">Tambah ke Keranjang</button>
      </div>

      <h4>Keranjang Pesanan</h4>
      <table class="table">
        <thead>
          <tr>
            <th>Judul Buku</th>
            <th>Qty</th>
            <th>Harga</th>
            <th>Subtotal</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody id="cartBody"></tbody>
      </table>
      <p class="small">Total: <strong id="total">Rp 0</strong></p>
      <div class="export-box">
  <button class="btn secondary" id="exportCsv">Export Laporan (CSV)</button>
</div>

    </div>

    <div class="col">
      <h4>Data Pemesan</h4>
      <div class="form-row"><label>Nama</label><input id="nama"></div>
      <div class="form-row"><label>Alamat</label><textarea id="alamat" rows="4"></textarea></div>
      <div class="actions"><button class="btn" id="pesan">Kirim Pesanan</button></div>
    </div>
  </div>
</div>

<script src="js/data.js"></script>
<script src="js/main.js"></script>
</body>
</html>
````

(3 gambar)

Kode ini membuat halaman **pemesanan buku** pada toko buku online.
Bagian HTML menampilkan form untuk memilih buku, mengisi jumlah, serta menambahkan ke keranjang belanja.
Terdapat tabel untuk menampilkan daftar pesanan dengan kolom judul buku, jumlah, harga, dan subtotal.
Bagian kanan berisi form data pemesan seperti nama dan alamat, serta tombol **Kirim Pesanan**.
Ada juga tombol **Export CSV** untuk menyimpan laporan pesanan.
Semua fungsi logika seperti menambah ke keranjang dan menghitung total diatur lewat file JavaScript eksternal `data.js` dan `main.js`.


# Tracking.html

```html
<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Tracking Pengiriman - Toko Buku Online</title>
<link rel="stylesheet" href="css/style.css">
</head>
<body id="tracking">
<div class="container">
  <div class="header">
    <div class="logo">Tracking Pengiriman</div>
    <div class="nav">
      <a href="dashboard.html" class="btn">Dashboard</a>
      <a href="stok.html" class="btn">Stok</a>
      <a href="checkout.html" class="btn">Pemesanan</a>
    </div>
  </div>

  <h3>Cek Status Pengiriman</h3>
  <div class="form-row row">
    <div class="col"><input id="do" placeholder="Masukkan nomor DO (contoh: DO20251101-001)"></div>
    <div><button class="btn" id="cari">Cari</button></div>
  </div>

  <div id="hasil" style="margin-top:20px;"></div>

  <p class="footer">Contoh DO tersedia: DO20251101-001 atau DO20251105-002</p>
</div>

<script src="js/data.js"></script>
<script src="js/main.js"></script>
</body>
</html>
````


(2 gambar)

Kode ini digunakan untuk **tracking pengiriman** pada toko buku online.
Bagian HTML menampilkan kolom input untuk memasukkan nomor DO (Delivery Order) dan tombol **Cari** untuk memeriksa status pengiriman.
Hasil pencarian akan ditampilkan di bagian bawah dalam elemen dengan id `hasil`.
Navigasi di bagian atas memudahkan pengguna berpindah ke halaman **Dashboard**, **Stok**, atau **Pemesanan**.
Semua proses pencarian dan data status pengiriman diatur melalui file JavaScript eksternal `data.js` dan `main.js`.











