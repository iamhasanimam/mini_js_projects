let swiper;

function initSwiper() {
  // Check if Swiper is already initialized
  if (!swiper) {
    swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 40,
      loop: true, // Enables continuous loop mode
      autoplay: {
        delay:1000/2 , // Adjust the delay as needed (500ms)
        disableOnInteraction: true, // Ensures autoplay continues smoothly even after interaction
      },
    });

    // Pause autoplay on hover and resume on mouseleave
    swiper.el.addEventListener('mouseenter', () => swiper.autoplay.stop());
    swiper.el.addEventListener('mouseover', () => swiper.autoplay.stop());
    swiper.el.addEventListener('mouseleave', () => swiper.autoplay.start());
  }
}

// Initialize Swiper when the page is ready
document.addEventListener('DOMContentLoaded', initSwiper);
