/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-dark": "#2D3142",
        "blue-light": "#B0D7FF",
        white: "#EAE8FF",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      sm: "640px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
}
