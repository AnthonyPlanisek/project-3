module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        colors: {
        primary: "#B2EBCB",
        secondary: "#2E8B57"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
