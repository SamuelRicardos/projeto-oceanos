const container = document.querySelector('.bubbles');

function criarBolhas() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const size = Math.random() * 25 + 15;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    bubble.style.left = `${Math.random() * 100}%`;

    const duration = Math.random() * 5 + 5;
    const delay = Math.random() * 5;
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.animationDelay = `${delay}s`;

    container.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, (duration + delay) * 1000);
}

setInterval(criarBolhas, 500);
