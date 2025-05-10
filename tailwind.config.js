// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,jsx,tsx,vue}',
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    extend: {
      colors: {
        accent: '#179957',
        accentDark: '#184D47',
      },
    },
  },
  plugins: [],
};
