document.addEventListener('DOMContentLoaded', () => {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
        heart.style.animationDelay = `${index * 1}s`;
    });
});
