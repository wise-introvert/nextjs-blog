module.exports = {
  purge: ["pages/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        "1.1": "1.1em",
      },
    },
    fontFamily: {
      sans: "Raleway",
      serif: "'Playfair Display'",
      mono: "'Roboto Mono'",
      logo: "'Abril Fatface'"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
