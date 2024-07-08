/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      letterSpacing: {
        "-6%": "-0.06em", // 1% = 0.01em, so -6% = -0.06em
      },
    },
  },
  plugins: [],
};
