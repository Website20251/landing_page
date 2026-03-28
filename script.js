// Slider de galería personalizado (efecto zoom central y autoplay)
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.gallery-slide');
  const track = document.querySelector('.gallery-track');
  let current = 0;
  const total = slides.length;

  function updateSlider() {
    slides.forEach((slide, idx) => {
      slide.classList.remove('active');
      if (idx === current) {
        slide.classList.add('active');
      }
    });
    // Centrar el slide activo
    const offset = (track.offsetWidth / 2) - (slides[current].offsetLeft + slides[current].offsetWidth / 2);
    track.style.transform = `translateX(${offset}px)`;
  }

  function nextSlide() {
    current = (current + 1) % total;
    updateSlider();
  }

  // Inicializar
  updateSlider();
  setInterval(nextSlide, 2000);
});
// script.js - Animaciones suaves y extras para Detalles con Amor
// Autor: [Tu Nombre]

// Animación de fade-in al hacer scroll (para secciones)
document.addEventListener('DOMContentLoaded', function() {
  const fadeEls = document.querySelectorAll('.productos, .beneficios, .galeria, .testimonios, .contacto');
  const fadeInOnScroll = () => {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.classList.add('fade-in');
      }
    });
  };
  window.addEventListener('scroll', fadeInOnScroll);
  fadeInOnScroll();
});

// Efecto de "burbujas" en todo el fondo del landing
const bubblesBg = document.querySelector('.bubbles-bg');
if (bubblesBg) {
  for (let i = 0; i < 16; i++) {
    const bubble = document.createElement('span');
    bubble.className = 'bubble';
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.animationDuration = (3 + Math.random() * 5) + 's';
    bubble.style.width = bubble.style.height = (24 + Math.random() * 32) + 'px';
    bubble.style.opacity = 0.5 + Math.random() * 0.4;
    bubblesBg.appendChild(bubble);
  }
}
