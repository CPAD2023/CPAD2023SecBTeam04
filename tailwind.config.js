/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./app/components/**/*.{js,jsx,ts,tsx}",
    "./app/components/cards/**/*.{js,jsx,ts,tsx}",
    "./app/components/screens/**/*.{js,jsx,ts,tsx}",
    "./app/components/lists/**/*.{js,jsx,ts,tsx}",
    "./app/components/common/**/*.{js,jsx,ts,tsx}",
    "./app/components/navigation/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

