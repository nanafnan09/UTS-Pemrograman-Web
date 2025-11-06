# UTS-Pemrograman-Web

Nama: Afnan Dika Ramadhan 

NIM: 312410518

Kelas: TI24.A5

Mata Kuliah: Pemrograman Web

# Struktur HTML

1. Index Html

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login - Toko Buku UTS</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body class="login-page">
    <main class="login-container">
      <header>
        <h1>Toko Buku Literaria</h1>
        <p>Silakan masuk untuk melanjutkan.</p>
      </header>

      <form id="formLogin">
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            required
            placeholder="Contoh: rina@gmail.com"
          />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            required
            placeholder="Password Anda"
          />
        </div>

        <button type="submit" class="btn primary-btn">Login</button>
      </form>

      <div class="login-links">
        <button class="link-btn" onclick="tampilkanModal('modalLupaPassword')">
          Lupa Password?
        </button>
        <button class="link-btn" onclick="tampilkanModal('modalDaftar')">
          Daftar
        </button>
      </div>
    </main>

    <div id="modalLupaPassword" class="modal">
      <div class="modal-content">
        <span class="close-btn" onclick="sembunyikanModal('modalLupaPassword')"
          >&times;</span
        >
        <h3>Lupa Password</h3>
        <p>Silakan hubungi admin di 08xx-xxxx-xxxx untuk reset password.</p>
      </div>
    </div>

    <div id="modalDaftar" class="modal">
      <div class="modal-content">
        <span class="close-btn" onclick="sembunyikanModal('modalDaftar')"
          >&times;</span
        >
        <h3>Daftar Akun Baru</h3>
        <p>
          Fitur registrasi sedang dalam pengembangan. Gunakan akun dummy yang
          tersedia.
        </p>
      </div>
    </div>

    <script src="js/data.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>
```
`index.html` (Halaman Login)

Tujuan: Merupakan halaman awal untuk Autentikasi Pengguna.

Isi:

Formulir Login untuk memasukkan Email dan Password.

Judul aplikasi: "Toko Buku Literaria".

Tombol aksi: Login.

Tautan/Tombol link ke modal Lupa Password dan Daftar.Menyediakan modal (jendela pop-up) untuk Lupa Password dan Daftar Akun Baru.

2. dashboard html

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dashboard - Toko Buku UTS</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <header class="app-header">
      <div class="logo">TokoBuku.id</div>
      <nav class="main-nav">
        <a href="stok.html">Katalog</a>
        <a href="checkout.html">Pemesanan</a>
        <a href="tracking.html">Tracking</a>
        <a href="laporan_pemesanan.html">Laporan Pemesanan</a>
        <a href="histori_transaksi.html">Histori Transaksi</a>
        <a href="index.html" class="btn-logout">Logout</a>
      </nav>
    </header>

    <main class="dashboard-content">
      <h2 id="user-greeting" class="greeting-text"></h2>
      <section class="info-boxes">
        <article class="card nav-card">
          <h3>Informasi Stok/Katalog</h3>
          <p>Lihat dan kelola daftar buku yang tersedia.</p>

          <a href="stok.html" class="btn secondary-btn">Lihat Katalog</a>
        </article>

        <article class="card nav-card">
          <h3>Tracking Pengiriman</h3>
          <p>Cek status pesanan yang sedang dikirim.</p>
          <a href="tracking.html" class="btn secondary-btn">Lacak Pesanan</a>
        </article>

        <article class="card nav-card">
          <h3>Buat Pemesanan Baru</h3>
          <p>Input data pemesan dan pembayaran untuk transaksi baru.</p>
          <a href="checkout.html" class="btn secondary-btn">Pesan Sekarang</a>
        </article>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 Toko Buku Online UTS Web1</p>
    </footer>

    <script src="js/data.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>

```
`dashboard.html` (Dashboard)
Tujuan: Halaman utama setelah login, berfungsi sebagai ringkasan dan pusat navigasi.

Isi:

Tampilan sapaan `(#user-greeting)`.

Navigasi cepat berbentuk kartu `(.info-boxes)` ke fitur utama:

Informasi Stok/Katalog (`ke stok.html`).

Tracking Pengiriman (ke `tracking.html`).

Buat Pemesanan Baru (ke `checkout.html`).

Navigasi utama (`.main-nav`) ke Katalog, Pemesanan, Tracking, Laporan Pemesanan, dan Histori Transaksi.

3. stok html

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Katalog Stok Buku</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <header class="app-header">
      <nav class="main-nav">
        <a href="dashboard.html">Dashboard</a>
        <a href="checkout.html">Pemesanan</a>
        <a href="tracking.html">Tracking</a>
      </nav>
    </header>

    <main class="content-wrapper">
      <section id="katalog-buku">
        <h2>Daftar Katalog Buku</h2>

        <button
          id="btnTambahStok"
          class="btn primary-btn"
          onclick="tampilkanModal('modalTambahStok')"
        >
          + Tambah Stok Baru
        </button>

        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Kode</th>
                <th>Cover</th>
                <th>Nama Buku</th>
                <th>Jenis/Edisi</th>
                <th>Stok</th>
                <th>Harga</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody id="data-katalog-body"></tbody>
          </table>
        </div>
      </section>
    </main>

    <div id="modalTambahStok" class="modal">
      <div class="modal-content">
        <span class="close-btn" onclick="sembunyikanModal('modalTambahStok')"
          >&times;</span
        >
        <h3>Tambah Stok Buku Baru</h3>
        <form id="formStokBaru">
          <div class="form-group">
            <label for="stok-kode">Kode:</label
            ><input type="text" id="stok-kode" required />
          </div>
          <div class="form-group">
            <label for="stok-nama">Nama Buku:</label
            ><input type="text" id="stok-nama" required />
          </div>
          <div class="form-group">
            <label for="stok-stok">Stok:</label
            ><input type="number" id="stok-stok" required min="1" />
          </div>
          <div class="form-group">
            <label for="stok-harga">Harga (Rp):</label
            ><input type="number" id="stok-harga" required min="10000" />
          </div>
          <button type="submit" class="btn primary-btn">Simpan Data</button>
        </form>
      </div>
    </div>

    <footer>
      <p>&copy; 2025 Toko Buku Online UTS Web1</p>
    </footer>

    <script src="js/data.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>

```

`stok.html` (Katalog Stok Buku)
Tujuan: Mengelola dan menampilkan daftar katalog/stok buku.

Isi:

Tombol `+` Tambah Stok Baru yang memicu modal input data.

Tabel yang menampilkan data buku dengan kolom: Kode, Cover, Nama Buku, Jenis/Edisi, Stok, Harga, dan Aksi.

Modal (`#modalTambahStok`) berisi formulir untuk menambah Stok Buku Baru (input Kode, Nama Buku, Stok, dan Harga).

4.checkout.html

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Halaman Pemesanan</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <header class="app-header">
      <nav class="main-nav">
        <a href="dashboard.html">Dashboard</a>
        <a href="stok.html">Katalog</a>
        <a href="tracking.html">Tracking</a>
      </nav>
    </header>

    <main class="content-wrapper">
      <section id="data-pemesan">
        <h2>Data Pemesan & Pembayaran</h2>
        <form id="formPemesanan">
          <fieldset>
            <legend>Informasi Pemesan</legend>
            <div class="form-group">
              <label for="nama">Nama Lengkap:</label
              ><input type="text" id="nama" required />
            </div>
            <div class="form-group">
              <label for="alamat">Alamat Kirim:</label
              ><textarea id="alamat" required></textarea>
            </div>
          </fieldset>

          <fieldset>
            <legend>Informasi Pembayaran</legend>
            <div class="form-group">
              <label for="metode">Metode Pembayaran:</label>
              <select id="metode" required>
                <option value="">Pilih Metode</option>
                <option value="transfer">Transfer Bank</option>
                <option value="virtual">Virtual Account</option>
              </select>
            </div>
          </fieldset>

          <button type="submit" class="btn primary-btn">
            Selesaikan Pemesanan
          </button>
        </form>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 Toko Buku Online UTS Web1</p>
    </footer>

    <script src="js/data.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>

```
`checkout.html` (Halaman Pemesanan)

Tujuan: Digunakan untuk membuat pemesanan baru dan menginput detail transaksi.

Isi:

Formulir Pemesanan (`#formPemesanan`) yang terbagi dua fieldset:

Informasi Pemesan (Nama Lengkap, Alamat Kirim).

Informasi Pembayaran (Pilihan Metode Pembayaran: Transfer Bank, Virtual Account).

Tombol Selesaikan Pemesanan.

5. tracking.html

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tracking Pengiriman</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <header class="app-header">
      <nav class="main-nav">
        <a href="dashboard.html">Dashboard</a>
        <a href="stok.html">Katalog</a>
        <a href="checkout.html">Pemesanan</a>
      </nav>
    </header>

    <main class="content-wrapper">
      <section id="pencarian-tracking">
        <h2>Lacak Pengiriman Anda</h2>
        <form id="formTracking">
          <div class="form-group search-group">
            <label for="nomor-do">Nomor Delivery Order:</label>
            <input
              type="text"
              id="nomor-do"
              placeholder="Cth: 20230012"
              required
            />
            <button type="submit" class="btn primary-btn">Cari</button>
          </div>
        </form>
      </section>

      <section id="hasil-tracking" class="card" style="display: none">
        <h3>Status Pengiriman</h3>

        <dl class="tracking-details">
          <dt>Nama Pemesan:</dt>
          <dd id="track-nama"></dd>
          <dt>Ekspedisi:</dt>
          <dd id="track-ekspedisi"></dd>
          <dt>Tanggal Kirim:</dt>
          <dd id="track-tgl-kirim"></dd>
          <dt>Jenis Paket:</dt>
          <dd id="track-paket"></dd>
          <dt>Total Pembayaran:</dt>
          <dd id="track-total"></dd>
        </dl>

        <h4>
          Status Saat Ini: <span id="track-status" class="status-label"></span>
        </h4>

        <div class="progress-container">
          <div id="progress-bar" class="progress-bar-style"></div>
        </div>

        <h4>Riwayat Perjalanan</h4>
        <ul id="riwayat-perjalanan" class="timeline-list"></ul>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 Toko Buku Online UTS Web1</p>
    </footer>

    <script src="js/data.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>
```

`tracking.html` (Tracking Pengiriman)
Tujuan: Digunakan untuk melacak status pengiriman pesanan.

Isi:

Formulir pencarian berdasarkan Nomor Delivery Order.

Bagian Hasil Tracking (`#hasil-tracking`) yang tersembunyi secara default.

Detail pengiriman yang ditampilkan: Nama Pemesan, Ekspedisi, Tanggal Kirim, Jenis Paket, dan Total Pembayaran.

Informasi Status Saat Ini dan tampilan Progress Bar.

Daftar Riwayat Perjalanan (sebagai timeline)

6. laporan_pemesanan html

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Laporan Pemesanan</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <header class="app-header">
      <div class="logo">TokoBuku.id</div>
      <nav class="main-nav">
        <a href="dashboard.html">Dashboard</a>
        <a href="stok.html">Katalog</a>
        <a href="checkout.html">Pemesanan</a>
        <a href="tracking.html">Tracking</a>
        <a href="histori_transaksi.html">Histori Transaksi</a>
        <a href="index.html" class="btn-logout">Logout</a>
      </nav>
    </header>

    <main class="content-wrapper">
      <section id="laporan-pemesanan">
        <h2>Laporan Pemesanan Bulanan</h2>

        <p>
          Ringkasan data pesanan yang masuk dan yang sudah diproses pada bulan
          ini.
        </p>

        <div class="card" style="margin-top: 20px; padding: 15px">
          <div class="form-group" style="display: flex; gap: 10px">
            <input type="month" value="2025-11" />
            <button
              class="btn primary-btn"
              onclick="alert('Simulasi: Melakukan filter data.')"
            >
              Filter
            </button>
          </div>
        </div>

        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>No. DO</th>
                <th>Tanggal Pesan</th>
                <th>Nama Pemesan</th>
                <th>Total Bayar</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>20230012</td>
                <td>2025-11-01</td>
                <td>Rina Wulandari</td>
                <td>Rp 180.000</td>
                <td>Dalam Proses</td>
              </tr>
              <tr>
                <td>20230013</td>
                <td>2025-11-01</td>
                <td>Agus Pranoto</td>
                <td>Rp 220.000</td>
                <td>Selesai</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 Toko Buku Online UTS Web1</p>
    </footer>

    <script src="js/data.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>

```

7.histori_transaksi. html

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Histori Transaksi</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <header class="app-header">
      <div class="logo">TokoBuku.id</div>
      <nav class="main-nav">
        <a href="dashboard.html">Dashboard</a>
        <a href="stok.html">Katalog</a>
        <a href="checkout.html">Pemesanan</a>
        <a href="tracking.html">Tracking</a>
        <a href="laporan_pemesanan.html">Laporan Pemesanan</a>
        <a href="index.html" class="btn-logout">Logout</a>
      </nav>
    </header>

    <main class="content-wrapper">
      <section id="histori-transaksi">
        <h2>Riwayat Pembelian Selesai</h2>

        <p>Daftar transaksi yang telah berhasil diselesaikan dan dikirimkan.</p>

        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>ID Transaksi</th>
                <th>Tanggal Selesai</th>
                <th>Barang Dibeli</th>
                <th>Jumlah Item</th>
                <th>Total Pembayaran</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TX-202511001</td>
                <td>2025-11-05</td>
                <td>Manajemen Keuangan</td>
                <td>1</td>
                <td>Rp 220.000</td>
                <td>
                  <button
                    class="btn secondary-btn"
                    onclick="alert('Mencetak struk untuk TX-202511001')"
                  >
                    Cetak Struk
                  </button>
                </td>
              </tr>
              <tr>
                <td>TX-202510098</td>
                <td>2025-10-28</td>
                <td>Mikrobiologi Dasar</td>
                <td>2</td>
                <td>Rp 400.000</td>
                <td>
                  <button
                    class="btn secondary-btn"
                    onclick="alert('Mencetak struk untuk TX-202510098')"
                  >
                    Cetak Struk
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 Toko Buku Online UTS Web1</p>
    </footer>

    <script src="js/data.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>
```

`histori_transaksi.html` (Histori Transaksi)

Tujuan: Menampilkan riwayat pembelian yang telah selesai dan dikirimkan.

Isi:

Tabel data riwayat pembelian dengan kolom: ID Transaksi, Tanggal Selesai, Barang Dibeli, Jumlah Item, Total Pembayaran.

Kolom Aksi yang berisi tombol Cetak Struk untuk setiap transaksi.

# Struktur JS

1. DATA. js

```html
var dataPengguna = [
  {
    id: 1,
    nama: "Rina Wulandari",
    email: "rina@gmail.com",
    password: "rina123",
    role: "User",
  },
  {
    id: 2,
    nama: "Agus Pranoto",
    email: "agus@gmail.com",
    password: "agus123",
    role: "User",
  },
  {
    id: 3,
    nama: "Siti Marlina",
    email: "siti@gmail.com",
    password: "siti123",
    role: "Admin",
  },
];

var dataKatalogBuku = [
  {
    kodeBarang: "ASIP4301",
    namaBarang: "Pengantar Ilmu Komunikasi",
    jenisBarang: "Buku Ajar",
    edisi: "2",
    stok: 548,
    harga: "Rp 180.000",
    cover: "img/pengantar_komunikasi.jpg",
  },
  {
    kodeBarang: "EKMA4002",
    namaBarang: "Manajemen Keuangan",
    jenisBarang: "Buku Ajar",
    edisi: "3",
    stok: 392,
    harga: "Rp 220.000",
    cover: "img/manajemen_keuangan.jpg",
  },
  {
    kodeBarang: "EKMA4310",
    namaBarang: "Kepemimpinan",
    jenisBarang: "Buku Ajar",
    edisi: "1",
    stok: 278,
    harga: "Rp 150.000",
    cover: "img/kepemimpinan.jpg",
  },
  {
    kodeBarang: "BIOL4211",
    namaBarang: "Mikrobiologi Dasar",
    jenisBarang: "Buku Ajar",
    edisi: "2",
    stok: 165,
    harga: "Rp 200.000",
    cover: "img/mikrobiologi.jpg",
  },
  {
    kodeBarang: "PAUD4401",
    namaBarang: "Perkembangan Anak Usia Dini",
    jenisBarang: "Buku Ajar",
    edisi: "4",
    stok: 204,
    harga: "Rp 250.000",
    cover: "img/paud_perkembangan.jpg",
  },
];

var dataTracking = {
  // Data Pesanan Rina
  20230012: {
    nomorDO: "20230012",
    nama: "Rina Wulandari",
    status: "Dalam Perjalanan",
    ekspedisi: "JNE",
    tanggalKirim: "2025-08-25",
    paket: "0JKT01",
    total: "Rp 180.000",
    perjalanan: [
      {
        waktu: "2025-08-25 10:12:20",
        keterangan:
          "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: TokoBuku.id",
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN",
      },
      {
        waktu: "2025-08-26 08:00:00",
        keterangan: "Diteruskan ke Kantor Jakarta Selatan",
      },
    ],
  },
  // Data Pesanan Agus
  20230013: {
    nomorDO: "20230013",
    nama: "Agus Pranoto",
    status: "Selesai Antar",
    ekspedisi: "Pos Indonesia",
    tanggalKirim: "2025-08-25",
    paket: "0UPBJJBDG",
    total: "Rp 220.000",
    perjalanan: [
      {
        waktu: "2025-08-25 10:12:20",
        keterangan:
          "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: TokoBuku.id",
      },
      {
        waktu: "2025-08-26 12:15:33",
        keterangan: "Tiba di Hub: Kota BANDUNG",
      },
      {
        waktu: "2025-08-26 15:06:12",
        keterangan: "Proses antar ke Cimahi",
      },
      {
        waktu: "2025-08-26 20:00:00",
        keterangan: "Selesai Antar. Penerima: Agus Pranoto",
      },
    ],
  },
};

```
`data.js` (Mock Data)

File ini berfungsi sebagai sumber data simulasi statis yang menggantikan peran back-end (database) dalam aplikasi front-end ini.

`dataPengguna`: Array data akun (Email, Password, Role) untuk simulasi login.

`dataKatalogBuku`: Array detail buku (Kode, Nama, Stok, Harga) untuk ditampilkan di stok.html.

`dataTracking`: Objek data pengiriman dengan kunci berupa Nomor DO. Berisi detail status, ekspedisi, dan riwayat perjalanan untuk `tracking.html`.

2. script.js

```html
// --- Global Helper Functions untuk Interaksi UI (Modal Box) ---
function tampilkanModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "block";
  }
}

function sembunyikanModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "none";
  }
}

// --- 1. Logika Halaman Login (index.html) ---
if (document.getElementById("formLogin")) {
  document.getElementById("formLogin").addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    // Cek kecocokan email dan password dari dataPengguna
    const user = dataPengguna.find(
      (u) => u.email === emailInput && u.password === passwordInput
    );

    if (user) {
      sessionStorage.setItem("loggedInUser", JSON.stringify(user));
      window.location.href = "dashboard.html";
    } else {
      // Validasi Form & Alert Box
      alert("Email/password yang anda masukkan salah!");
    }
  });
}

// --- 2. Logika Dashboard Menu (dashboard.html) ---
if (document.getElementById("user-greeting")) {
  document.addEventListener("DOMContentLoaded", function () {
    const userJSON = sessionStorage.getItem("loggedInUser");
    const user = userJSON ? JSON.parse(userJSON) : { nama: "Pengunjung" };
    const userName = user.nama;

    // Logika "greeting" berdasarkan waktu lokal
    const now = new Date();
    const hour = now.getHours();
    let greetingText = "";
    let greetingClass = "";

    if (hour >= 4 && hour < 11) {
      greetingText = "Selamat Pagi";
      greetingClass = "greeting-pagi";
    } else if (hour >= 11 && hour < 15) {
      greetingText = "Selamat Siang";
      greetingClass = "greeting-siang";
    } else if (hour >= 15 && hour < 18) {
      greetingText = "Selamat Sore";
      greetingClass = "greeting-sore";
    } else {
      greetingText = "Selamat Malam";
      greetingClass = "greeting-malam";
    }

    const greetingElement = document.getElementById("user-greeting");
    greetingElement.textContent = `${greetingText}, ${userName}!`;
    greetingElement.className = greetingClass;
  });
}

// --- 3. Logika Informasi Stok/Katalog (stok.html) ---
if (document.getElementById("data-katalog-body")) {
  const katalogBody = document.getElementById("data-katalog-body");

  // Manipulasi DOM: Merender data katalog secara dinamis
  function renderKatalog() {
    katalogBody.innerHTML = "";
    dataKatalogBuku.forEach((buku) => {
      const row = katalogBody.insertRow();
      const stokClass = buku.stok < 250 ? "stok-rendah" : "stok-aman";

      row.innerHTML = `
                <td>${buku.kodeBarang}</td>
                <td><img src="${buku.cover}" alt="Cover ${buku.namaBarang}" class="cover-thumb"></td>
                <td><strong>${buku.namaBarang}</strong></td>
                <td>${buku.jenisBarang} - Edisi ${buku.edisi}</td>
                <td class="${stokClass}">${buku.stok}</td>
                <td>${buku.harga}</td>
                <td><button class="btn" onclick="alert('Fungsi Edit/Hapus untuk ${buku.kodeBarang} berhasil dipanggil.')">Aksi</button></td>
            `;
    });
  }

  // Fitur Tambah Stok Baru menggunakan Javascript DOM
  document
    .getElementById("formStokBaru")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const kode = document.getElementById("stok-kode").value;
      const nama = document.getElementById("stok-nama").value;
      const stok = parseInt(document.getElementById("stok-stok").value);
      const harga =
        "Rp " +
        parseInt(document.getElementById("stok-harga").value).toLocaleString(
          "id-ID"
        );

      const bukuBaru = {
        kodeBarang: kode.toUpperCase(),
        namaBarang: nama,
        jenisBarang: "Buku Umum",
        edisi: "1",
        stok: stok,
        harga: harga,
        cover: "img/default.jpg",
      };

      dataKatalogBuku.push(bukuBaru);
      renderKatalog();

      document.getElementById("formStokBaru").reset();
      sembunyikanModal("modalTambahStok");
      alert(`Stok buku ${nama} berhasil ditambahkan!`);
    });

  document.addEventListener("DOMContentLoaded", renderKatalog);
}

// --- 4. Logika Informasi Pengiriman (tracking.html) ---
if (document.getElementById("formTracking")) {
  document
    .getElementById("formTracking")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const nomorDO = document.getElementById("nomor-do").value.trim();
      const hasilTracking = document.getElementById("hasil-tracking");

      const dataPengiriman = dataTracking[nomorDO]; // Akses dataTracking

      if (dataPengiriman) {
        // Tampilkan detail pengiriman
        document.getElementById("track-nama").textContent = dataPengiriman.nama;
        document.getElementById("track-ekspedisi").textContent =
          dataPengiriman.ekspedisi;
        document.getElementById("track-tgl-kirim").textContent =
          dataPengiriman.tanggalKirim;
        document.getElementById("track-paket").textContent =
          dataPengiriman.paket;
        document.getElementById("track-total").textContent =
          dataPengiriman.total;

        // Kreativitas UI: Progress Bar
        const statusElement = document.getElementById("track-status");
        const progressBar = document.getElementById("progress-bar");

        statusElement.textContent = dataPengiriman.status;
        let progressWidth = "25%";
        let progressColor = "#FFB703";

        if (dataPengiriman.status === "Dalam Perjalanan") {
          progressWidth = "50%";
          progressColor = "#457B9D";
        } else if (dataPengiriman.status === "Dikirim") {
          progressWidth = "75%";
          progressColor = "#E63946";
        } else if (dataPengiriman.status.includes("Selesai Antar")) {
          progressWidth = "100%";
          progressColor = "#2A9D8F";
        }

        progressBar.style.width = progressWidth;
        progressBar.style.backgroundColor = progressColor;
        progressBar.textContent = dataPengiriman.status;

        // Manipulasi DOM untuk Riwayat Perjalanan
        const riwayatList = document.getElementById("riwayat-perjalanan");
        riwayatList.innerHTML = "";
        [...dataPengiriman.perjalanan].reverse().forEach((step) => {
          const li = document.createElement("li");
          li.innerHTML = `<strong>${step.waktu}</strong>: ${step.keterangan}`;
          riwayatList.appendChild(li);
        });

        hasilTracking.style.display = "block";
      } else {
        alert("Nomor Delivery Order tidak ditemukan atau salah!");
        hasilTracking.style.display = "none";
      }
    });
}

// --- 5. Logika Halaman Pemesanan (checkout.html) ---
if (document.getElementById("formPemesanan")) {
  document
    .getElementById("formPemesanan")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const nama = document.getElementById("nama").value.trim();
      const alamat = document.getElementById("alamat").value.trim();
      const metode = document.getElementById("metode").value;

      // Validasi Form & Alert
      if (nama === "" || alamat === "" || metode === "") {
        alert("Semua isian data pemesan dan pembayaran wajib diisi!");
        return;
      }

      // Simulasi berhasil
      alert(
        `Pemesanan berhasil! \nNama: ${nama} \nMetode: ${metode}. (Simulasi)`
      );
      document.getElementById("formPemesanan").reset();
    });
}

```
`script.js` 

adalah pusat logika sisi klien (client-side logic) dalam aplikasi Toko Buku Online Anda. Semua interaksi pengguna, manipulasi data, dan respons UI diatur di dalam file ini.

Fungsi-fungsi ini adalah utility dasar yang dipanggil di berbagai halaman HTML untuk mengontrol modal box (pop-up).

tampilkanModal(id): Mengubah properti display elemen HTML dengan id tertentu menjadi "block", membuatnya terlihat.

sembunyikanModal(id): Mengubah properti display elemen HTML dengan id tertentu menjadi "none", menyembunyikannya.








