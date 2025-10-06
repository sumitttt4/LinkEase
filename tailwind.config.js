/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#6366F1',
        'primary-blue': '#3B82F6',
        'custom-cyan': '#06B6D4',
        'custom-green': '#10B981',
        'custom-orange': '#F59E0B',
        'custom-red': '#EF4444',
        'dark-bg': '#1A1B23',
        'light-bg': '#F8F9FF',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'caveat': ['Caveat', 'cursive'],
        'noto-serif': ['Noto Serif SC', 'serif'],
      },
    },
  },
  plugins: [],
}
