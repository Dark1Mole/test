/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "shadows-light": ["Shadows Into Light", "cursive"],
        baloo: ["Baloo-2", "cursive"],
        roboto: ["Roboto", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        'subtext' : "#343A40",
        'text': '#05060d',
        'background': '#f4f5fc',
        'primary': '#414fd4',
        'secondary': '#818bea',
        'accent': '#5b68ed',
      },
      padding: {
        navpx: "40px",
        navpy: "20px",
      },
    },
  },
  plugins: [],
};
