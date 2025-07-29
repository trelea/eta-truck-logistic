document.querySelector("#__open__menu").onclick = function () {
  const _mini_nav = document.querySelector("[_mini_nav]");
  _mini_nav.classList.remove("hidden");
  _mini_nav.classList.add("flex");
};

document.querySelector("[_close_mini_nav]").onclick = function () {
  const _mini_nav = document.querySelector("[_mini_nav]");
  _mini_nav.classList.remove("flex");
  _mini_nav.classList.add("hidden");
};

document.querySelector("[_scroll_top]").onclick = function () {
  window.scrollTo(0, 0);
};

let socials = false;
document.querySelector("[open_socials]").onclick = function () {
  if (!socials) {
    document.querySelector("[socials]").classList.remove("hidden");
    document.querySelector("[socials]").classList.add("flex");
  }

  if (socials) {
    document.querySelector("[socials]").classList.remove("flex");
    document.querySelector("[socials]").classList.add("hidden");
  }

  socials = !socials;
};
