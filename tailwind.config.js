/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b1e3b",
        secondary: "#1c416e",
        accent: "#ef4444",
        darkBlue: "#050e1d",
        midBlue: "#1a3a63",
        lightBlue: "#6495ed",
      },
      animation: {
        'gradient': 'gradient 5s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0b1e3b",
          "secondary": "#1c416e",
          "accent": "#ef4444",
          "neutral": "#191D24",
          "base-100": "#ffffff",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
} 