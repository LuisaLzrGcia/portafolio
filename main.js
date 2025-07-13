window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 5) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

document.querySelectorAll('.card-skills').forEach((el, index) => {
    el.setAttribute('data-aos', 'fade-up');
    el.setAttribute('data-aos-delay', index * 30); // escalonado
    el.setAttribute('data-aos-duration', '500');
  });

// Inicializa AOS
AOS.init();

const scrollBtn = document.getElementById('btn-scroll-top');

  // Mostrar botón al hacer scroll hacia abajo
  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  // Volver al inicio con efecto suave
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });