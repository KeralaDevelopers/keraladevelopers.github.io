/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#c2ffcf',
          100: '#94ffbb',
          200: '#57ffa2',
          300: '#14ff8e',
          400: '#09c87c',
          500: '#00a870',
          600: '#008060',
          700: '#005c4d',
          800: '#01413c',
          900: '#064645',
          950: '#003238',
        },
      },
    },
    fontFamily: {
      mono: ['JetBrainsMono', 'monospace'],
      sans: ['InterTight', 'sans-serif'],
      serif: ['Domine', 'serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
