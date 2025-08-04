// EVENTS SECTION INTERACTIVITY
document.addEventListener("DOMContentLoaded", () => {
  const eventsSection = document.querySelector('.events-section');
  
  if (eventsSection) {
    // Toggle event details
    const infoButtons = eventsSection.querySelectorAll('.btn-more-info');
    infoButtons.forEach(button => {
      button.addEventListener('click', () => {
        const eventCard = button.closest('.event-card');
        const details = eventCard.querySelector('.event-details');
        const icon = button.querySelector('svg');
        
        details.classList.toggle('active');
        button.setAttribute('aria-expanded', details.classList.contains('active'));
        
        // Rotate icon
        if (details.classList.contains('active')) {
          icon.style.transform = 'rotate(180deg)';
          button.querySelector('span').textContent = 'Less Details';
        } else {
          icon.style.transform = 'rotate(0deg)';
          button.querySelector('span').textContent = 'Details';
        }
      });
    });
    
    // Load more events functionality
    const loadMoreBtn = eventsSection.querySelector('#load-more-events');
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', () => {
        // In a real implementation, this would fetch more events from an API
        // Here's a simulated new event
        const eventsGrid = eventsSection.querySelector('.events-grid');
        const newEvent = document.createElement('div');
        newEvent.className = 'event-card';
        newEvent.innerHTML = `
          <div class="event-date">
            <span class="date-day">05</span>
            <span class="date-month">Jun</span>
          </div>
          <div class="event-content">
            <h3>Health Workshop</h3>
            <div class="event-meta">
              <span class="location">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Dr. Anjul's Clinic
              </span>
              <span class="event-type">In-Person</span>
            </div>
            <p class="event-excerpt">Interactive workshop on holistic approaches to mental and physical health.</p>
            <div class="event-actions">
              <button class="btn-register">Register Now</button>
              <button class="btn-more-info">
                <span>Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
                </svg>
              </button>
            </div>
            <div class="event-details">
              <div class="details-content">
                <h4>Workshop Details</h4>
                <ul>
                  <li><strong>Time:</strong> 2:00 PM - 5:00 PM</li>
                  <li><strong>Topics:</strong> Stress reduction, Sleep improvement, Digestive health</li>
                  <li><strong>Fee:</strong> ₹500 (includes materials)</li>
                </ul>
                <p>Limited seats available. Includes practical demonstrations and Q&A session.</p>
              </div>
            </div>
          </div>
        `;
        
        eventsGrid.appendChild(newEvent);
        
        // Add click handler to new info button
        const newInfoBtn = newEvent.querySelector('.btn-more-info');
        newInfoBtn.addEventListener('click', () => {
          const details = newEvent.querySelector('.event-details');
          const icon = newInfoBtn.querySelector('svg');
          
          details.classList.toggle('active');
          newInfoBtn.setAttribute('aria-expanded', details.classList.contains('active'));
          
          if (details.classList.contains('active')) {
            icon.style.transform = 'rotate(180deg)';
            newInfoBtn.querySelector('span').textContent = 'Less Details';
          } else {
            icon.style.transform = 'rotate(0deg)';
            newInfoBtn.querySelector('span').textContent = 'Details';
          }
        });
        
        // Disable button after loading (in real app, might want to keep loading if more exist)
        loadMoreBtn.disabled = true;
        loadMoreBtn.innerHTML = '<span>No More Events</span>';
      });
    }
  }
});