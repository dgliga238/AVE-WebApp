// tailwind.config.js
module.exports = {
  content: [
  './index.html',
  './src/**/*.{html,js,ts,jsx,tsx,vue}',
],
  theme: {
    extend: {
      colors: {
        accent: "#179957",      // Typo here? Maybe you meant "accent"
        accentDark: "#184D47",
      },
      container: {
        center: true,
        padding: "15px",
      },
    },
  },
  plugins: [],
}
