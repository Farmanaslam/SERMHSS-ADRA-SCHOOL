/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nutralBlack: "#333",
        lightPurple: "#d083cf",
        deepRed: "#af0000",
        softGreen: "#5cb85c"
      },
    },
  },
  plugins: [],
}

