/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#28784c",
      },
      backgroundImage: {
        skeleton:
          "linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0))",
      },
      boxShadow: {
        dbWidget: "0 3px 5px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
