/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src//*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#B33766",
        "secondary": {
          dark: "#171719",
          grey: "#F5F4F4",
          greyDark: "#282227",
          lightgreyDark:"#3C3C43",
          blue:"#EAEAFA",
          pink:"#FCE7F3",
          back:"#EADFE3",
          backDark:"#1C171A"
        }
      },
      fontFamily: {
        body: ["Montserrat"]
      },
      fontSize: {
        "xs": "1rem",
        "sm": "1.2rem",
        "xl": "3rem",
      },
      spacing: {
        128: "32rem",
        144: "36rem"
      },
    margin: {
      "mediumWrapper": "8rem",

    },
    padding: {
      "mediumWrapper": "8rem",

    },

    },
    },


  plugins: [],
  darkMode: "class",
}
