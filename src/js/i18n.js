const locale = localStorage.getItem('LOCALE') || 'ro';

import ro from '../locales/ro.js';
import ru from '../locales/ru.js';
import en from '../locales/en.js';

const _locales = ['ro', 'ru', 'en'];
const trans = { ro, ru, en };

function getValue(obj, path) {
  const keys = path.split('.');
  let current = obj;
  for (const key of keys) {
    if (current[key] !== undefined) {
      current = current[key];
    } else {
      return undefined;
    }
  }
  return current;
}

function initLocale(lng) {
  _locales.map((local) => {
    if (local === lng) {
      document
        .querySelectorAll(`#${local}`)
        .forEach((l) => l.classList.add('bg-base-200'));
    } else {
      document
        .querySelectorAll(`#${local}`)
        .forEach((l) => l.classList.remove('bg-base-200'));
    }
  });

  document.querySelectorAll('[i18K-input]').forEach((element) => {
    const value = getValue(trans[lng], element.getAttribute('i18K-input'));
    element.setAttribute('placeholder', value);
  });

  document.querySelectorAll('[i18K]').forEach((element) => {
    const value = getValue(trans[lng], element.getAttribute('i18K'));
    element.innerHTML = value;
  });
}

document.addEventListener('DOMContentLoaded', () => initLocale(locale));

document.querySelectorAll('#ro').forEach((lng) =>
  lng.addEventListener('click', () => {
    localStorage.setItem('LOCALE', 'ro');
    initLocale('ro');
  })
);

document.querySelectorAll('#ru').forEach((lng) =>
  lng.addEventListener('click', () => {
    localStorage.setItem('LOCALE', 'ru');
    initLocale('ru');
  })
);

document.querySelectorAll('#en').forEach((lng) =>
  lng.addEventListener('click', () => {
    localStorage.setItem('LOCALE', 'en');
    initLocale('en');
  })
);
