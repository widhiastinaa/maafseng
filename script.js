const envelope = document.getElementById('envelope');
const envelopeWrapper = document.getElementById('envelopeWrapper');
const messageCard = document.getElementById('messageCard');
const downloadBtn = document.getElementById('downloadBtn');

function typeWriter(id, text, speed, callback) {
  const el = document.getElementById(id);
  let i = 0;
  function typing() {
    if (i < text.length) {
      el.innerHTML = text.substring(0, i + 1) + '<span class="typewriter-cursor"></span>';
      i++;
      setTimeout(typing, speed);
    } else {
      el.innerHTML = text;
      if (callback) callback();
    }
  }
  typing();
}

envelope.addEventListener('click', () => {
  envelope.classList.add('open');
  setTimeout(() => {
    envelopeWrapper.style.display = 'none';
    messageCard.classList.remove('hidden');
    typeWriter("typewriter-title", "Untuk Putri Lisa sengku", 100, () => {
      setTimeout(() => {
        typeWriter("typewriter-intro", "Hai Putri Lisa sengku,", 80);
      }, 500);
    });
  }, 1000);
});

downloadBtn.addEventListener('click', () => {
  html2canvas(document.querySelector('.card'), { scale: 2 }).then(canvas => {
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = 'surat_maaf_putri_lisa.png';
    a.click();
  });
});