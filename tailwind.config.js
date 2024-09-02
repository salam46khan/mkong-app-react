/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mySky: "#2496C8",
        myYellow: "#EFEC23",
        myGreen: "#A2C535"
      },
      fontFamily: {
        NormalText: ["Plus Jakarta Sans", "system-ui"],
        TitleText: [ "Karantina", "system-ui"],
        LogoText: ["Jockey One", "system-ui"]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

