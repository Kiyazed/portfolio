/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#1b1b1b', // Replace with your background color
        primary: '#00BFFF', // Accent color for text and buttons
        lightGray: '#333333', // Color for inactive buttons
      },
    },
  },
  plugins: [],
}
