// Toggle Fullscreen Menu
const menuIcon = document.getElementById('menu-icon');
const fullscreenMenu = document.getElementById('fullscreen-menu');

menuIcon.addEventListener('click', () => {
    fullscreenMenu.classList.toggle('active');
    menuIcon.classList.toggle('active');
});

// Typed.js for Dynamic Taglines
document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('#dynamic-text', {
        strings: [
            '<span style="color: #ff5722;">the Flavors</span>',
            '<span style="color: #4caf50;">the Spice</span>',
            '<span style="color: #2196f3;">the Authentic Taste</span>'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        contentType: 'html' // Ensures HTML tags are rendered correctly
    });
});


// Parallax Effect for Video
window.addEventListener('scroll', () => {
    const video = document.querySelector('.hero-video');
    const scrollPosition = window.scrollY;
    video.style.transform = `translateY(${scrollPosition * 0.2}px)`;
});

// Initialize AOS
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
});

// Typed.js for Dynamic Taglines
document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('#dynamic-text', {
        strings: [
            '<span style="color: #ff5722;">the Flavors</span>',
            '<span style="color: #4caf50;">the Spice</span>',
            '<span style="color: #2196f3;">the Authentic Taste</span>'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        contentType: 'html' // Ensures HTML tags are rendered correctly
    });
});

AOS.init({
    duration: 1200,
    easing: 'ease-in-out',
    once: true,
});