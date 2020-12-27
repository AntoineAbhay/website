import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Playfair Display",
    "serif",
  ],
  bodyFontFamily: ["Montserrat", "sans-serif"],
  googleFonts: [
    {
      name: 'Playfair Display',
      styles: [
        '500',
        '700',
      ],
    },
    {
      name: 'Montserrat',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ]
})

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
