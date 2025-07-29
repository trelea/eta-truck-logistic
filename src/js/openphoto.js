function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelectorAll(selector).length !== 0) {
      return resolve(document.querySelector(selector));
    }
    const observer = new MutationObserver((mutations) => {
      if (document.querySelectorAll(selector).length !== 0) {
        observer.disconnect();
        resolve(document.querySelectorAll(selector));
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

waitForElm("[grid_img]").then((elments) => {
  elments.forEach((element) => {
    element.onclick = function () {
      const __fs = document.querySelector("[fixed_slider]");
      __fs.classList.remove("hidden");
      __fs.classList.add("flex");

      document
        .querySelector("[fixed_slider_img]")
        .setAttribute("src", this.firstElementChild.getAttribute("src"));
    };
  });
});

document.querySelector("[close_img]").onclick = function () {
  const __fs = document.querySelector("[fixed_slider]");
  __fs.classList.remove("flex");
  __fs.classList.add("hidden");
};
