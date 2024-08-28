/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007F73",
        secondary: "#E72929",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Add this line
      },
    },
  },
  plugins: [require("daisyui")],
};
