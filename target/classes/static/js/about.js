// About Section Interactivity
document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector('.about-section');
  
  if (aboutSection) {
    // Add animation to feature items
    const featureItems = aboutSection.querySelectorAll('.feature-item');
    
    featureItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    });
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          featureItems.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          });
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(aboutSection);
    
    // Image hover effect
    const imageWrapper = aboutSection.querySelector('.image-wrapper');
    if (imageWrapper) {
      imageWrapper.addEventListener('mouseenter', () => {
        const img = imageWrapper.querySelector('img');
        img.style.transform = 'scale(1.05)';
      });
      
      imageWrapper.addEventListener('mouseleave', () => {
        const img = imageWrapper.querySelector('img');
        img.style.transform = 'scale(1)';
      });
    }
  }
});