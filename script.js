const container = document.querySelector('.bubbles');

function criarBolhas() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const size = Math.random() * 25 + 15;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    const padding = 10;
    const maxLeft = window.innerWidth - size - padding * 2;
    const left = Math.random() * maxLeft + padding;
    bubble.style.left = `${left}px`;

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
