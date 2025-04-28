const bubbleArea = document.getElementById('bubble-area');
const tabung = document.getElementById('lab-tabung');
const infoBahan = document.getElementById('info-bahan');

function createBubble() {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.style.left = `${Math.random() * 80 + 10}px`;
  bubble.style.animationDuration = `${Math.random() * 2 + 2}s`;

  bubbleArea.appendChild(bubble);
  setTimeout(() => {
    bubble.remove();
  }, 3000);
}

setInterval(createBubble, 500);

tabung.addEventListener('click', () => {
  infoBahan.style.display = infoBahan.style.display === 'none' ? 'block' : 'none';
  infoBahan.innerText = 'Ini adalah larutan CuSO₄ (tembaga sulfat), berwarna biru cerah.';
});

// ==============================
// Tambahan untuk eksperimen Elektrolit
// ==============================
const selectLarutan = document.getElementById('larutan');
const lampu = document.getElementById('lampu');
const larutanBox = document.getElementById('larutanBox');
const hasil = document.getElementById('hasil');

if (selectLarutan && lampu && larutanBox && hasil) {
    function clearIon() {
        larutanBox.innerHTML = '';
    }

    function generateIons(type) {
        clearIon();
        let jumlah = type === 'kuat' ? 20 : type === 'lemah' ? 8 : 0;
        for (let i = 0; i < jumlah; i++) {
            let ion = document.createElement('div');
            ion.className = 'ion ' + (i % 2 === 0 ? 'positif' : 'negatif');
            ion.style.top = Math.random() * 120 + 'px';
            ion.style.left = Math.random() * 120 + 'px';
            larutanBox.appendChild(ion);
        }
    }

    selectLarutan.addEventListener('change', function() {
        if (selectLarutan.value === 'kuat') {
            hasil.innerHTML = "Elektrolit Kuat: Lampu menyala terang!";
            lampu.style.backgroundColor = "yellow";
            lampu.style.boxShadow = "0 0 40px yellow";
            generateIons('kuat');
        } else if (selectLarutan.value === 'lemah') {
            hasil.innerHTML = "Elektrolit Lemah: Lampu redup!";
            lampu.style.backgroundColor = "lightyellow";
            lampu.style.boxShadow = "0 0 20px lightyellow";
            generateIons('lemah');
        } else if (selectLarutan.value === 'non') {
            hasil.innerHTML = "Non Elektrolit: Lampu mati.";
            lampu.style.backgroundColor = "grey";
            lampu.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
            clearIon();
        } else {
            hasil.innerHTML = "";
            lampu.style.backgroundColor = "grey";
            lampu.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
            clearIon();
        }
    });
}
