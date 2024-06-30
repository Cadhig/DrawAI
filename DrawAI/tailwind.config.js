/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/@my-company/tailwind-components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "draw-blue": "#a7c6da",
        "draw-black": "#1E2216",
        "draw-hover": "#34362F",
        "draw-hover-blue": "#ABCADE"
      }
    },
  },
  plugins: [],
}

