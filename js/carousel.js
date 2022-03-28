let overlay = document.querySelector('.overlay');
let carousel = document.querySelector('.carousel');
let slides = document.querySelectorAll('.carousel .slide');
let rightArrow = document.querySelector('.right-arrow'); /*lleva punto por ser una clase Css*/
let leftArrow = document.querySelector('.left-arrow');
let counter = 0;

function loadSlides(){

    for (i=0; i < slides.length; i++) {
        slides[i].style.left = carousel.offsetWidth * -i + 'px'; /*obtenemos el ancho de la imagen que dependiendo del dispositivo puede variar y lo desplazamos a la izquiera al multiplicar por -1 y para pasarselo a "left" le concatenamos 'px' para que lo entienda y sean pixeles*/
    }
}


function openModal() {
    overlay.style.display = 'block';
    carousel.style.display = 'block';
    loadSlides();
}

function closeModal() {
    overlay.style.display = 'none';
    carousel.style.display = 'none';
}

function nextSlide() {
    updateArrowState(1);
    for (i=0; i < slides.length; i++) {
        slides[i].style.left = slides[i].offsetLeft + carousel.offsetWidth + 'px'; /*devuelve un valor con la posicion left de ese elemento */
    }
}

function prevSlide() {
    updateArrowState(-1);
    for (i=0; i < slides.length; i++) {
        slides[i].style.left = slides[i].offsetLeft - carousel.offsetWidth + 'px'; /*devuelve un valor con la posicion left de ese elemento */
    }
}

function updateArrowState(e) {
    counter += e;
    if(counter !== 0) {
        leftArrow.style.display = 'flex';
    } else {
        leftArrow.style.display = 'none';
    }

    if(counter === slides.length -1) {
        rightArrow.style.display = 'none';
    } else {
        rightArrow.style.display = 'flex';
    }

    rightArrow.style.pointerEvents = 'none';/*permite o no utilizar el elemento como detector de eventos */
    leftArrow.style.pointerEvents = 'none';

    setTimeout(() => {

        rightArrow.style.pointerEvents = 'auto';/* cuando pasen los 900ms cambian la propiede events a "auto" (valor por defecto) */
        leftArrow.style.pointerEvents = 'auto';
    },900);
}