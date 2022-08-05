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
      colors: {
        light: {
          color: '#ffffff',
          text: '#000000',
          icon: '#000000'
        },
        dark: {
          color: '#15202b',
          text: '#ffffff',
          icon: '#d3d3d3'
        },
        black: {
          color: '#000000',
          text: '#ffffff',
          icon: '#d3d3d3'
        },
        default: {
          blue: '#1d9cf0'
        }
      }
    }
  },
  plugins: []
}
