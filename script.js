const envelope = document.getElementById("envelope");
const letterContent = document.getElementById("letterContent");
const envelopeContainer = document.getElementById("envelopeContainer");
const typedTextEl = document.getElementById("typedText");
const bgMusic = document.getElementById("bgMusic");

const suratRomantis = `Sengkuu sayang ❤️

Maafkan aku jika ada kata, sikap, atau tingkahku yang membuat seng badmood. 
Aku tahu aku tidak sempurna, tapi aku ingin selalu belajar menjadi yang terbaik untukmu. 

Putri Lisa Sengku... terima kasih sudah hadir dalam hidupku, senyum, dan semangat. 
seng adalah rumah bagiku, tempat aku selalu ingin kembali.

Aku janji akan terus berusaha menjaga, mencintai, dan membahagiakanmu. 
Tetaplah bersamaku, hingga nanti kita tua bersama astungkara. 

Dengan cinta,
Widhi Sengmu 💕`;

envelope.addEventListener("click", () => {
    envelope.classList.add("open");
    setTimeout(() => {
        envelopeContainer.style.display = "none";
        letterContent.style.display = "block";
        bgMusic.play();
        ketikTeks(suratRomantis, typedTextEl);
    }, 1000);
});

function ketikTeks(text, element) {
    let index = 0;
    function tulis() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(tulis, 50);
        }
    }
    tulis();
}

document.getElementById("downloadBtn").addEventListener("click", () => {
    html2canvas(letterContent).then(canvas => {
        const link = document.createElement("a");
        link.download = "Surat_Cinta.png";
        link.href = canvas.toDataURL();
        link.click();
    });
});