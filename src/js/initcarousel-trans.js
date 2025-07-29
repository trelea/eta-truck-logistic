const slides = document.querySelector("[slides]");

(async function () {
  const data = await fetch("./js/Auto.json");
  const json = await data.json();
  return json.imgs;
})().then((imgs) => {
  slides.innerHTML = imgs
    .map((i, _) => {
      return `<div
              class="swiper-slide w-full flex justify-center items-center h-fit py-20 px-10"
            >
              <img
                src="./assets/auto/${i}"
                alt=""
                srcset=""
                class="rounded-xl h-full object-contain object-center"
                loading="lazy"
              />
            </div>`;
    })
    .join("");
});
