/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        card: '#f4f7f8',
        border: '#e2e8f0',
        'muted-foreground': '#64748b',
        teal: { DEFAULT: '#0f9d9d', dark: '#0b7a7a' },
      },
      fontFamily: {
        'league-spartan': ['"League Spartan"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
