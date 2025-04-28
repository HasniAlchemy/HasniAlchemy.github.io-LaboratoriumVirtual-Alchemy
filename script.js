// Tampilkan pesan sambutan ketika halaman selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    alert('Selamat datang di Laboratorium Virtual Alchemy!');
});

// Tambahkan fungsi klik tombol untuk menampilkan info tambahan
function tampilkanInfo() {
    const infoDiv = document.getElementById('info-tambahan');
    if (infoDiv.style.display === 'none') {
        infoDiv.style.display = 'block';
    } else {
        infoDiv.style.display = 'none';
    }
}
