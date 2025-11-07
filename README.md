# UTS-Pemograman-WEB 1

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

# css / style.css

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
```



