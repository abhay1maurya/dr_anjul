// FOOTER INTERACTIVITY
document.addEventListener("DOMContentLoaded", () => {
  // Back to top button functionality
  const backToTopBtn = document.querySelector('.back-to-top');
  
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('.newsletter-input');
      const email = emailInput.value.trim();
      
      if (email) {
        // In a real implementation, you would send this to your backend
        console.log('Subscribed email:', email);
        
        // Show success message
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
      }
    });
  }
  
  // Track social media clicks
  const socialLinks = document.querySelectorAll('.social-link');
  
  socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const platform = link.classList.contains('youtube') ? 'YouTube' :
                      link.classList.contains('facebook') ? 'Facebook' :
                      link.classList.contains('instagram') ? 'Instagram' :
                      link.classList.contains('twitter') ? 'Twitter' : 'Social';
      
      // In a real implementation, you would send this to analytics
      console.log(`Clicked ${platform} link`);
      // ga('send', 'event', 'Social', 'click', platform);
    });
  });
});