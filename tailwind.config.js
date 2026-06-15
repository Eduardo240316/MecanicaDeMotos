/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0D0D0D',
          900: '#0D0D0D',
          800: '#111418',
          700: '#1A1F26',
          600: '#232A34',
        },
        red: {
          DEFAULT: '#E8001D',
          dark: '#A50015',
          light: '#FF1A3A',
        },
        gold: {
          DEFAULT: '#F5A623',
          light: '#FFB84D',
          dark: '#D48E1A',
        },
        gray: {
          DEFAULT: '#8A95A3',
          light: '#F4F4F4',
        },
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        condensed: ['"Barlow Condensed"', 'Arial Narrow', 'sans-serif'],
        sans: ['Barlow', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
