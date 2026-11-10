/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: {
          DEFAULT: '#353839',
          dark: '#27292A',
          light: '#474B4D',
        },
        bronze: {
          DEFAULT: '#B08D57',
          light: '#C5A572',
          dark: '#8C6D3F',
        },
        silver: {
          DEFAULT: '#E5E7EB',
          light: '#F4F5F6',
          muted: '#D1D5DB',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
