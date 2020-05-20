import Typography from "typography"
import sutroTheme from "typography-theme-sutro"
sutroTheme.headerFontFamily = ["Poppins", ...sutroTheme.headerFontFamily]
sutroTheme.overrideThemeStyles = () => {
  return {
    "h1,h2,h3": {
      color: "#1e2a78",
    },
  }
}
const typography = new Typography(sutroTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
