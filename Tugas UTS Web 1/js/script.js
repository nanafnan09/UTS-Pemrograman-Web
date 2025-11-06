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
