/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      white: "#FFFFFF",
      black: "#000000",
      gray: {
        lightest: "#F7F7F7",
        light: "#EEEEEE",
        mid: "#BBBBBB",
        dark: "#7E7E7E",
        darkest: "#252525",
        200: "#F5F5F5",
        300: "#EEEEEE",
        400: "#BBBBBB",
        500: "#7E7E7E",
        600: "#4C4C4C",
        700: "#313131",
        800: "#252525",
        900: "#1A1A1A",
      },
      error: "#E00000",
      warning: "#FEB429",
      success: "#33BF30",
      accent: "#007AFF",
      remix: "#9F3DA6",
      orange: "#F17726",
      notification: "#FF4D69",
      blue: {
        light: "#E6F6FF",
      },
      red: {
        light: "#FFE6E9",
      },
    },
  },
  plugins: [],
};
