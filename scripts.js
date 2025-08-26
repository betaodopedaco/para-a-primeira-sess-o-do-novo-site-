// Scripts otimizados para Magnológica

// Parallax leve usando requestAnimationFrame
document.addEventListener('scroll', () => {
  window.requestAnimationFrame(() => {
    document.querySelectorAll('.parallax').forEach(el => {
      let scrolled = window.scrollY;
      el.style.transform = `translateY(${scrolled * 0.3}px)`;
    });
  });
});

// Equalizar altura dos cards
function equalizeCardHeights() {
  const cards = document.querySelectorAll('.valor-cards .card');
  let maxHeight = 0;
  cards.forEach(c => {
    c.style.height = 'auto';
    maxHeight = Math.max(maxHeight, c.offsetHeight);
  });
  cards.forEach(c => c.style.height = maxHeight + 'px');
}

window.addEventListener('load', equalizeCardHeights);
window.addEventListener('resize', equalizeCardHeights);

// Fade-in com IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.hero, .valor-cards .card, .site-footer').forEach(el => {
  observer.observe(el);
});
