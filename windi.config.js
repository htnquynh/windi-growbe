export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Gilroy", "sans-serif"],
        // serif: ['ui-serif', 'Georgia'],
      },
      lineClamp: {
        xs: "1",
        sm: "2",
        lg: "5",
      },
      colors: {
        tomato: {
          300: "#F08922",
          500: "#F25822",
        },
      },
      width: {
        570: "570px",
      },
      zIndex: {
        "-1": "-1",
      },
      boxShadow: {
        "3xl": "rgba(0, 0, 0, 0.1) 0px 10px 50px",
        "4xl": "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
      },
      transitionProperty: {
        top: "top",
        "max-height": "max-height",
      },
      transitionTimingFunction: {
        "top-down": "cubic-bezier(0, 1, 0, 1)",
      },
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "752px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1240px",
      },
    },
    scale: {
      0: "0",
      25: ".25",
      50: ".5",
      60: ".6",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      175: "1.75",
      190: "1.90",
      200: "2",
    },
  },
  plugins: [
    require("windicss/plugin/aspect-ratio"),
    require("windicss/plugin/line-clamp"),
  ],
};
