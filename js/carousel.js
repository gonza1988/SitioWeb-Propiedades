let overlay = document.querySelector('.overlay');
let carousel = document.querySelector('.carousel');

function openModal() {
    overlay.style.display = 'block';
    carousel.style.display = 'block';
}

function closeModal() {
    overlay.style.display = 'none';
    carousel.style.display = 'none';
}