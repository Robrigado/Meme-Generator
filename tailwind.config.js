/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      "Anton": ["'Anton', sans-serif"],
      "Inter": ["'Inter', sans-serif"],
      "Karla": ["'Karla', sans-serif"]
    }
  },
  plugins: [],
}

