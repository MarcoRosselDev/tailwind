import { useEffect, useState } from "react"
import { IoSunnyOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";

export default function Header() {

  const [theme, setTheme] = useState<"light" | "dark">("light")

  function handleTheme(theme: "dark" | "light") {
    setTheme(theme);
    localStorage.theme = theme;
  }

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
    const theme = document.documentElement.classList.contains("dark");
    if (theme) {
      handleTheme("dark");
    } else {
      handleTheme("light");
    }
  }, [theme]);

  return (
    <header className="border-b-2 flex justify-between">
    <h1>Where in the world?</h1>
      <button className="border p-2 flex" 
      onClick={() =>
        theme === "dark" ? handleTheme("light") : handleTheme("dark")
      }
      >
        {theme === "dark" ? <IoSunnyOutline  /> : <MdOutlineDarkMode/>}
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  )
}