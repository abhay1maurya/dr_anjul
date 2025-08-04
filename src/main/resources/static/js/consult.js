// Consultancy Section Animation
document.addEventListener("DOMContentLoaded", () => {
  const consultancySection = document.querySelector('.consultancy-section');
  
  if (consultancySection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Image hover effect
          const imageWrapper = entry.target.querySelector('.image-wrapper img');
          if (imageWrapper) {
            imageWrapper.style.transform = 'scale(1.03)';
            setTimeout(() => {
              imageWrapper.style.transform = 'scale(1)';
            }, 500);
          }
          
          // Animate feature items one by one
          const featureItems = entry.target.querySelectorAll('.feature-item');
          featureItems.forEach((item, index) => {
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, index * 150);
          });
        }
      });
    }, { threshold: 0.2 });
    
    observer.observe(consultancySection);
    
    // Initialize feature items for animation
    const featureItems = consultancySection.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
  }
});