/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',
      },
      screens: {
        '3xl': '1800px',
      },
      fontWeight: {
        hairline: 100,
        'extra-light': 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        'extra-bold': 800,
        black: 900,
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ff00b4',
          secondary: '#0086a2',
          accent: '#00c600',
          neutral: '#1b1b1b',
          'base-100': '#f5fefb',
          info: '#007df3',
          success: '#5ed500',
          warning: '#ff9700',
          error: '#ff567b',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
