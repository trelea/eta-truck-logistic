const main = document.querySelector('#__main');
const div1 = document.createElement('div');
div1.setAttribute('data-aos', 'fade-up');
div1.setAttribute(
  'class',
  'fixed z-30 bottom-6 right-6 bg-info p-2 rounded-full animate-bounce hover:bg-opacity-75'
);
div1.setAttribute('open_socials', 'true');
div1.innerHTML = `<svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-earth size-10 text-white"
        >
          <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
          <path
            d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"
          />
          <path
            d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"
          />
          <circle cx="12" cy="12" r="10" />
        </svg>`;
main.appendChild(div1);
