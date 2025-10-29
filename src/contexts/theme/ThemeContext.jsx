import { createContext, useContext } from "react";

// Creating ThemeContext with default values
export const ThemeContext = createContext({
  theme: "system",
  setTheme: () => {}
})


export function useTheme () {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}