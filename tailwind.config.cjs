/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme:{
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      stone: '#F7F7F5',
      purple: '#6366f1',
      gold: '#EDB52F',
      gray: {
        lightest: '#7b899d',
        light: '#334155',
        DEFAULT: '#1e293b',
        dark: '#0f172a'
      },

    },
    fontFamily: {
      sans: ["Inter", "Avenir", "Helvetica", "Arial", "sans-serif"],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1024px',
      '2xl': '1280px',
    },
    extend: {},
  },
  plugins: [],
};

