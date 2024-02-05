/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        brand: '#064645',
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
