import env from "./consts.js";
(function () {
  emailjs.init({
    publicKey: env.EMAIL_JS_PUB_KEY,
  });
})();

window.onload = function () {
  document
    .getElementById("__contact__form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const form = Object.fromEntries(new FormData(e.target).entries());
      emailjs
        .send(env.EMAIL_JS_SERVICE_ID, env.EMAIL_JS_TEMPLATE_ID, form)
        .then(
          () => {
            console.log("SUCCESS!");
            e.target.reset();
          },
          (error) => {
            console.log("FAILED...", error);
            alert(error);
          }
        );
    });
};
