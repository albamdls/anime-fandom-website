document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.list-images li');
    let currentSlide = 0;

    function showSlide(index) {
        // Ocultar todas las imágenes
        slides.forEach(slide => slide.classList.remove('active'));
        // Mostrar la imagen actual
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Mostrar la primera imagen
    showSlide(0);

    // Cambiar slide cada 3 segundos
    setInterval(nextSlide, 3000);

    // Opcional: Agregar navegación manual
    document.querySelector('.navegation .left').addEventListener('click', prevSlide);
});