// Testimonial Slider
    const testimonialSlider = document.querySelector('.testimonials__slider');
    const testimonialCards = document.querySelectorAll('.testimonial__card');
    const prevBtn = document.querySelector('.slider__prev');
    const nextBtn = document.querySelector('.slider__next');
    let currentIndex = 0;
    
    function showTestimonial(index) {
        testimonialCards.forEach((card, i) => {
            card.style.display = i === index ? 'block' : 'none';
        });
    }
    
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonialCards.length - 1;
        showTestimonial(currentIndex);
    });
    
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex < testimonialCards.length - 1) ? currentIndex + 1 : 0;
        showTestimonial(currentIndex);
    });
    
    // Initialize first testimonial
    showTestimonial(currentIndex);