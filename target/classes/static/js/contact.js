// CONTACT SECTION INTERACTIVITY
document.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.querySelector('.contact-section');
  
  if (contactSection) {
    const socialCards = contactSection.querySelectorAll('.social-card');
    
    // Add click animation to social cards
    socialCards.forEach(card => {
      card.addEventListener('click', (e) => {
        // Only animate if it's a left click (ignore middle/right clicks)
        if (e.button === 0) {
          card.classList.add('clicked');
          setTimeout(() => {
            card.classList.remove('clicked');
          }, 300);
        }
      });
      
      // Platform-specific hover effects
      card.addEventListener('mouseenter', () => {
        const platform = card.dataset.platform;
        console.log(`Hovering over ${platform} card`);
        // You could add platform-specific animations here
      });
    });
    
    // Track outbound links
    const trackOutboundLink = (url) => {
      // In a real implementation, you would send this to analytics
      console.log('Outbound link clicked:', url);
      // ga('send', 'event', 'outbound', 'click', url);
    };
    
    document.querySelectorAll('.social-platforms a').forEach(link => {
      link.addEventListener('click', (e) => {
        trackOutboundLink(e.currentTarget.href);
      });
    });
    
    // Add animation to email button on hover
    const emailCard = contactSection.querySelector('.email');
    if (emailCard) {
      emailCard.addEventListener('mouseenter', () => {
        const icon = emailCard.querySelector('.social-icon i');
        icon.classList.add('fa-shake');
      });
      
      emailCard.addEventListener('mouseleave', () => {
        const icon = emailCard.querySelector('.social-icon i');
        icon.classList.remove('fa-shake');
      });
    }
  }
});