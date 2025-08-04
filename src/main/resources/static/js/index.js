// Enhanced Navigation Functionality
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.main-header');
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navigation = document.querySelector('.main-navigation');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Mobile Menu Toggle
  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    document.body.style.overflow = navigation.classList.contains('active') ? 'hidden' : '';
  });
  
  // Close menu when clicking on nav links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navigation.classList.contains('active')) {
        mobileToggle.classList.remove('active');
        navigation.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
  
  // Header scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navigation.contains(e.target) && !mobileToggle.contains(e.target)) {
      mobileToggle.classList.remove('active');
      navigation.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  
  // Highlight active section
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= (sectionTop - 100)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});