// Add shrink effect on scroll
window.addEventListener('scroll', function() {
  const strip = document.getElementById('top-strip');
  if (window.scrollY > 50) {
    strip.classList.add('shrink');
  } else {
    strip.classList.remove('shrink');
  }
});
// script.js

// Shrink header on scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});
// Initialize AOS library
AOS.init({
  duration: 800,
  once: true,
});
AOS.init({
  duration: 1000,
  once: true,
});
