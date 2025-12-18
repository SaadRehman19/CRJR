/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        'brand-green': '#10B981',
        'brand-dark': '#0A0A0A',
        'brand-gray': '#1A1A1A',
      },
    },
  },
  plugins: [],
}

