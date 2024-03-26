var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotete: 15,
    strech: 0,
    depth: 0,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
})