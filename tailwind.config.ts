/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}", // Make sure to include app folder for App Router
    "./components/**/*.{ts,tsx}", // If you have a components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
