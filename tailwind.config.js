module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      height: {
        icon: '26.25px',
        outsideIcon: '52px',
      },
      width: {
        icon: '26.25px',
        outsideIcon: '52px',
        timeline: '600px',
      },
    }
  },
  plugins: []
}
