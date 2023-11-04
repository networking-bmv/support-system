// presentase sistem
const uptimeBar = document.querySelector(".uptime-bar");
const uptime = 99; // presentase tanpa % (contoh 100% = 100)

// memanggil data "uptime" ke file html untuk ditampilkan
document.getElementById("uptime-presentage").innerHTML = "<b>Presentase: </b>" + uptime + "%";

uptimeBar.querySelector(".uptime-bar-inner").style.width = uptime + "%";

// Tampilkan tooltip saat cursor diarahkan ke uptime bar
uptimeBar.addEventListener("mousemove", (event) => {
  uptimeBar.querySelector(".uptime-bar-tooltip").style.display = "block";
  uptimeBar.querySelector(".uptime-bar-tooltip").textContent = uptime + "%";
});

// Sembunyikan tooltip saat cursor tidak lagi mengarah ke uptime bar
uptimeBar.addEventListener("mouseleave", (event) => {
  uptimeBar.querySelector(".uptime-bar-tooltip").style.display = "none";
});

// Fungsi untuk menentukan warna uptime bar
function getColor(uptime) {
  if (uptime < 50) {
    return "#f00"; // merah
  } else if (uptime < 75) {
    return "#ff7d00"; // orange
  } else if (uptime < 90) {
    return "#ffdd00"; // kuning
  } else {
    return "#008000"; // hijau tua
  }
}

// Ubah warna uptime bar
uptimeBar.querySelector(".uptime-bar-inner").style.backgroundColor = getColor(uptime);

// Dengarkan perubahan nilai uptime
uptimeBar.addEventListener("input", (event) => {
  uptime = event.target.value;
  uptimeBar.querySelector(".uptime-bar-inner").style.backgroundColor = getColor(uptime);
});

// Tambahkan tooltip
const uptimeBarTooltip = document.querySelector(".uptime-bar-tooltip");

// Tampilkan tooltip saat cursor diarahkan ke uptime bar
uptimeBar.addEventListener("mousemove", (event) => {
  uptimeBarTooltip.style.display = "block";
  uptimeBarTooltip.textContent = uptime + "%";
});

// Sembunyikan tooltip saat cursor tidak lagi mengarah ke uptime bar
uptimeBar.addEventListener("mouseleave", (event) => {
  uptimeBarTooltip.style.display = "none";
});

// Fungsi untuk menentukan status sistem
function getStatus(uptime) {
  if (uptime < 15) {
    return "pemadaman sistem";
  } else if (uptime < 50) {
    return "Sistem mengalami masalah";
  } else if (uptime < 75) {
    return "Sistem mengalami gangguan";
  } else if (uptime < 90) {
    return "Sistem melambat";
  } else {
    return "Sistem berjalan dengan baik";
  }
}

// Status Sistem dalam HTML
// uptimeBar.querySelector(".uptime-bar-status").textContent = "<b>Status: </b>" + getStatus(uptime);
document.getElementById("uptime-status").innerHTML = "<b>Status: </b>" + getStatus(uptime);