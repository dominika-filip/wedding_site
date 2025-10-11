// Minimalne skrypty: obsługa formularza RSVP i lightbox galerii
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('rsvpForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      // Tu możesz dodać wysyłkę przez fetch (do endpointu) lub integrację z Google Forms.
      alert('Dziękujemy! Potwierdzenie zostało wysłane.');
      form.reset();
    });
  }

  // Lightbox dla galerii
  const gallery = document.getElementById('galleryGrid');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbClose = document.getElementById('lbClose');

  if(gallery && lightbox){
    gallery.addEventListener('click', (ev) => {
      const target = ev.target;
      if(target && target.tagName === 'IMG'){
        lbImg.src = target.src;
        lbImg.alt = target.alt || '';
        lightbox.setAttribute('aria-hidden','false');
      }
    });

    lbClose.addEventListener('click', ()=> {
      lightbox.setAttribute('aria-hidden','true');
      lbImg.src = '';
    });

    lightbox.addEventListener('click', (e) => {
      if(e.target === lightbox) {
        lightbox.setAttribute('aria-hidden','true');
        lbImg.src = '';
      }
    });
  }
});
