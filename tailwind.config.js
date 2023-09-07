/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  themes: [
    {
      mytheme: {

      },
    },
  ],


  plugins: [require("daisyui")],
}

