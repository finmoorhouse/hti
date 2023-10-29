/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  mode: "jit",
  theme: {
    fontFamily: {
      serif: [
        "Merriweather",
        "Source Serif Pro",
        "Apple Garamond",
        "Baskerville",
        "Libre Baskerville",
        "Droid Serif",
        "Times New Roman",
        "Times",
        "serif",
        "ui-serif",
        "Noto Emoji",
        "Quivira",
      ],
      sans: [
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      mono: [
        "Space Mono",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
    screens: {
      xxs: "360px",
      xs: "450px",
      sm: "576px",
      md: "960px",
      lg: "1440px",
      desktop: "1400px",
      tablet: "600px",
    },
    extend: {
      colors: {
        gold: {
          400: "#ffe343",
          500: "#f5c81a",
        },
        flexoki: {
          black: "#100F0F",
          980: "#191817",
          970: "#161515",
          950: "#1C1B1A",
          900: "#282726",
          850: "#343331",
          800: "#403E3C",
          700: "#575653",
          600: "#6F6E69",
          500: "#878580",
          300: "#B7B5AC",
          200: "#CECDC3",
          150: "#DAD8CE",
          100: "#E6E4D9",
          50: "#F2F0E5",
          paper: "#FFFCF0",
        },
      },
      typography: (theme) => ({
        invert: {
          css: {
            color: theme("colors.flexoki.200"),
            h1: {
              color: theme("colors.flexoki.100"),
            },
            a: {
              color: theme("colors.flexoki.200"), // Change this to your desired color
              "&:hover": {
                color: theme("colors.flexoki.100"), // Change this to your desired hover color
              },
            },
            blockquote: {
              color: theme("colors.flexoki.300"), // Change this to your desired color for blockquote text
              borderLeftColor: theme("colors.flexoki.600"), // Change this to your desired color for blockquote border
            },
            hr: {
              borderColor: theme("colors.flexoki.850"), // Change this to your desired color for the horizontal rule
            },
          },
        },
      }),
    },
  },
  content: ["./src/**/*.{html,js,md,njk}", "./build/**/*.{html,js}"],
  plugins: [require("@tailwindcss/typography")],
};
