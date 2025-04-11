const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F59E0B', // Lighter version of terre cuite
          DEFAULT: '#D97706', // Terre cuite
          dark: '#B45309', // Darker version of terre cuite
        },
        secondary: {
          light: '#FDE68A', // Lighter version of gold
          DEFAULT: '#FCD34D', // Or doux
          dark: '#FBBF24', // Darker version of gold
        },
        accent: {
          light: '#10B981', // Lighter version of green
          DEFAULT: '#065F46', // Vert foncé
          dark: '#064E3B', // Darker version of green
        },
        background: {
          DEFAULT: '#FFFBF5', // Blanc cassé
        },
        title: {
          DEFAULT: '#9B2C2C', // Bordeaux profond
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans], // For body text
        heading: ['Playfair Display', 'serif'], // For headings
      },
      borderRadius: {
        xl: '1rem', // Large rounded corners
        '2xl': '1.5rem', // Extra large rounded corners
      },
      boxShadow: {
        custom: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)', // Custom shadow for cards or buttons
      },
    },
  },
  plugins: [],
};