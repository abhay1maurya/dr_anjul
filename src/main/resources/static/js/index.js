console.log('Main index.js loaded');

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-links a');

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

// Hide menu on any nav link click
navItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  });

