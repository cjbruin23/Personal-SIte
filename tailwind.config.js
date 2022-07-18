/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/core/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'headerText': ['Chalkduster, fantasy']
    },
    extend: {},
  },
  plugins: [],
}
