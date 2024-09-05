/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        reddit: ["Reddit Sans Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
