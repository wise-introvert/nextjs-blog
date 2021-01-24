module.exports = {
  purge: ["pages/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: "Raleway",
      serif: "'Playfair Display'",
      mono: "'Roboto Mono'",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
