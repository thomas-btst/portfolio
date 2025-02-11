import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export function useTheme() {
    const theme = useContext(ThemeContext)
    if (!theme)
        throw Error("Theme hook can't be used outside ThemeProvider.")
    return theme
}