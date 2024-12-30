/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myYellow: "#F4D04E",
        myGrey: "#111111",
        myGreyParagraph: "#6B6B6B",
      },
      boxShadow: {
        cardShadow: "9px 9px 0 0 #000000",
      },
      fontFamily: {
        Figtree: ["Figtree, serif"],
      },
      dropShadow: {
        myDropShadow: "0px 3px 3px rgba(107, 107, 107, 1)",
      },
    },
  },
  plugins: [],
};
