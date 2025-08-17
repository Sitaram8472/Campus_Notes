/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff', 100: '#e0e7ff', 200: '#c7d2fe', 300: '#a5b4fc', 400: '#818cf8',
          500: '#6366f1', 600: '#4f46e5', 700: '#4338ca', 800: '#3730a3', 900: '#312e81'
        }
      },
      backgroundImage: {
        'radial-faded': 'radial-gradient(60rem 30rem at 10% 10%, rgba(99,102,241,0.25), transparent), radial-gradient(60rem 30rem at 90% -10%, rgba(16,185,129,0.25), transparent)'
      }
    },
  },
  plugins: [],
}

// Backgrounds: Light #FFFFFF, Surfaces: White/70 overlays; Dark: #0B1020, Surfaces: White/5 with glass; Shadows: brand glow rgba(99,102,241,0.35)