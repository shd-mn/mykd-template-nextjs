/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./container/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1334px",
      },
    },
    extend: {
      fontFamily: {
        berlinSans: ["var(--font-berlin-sans)"],
        dmSans: ["var(--font-dm-sans)"],
      },
      colors: {
        primary: "#45f882",
        secondary: "#ffbe18",
        tertiary: "#1c242f",
        "t-gray-clr": "#ADB0BC",
        "dark-clr": "#0B0E13",

        "primary-hover": "#7444ff",
        "h-clr": " #131740",
        "t-clr": " #5A5D79",
      },
      animation: {
        "move-y": "move-y 5s ease-in-out infinite",
        "move-x": "move-x .5s ease-in-out",
        opacity: "opacity 3s ease-in-out infinite",
        opacity2: "opacity2 2.5s ease-in-out infinite",
      },
      keyframes: {
        "move-y": {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(10px)" },
        },
        "move-x": {
          "0%,50%,100%": { transform: "translateX(-10px)" },
          "25%,75%": { transform: "translateX(10px)" },
        },
        opacity: {
          "0%": { opacity: "0.1" },
          "25%,75%": { opacity: "0.3" },
          "50%,100%": { opacity: "0.2" },
        },
        opacity2: {
          "0%": { opacity: "0.1" },
          "25%,75%": { opacity: "0.3" },
          "50%,100%": { opacity: "0.2" },
        },
      },
    },
  },
  plugins: [],
};
