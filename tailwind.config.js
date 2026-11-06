/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#09090b',
          card: '#121215',
          border: 'rgba(255, 255, 255, 0.08)',
          accent: '#10b981', // emerald
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
