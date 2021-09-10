
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
      zIndex: {
       '-100': '-100',
      },
  
    animation: {
        
        'fade-in-up': 'fade-in-up 2s ease-out forwards',
        
    },
    

    
    colors: {
      primary: "#B2EBCB",
      secondary: "#2E8B57",
<<<<<<< HEAD
      dark: "#000"
=======
      tertiary: "rgb(129, 189, 129)",
      dark: "#553F3E"
>>>>>>> 1a189d26d0724c07f0185c597bb58d9d131490c4
    },
    fontFamily: {
      'poppins': ['Poppins'],
    },
    extend: {
    backgroundImage: theme => ({
      'nvbg': "url('./src/assets/images/navpattern.svg')"
    })
    }}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
