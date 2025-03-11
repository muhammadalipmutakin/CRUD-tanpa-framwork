npm install -g json-server

json-server --watch db.json

db.json
{
  "users": [
    {
      "id": "1",
      "username": "admin",
      "password": "admin123",
      "token": "sample-jwt-token"
    }
  ],
  "barang": []
}


index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="flex justify-center items-center h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 class="text-2xl font-bold text-center mb-4">Login</h2>
        <form id="login-form">
            <label class="block mb-2">Username</label>
            <input type="text" id="username" class="w-full p-2 border rounded mb-2">
            <label class="block mb-2">Password</label>
            <input type="password" id="password" class="w-full p-2 border rounded mb-4">
            <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded">Login</button>
        </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="script.js"></script>
</body>
</html>


barang.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Barang</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="p-8">
    <div class="container mx-auto">
        <div class="flex justify-between mb-4">
            <h1 class="text-2xl font-bold">Manajemen Data Barang</h1>
            <button onclick="logout()" class="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
        </div>
        <button onclick="window.location.href='tambah.html'" class="bg-green-500 text-white px-4 py-2 rounded">Tambah Barang</button>

        <table class="w-full bg-white border">
            <thead>
                <tr>
                    <th class="border p-2">ID</th>
                    <th class="border p-2">Nama</th>
                    <th class="border p-2">Harga</th>
                    <th class="border p-2">Aksi</th>
                </tr>
            </thead>
            <tbody id="barang-list"></tbody>
        </table>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="script.js"></script>
</body>
</html>



tambah.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tambah Barang</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="p-8">
    <div class="container mx-auto">
        <h1 class="text-2xl font-bold mb-4">Tambah Barang</h1>
        <form id="tambah-form">
            <input type="text" id="nama" placeholder="Nama Barang" class="p-2 border rounded mr-2">
            <input type="number" id="harga" placeholder="Harga" class="p-2 border rounded mr-2">
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Simpan</button>
        </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script>
        document.getElementById('tambah-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const nama = document.getElementById('nama').value;
            const harga = document.getElementById('harga').value;

            try {
                await axios.post('http://localhost:3000/barang', { nama, harga });
                window.location.href = 'barang.html';
            } catch (error) {
                console.error('Error adding item:', error);
            }
        });
    </script>
</body>
</html>


edit.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Barang</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="p-8">
    <div class="container mx-auto">
        <h1 class="text-2xl font-bold mb-4">Edit Barang</h1>
        <form id="edit-form">
            <input type="hidden" id="barang-id">
            <input type="text" id="nama" placeholder="Nama Barang" class="p-2 border rounded mr-2">
            <input type="number" id="harga" placeholder="Harga" class="p-2 border rounded mr-2">
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Simpan Perubahan</button>
        </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script>
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');

        async function loadData() {
            try {
                const response = await axios.get(http://localhost:3000/barang/${id});
                document.getElementById('barang-id').value = response.data.id;
                document.getElementById('nama').value = response.data.nama;
                document.getElementById('harga').value = response.data.harga;
            } catch (error) {
                console.error('Error fetching item:', error);
            }
        }

        document.getElementById('edit-form').addEventListener('submit', async (e) => {
            e.preventDefault();
            const nama = document.getElementById('nama').value;
            const harga = document.getElementById('harga').value;

            try {
                await axios.put(http://localhost:3000/barang/${id}, { nama, harga });
                window.location.href = 'barang.html';
            } catch (error) {
                console.error('Error updating item:', error);
            }
        });

        loadData();
    </script>
</body>
</html>


script.js
const apiUrl = 'http://localhost:3000';

// Cek apakah sudah login
if (window.location.pathname.includes('barang.html')) {
    const token = sessionStorage.getItem('token');
    if (!token) {
        window.location.href = 'index.html';
    } else {
        getBarang();
    }
}

// Login
document.getElementById('login-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await axios.get(${apiUrl}/users);
        const user = response.data.find(u => u.username === username && u.password === password);
        if (user) {
            sessionStorage.setItem('token', user.token);
            window.location.href = 'barang.html';
        } else {
            alert('Username atau password salah');
        }
    } catch (error) {
        console.error('Login error:', error);
    }
});

// Logout
function logout() {
    sessionStorage.removeItem('token');
    window.location.href = 'index.html';
}

// GET Data Barang
async function getBarang() {
    try {
        const response = await axios.get(${apiUrl}/barang);
        const barangList = document.getElementById('barang-list');
        barangList.innerHTML = '';
        response.data.forEach(barang => {
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
            barangList.insertAdjacentHTML('beforeend', row);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Tambah data
document.getElementById('barang-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const idInput = document.getElementById('barang-id').value.trim();
    const nama = document.getElementById('nama').value.trim();
    const harga = parseFloat(document.getElementById('harga').value);

    try {
        if (idInput) {
            // Update barang jika ID sudah ada
            const id = parseInt(idInput, 10);
            await axios.put(${apiUrl}/barang/${id}, { nama, harga });
        } else {
            // Kirim data tanpa ID, backend akan membuat ID otomatis
            await axios.post(${apiUrl}/barang, { nama, harga });
        }
        document.getElementById('barang-form').reset();
        getBarang();
    } catch (error) {
        console.error('Error saving data:', error);
    }
});



// Edit Barang
async function editBarang(id) {
    try {
        const response = await axios.get(${apiUrl}/barang/${id});
        document.getElementById('barang-id').value = response.data.id;
        document.getElementById('nama').value = response.data.nama;
        document.getElementById('harga').value = response.data.harga;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// DELETE Barang
async function confirmDelete(id) {
    const isConfirmed = confirm("Apakah Anda yakin ingin menghapus barang ini?");
    if (!isConfirmed) return;

    try {
        await axios.delete(${apiUrl}/barang/${id});
        alert("Barang berhasil dihapus!");
        getBarang(); // Refresh data
    } catch (error) {
        console.error("Error deleting data:", error);
        alert("Gagal menghapus barang.");
    }
}
