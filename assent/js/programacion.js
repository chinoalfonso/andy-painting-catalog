
             // Slider automático
           /*  let currentSlide = 0;
             const slides = document.querySelectorAll('.slide1');
             
             function showSlide(n) {
                 slides.forEach(slide1 => slide1.classList.remove('active'));
                 currentSlide = (n + slides.length) % slides.length;
                 slides[currentSlide].classList.add('active');
             }
             
             function nextSlide() {
                 showSlide(currentSlide + 1);
             }
             
             setInterval(nextSlide, 5000);*/
             const slides = document.querySelectorAll('.slide-head');
             let currentIndex = 0;
         
             function showSlide(index) {
               slides.forEach((slides, i) => {
                 slides.classList.remove('active');
                 if (i === index) {
                   slides.classList.add('active');
                 }
               });
             }
         
             function nextSlide() {
               currentIndex = (currentIndex + 1) % slides.length;
               showSlide(currentIndex);
             }
         
             // Mostrar primer slide
             showSlide(currentIndex);
         
             // Cambiar slide cada 6 segundos
             setInterval(nextSlide, 6000);
         
            
     
//slider automatico blog


               // Galería modal
         /*     const modal = document.getElementById('imageModal');
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
               });*/
               // Funcionalidad del modal boton info
        const modal_info = document.getElementById('myModal_info');
        const btn_info = document.querySelector('.open-modal-btn-info');
        const closeBtn_info = document.querySelector('.close-btn-info');
        
        btn_info.addEventListener('click', () => {
            modal_info.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
        
        closeBtn_info.addEventListener('click', () => {
            modal_info.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal_info.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

               
                // Funcionalidad del acordeón
        const accordionItems = document.querySelectorAll('.accordion-item');
        
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            
            header.addEventListener('click', () => {
                // Cerrar otros elementos abiertos
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Abrir/cerrar el elemento clickeado
                item.classList.toggle('active');
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
      /*prueba de dialog*/


