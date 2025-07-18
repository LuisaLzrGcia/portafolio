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

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  if (!nameRegex.test(name)) {
    return Swal.fire({
      icon: 'warning',
      title: 'Nombre inválido',
      color: '#561D46',
      iconColor: '#561D46',
      confirmButtonColor: '#561D46',
      text: 'Por favor, ingresa un nombre válido sin números ni símbolos.'
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return Swal.fire({
      icon: 'warning',
      title: 'Correo inválido',
      text: 'Por favor, ingresa un correo electrónico válido.',

      color: '#561D46',
      iconColor: '#561D46',
      confirmButtonColor: '#561D46',
    });
  }

  if (message === "") {
    return Swal.fire({
      icon: 'warning',
      title: 'Mensaje vacío',
      text: 'Por favor, escribe un mensaje antes de enviarlo.',

      color: '#561D46',
      iconColor: '#561D46',
      confirmButtonColor: '#561D46',
    });
  }
  emailjs.init("A9RaeIzpCudXoXB3m");

  emailjs.sendForm("service_qxgtp6c", "template_un62n8p", this)
    .then(function () {
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        text: 'Gracias por contactarme, te responderé pronto.',

        color: '#561D46',
        iconColor: '#561D46',
        confirmButtonColor: '#561D46',
      });
      document.getElementById("contact-form").reset();
      document.getElementById("about-me").scrollIntoView({ behavior: "smooth" });
    }, function (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al enviar el mensaje. Intenta más tarde.',

        color: '#561D46',
        iconColor: '#561D46',
        confirmButtonColor: '#561D46',
      });
      console.error('EmailJS Error:', error);
    });
});

document.getElementById("goToAbout").addEventListener("click", function (e) {
  e.preventDefault(); // Previene el salto inmediato
  const target = document.getElementById("about-me");
  target.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("btn-participaciones").addEventListener("click", function () {
  Swal.fire({
    title: 'Participaciones destacadas',
    html: `
        <p>Este proyecto fue desarrollado durante mi formación universitaria y presentado en diversos eventos académicos y científicos, destacando su impacto y valor investigativo.</p>
        <ul style="text-align: left;">
          <li><strong>FONAGE 2022</strong></li>
          <li><strong>Concurso de Carteles Científicos y Tecnológicos en el Congreso Internacional de Tecnología e Innovación Veracruz 2022.</strong></li>
          <li><strong>VII Congreso IDI-UNICyT 2022:</strong> Universidad Internacional de Ciencia y Tecnología.</li>
          <li><strong>Artículo:</strong> "Diagnóstico de competencias digitales docentes…" en <em>Creatividad e Innovación en Educación</em> (Vol. 2, Núm. 1, 2023).</li>
          <li><strong>Artículo:</strong> “Desarrollo de herramienta web…” en <em>RINDERESU</em> (Vol. 7, Núms. 1 y 2, 2022).</li>
          <li><strong>Artículo:</strong> Publicado en la revista indexada <em>Ingeniantes</em> (Año 9, No. 2, Vol. 3).</li>
        </ul>
      `,
    confirmButtonText: 'Cerrar',
    confirmButtonColor: '#ca535f'
  });
});