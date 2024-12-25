/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"], // Ajoutez vos chemins ici
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
      colors: {
        yellow: 'hsl(47, 88%, 63%)',
        white: 'hsl(0, 0%, 100%)',
        gray500: 'hsl(0, 0%, 42%)',
        gray950: 'hsl(0, 0%, 7%)',
      },
      boxShadow: {
        'flat': '15px 15px 0px -2px hsl(0, 0%, 7%)',
      }
    },
    plugins: [],
  }
}
