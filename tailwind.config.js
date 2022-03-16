module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'bg-color': '#26292C',
      'header-color': 'rgba(34, 41, 44, 0.5)',
      'text-color': '#EDF5FC',
      'accent-one': '#A48DFF',
      'accent-two': '#AEE2CD',
    },
    fontFamily: {
      'ibm': ['IBM Plex Sans', 'regular', 'medium', 'semibold', 'bold', 'italic']
    },
    extend: {
      boxShadow: {
        'md': '0 0.1rem 0.2rem rgba(0, 0, 0, 0.24), 0 0.2rem 0.4rem rgba(0, 0, 0, 0.2), 0 0.1rem 0.8rem rgba(0, 0, 0, 0.18)',
        'inner': 'inset 0.4rem 0.4rem 1rem 0 rgba(255, 0, 0, 0.25), inset -0.4rem -0.4rem 1rem 0 rgba(255, 0, 0, 0.25)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}