/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        
        'himu': "Himu",
        'solaiman': "Solaiman",
        'anta': ['Anta']
        
      }
    },
  },
  plugins: [],
}

