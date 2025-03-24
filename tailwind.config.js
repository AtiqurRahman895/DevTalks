/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '5%',
        xs: '1rem',
      },
    },
    extend: {
      screens: {
        'xs': '490px',
        // 'xss': '355px',
      },
      fontFamily: {
        'manrope': ["Manrope", 'sans-serif'],
        'fugaz': ["Fugaz One", 'serif'],
      },
      colors: {
        'custom-primary': '#352cd4',
        'custom-half-primary': 'rgba(52, 44, 212, 0.3)',
        'custom-gray':'#767582',
        'custom-half-gray': 'rgba(118, 117, 130, 0.145)'
      },
    },
  },
  plugins: [require('daisyui'),],

};


