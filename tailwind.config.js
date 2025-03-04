/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  
  theme: {
    extend: {
      fontFamily: {
        circular: ["CircularStd"],
        sand: ['Quicksand'],
        sans: ["sans-serif"],
        //sans: ["'Lucida Sans'","'Lucida Sans Unicode'","'Circular Std'","sans-serif"],
      }
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide')
  ],
  corePlugins: {
    fontFamily: true,
  },
  
}
