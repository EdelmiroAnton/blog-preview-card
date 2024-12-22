/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myYellow: "#F4D04E",
      },
    },
  },
  plugins: [],
};
