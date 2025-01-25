/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    
  ],
  theme: {
    extend: {
       fontFamily: {
        genos: ["Genos", "serif"]
      },
      animation: {
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    
    
    },
  },
  plugins: [],
}
