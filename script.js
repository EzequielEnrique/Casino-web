const symbols = ["🍒", "🍊", "🍇", "🍓", "🔔", "💎"];
const reel1 = document.getElementById("reel1");
const reel2 = document.getElementById("reel2");
const reel3 = document.getElementById("reel3");
const spinButton = document.getElementById("spin-button");
const audio = document.getElementById("myAudio");

function spinReel() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function showInitialFruits() {
    // Asignar símbolos aleatorios a cada carrete
    reel1.textContent = spinReel();
    reel2.textContent = spinReel();
    reel3.textContent = spinReel();
}

function spinMachine() {
    const spins = [0, 0, 0];
    const spinInterval = setInterval(() => {
        reel1.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        reel2.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        reel3.textContent = symbols[Math.floor(Math.random() * symbols.length)];

        spins[0]++;
        spins[1]++;
        spins[2]++;

        if (spins[0] >= 10 && spins[1] >= 15 && spins[2] >= 20) {
            clearInterval(spinInterval);
            const symbol1 = spinReel();
            const symbol2 = spinReel();
            const symbol3 = spinReel();
            reel1.textContent = symbol1;
            reel2.textContent = symbol2;
            reel3.textContent = symbol3;
            // Reproducir el sonido
            audio.play();
        }
    }, 100);
}

document.addEventListener('DOMContentLoaded', function() {
    // Mostrar frutas iniciales cuando se cargue la página
    showInitialFruits();
});

spinButton.addEventListener("click", spinMachine);

