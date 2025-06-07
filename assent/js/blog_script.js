document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slide2.active');
    const slides = document.querySelectorAll('.slide2:not(.active)');
    let currentIndex = 0;
    
    // Preparamos el slider para múltiples imágenes
    slider.style.position = 'relative';
    slider.style.overflow = 'hidden';
    
    // Posicionamos las imágenes una encima de otra
    slides.forEach(slide => {
        slide.style.position = 'absolute';
        slide.style.top = '0';
        slide.style.left = '0';
        slide.style.width = '100%';
        slide.style.height = '100%';
        slide.style.opacity = '0';
        slide.style.transition = 'opacity 1s ease-in-out';
        slider.appendChild(slide);
    });
    
    // Función para cambiar de slide
    function changeSlide() {
        // Ocultamos el slide actual
        if (currentIndex > 0) {
            slides[currentIndex - 1].style.opacity = '0';
        } else if (currentIndex === 0 && slides.length > 0) {
            slides[slides.length - 1].style.opacity = '0';
        }
        
        // Mostramos el nuevo slide
        slides[currentIndex].style.opacity = '1';
        
        // Actualizamos el índice
        currentIndex = (currentIndex + 1) % slides.length;
    }
    
    // Iniciamos el intervalo
    let slideInterval = setInterval(changeSlide, 5000);
    
    // Opcional: Pausar el slider al hacer hover
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(changeSlide, 5000);
    });
    
    // Mostrar la primera imagen inmediatamente
    if (slides.length > 0) {
        slides[0].style.opacity = '1';
        currentIndex = 1;
    }
});
