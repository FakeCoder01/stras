/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          "gotham-pro": "'Gotham Pro'",
          etna: "Etna",
          inter: "Inter",
        },
      },
      colors: {
        gray: {
          "100": "#f2f2f2",
          "200": "#ebebeb",
          "300": "#878787",
          "400": "#494949",
        },
        black: "#000",
        tan: "#f9a686",
        white: "#fff",
        green: "#24c564",
        brown: "#fb6e66",
      },
      fontSize: { "2xs": "8px", xs: "12px", sm: "14px", base: "18px" },
    },
    corePlugins: { preflight: false },
  };
  