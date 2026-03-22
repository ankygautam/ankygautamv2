/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#090909',
        panel: '#111111',
        panelSoft: '#151515',
        line: 'rgba(255,255,255,0.10)',
        text: '#f5f1ea',
        textMuted: 'rgba(245,241,234,0.72)',
        textSubtle: 'rgba(245,241,234,0.48)',
        accent: '#d7c4ab',
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Neue Haas Grotesk Display"', 'sans-serif'],
        sans: ['"Instrument Sans"', '"Helvetica Neue"', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 18px 80px rgba(0, 0, 0, 0.38)',
      },
      letterSpacing: {
        display: '-0.04em',
      },
      backgroundImage: {
        grain:
          'radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 50%), radial-gradient(circle at bottom, rgba(255,255,255,0.03), transparent 45%)',
      },
    },
  },
  plugins: [],
};
