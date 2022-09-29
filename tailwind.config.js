/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1600px',
      '4xl': '1920px',
    },
    extend: {
      fontFamily: {
        primary: 'DM Sans, sans-serif',
      },

      fontSize: {
        base: [
          '16px',
          {
            letterSpacing: '1.45px',
          },
        ],
      },

      colors: {
        primary: {
          base: '#FFC059',
        },
        bodytxt: {
          base: '#343D48', // body color and primary color
          secondary: '#02073E',
        },
        background: {
          base: '#FFFFFF', // body background color
          secondary: '#F9FBFD', // secondary background color
        },
        heading: {
          base: '#0F2137', // primary heading color
        },
      },
    },
  },
  plugins: [],
};
