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
