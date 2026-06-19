/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        base: '#0a0a0a',
        surface: '#0d0d0d',
        card: '#111111',
        cardAlt: '#141414',
        border: 'rgba(255,255,255,0.06)',
        purple: {
          DEFAULT: '#a78bfa',
          dim: 'rgba(167,139,250,0.1)',
          border: 'rgba(167,139,250,0.2)',
        },
        text: {
          primary: '#f0f0f0',
          secondary: 'rgba(255,255,255,0.45)',
          muted: 'rgba(255,255,255,0.25)',
          faint: 'rgba(255,255,255,0.18)',
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(-6px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
