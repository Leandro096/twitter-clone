module.exports = {
  mode: '{jit,JIT}',
  content: [
    "./src/app/**/*.{html,ts,css,scss,sass,less} ./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
