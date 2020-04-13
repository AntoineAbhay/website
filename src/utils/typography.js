import Typography from "typography"
import stowLakeTheme from "typography-theme-stow-lake"

const typography = new Typography(stowLakeTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
