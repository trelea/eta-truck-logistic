const swiper = document.querySelector("[swiper]");

(async function () {
  const data = await fetch("./js/Gallery.json");
  const json = await data.json();
  return json.imgs;
})().then((imgs) => {
  swiper.innerHTML = imgs
    .map((i) => {
      return `<div class="swiper-slide h-full flex justify-center items-center sm:pt-20 md:pt-32"><div class="justify-center items-center flex h-full p-12 md:p-16 lg:p-10"><img src="./assets/gallery/${i}" alt="${i}" loading="lazy" srcset="" class="h-full object-contain object-center rounded-xl" /></div></div>`;
    })
    .join("");
});
