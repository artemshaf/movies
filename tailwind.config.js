const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/pages/**/*.{html,js,jsx,tsx}",
    "./src/app/components/**/*.{html,js,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1580px",
    },
    extend: {
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)",
        dark: "hsl(207, 26%, 17%)",
        "dark-grey": "hsl(0, 0%, 52%)",
        light: "hsl(0, 0%, 98%)",
        "grey-100": "#F1F1F1",
        "grey-200": "#EAECEE",
        "grey-300": "#D6DADE",
        "grey-400": "#A8B0B9",
        "grey-500": "#717D8A",
        "grey-600": "#4F5B67",
        "grey-700": "#373F47",
        "grey-800": "#242D35",
        "grey-900": "#0C1116",
        "primary-blue-100": "#D8D8FE",
        "primary-blue-200": "#B3B3FD",
        "primary-blue-300": "#8484F8",
        "primary-blue-400": "#6E6EF7",
        "primary-blue-500": "#4040F2",
        "primary-blue-600": "#3333D1",
        "primary-blue-700": "#2323BE",
        "primary-blue-800": "#181894",
        "primary-blue-900": "#0D0D54",
        "red-100": "#FFE8D7",
        "red-200": "#FFCCB0",
        "red-300": "#FFA988",
        "red-400": "#FF886B",
        "red-500": "#FF513A",
        "red-600": "#DB302A",
        "red-700": "#B71D23",
        "red-800": "#931222",
        "red-900": "#7A0B21",
        "green-100": "#E6FBD9",
        "green-200": "#C9F8B4",
        "green-300": "#A0EC8A",
        "green-400": "#79D969",
        "green-500": "#44C13C",
        "green-600": "#2BA52E",
        "green-700": "#1E8A29",
        "green-800": "#0F5B1D",
        "green-900": "#073E16",
        "yellow-100": "#FFF9CF",
        "yellow-200": "#FFF19F",
        "yellow-300": "#FFE86F",
        "yellow-400": "#FFDE4B",
        "yellow-500": "#FFCF0F",
        "yellow-600": "#DBAD0A",
        "yellow-700": "#B78D07",
        "yellow-800": "#7B5C03",
        "yellow-900": "#4F3903",
      },
      fontFamily: {
        sans: ["Roboto Mono", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "body-sm": [
          "12px",
          {
            lineHeight: "150%",
          },
        ],
        "body-md": [
          "14px",
          {
            lineHeight: "150%",
          },
        ],
        "body-lg": [
          "16px",
          {
            lineHeight: "150%",
          },
        ],
        "display-lg": [
          "72px",
          {
            lineHeight: "120%",
          },
        ],
        "display-md": [
          "64px",
          {
            lineHeight: "120%",
          },
        ],
        "display-sm": [
          "52px",
          {
            lineHeight: "120%",
          },
        ],
      },
      transitionDuration: {
        DEFAULT: "300ms",
        md: "300ms",
        lg: "500ms",
      },
      animation: {
        "spin-slow": "spin 9s linear infinite",
      },
    },
  },
  plugins: [],
};
