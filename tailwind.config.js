/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('@tailwindcss/aspect-ratio')],

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
            letterSpacing: '1.5',
          },
        ],
        lg: [
          '18px',
          {
            letterSpacing: '1.6',
          },
        ],
        xl: [
          '20px',
          {
            letterSpacing: '1.5',
          },
        ],

        '2xl': [
          '24px',
          {
            letterSpacing: '1.5',
          },
        ],

        '3xl': [
          '30px',
          {
            letterSpacing: '0px',
          },
        ],

        '4xl': [
          '40px',
          {
            letterSpacing: '1.5',
          },
        ],

        '6xl': [
          '60px',
          {
            letterSpacing: '-1.75px',
          },
        ],
      },

      colors: {
        primary: {
          base: '#FFC059',
          500: '#9f660a',
          600: '#7e591b',
          700: '#724c0c',
        },
        secondary: '#353448',
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
        link: '#3074d9',
      },
    },
  },
};
