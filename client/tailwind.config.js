
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
            '0%': {
                opacity: '0',
                transform: 'translateY(10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
    },
    animation: {
        
        'fade-in-up': 'fade-in-up 3s ease-out',
       
    },

    
    colors: {
      primary: "#B2EBCB",
      secondary: "#2E8B57",
      tertiary: "rgb(129, 189, 129)",
      dark: "#553F3E"
    },
    fontFamily: {
      'poppins': ['Poppins'],
    },
    extend: {
    backgroundImage: theme => ({
      'nvbg': "url('./navpattern.svg')"
    })
    }}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
