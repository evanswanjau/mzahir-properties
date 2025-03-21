/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Assistant", "sans-serif"],
        heading: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
