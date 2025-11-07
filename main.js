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
