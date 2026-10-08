/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        page: '#030818',
        surface: '#151a1a',
        lime: '#84cc16',
        sharepalBlue: '#1e40af',
      },
      maxWidth: { container: '1520px' },
      borderRadius: { card: '24px', banner: '22px' },
    },
  },
}
