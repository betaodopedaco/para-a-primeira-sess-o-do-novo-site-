// Inicializar partículas
particlesJS('particles-js', {
    particles: {
        number: { value: 120, density: { enable: true, value_area: 800 } },
        color: { value: "#00f5ff" },
        shape: { type: "circle" },
        opacity: { value: 0.1, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00a8ff",
            opacity: 0.05,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out"
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        }
    },
    retina_detect: true
});

// Criar múltiplas instâncias de partículas
['particles-js-2', 'particles-js-3', 'particles-js-4'].forEach(id => {
    particlesJS(id, {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.05, random: true },
            size: { value: 2, random: true },
            line_linked: {
                enable: true,
                distance: 200,
                color: "#ffffff",
                opacity: 0.03,
                width: 1
            },
            move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out"
            }
        }
    });
});

// Criar diamantes flutuantes
function createDiamonds(containerId, count) {
    const container = document.getElementById(containerId);
    for (let i = 0; i < count; i++) {
        const diamond = document.createElement('div');
        diamond.classList.add('diamond');
        diamond.style.left = `${Math.random() * 100}%`;
        diamond.style.animationDelay = `${Math.random() * 15}s`;
        container.appendChild(diamond);
    }
}

createDiamonds('diamonds-1', 15);
createDiamonds('diamonds-2', 12);
createDiamonds('diamonds-3', 18);
createDiamonds('diamonds-4', 10);

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
