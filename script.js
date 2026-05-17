// script.js – JavaScript murni tanpa library

// Fungsi: smooth scroll ke section
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth"
    });
  }
}

// Event: klik pada link navbar yang mengarah ke id section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      smoothScroll(href);
    }
  });
});

// Hamburger menu (mobile)
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Animasi sederhana saat muncul section (scroll)
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("section-visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Ambil semua section utama landing page dan amati
document.querySelectorAll(".section").forEach(section => {
  // Awalnya tidak visible
  section.style.opacity = 0;
  section.style.transform = "translateY(20px)";
  section.style.transition = "opacity 0.5s ease, transform 0.5s ease";

  observer.observe(section);
});

// Tambah kelas CSS jika ingin efek berbeda:
// di CSS, bisa tambahkan: .section-visible { opacity: 1; transform: translateY(0); }

// Penanganan gambar gagal dimuat (fallback visual sederhana)
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("error", () => {
    img.style.backgroundColor = "#ccc";
  });
});
