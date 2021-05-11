module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    boxShadow: {
      error: "0 0 0 3px rgba(255, 40, 40, 0.5)",
      offset: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      offsetHover: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    },

    extend: {
      colors: {
        color1: "#f78e1c",
        hoverColor1: "#ED8936",
        color2: "#eccf13",
        color3: "#013f5d",
        color4: "#1abebd",
        color5: "#707070",
        fontColor: "#495057",
        headingColor: "#343a40",
        error: "rgba(255, 40, 40, 0.8)",
      },
      height: {
        h128: '32rem',
      },

      maxHeight: {
        h128: '32rem',
      }
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
};
