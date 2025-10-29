import { useEffect, useState } from "react";
import { ThemeContext, useTheme } from "./ThemeContext.jsx";


export default function ThemeProvider({ children, defaultTheme = "system", storageKey = "branchify-ui-theme"}){
  const [theme, setThemeState] = useState( () => {
    try {
      const currentTheme = window?.localStorage?.getItem(storageKey) || defaultTheme
    } catch( error ){
      return defaultTheme
    }
  })

  useEffect( () => {
    const root = document.documentElement

    const applyThemeClass = (mode) => {
      root.classList.remove("light", "dark")
      root.classList.add( mode === "dark" ? "dark" : "light")
    }

    if( theme === "system" ) {
      const m = window.matchMedia("(prefers-color-scheme: dark)")
      applyThemeClass(m.matches ? "dark" : "light")

      const handler = (e) => applyThemeClass(e.matches ? "dark" : "light")
      m.addEventListener ? m.addEventListener( "change", handler) : m.addEventListener(handler)

      return () => {
        m.removeEventListener ? m.removeEventListener("change", handler) : m.removeListener(handler);
      };
    } else {
      applyThemeClass(theme)
    }
  }, [theme])


  const setTheme = (newTheme) => {
    try {
      localStorage.setItem(storageKey, newTheme);
    } catch (e) {
      // ignore
    }
    setThemeState(newTheme);
  };

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>

}