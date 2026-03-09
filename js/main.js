document.addEventListener('DOMContentLoaded', () => {
    // Accessibility Controls
    const btnIncrease = document.getElementById('font-increase');
    const btnDecrease = document.getElementById('font-decrease');
    const btnReset = document.getElementById('font-reset');
    
    let fontSize = 100;

    if (btnIncrease) {
        btnIncrease.addEventListener('click', () => {
            fontSize += 10;
            document.body.style.fontSize = `${fontSize}%`;
        });
    }

    if (btnDecrease) {
        btnDecrease.addEventListener('click', () => {
            fontSize -= 10;
            document.body.style.fontSize = `${fontSize}%`;
        });
    }

    if (btnReset) {
        btnReset.addEventListener('click', () => {
            fontSize = 100;
            document.body.style.fontSize = `100%`;
        });
    }

    // Mobile Menu Toggle
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }
});
