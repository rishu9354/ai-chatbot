
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 🔥 Important!
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}