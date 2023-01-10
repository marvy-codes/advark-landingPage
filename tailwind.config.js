const theme = require('tailwindcss/defaultTheme.js');

module.exports = {
  content: [
    './index.html',
    './src/App.vue',
    './src/components/**/*.{js,vue}',
    './src/views/**/*.{js,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...theme.fontFamily.sans],
        pop: ['Poppins', 'sans-serif'],
      },
    },
    colors: {
      brand: '#BB48BD',
      success: '#30D158',
      error: '#FF453A',
      warning: '#EBAF65',
      white: '#FFFFFF',
    },
  },
  plugins: [],
};
