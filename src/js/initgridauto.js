const grid = document.querySelector('[grid]');

(async function () {
  const data = await fetch('./js/Auto.json');
  const json = await data.json();
  return json.imgs;
})().then((imgs) => {
  grid.innerHTML = imgs
    .map((i, _) => {
      return `<div
            data-aos="fade-down"
            data-aos-delay="${_ % 2 === 0 ? '250' : '500'}"
            grid_img="${_ + 1}"
            class="p-1 border border-base-300/25 rounded-2xl bg-base-300/10 shadow-xl shadow-neutral/50 h-fit"
          >
            <img
              src="./assets/auto/${i}"
              alt="${i}"
              loading="lazy"
              class="aspect-square object-contain h-full w-full sm:h-96 sm:w-96 md:h-80 md:w-80 lg:h-72 lg:w-72 2xl:h-80 2xl:w-80 rounded-xl"
            />
          </div>`;
    })
    .join('');
});
