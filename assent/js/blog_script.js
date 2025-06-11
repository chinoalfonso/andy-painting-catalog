        // Funcionalidad del modal
//const modal = document.getElementById('myModal');
       // const btn = document.querySelector('.open-modal-btn');
     //   const closeBtn = document.querySelector('.close-btn');
        
     //   btn.addEventListener('click', () => {
     //       modal.style.display = 'flex';
      //      document.body.style.overflow = 'hidden';
      //  });
        
      //  closeBtn.addEventListener('click', () => {
      //      modal.style.display = 'none';
      //      document.body.style.overflow = 'auto';
       // });
        
       // window.addEventListener('click', (e) => {
     //       if (e.target === modal) {
     //           modal.style.display = 'none';
     //           document.body.style.overflow = 'auto';
     //       }
     //   });

// Abrir modal
btn.addEventListener('click', () => {
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
});

// Cerrar modal
function closeModal() {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
}

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});
