/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ['"grifterbold"', "sans-serif"],
      body: ['"grifterbold"', "sans-serif"],
      btn: ['"Poppins"', "sans-serif"],
    },
    extend: {
      backgroundImage: {
        cornerTriangle: "url('/images/cornerTriangle.png')",
        bgLava: "url('/images/bgLava.png')",
      },
      keyframes: {
        bouLeft: {
          "0%, 100%": { transform: "translateY(30px)" },
          "50%": { transform: "translateY(-100px)" },
        },
        bouRight: {
          "0%, 100%": { transform: "translateY(-30px)" },
          "50%": { transform: "translateY(100px)" },
        },
        moveBg: {
          "0%": {
            "background-size": "200% 200%",
            "background-position": "right",
            "background-color": "#D98639",
          },
          "20%": {
            "background-size": "200% 200%",
            "background-position": "right center",
            "background-color": "#D98639",
          },
          "40%": {
            "background-size": "200% 200%",
            "background-position": "left",
            "background-color": "#FF3D00",
          },
          "60%": {
            "background-size": "200% 200%",
            "background-position": "left",
            "background-color": "#FF3D00",
          },
          "80%": {
            "background-size": "200% 200%",
            "background-position": "right center",
            "background-color": "#D98639",
          },
          "100%": {
            "background-size": "200% 200%",
            "background-position": "right",
            "background-color": "#D98639",
          },
        },
      },
      animation: {
        bouLeft: "bouLeft 9s ease infinite",
        bouRight: "bouRight 9s ease infinite",
        moveBg: "moveBg 5s linear infinite",
      },
    },
  },
  plugins: [],
};
