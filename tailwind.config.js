/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myYellow: "#F4D04E",
      },
      boxShadow: {
        cardShadow: "9px 9px 0 0 #000000",
      },
      fontFamily: {
        Figtree: ["Figtree, serif"],
      },
    },
  },
  plugins: [],
};
