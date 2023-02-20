/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'c-red': 'hsl(0, 100%, 74%)',
        'c-green': 'hsl(154, 59%, 51%)',
        'c-green-light': 'hsl(154, 79%, 71%)',
        'c-blue': 'hsl(248, 32%, 49%)',
        'c-dark-blue': 'hsl(249, 10%, 26%)',
        'c-grayish-blue': 'hsl(246, 25%, 77%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        mobile: "url('/src/assets/bg-intro-mobile.png')",
        desktop: "url('/src/assets/bg-intro-desktop.png')",
      },
    },
    screens: {
      desk: '375px',
    },
  },
  plugins: [],
};
