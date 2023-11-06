/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx, html}'],
  theme: {
    extend: {
      colors: {
        'body-background': '#FFFFFB',
        'navigation-background': '#E8ECEA',
        'text-color': '#3A3432',
      },
    },
  },
  plugins: [],
};
