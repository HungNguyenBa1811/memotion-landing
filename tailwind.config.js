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
          DEFAULT: '#00695C',
          hover: '#00796B',
          dark: '#004D40',
        },
        accent: {
          DEFAULT: '#4DB6AC',
          light: '#E0F2F1',
          hover: '#26A69A',
        },
        text: {
          DEFAULT: '#1B4332',
          secondary: '#3D6B55',
          tertiary: '#4F7D64',
        },
        surface: {
          DEFAULT: '#F1F8E9',
          secondary: '#FAFAF5',
          tertiary: '#E8F0E0',
        },
        border: {
          DEFAULT: '#B8CCBD',
          light: '#D4E2D4',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['80px', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-lg': ['64px', { lineHeight: '1.06', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display':    ['56px', { lineHeight: '1.07', letterSpacing: '-0.025em', fontWeight: '600' }],
        'display-sm': ['48px', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '600' }],
        'headline':   ['40px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'headline-sm':['32px', { lineHeight: '1.125', letterSpacing: '-0.015em', fontWeight: '600' }],
        'title':      ['28px', { lineHeight: '1.14', letterSpacing: '-0.01em', fontWeight: '600' }],
        'title-sm':   ['24px', { lineHeight: '1.17', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-xl':    ['21px', { lineHeight: '1.381', fontWeight: '400' }],
        'body-lg':    ['19px', { lineHeight: '1.42', fontWeight: '400' }],
        'body':       ['17px', { lineHeight: '1.47', fontWeight: '400' }],
        'body-sm':    ['14px', { lineHeight: '1.43', fontWeight: '400' }],
        'caption':    ['12px', { lineHeight: '1.33', fontWeight: '400' }],
        'nav':        ['12px', { lineHeight: '1', letterSpacing: '0.01em', fontWeight: '400' }],
      },
      spacing: {
        'section-sm': '80px',
        'section':    '120px',
        'section-lg': '160px',
        'section-xl': '200px',
      },
      borderRadius: {
        'apple-sm': '12px',
        'apple':    '18px',
        'apple-lg': '22px',
        'apple-xl': '28px',
        'pill':     '980px',
      },
      maxWidth: {
        'apple-narrow': '680px',
        'apple':        '980px',
        'apple-wide':   '1120px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
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
