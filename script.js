// Navigasi Mobile (Hamburger Menu)
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Tutup menu saat link diklik (untuk mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Animasi Sederhana saat Scroll (Fade In)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Menerapkan efek pada section
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Penanganan Gambar Gagal Dimuat
document.querySelectorAll('img').forEach(img => {
    img.onerror = function() {
        this.src = 'https://via.placeholder.com/400x300?text=Gambar+Belum+Ada';
        this.style.background = '#ccc';
    };
});