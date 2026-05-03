// Generate random stars
function generateStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = window.innerWidth > 1024 ? 120 : 60;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star' + (Math.random() > 0.65 ? ' twinkle' : '');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

generateStars();

// Navigation con soporte para URLs con hash
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));

    if (sectionId === 'home') {
        document.getElementById('home-section').classList.add('active');
        document.getElementById('home-section-2').classList.add('active');
        document.getElementById('home-section-2.1').classList.add('active');
        document.getElementById('home-section-3').classList.add('active');
    } else if (sectionId === 'privacy') {
        document.getElementById('privacy-section').classList.add('active');
    } else if (sectionId === 'terms') {
        document.getElementById('terms-section').classList.add('active');
    } else if (sectionId === 'download') {
        document.getElementById('home-section-3').classList.add('active');
    }

    window.scrollTo(0, 0);
    toggleMenu(false);
    
    // Actualizar la URL sin recargar la página
    window.history.pushState(null, null, '#' + sectionId);
}

// Manejar navegación por hash en la URL
function handleHashNavigation() {
    const hash = window.location.hash.slice(1) || 'home';
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));

    if (hash === 'home') {
        document.getElementById('home-section').classList.add('active');
        document.getElementById('home-section-2').classList.add('active');
        document.getElementById('home-section-2.1').classList.add('active');
        document.getElementById('home-section-3').classList.add('active');
    } else if (hash === 'privacy') {
        document.getElementById('privacy-section').classList.add('active');
    } else if (hash === 'terms') {
        document.getElementById('terms-section').classList.add('active');
    } else if (hash === 'download') {
        document.getElementById('home-section-3').classList.add('active');
    } else {
        // Si no coincide, mostrar home por defecto
        document.getElementById('home-section').classList.add('active');
        document.getElementById('home-section-2').classList.add('active');
        document.getElementById('home-section-2.1').classList.add('active');
        document.getElementById('home-section-3').classList.add('active');
    }
}

// Llamar al cargar la página
handleHashNavigation();

// Escuchar cambios en el hash
window.addEventListener('hashchange', handleHashNavigation);

function toggleMenu(force = null) {
    const navLinks = document.getElementById('navLinks');
    if (force === false) {
        navLinks.classList.remove('active');
    } else {
        navLinks.classList.toggle('active');
    }
}

// CTA Buttons
function downloadApp() {
    document.getElementById('home-section-3').scrollIntoView({ behavior: 'smooth' });
}

function downloadAppGoogle() {
    alert('Download links will be available soon on 🤖 Google Play Store !!!');
}

function downloadAppApple() {
    alert('Download links will be available soon on  iOS App Store !!!');
}

function downloadAppApk() {
    alert('Download links will be available soon !!!');
}

function learnMore() {
    document.getElementById('home-section-2').scrollIntoView({ behavior: 'smooth' });
}

// Close menu on click outside
document.addEventListener('click', function (event) {
    const nav = document.querySelector('nav');
    if (!nav.contains(event.target)) {
        document.getElementById('navLinks').classList.remove('active');
    }
});

// Responsive adjustments
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        document.getElementById('navLinks').classList.remove('active');
    }
});
