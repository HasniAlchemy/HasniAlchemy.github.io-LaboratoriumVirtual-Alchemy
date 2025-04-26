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
