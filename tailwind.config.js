/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: '375px',
      tablet: '768px',
      desktop: '1440px',
    },
    colors:{
      red: "#F87070",
      cyan: "#70F3F8",
      purple: "#D881F8",
      grey: "#D7E0FF",
      silver: "#EFF1FA",
      blue: "#1E213F",
      "dark-blue": "#161932"
    },
    fontFamily: {
      Kumbhslight: ["KumbhsLight"], 
      KumbhsBold: ["KumbhsBold"],
      RobotoRegular: ["RobotoRegular"],
      RobotoBold: ["RobotoBold"],
      SpaceRegular: ["SpaceRegular"],
      SpaceBold: ["SpaceBold"],
    },
    fontSize: {
        'body-1': ['13px', {lineHeight: '16px', letterSpacing: "5px"}],
        'body-2': ['14px', {lineHeight: '18px'}],
        xs: [
          '12px',
          {
            lineHeight: '14px',
          },
        ],
        base: [
          '16px',
          {
            lineHeight: '19px',
            letterSpacing: '15px',
          },
        ],
        lg: ['28px', {lineHeight: '34px'}],
        xl: ['100px', {lineHeight: '120px', letterSpacing: '-5px'}],
    },
    extend: {},
  },
  plugins: [],
}
