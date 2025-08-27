// Animação ao rolar
function animateOnScroll() {
    const elements = document.querySelectorAll('.section-title, .section-text, .process-step, .highlight');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementHeight = element.offsetHeight;
        
        if (elementTop < windowHeight - (elementHeight * 0.5)) {
            element.classList.add('visible');
        }
    });
}

// Ajustar dinamicamente a altura dos containers
function adjustContainerHeights() {
    document.querySelectorAll('.parallax-container').forEach(container => {
        const contentHeight = container.querySelector('.content-wrapper').offsetHeight;
        const minHeight = Math.max(window.innerHeight, contentHeight + 200);
        container.style.minHeight = `${minHeight}px`;
    });
}

// Garantir que todas as seções sejam visíveis
function ensureVisibility() {
    const sections = document.querySelectorAll('.parallax-container');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.style.opacity = 1;
        }
    });
}

// Efeito parallax
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const containers = document.querySelectorAll('.parallax-container');
    
    containers.forEach((container, index) => {
        const speed = 0.3 + (index * 0.1);
        container.style.backgroundPosition = `center ${-scrollY * speed}px`;
    });
    
    animateOnScroll();
});

// Inicializar
window.addEventListener('load', () => {
    animateOnScroll();
    adjustContainerHeights();
    ensureVisibility();
});

// Ajustar ao redimensionar
window.addEventListener('resize', () => {
    adjustContainerHeights();
    animateOnScroll();
});
