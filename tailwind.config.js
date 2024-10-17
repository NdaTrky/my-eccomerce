import { green } from '@mui/material/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#737373",
        blue: "#23A6F0",
        green:"#23856D",
        red: "#E74040",
      },
      fontFamily: {
       montserrat: ["montserrat", "sans-serif"]
      },
  },
  plugins: [],
}
  }
