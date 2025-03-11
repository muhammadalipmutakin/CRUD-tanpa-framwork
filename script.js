const apiUrl = "http://localhost:3000";

// Cek apakah sudah login
if (window.location.pathname.includes("barang.html")) {
  const token = sessionStorage.getItem("token");
  if (!token) {
    window.location.href = "index.html";
  } else {
    getBarang();
  }
}

// Login
document.getElementById("login-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await axios.get(`${apiUrl}/users`);
    const user = response.data.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      sessionStorage.setItem("token", user.token);
      window.location.href = "barang.html";
    } else {
      alert("Username atau password salah");
    }
  } catch (error) {
    console.error("Login error:", error);
  }
});

// Logout
function logout() {
  sessionStorage.removeItem("token");
  window.location.href = "index.html";
}

// GET Data Barang
async function getBarang() {
  try {
    const response = await axios.get(`${apiUrl}/barang`);
    const barangList = document.getElementById("barang-list");
    barangList.innerHTML = "";
    response.data.forEach((barang) => {
      const row = `
                <tr>
                    <td class="border p-2">${barang.id}</td>
                    <td class="border p-2">${barang.nama}</td>
                    <td class="border p-2">${barang.harga}</td>
                    <td class="border p-2">
                        <a href="edit.html?id=${barang.id}" class="bg-yellow-500 text-white px-2 py-1 rounded">Edit</a>
                        <button onclick="confirmDelete('${barang.id}')" class="bg-red-500 text-white px-2 py-1 rounded">Hapus</button>
                    </td>
                </tr>
            `;
      barangList.insertAdjacentHTML("beforeend", row);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Tambah data
document.getElementById("tambah-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const harga = document.getElementById("harga").value;

  try {
    await axios.post("http://localhost:3000/barang", { nama, harga });
    window.location.href = "barang.html";
  } catch (error) {
    console.error("Error adding item:", error);
  }
});

// Edit data
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  async function loadData() {
    try {
      const response = await axios.get(`http://localhost:3000/barang/${id}`);
      document.getElementById("barang-id").value = response.data.id;
      document.getElementById("nama").value = response.data.nama;
      document.getElementById("harga").value = response.data.harga;
    } catch (error) {
      console.error("Error fetching item:", error);
    }
  }

  const editForm = document.getElementById("edit-form");
  if (!editForm) {
    console.error("Element #edit-form tidak ditemukan!");
    return;
  }

  editForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nama = document.getElementById("nama").value.trim();
    const harga = parseFloat(document.getElementById("harga").value);

    if (!nama || isNaN(harga)) {
      alert("Pastikan nama dan harga valid!");
      return;
    }

    try {
      await axios.put(`http://localhost:3000/barang/${id}`, {
        nama,
        harga,
      });
      alert("Barang berhasil diperbarui!");
      window.location.href = "barang.html";
    } catch (error) {
      console.error("Error updating item:", error);
      alert("Gagal memperbarui barang.");
    }
  });

  loadData();
});

// DELETE Barang
async function confirmDelete(id) {
  const isConfirmed = confirm("Apakah Anda yakin ingin menghapus barang ini?");
  if (!isConfirmed) return;

  try {
    await axios.delete(`${apiUrl}/barang/${id}`);
    alert("Barang berhasil dihapus!");
    getBarang(); // Refresh data
  } catch (error) {
    console.error("Error deleting data:", error);
    alert("Gagal menghapus barang.");
  }
}
