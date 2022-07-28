/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["index.html", "typography.html"],
  theme: {
    extend: {
      container: {
        // center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        montserrat: ['"Montserrat", sans-serif'],
        roboto: ['"Roboto", sans-serif'],
      },
      colors: {
        holy: "#fafafa",
        "holy-blur": "#f2f2f2",
        dark: "#1e293b",
        "dark-scy": "#100303",
        "glass-holy-blur": "#1B2430",
        "dark-violet": "#060930",
        "dark-gray": "#F5F5F5",
        "orange-body": "#FB7813",
        "orange-button": "#FFA41B",
        "very-dark-gray": "#DDDDDD",
        "very-light-gray": "#F9F9F9",
      },
      boxShadow: {
        // "3xl": "0 -5px 10px rgba(0, 0, 0, 0.1)",
        "3xl": "0 5px 15px 0 rgb(0 0 0 / 8%)",
      },
      backgroundImage: {
        "wave-stunami-code":
          "url('../../public/images/wave-stunami-code-1.svg')",
      },
    },
  },

  // bg-pattern-intro-left-desktop
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      addComponents({
        ".bg-hover": {
          backgroundColor: "transparant",
          "&:hover": {
            backgroundColor: "hsl(0, 0%, 98%)",
            color: "hsl(270, 9%, 17%)",
          },
        },
        ".bg-md": {
          backgroundColor: "transparant",
          "&:hover": {
            backgroundColor: "hsl(270, 9%, 17%)",
            color: "hsl(0, 0%, 98%)",
          },
        },
        // ".text-hover": {
        //   color: "hsl(0, 0%, 75%)",
        //   "&:hover": {
        //     color: "hsl(180, 66%, 49%)",
        //   },
        // },
      });
    }),
  ],
};
