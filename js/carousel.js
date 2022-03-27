let overlay = document.querySelector('.overlay');
let carousel = document.querySelector('.carousel');
let slides = document.querySelectorAll('.carousel .slide');

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

    for (i=0; i < slides.length; i++) {
        slides[i].style.left = slides[i].offsetLeft + carousel.offsetWidth + 'px'; /*devuelve un valor con la posicion left de ese elemento */
    }
}