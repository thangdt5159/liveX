/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // fontFamily: {
    //   display: ['"CalSans-SemiBold"', "sans-serif"],
    //   body: ['"DM Sans"', "sans-serif"],
    // },
    extend: {
      keyframes: {
        bouncing: {
          "0%": { left: "-100%" },
          "50%": { left: "100%" },
          "100%": { left: "-100%" },
        },
      },
      animation: {
        bounceLeft: "bouncing 5s linear infinite",
      },
    },
  },
  plugins: [],
};
