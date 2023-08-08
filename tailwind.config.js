/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     fontFamily:{
      "inter":['Inter', 'sans-serif']
     },
     screens:{
      'lg':'922px',
      'xl':'1200px',
      '2xl':'1440px',
      'md':'728px',
      'sm':'480px'
     }
    },
  },
  plugins: [],
}
