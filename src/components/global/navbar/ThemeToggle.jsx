import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle(){
  
  const [isDark, setIsDark] = useState(
    () =>
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="h-full flex items-center justify-center flex-col transition all duration-500 ease-in-out">
      <button onClick={() => setIsDark(!isDark)} className="border border-solid rounded-full p-2 shadow-md transition-all duration-500 ease-in-out cursor-pointer hover:bg-amber-500 hover:text-white hover:border-amber-50 dark:hover:bg-amber-300 dark:hover:text-black dark:hover:border-white ">
        { isDark ? <Moon /> : <Sun/>}      
      </button>
      
    </div>
  )
}