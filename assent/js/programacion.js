
             // Slider automático
             let currentSlide = 0;
             const slides = document.querySelectorAll('.slide1');
             
             function showSlide(n) {
                 slides.forEach(slide1 => slide1.classList.remove('active'));
                 currentSlide = (n + slides.length) % slides.length;
                 slides[currentSlide].classList.add('active');
             }
             
             function nextSlide() {
                 showSlide(currentSlide + 1);
             }
             
             setInterval(nextSlide, 5000);
     
//slider automatico blog


               // Galería modal
               const modal = document.getElementById('imageModal');
               const modalImg = document.getElementById('modalImage');
               const galleryImgs = document.querySelectorAll('.gallery-img');
               const closeModal = document.querySelector('.close-modal');
               
               galleryImgs.forEach(img => {
                   img.addEventListener('click', function() {
                       modal.style.display = 'block';
                       modalImg.src = this.src;
                       modalImg.alt = this.alt;
                   });
               });
               
               closeModal.addEventListener('click', function() {
                   modal.style.display = 'none';
               });
               
               window.addEventListener('click', function(event) {
                   if (event.target === modal) {
                       modal.style.display = 'none';
                   }
               });
               
               // Acordeón About Me
               const accordionTitles = document.querySelectorAll('.accordion-title');
               
               accordionTitles.forEach(title => {
                   title.addEventListener('click', function() {
                       this.classList.toggle('active');
                       const content = this.nextElementSibling;
                       content.classList.toggle('show');
                   });
               });
               
               // Año actual en el footer
               document.getElementById('year').textContent = new Date().getFullYear();
               
               // Smooth scrolling para el menú
               document.querySelectorAll('nav a').forEach(anchor => {
                   anchor.addEventListener('click', function(e) {
                       e.preventDefault();
                       const targetId = this.getAttribute('href');
                       const targetElement = document.querySelector(targetId);
                       
                       window.scrollTo({
                           top: targetElement.offsetTop - 80,
                           behavior: 'smooth'
                       });
                   });
               });
       