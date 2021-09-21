module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    underlineThickness: {
      'thin': '2px',
      'thick': '5px'
    },

    textShadow: { // defaults to {}
      'default': '0 2px 2px rgba(0, 0, 0, 0.9)',
      'lg': '0 2px 10px rgba(0, 0, 0, 0.5)',
    },

    extend: {
      boxShadow: {
        error: "0 0 0 3px rgba(255, 40, 40, 0.5)",
        offset: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        offsetHover: "0 7px 7px rgba(0,0,0,0.25), 0 7px 7px rgba(0,0,0,0.22)",
        headerButton: "0px 0px 2px 2px rgba(56,186,153,0.75)",
        headerButtonHover: "0px 0px 4px 4px rgba(56,186,153,0.75)",
        headerButtonBlue: "0px 0px 2px 2px rgba(92,201,221,0.75)",
        headerButtonHoverBlue: "0px 0px 4px 4px rgba(92,201,221,0.75)"
      },
      colors: {
        green: "#38BA99",
        yellow: "#EFC01A",
        blue: "#5CC9DD",
        red: "#F16D6E",
        lightGrey: "#f2f2f2",
        grey: "#707070",
        black: "#222222",
        backgroundBlack: "#303D3F",
      },
      padding: {
        '1/3': '33.33333%',
        '1/2': '50%',
        '2/3': '66.666667%'
      },

      height: {
        h128: '32rem',
      },
      width: {
        "120": "30rem"
      },

      maxHeight: {
        h128: '32rem',
      },
      transitionProperty: {
      },
      keyframes: {
        blink: {
          '0%': { width: 0, borderColor: "transparant" },
          '100%': { width: "100%", borderColor: "#38BA99" }
        },
        typing: {
          '0%, 100%': { borderColor: "transparant" },
          "50%": { borderColor: "orange" }
        },

        moveButton: {
          '0%, 100%': { backgroundColor: "#ccc" },
          "50%": { backgroundColor: "#38BA99" }
        }

      },
      animation: {
        blink: 'blink 1s steps(40, end)',
        typing: 'typing 1s step-end infinite',
        moveButton: "ligthUpButton 1s ease-in infinite"
      }
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    width: ["responsive", "hover", "focus"],
    height: ["responsive", "hover", "focus"]

  },
  plugins: [require('@tailwindcss/typography'), require('tailwind-underline-utils'),
  require('tailwindcss-typography')({
    // all these options default to the values specified here
    ellipsis: true,         // whether to generate ellipsis utilities
    hyphens: true,          // whether to generate hyphenation utilities
    kerning: true,          // whether to generate kerning utilities
    textUnset: true,        // whether to generate utilities to unset text properties
    componentPrefix: 'c-',  // the prefix to use for text style classes
  }), require('tailwind-underline-utils')],


};


// keyframes: {
//   typing: {
//     '0%, 100%': { width: 0 },
//     '50%': { width: "100%" }
//   },

// },
// animation: {
//   typing: 'blink 3.5s ease-in-out infinite',
// }