document.addEventListener('DOMContentLoaded', function() {
    const btnSubir = document.getElementById('btnSubir');
    
    // Mostrar u ocultar el botón al hacer scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            btnSubir.classList.add('mostrar');
        } else {
            btnSubir.classList.remove('mostrar');
        }
    });
    
    // Scroll suave al hacer click
    btnSubir.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
