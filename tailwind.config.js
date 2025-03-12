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
        'font-color':'#767582',
      },
    },
  },
  plugins: [require('daisyui'),],

};


