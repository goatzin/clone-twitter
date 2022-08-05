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
          icon: '#000000',
          ticon: '#1d9cf0',
          thover: '#eff6ff',
          tactive: '#dbeafe'
        },
        dark: {
          color: '#15202b',
          text: '#ffffff',
          icon: '#d3d3d3',
          ticon: '#d3d3d3',
          thover: '#d6d3d1',
          tactive: '#a8a29e'
        },
        black: {
          color: '#000000',
          text: '#ffffff',
          icon: '#d3d3d3',
          ticon: '#d3d3d3',
          thover: '#d6d3d1',
          tactive: '#a8a29e'
        },
        default: {
          color: '#1d9cf0'
        }
      }
    }
  },
  plugins: []
}
