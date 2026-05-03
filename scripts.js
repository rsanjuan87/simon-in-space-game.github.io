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

// Navigation
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
    }

    window.scrollTo(0, 0);
    toggleMenu(false);
}

showSection('home');

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
    //alert('Download links will be available soon on 🤖 Google Play Store !!!');
    //window.open('https://play.google.com/store/apps/details?id=com.santech.simoninspace', '_blank');
    document.getElementById('home-section-3').scrollIntoView({ behavior: 'smooth' });
}

function downloadAppGoogle() {
    alert('Download links will be available soon on 🤖 Google Play Store !!!');
    //window.open('https://play.google.com/store/apps/details?id=com.santech.simoninspace', '_blank');

}

function downloadAppApple() {
    alert('Download links will be available soon on  iOS App Store !!!');
    //window.open('https://apps.apple.com/app/id1234567890', '_blank');
}

function downloadAppApk() {
    alert('Download links will be available soon !!!');
    //window.open('https://example.com/simoninspace.apk', '_blank');
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
