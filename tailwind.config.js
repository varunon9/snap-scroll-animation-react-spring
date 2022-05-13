module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Avenir Next', 'sans-serif']
    },
    colors: {
      brand: {
        grey: {
            base: '#757779',
            background: '#f5f5f8',
            dark: '#47494C',
            light: '#BDBDBD',
            menu: '#212529',
            mercury: '#E3E3E3',
            space: '#393E54'

        },
        black: '#191C1F',
        blue: {
            base: '#1366e8',
            link: '#1890ff',
            dark: '#283964',
            extraDark: '#101C3D',
            light: '#72B5FF',
            azure_radiance: '#0079FE',
            azureRadiance: '#017AFF',
            science: '#0064DF',
            denim: '#1371E6'
        },
        white: '#ffffff'
    }
    },
    extend: {},
  },
  plugins: [],
}
