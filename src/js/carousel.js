let swiper = new Swiper('.swiper', {
  initialSlide: 0,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const _open = setInterval(() => {
  if (document.querySelector('[grid_img]')) {
    clearInterval(_open);
    openCarousel();
  }
}, 1);

function openCarousel() {
  document.querySelectorAll('[grid_img]').forEach((img) =>
    img.addEventListener('click', () => {
      // const slide = Number(img.attributes.getNamedItem('key').value);
      document.body.classList.add('overflow-hidden');
      document.querySelector('[carousel]').classList.remove('hidden');
      document
        .querySelector('.swiper')
        .swiper.slideTo(Number(img.attributes.getNamedItem('key').value));
    })
  );
}

document.querySelector('[close_carousel]').addEventListener('click', () => {
  document.querySelector('[carousel]').classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
});
