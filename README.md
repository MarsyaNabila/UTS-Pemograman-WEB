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
````

# js / main.js

````js
// Dummy data login
const dataPengguna = [
  { id: 1, nama: "Marsya Nabila", email: "marsya@gmail.com", password: "marsya123", role: "User" },
  { id: 2, nama: "D. Query", email: "query@gmail.com", password: "query123", role: "User" },
  { id: 3, nama: "Admin Buku", email: "admin@toko.com", password: "admin123", role: "Admin" }
];

// Login validation
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const user = dataPengguna.find(u => u.email === email && u.password === password);
  if (user) {
    alert(`Selamat datang, ${user.nama}!`);
    localStorage.setItem("userLogin", JSON.stringify(user));
    if (user.role === "Admin") {
      window.location.href = "admin-dashboard.html";
    } else {
      window.location.href = "dashboard.html";
    }
  } else {
    alert("Email atau password salah, silakan coba lagi!");
  }
});

// Modal handling
const modal = document.getElementById("modalBox");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");
document.getElementById("btnLupa").addEventListener("click", () => {
  modal.style.display = "block";
  modalTitle.textContent = "🔑 Lupa Password";
  modalText.textContent = "Silakan hubungi admin di email: admin@toko.com untuk reset password.";
});
document.getElementById("btnDaftar").addEventListener("click", () => {
  modal.style.display = "block";
  modalTitle.textContent = "📝 Daftar Akun Baru";
  modalText.textContent = "Fitur pendaftaran akun baru masih dalam tahap pengembangan.";
});
closeModal.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", (e) => { if (e.target == modal) modal.style.display = "none"; });

// Logout Function
function logoutUser() {
  localStorage.removeItem("userLogin");
  window.location.href = "login.html";
}
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

<img width="1866" height="479" alt="image" src="https://github.com/user-attachments/assets/b2c523c2-f99f-463f-a5cd-2c63594ee441" />

- Halaman ini muncul setelah pengguna berhasil login dengan data yang benar (marsyanabila293@gmail.com / marsya12345).
  
  - Menampilkan sapaan otomatis sesuai waktu, misalnya:
   
 👉 “Selamat pagi, Marsya Nabila!” atau “Selamat siang, Marsya Nabila!”

- Di bagian kanan atas terdapat tombol navigasi cepat:
  
  -🔵 Stok → menuju halaman daftar buku
  
  -🔵 Pemesanan → menuju halaman pembelian
  
  -🔵 Tracking → menuju pelacakan pesanan
  
  -⚫ Logout → keluar dari akun dan kembali ke halaman login












