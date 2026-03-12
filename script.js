function toggleMenu() {
    const nav = document.getElementById('mainNav');
    const btn = document.querySelector('.mobile-menu-btn');
    
    // Solo funciona en dispositivos móviles
    if (window.innerWidth <= 768) {
        nav.classList.toggle('active');
        btn.classList.toggle('open');
        
        // Evita que el fondo se mueva cuando el menú está abierto
        if (nav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
}

function toggleMenu() {
    const nav = document.getElementById('mainNav');
    const btn = document.querySelector('.mobile-menu-btn');
    
    nav.classList.toggle('active');
    btn.classList.toggle('open');

    // Bloqueo de scroll para que no se desordene la vista de fondo
    if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Cerrar menú automáticamente al hacer clic en un enlace
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById('mainNav');
        const btn = document.querySelector('.mobile-menu-btn');
        nav.classList.remove('active');
        btn.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
});