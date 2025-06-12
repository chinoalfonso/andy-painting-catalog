               // Funcionalidad del modal
               const modal2 = document.getElementById('myModal');//id modal
               const btn = document.querySelector('.open-modal-btn');//boton abrir
               const closeBtn = document.querySelector('.close-btn');//boton cerrar
               
               btn.addEventListener('click', () => {
                   modal2.style.display = 'flex';
                   document.body.style.overflow = 'hidden';
               });
               
               closeBtn.addEventListener('click', () => {
                   modal2.style.display = 'none';
                   document.body.style.overflow = 'auto';
               });
               
               window.addEventListener('click', (e) => {
                   if (e.target === modal2) {
                       modal2.style.display = 'none';
                       document.body.style.overflow = 'auto';
                   }
               });
       

/* //Abrir modal
btn.addEventListener('click', () => {
    modal.style.display = 'flex';
   document.body.classList.add('modal');
});

 //Cerrar modal
function closeModal() {
    modal.style.display = 'none';
   document.body.classList.remove('modal');
}

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});*/
