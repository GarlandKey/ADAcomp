/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js}',

  ],
  theme: {
    colors: {
      'bg-dark': '#2E2E2E',
      'bg-darker': '#171717',
      'bg-darkest': '#000000',
      'bg-light': '#454545',
      'bg-lighter': '#737373',
      'bg-lightest': '#FFFFFF',
      'fg-dark': '#2E2E2E',
      'fg-darker': '#171717',
      'fg-darkest': '#000000',
      'fg-light': '#454545',
      'fg-lighter': '#737373',
      'fg-lightest': '#FFFFFF',
      'fg-highlight-azure': '#088FFA',
      'fg-highlight-perrywinkle': '#666BC8',
      'fg-highlight-deeplavender': '#905FB8',
    },
    fontFamily: {
      'header': ['Archivo Black', 'sans-serif'],
      'primary': ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
