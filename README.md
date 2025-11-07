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
<style>
  body { font-family: Arial, sans-serif; background: #f4f6fb; margin: 0; }
  .container {
    background: #fff; padding: 20px; border-radius: 10px;
    width: 85%; margin: 40px auto;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  h2 { color: #0044ff; margin-bottom: 10px; }
  .btn {
    background: #0066ff; color: #fff; border: none;
    padding: 8px 16px; border-radius: 5px; cursor: pointer; margin: 5px 0;
  }
  .btn:hover { opacity: 0.9; }
  input {
    padding: 6px; margin: 3px; border-radius: 4px;
    border: 1px solid #ccc; width: 160px;
  }
  table {
    width: 100%; border-collapse: collapse; margin-top: 20px;
  }
  th, td {
    border: 1px solid #ddd; padding: 8px; text-align: center;
  }
  th { background: #e5e9ff; }
  img {
    width: 70px; height: 90px; border-radius: 4px;
    object-fit: cover; background: #f0f0f0;
  }
</style>
</head>

<body id="stok">
<div class="container">
  <h2>Data Stok Buku</h2>
  <button class="btn" id="tambah">Tambah</button>

  <div id="formTambah" style="display:none; margin-top:10px;">
    <input id="id" placeholder="ID">
    <input id="judul" placeholder="Judul Buku">
    <input id="stokInput" type="number" placeholder="Stok">
    <input id="harga" type="number" placeholder="Harga">
    <button class="btn" id="simpan">Simpan</button>
  </div>

  <table class="table">
    <thead>
      <tr>
        <th>Gambar</th>
        <th>ID</th>
        <th>Judul Buku</th>
        <th>Stok</th>
        <th>Harga</th>
      </tr>
    </thead>
    <tbody id="tabelBuku"></tbody>
  </table>
</div>

<script>
  // === Gambar SVG sederhana untuk tiga buku ===
  const gambarWeb = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEwMCAxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeT0iMTAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iNSIgZmlsbD0iIzAwNjZGRiIvPjxwYXRoIGQ9Ik0xMCAxMCBMMTAwIDEwMCAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIzIi8+PHRleHQgeD0iNTAiIHk9IjYwIiBmaWxsPSIjZmZmIiBmb250LXNpemU9IjEwIiBmb250LWZhbWlseT0iQXJpYWwiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBFTVJPR1JBTSBXRUI8L3RleHQ+PC9zdmc+";
  const gambarDB = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEwMCAxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeT0iMTAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iNSIgZmlsbD0iI0ZGMzMwMCIvPjxwYXRoIGQ9Ik0xMCAxMCBMMTAwIDEwMCAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIzIi8+PHRleHQgeD0iNTAiIHk9IjYwIiBmaWxsPSIjZmZmIiBmb250LXNpemU9IjEwIiBmb250LWZhbWlseT0iQXJpYWwiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkRBVEFCQVNFPC90ZXh0Pjwvc3ZnPg==";
  const gambarAlgo = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEwMCAxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeT0iMTAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iNSIgZmlsbD0iIzVGMDA4MCIvPjxwYXRoIGQ9Ik0xMCAxMCBMMTAwIDEwMCAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIzIi8+PHRleHQgeD0iNTAiIHk9IjYwIiBmaWxsPSIjZmZmIiBmb250LXNpemU9IjEwIiBmb250LWZhbWlseT0iQXJpYWwiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFMR09SSVRNQTwvdGV4dD48L3N2Zz4=";

  const dataBuku = [
    { id: 1, judul: "Pemrograman Web Dasar", stok: 10, harga: 75000, gambar: gambarWeb },
    { id: 2, judul: "Database & SQL", stok: 6, harga: 90000, gambar: gambarDB },
    { id: 3, judul: "Algoritma dan Struktur Data", stok: 8, harga: 98000, gambar: gambarAlgo }
  ];

  const tabelBuku = document.getElementById("tabelBuku");
  const tombolTambah = document.getElementById("tambah");
  const formTambah = document.getElementById("formTambah");
  const tombolSimpan = document.getElementById("simpan");

  function tampilkanData() {
    tabelBuku.innerHTML = "";
    dataBuku.forEach(buku => {
      const baris = document.createElement("tr");
      baris.innerHTML = `
        <td><img src="${buku.gambar}" alt="${buku.judul}"></td>
        <td>${buku.id}</td>
        <td>${buku.judul}</td>
        <td>${buku.stok}</td>
        <td>Rp ${buku.harga.toLocaleString()}</td>
      `;
      tabelBuku.appendChild(baris);
    });
  }

  tampilkanData();

  // 🔹 Klik tombol tambah untuk tampilkan/sembunyikan form
  tombolTambah.addEventListener("click", () => {
    formTambah.style.display = formTambah.style.display === "none" ? "block" : "none";
  });

  // 🔹 Klik tombol simpan untuk tambah buku baru
  tombolSimpan.addEventListener("click", () => {
    const id = document.getElementById("id").value.trim();
    const judul = document.getElementById("judul").value.trim();
    const stok = document.getElementById("stokInput").value.trim();
    const harga = document.getElementById("harga").value.trim();

    if (id && judul && stok && harga) {
      dataBuku.push({ id: parseInt(id), judul, stok: parseInt(stok), harga: parseInt(harga), gambar: gambarWeb });
      tampilkanData();
      formTambah.style.display = "none";
      document.getElementById("id").value = "";
      document.getElementById("judul").value = "";
      document.getElementById("stokInput").value = "";
      document.getElementById("harga").value = "";
      alert("✅ Buku baru berhasil ditambahkan!");
    } else {
      alert("❌ Lengkapi semua data terlebih dahulu!");
    }
  });
</script>
</body>
</html>

````

<img width="1910" height="903" alt="Screenshot 2025-11-07 143343" src="https://github.com/user-attachments/assets/70fe3a6c-b146-4a87-a35e-d198c68c01f4" />

<img width="1909" height="958" alt="Screenshot 2025-11-07 143426" src="https://github.com/user-attachments/assets/b7a2c5b3-8d71-4059-8a7b-35c6aa35914d" />

<img width="1879" height="943" alt="Screenshot 2025-11-07 143435" src="https://github.com/user-attachments/assets/c4c8ae30-7e2c-40b5-b2d6-65cbe9afe198" />




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

<img width="1916" height="1072" alt="Screenshot 2025-11-07 121846" src="https://github.com/user-attachments/assets/ecfacd33-19ca-4940-b6e6-afe5e352cb8b" />

<img width="1919" height="1079" alt="Screenshot 2025-11-07 121946" src="https://github.com/user-attachments/assets/c590126f-dada-428b-9203-0388bdc55269" />



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


<img width="1917" height="724" alt="Screenshot 2025-11-07 122609" src="https://github.com/user-attachments/assets/409bcf58-7b2b-4415-beef-2fc7b58a28ad" />

<img width="1919" height="735" alt="Screenshot 2025-11-07 122940" src="https://github.com/user-attachments/assets/bce77841-17a4-4e58-a02a-edcc177aeb4f" />



Kode ini digunakan untuk **tracking pengiriman** pada toko buku online.
Bagian HTML menampilkan kolom input untuk memasukkan nomor DO (Delivery Order) dan tombol **Cari** untuk memeriksa status pengiriman.
Hasil pencarian akan ditampilkan di bagian bawah dalam elemen dengan id `hasil`.
Navigasi di bagian atas memudahkan pengguna berpindah ke halaman **Dashboard**, **Stok**, atau **Pemesanan**.
Semua proses pencarian dan data status pengiriman diatur melalui file JavaScript eksternal `data.js` dan `main.js`.

# css/style.css

````css
/* ========== STYLE TOKO BUKU ELEGAN ========== */
:root {
  --primary: #0f62fe;
  --secondary: #5e5e5e;
  --bg: #f9fbfd;
  --white: #fff;
  --shadow: rgba(0,0,0,0.08);
}

* { box-sizing: border-box; font-family: 'Poppins', sans-serif; }
body { margin: 0; background: var(--bg); color: #222; }

.container {
  max-width: 1100px;
  margin: 30px auto;
  padding: 24px;
  background: var(--white);
  border-radius: 12px;
  box-shadow: 0 4px 20px var(--shadow);
}

.header {
  display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap;
  margin-bottom:20px;
}

.logo { font-size:1.5rem; font-weight:700; color:var(--primary); }

.nav { display:flex; gap:10px; flex-wrap:wrap; }

.btn {
  padding:8px 14px;
  background:var(--primary);
  color:#fff; border:none; border-radius:6px;
  cursor:pointer; text-decoration:none;
  transition:0.3s;
}
.btn:hover { background:#0043ce; }
.btn.secondary { background:var(--secondary); }
.btn.secondary:hover { background:#333; }

input, select, textarea {
  width:100%; padding:10px; border:1px solid #ddd; border-radius:8px;
  font-size:0.95rem;
}

.table { width:100%; border-collapse:collapse; margin-top:15px; }
.table th, .table td { border:1px solid #e7e7e7; padding:10px; }
.table th { background:#eef3ff; }

.form-row { margin-bottom:12px; }
label { display:block; margin-bottom:6px; font-weight:600; }

.small { font-size:0.9rem; color:#555; }
.footer { text-align:center; font-size:0.85rem; color:#777; margin-top:16px; }

.modal-backdrop {
  position:fixed; inset:0; background:rgba(0,0,0,0.6);
  display:flex; align-items:center; justify-content:center; z-index:999;
}
.modal { background:#fff; padding:20px; border-radius:12px; width:90%; max-width:400px; }

.progress { background:#e9eef9; height:14px; border-radius:10px; overflow:hidden; }
.progress span { display:block; height:100%; background:var(--primary); transition:width .4s ease; }

.actions { display:flex; gap:8px; justify-content:flex-end; margin-top:12px; }
.row { display:flex; gap:16px; flex-wrap:wrap; }
.col { flex:1; }

.export-box { text-align:right; margin-top:10px; }
````


# js/data.js
````js
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
````

# js/main.js
````js
// ========== JS FUNGSI UTAMA WEBSITE TOKO BUKU ==========

// Fungsi bantu
function qs(sel, root=document){ return root.querySelector(sel); }
function qsa(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }
function formatRupiah(n){ return "Rp " + Number(n).toLocaleString("id-ID"); }

// Local Storage helper
function save(key, data){ localStorage.setItem(key, JSON.stringify(data)); }
function load(key, def=[]){
  const s = localStorage.getItem(key);
  if(!s) return def;
  try { return JSON.parse(s); } catch { return def; }
}

// Modal sederhana
function showModal(html){
  const bg = document.createElement("div");
  bg.className = "modal-backdrop";
  const box = document.createElement("div");
  box.className = "modal";
  box.innerHTML = html;
  bg.appendChild(box);
  document.body.appendChild(bg);
  bg.addEventListener("click", e=>{ if(e.target===bg) bg.remove(); });
  return {bg, box};
}

/* ================== LOGIN PAGE ================== */
function initLogin(){
  const form = qs("#loginForm");
  form.addEventListener("submit", e=>{
    e.preventDefault();
    const email = qs("#email").value.trim();
    const pass = qs("#password").value.trim();
    const user = users.find(u=>u.email===email && u.password===pass);
    if(!user){ alert("email/password yang anda masukkan salah"); return; }
    localStorage.setItem("user", JSON.stringify(user));
    window.location = "dashboard.html";
  });

  qs("#forgotBtn").onclick = ()=>{
    const {bg, box} = showModal(`
      <h3>Lupa Password</h3>
      <p>Masukkan email anda:</p>
      <input type="email" id="fpEmail">
      <div class="actions"><button class="btn" id="fpKirim">Kirim</button></div>
    `);
    qs("#fpKirim", box).onclick=()=>{ alert("Email reset dikirim (simulasi)"); bg.remove(); };
  };

  qs("#registerBtn").onclick = ()=>{
    const {bg, box} = showModal(`
      <h3>Daftar Akun</h3>
      <input type="text" id="nama" placeholder="Nama">
      <input type="email" id="mail" placeholder="Email">
      <input type="password" id="pass" placeholder="Password">
      <div class="actions"><button class="btn" id="daftar">Daftar</button></div>
    `);
    qs("#daftar", box).onclick=()=>{ alert("Pendaftaran simulasi, gunakan akun demo"); bg.remove(); };
  };
}

/* ================== DASHBOARD PAGE ================== */
function initDashboard(){
  const user = JSON.parse(localStorage.getItem("user")||"{}");
  const jam = new Date().getHours();
  let greet = "Selamat pagi";
  if(jam>=11 && jam<15) greet="Selamat siang";
  else if(jam>=15 && jam<18) greet="Selamat sore";
  else if(jam>=18) greet="Selamat malam";
  qs("#greet").textContent = `${greet}, ${user.nama||"Pengguna"}!`;

  qs("#logout").onclick=()=>{ localStorage.removeItem("user"); location="login.html"; };
}

/* ================== STOK PAGE ================== */
function initStok(){
  let katalog = load("katalog", dataKatalogBuku);
  const tbody = qs("#bodyStok");

  function render(){
    tbody.innerHTML = "";
    katalog.forEach(b=>{
      const tr=document.createElement("tr");
      tr.innerHTML=`
        <td>${b.id}</td><td>${b.judul}</td><td>${b.stok}</td><td>${formatRupiah(b.harga)}</td>
        <td><button class="btn edit" data-id="${b.id}">Edit</button>
        <button class="btn secondary del" data-id="${b.id}">Hapus</button></td>`;
      tbody.appendChild(tr);
    });
  }
  render();

  qs("#tambah").onclick=()=>{
    const f=qs("#formTambah");
    f.style.display = f.style.display==="none"?"block":"none";
  };

  qs("#simpan").onclick=()=>{
    const id=qs("#id").value, judul=qs("#judul").value, stok=qs("#stok").value, harga=qs("#harga").value;
    if(!id||!judul) return alert("Lengkapi data!");
    katalog.push({id,judul,penulis:"-",stok:+stok,harga:+harga});
    save("katalog",katalog);
    render();
    qs("#formTambah").style.display="none";
  };

  tbody.onclick=e=>{
    const id=e.target.dataset.id;
    if(e.target.classList.contains("del")){
      katalog=katalog.filter(b=>b.id!==id);
      save("katalog",katalog); render();
    }
    if(e.target.classList.contains("edit")){
      const b=katalog.find(x=>x.id===id);
      const {bg,box}=showModal(`
        <h3>Edit Buku</h3>
        <input id="ej" value="${b.judul}">
        <input id="es" type="number" value="${b.stok}">
        <input id="eh" type="number" value="${b.harga}">
        <div class="actions"><button class="btn" id="ok">Simpan</button></div>
      `);
      qs("#ok",box).onclick=()=>{
        b.judul=qs("#ej",box).value; b.stok=+qs("#es",box).value; b.harga=+qs("#eh",box).value;
        save("katalog",katalog); render(); bg.remove();
      };
    }
  };
}

/* ================== CHECKOUT PAGE ================== */
function initCheckout(){
  const katalog=load("katalog",dataKatalogBuku);
  const select=qs("#buku"); katalog.forEach(b=>{
    const o=document.createElement("option");
    o.value=b.id; o.textContent=`${b.judul} (${formatRupiah(b.harga)})`; select.appendChild(o);
  });
  let cart=[]; const body=qs("#cartBody");

  function render(){
    body.innerHTML="";
    let total=0;
    cart.forEach((c,i)=>{
      total+=c.qty*c.harga;
      body.innerHTML+=`<tr><td>${c.judul}</td><td>${c.qty}</td><td>${formatRupiah(c.harga)}</td><td>${formatRupiah(c.qty*c.harga)}</td><td><button class="btn del" data-i="${i}">X</button></td></tr>`;
    });
    qs("#total").textContent=formatRupiah(total);
  }

  qs("#tambahCart").onclick=()=>{
    const id=select.value, qty=+qs("#qty").value;
    if(!id||qty<1) return alert("Pilih buku & qty!");
    const b=katalog.find(x=>x.id===id);
    cart.push({id,judul:b.judul,qty,harga:b.harga});
    render();
  };

  body.onclick=e=>{
    if(e.target.classList.contains("del")){ cart.splice(e.target.dataset.i,1); render(); }
  };

  qs("#pesan").onclick=()=>{
    if(cart.length===0) return alert("Keranjang kosong!");
    const nama=qs("#nama").value, alamat=qs("#alamat").value;
    if(!nama||!alamat) return alert("Lengkapi data!");

    const orders=load("orders",sampleOrders);
    const doNum=`DO${Date.now()}`;
    orders.push({doNumber:doNum,nama,items:cart,ekspedisi:"JNE",tanggalKirim:new Date().toISOString().slice(0,10),jenisPaket:"Reguler",total:cart.reduce((a,b)=>a+b.qty*b.harga,0),statusIndex:0});
    save("orders",orders);
    alert("Pesanan berhasil! Nomor DO: "+doNum);
    cart=[]; render();
  };
}

/* ================== TRACKING PAGE ================== */
function initTracking(){
  const input=qs("#do"), hasil=qs("#hasil");
  qs("#cari").onclick=()=>{
    const doNum=input.value.trim();
    const orders=load("orders",sampleOrders);
    const o=orders.find(x=>x.doNumber.toLowerCase()===doNum.toLowerCase());
    if(!o){ hasil.innerHTML="<p>Tidak ditemukan</p>"; return; }
    const pct=Math.min(100,((o.statusIndex+1)/deliveryStages.length)*100);
    hasil.innerHTML=`
      <h3>${o.nama}</h3>
      <p>Total: ${formatRupiah(o.total)}</p>
      <div class="progress"><span style="width:${pct}%"></span></div>
      <p>${deliveryStages[o.statusIndex]}</p>`;
  };
}

/* ================== ROUTER ================== */
document.addEventListener("DOMContentLoaded",()=>{
  const id=document.body.id;
  if(id==="login") initLogin();
  if(id==="dashboard") initDashboard();
  if(id==="stok") initStok();
  if(id==="checkout") initCheckout();
  if(id==="tracking") initTracking();
});

/* ================== EXPORT LAPORAN KE CSV ================== */
function exportOrdersToCSV() {
  const orders = load("orders", sampleOrders);
  if (!orders.length) return alert("Belum ada data pesanan.");
  let csv = "No,Nomor DO,Nama Pemesan,Tanggal,Kurir,Total\n";
  orders.forEach((o, i) => {
    csv += `${i+1},${o.doNumber},${o.nama},${o.tanggalKirim},${o.ekspedisi},${o.total}\n`;
  });
  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "laporan_pemesanan.csv";
  link.click();
}

// aktifkan tombol export
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#exportCsv");
  if (btn) btn.addEventListener("click", exportOrdersToCSV);
});

// Validasi login sederhana
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // biar halaman nggak reload

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Cek email dan password (sesuai contoh di footer)
  if (email === "marsyanabila293@gmail.com" && password === "marsya12345") {
    alert("✅ Login berhasil, kata sandi benar!");
  } else {
    alert("❌ Email atau kata sandi salah!");
  }
});
````











