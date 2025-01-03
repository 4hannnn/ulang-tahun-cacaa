function revealSurprise() {
  // Menghilangkan elemen kue dan ucapan awal
  const cakeDiv = document.querySelector(".cake");
  const initialMessage = document.getElementById("initial-message");
  cakeDiv.style.display = "none";
  initialMessage.style.display = "none";

  // Menampilkan kejutan
  const surpriseDiv = document.getElementById("surprise");
  surpriseDiv.classList.remove("hidden");

  // Menambahkan efek kejutan berupa alert
  alert("🎉 Kejutan sudah muncul! Selamat ulang tahun, sayang! 💕");
}
