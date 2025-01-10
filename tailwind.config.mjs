/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        "3xl": "1720px",
        // => @media (min-width: 1536px) { ... }
      },
      container: {
        center: true,
        padding: "24px",
      },
      colors: {
        primary: "#6938ef",
        coated: "#303132",
        blackknight: "#021416",
        ibiswing: "#F38987",
        pinkping: "#F16BE2",
        milkyway: "#E4F2F6",
        indigowhite: "#EEF5F8",
        luminescentblue: "#A5DDE8",
        cynicalblack: "#171717",
        lightblue: "#E5F2F6",
        "dark-orange": "#bf2a00",
        "dark-thick": "#03091e",
        "light-white": "#e6dafd",
        blue: {
          600: "#2d254d",
          700: "#161228",
          800: "#283a5e",
          900: "#18294c",
        },
      },
      lineHeight: {
        125: "125%",
        150: "150%",
      },
      fontSize: {
        "custom-sm": "12px",
      },
      boxShadow: {
        "custom-xl": "inset 4px 2px 34px #c3c3c3",
        "modern": "0px 2px 120px 0px #292342 inset",
      }
    },
  },
  plugins: [],
};
