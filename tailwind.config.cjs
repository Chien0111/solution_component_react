/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      'ct-primary': '#0A194E',
      'ct-secondary': '#017EFA',

      'ct-blue-100': '#E6F2FE',
      'ct-blue-200': '#B6E9FF',
      'ct-blue-300': '#51CBFF',
      'ct-blue-400': '#254BD1',
      'ct-blue-500': '#445BFF',

      'ct-purple-100': '#F3F0FF',
      'ct-purple-200': '#7659FF',
      'ct-purple-300': '#6342FF',

      'ct-green-300': '#30D987',
      'ct-green-400': '#1EC574',

      'ct-red-300': '#FF5A5A',
      'ct-red-400': '#DD405F',
      'ct-red-500': '#EF4444',
      'ct-red-600': '#FF2626',

      'ct-pink-100': '#FFEAF6',
      'ct-pink-400': '#FD1F9B',

      'ct-gray-100': '#F5F7FB',
      'ct-gray-200': '#A9ABB0',
      'ct-gray-300': '#979797',
      'ct-gray-400': '#8E8E8E',
      'ct-gray-500': '#828282',
      'ct-gray-600': '#F3F3F3',

      'ct-neutral-300': '#2A2D44',
      'ct-neutral-400': '#1C1F37',
      'ct-neutral-500': '#313131',
    },
    extend: {},
  },
  plugins: [],
}