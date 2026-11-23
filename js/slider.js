const priceSwiper = new Swiper(".price-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: ".price-swiper .swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

const testimonialSwiper = new Swiper(".testimonial-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: ".testimonial-swiper .swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});