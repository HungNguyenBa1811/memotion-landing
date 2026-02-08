/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00695C', // Deep Teal (Trust & Medical)
          light: '#4DB6AC',   // Light Teal (Secondary - Fresh & Approachable)
          dark: '#004D40',    // Darker shade for hover/active states
        },
        secondary: '#4DB6AC', // Explicit secondary reference
        background: '#FAFAF5', // Off-White (Clean Base)
        accent: {
          DEFAULT: '#D87659', // Terracotta/Coral (Action & Warmth)
          hover: '#C05A3E',   // Darker shade for hover
        },
        text: {
          DEFAULT: '#1B4332', // Dark Green (Grounded)
          muted: '#4A665A',   // Muted version for subtitles
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
}
