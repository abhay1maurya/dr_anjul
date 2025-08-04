(function() {
  const testimonialSlider = document.querySelector('.testimonials__slider');
  const testimonialCards = document.querySelectorAll('.testimonial__card');
  const prevBtn = document.querySelector('.slider__prev');
  const nextBtn = document.querySelector('.slider__next');
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonialCards.forEach((card, i) => {
      card.style.display = i === index ? 'flex' : 'none';
    });
  }

  function showNext() {
    currentIndex = (currentIndex < testimonialCards.length - 1) ? currentIndex + 1 : 0;
    showTestimonial(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonialCards.length - 1;
    showTestimonial(currentIndex);
  }

  if (prevBtn && nextBtn && testimonialCards.length) {
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);
    showTestimonial(currentIndex);
  }

  // Swipe support for mobile
  let startX = null;
  testimonialSlider && testimonialSlider.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
  });
  testimonialSlider && testimonialSlider.addEventListener('touchend', function(e) {
    if (startX === null) return;
    let endX = e.changedTouches[0].clientX;
    if (endX - startX > 40) showPrev();
    else if (startX - endX > 40) showNext();
    startX = null;
  });
})();