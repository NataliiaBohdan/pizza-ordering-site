/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      sans:"Nunito,monospace"
    },
    extend: {
      colors: {
        'brown': '#592a17',
        "yellow": "#feffd0",
        "orange":"#d88f4e"
      },
    },
  },
  plugins: [],
};
