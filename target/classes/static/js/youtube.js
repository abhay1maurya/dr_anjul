// YouTube Section Carousel Functionality
document.addEventListener("DOMContentLoaded", () => {
  const youtubeSection = document.querySelector('.youtube-section');
  
  if (youtubeSection) {
    const track = youtubeSection.querySelector('.video-track');
    const prevBtn = youtubeSection.querySelector('.carousel-nav.prev');
    const nextBtn = youtubeSection.querySelector('.carousel-nav.next');
    const videos = youtubeSection.querySelectorAll('.video-card');
    
    // Set initial active state
    let currentIndex = 0;
    updateNavButtons();
    
    // Navigation functions
    function scrollToVideo(index) {
      const video = videos[index];
      track.scrollTo({
        left: video.offsetLeft - track.offsetLeft,
        behavior: 'smooth'
      });
      currentIndex = index;
      updateNavButtons();
    }
    
    function updateNavButtons() {
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === videos.length - 1;
    }
    
    // Button event listeners
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        scrollToVideo(currentIndex - 1);
      }
    });
    
    nextBtn.addEventListener('click', () => {
      if (currentIndex < videos.length - 1) {
        scrollToVideo(currentIndex + 1);
      }
    });
    
    // Track scroll events
    track.addEventListener('scroll', () => {
      const scrollPos = track.scrollLeft + track.offsetWidth / 2;
      
      videos.forEach((video, index) => {
        const videoStart = video.offsetLeft;
        const videoEnd = videoStart + video.offsetWidth;
        
        if (scrollPos >= videoStart && scrollPos < videoEnd) {
          currentIndex = index;
          updateNavButtons();
        }
      });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        scrollToVideo(currentIndex - 1);
      } else if (e.key === 'ArrowRight' && currentIndex < videos.length - 1) {
        scrollToVideo(currentIndex + 1);
      }
    });
    
    // Lazy load iframes when visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const iframe = entry.target.querySelector('iframe');
          if (iframe && !iframe.src.includes('autoplay')) {
            iframe.src = iframe.src + '&autoplay=0';
          }
        }
      });
    }, { threshold: 0.1 });
    
    videos.forEach(video => observer.observe(video));
  }
});