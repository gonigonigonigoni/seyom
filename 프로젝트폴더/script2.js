document.addEventListener('DOMContentLoaded', () => {
    const hamster = document.getElementById('hamster');
    hamster.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    const hearts = document.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
        heart.style.animationDelay = `${index * 1}s`;
    });
});
