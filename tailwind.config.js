/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    styled: true,
    // themes: [
    //   {
    //     main: {
    //       primary: '',
    //       secondary: '',
    //       accent: '',
    //       neutral: '',
    //       "base-100": '',
    //       warning: '',
    //       error: '',
    //     },
    //   },
    // ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
}
