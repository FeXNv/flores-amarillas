const contenedorPetalos = document.getElementById('petalos');
const emojis = ['🌻', '💛', '🌼', '✨'];

function crearPetalo() {
    const petalo = document.createElement('div');
    petalo.classList.add('petalo-caido');
    petalo.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    petalo.style.left = Math.random() * 100 + 'vw';
    petalo.style.fontSize = (Math.random() * 20 + 16) + 'px';
    petalo.style.animationDuration = (Math.random() * 5 + 6) + 's';
    petalo.style.animationDelay = Math.random() * 3 + 's';
    contenedorPetalos.appendChild(petalo);
    setTimeout(() => petalo.remove(), 12000);
}

setInterval(crearPetalo, 400);
for (let i = 0; i < 15; i++) setTimeout(crearPetalo, i * 150);

const boton = document.getElementById('btnSorpresa');
const sorpresa = document.getElementById('sorpresa');

const frases = [
    "¡Eres la mejor! 🌻",
    "Gracias por existir 💛",
    "Nunca cambies ✨",
    "Te mereces todas las flores del mundo 🌼",
    "Eres luz en días grises ☀️",
    "¡Un abrazo enorme! 🤗"
];

let indice = 0;

boton.addEventListener('click', () => {
    sorpresa.textContent = frases[indice];
    indice = (indice + 1) % frases.length;
    for (let i = 0; i < 10; i++) setTimeout(crearPetalo, i * 60);
});