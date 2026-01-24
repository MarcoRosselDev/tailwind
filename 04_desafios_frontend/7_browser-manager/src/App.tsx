import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
    const theme = document.documentElement.classList.contains("dark");
    console.log(theme);
    if (theme) {
      HandleTheme("dark");
    } else {
      HandleTheme("light");
    }
  }, [theme]);

  function HandleTheme(theme: "dark" | "light") {
    setTheme(theme);
    localStorage.theme = theme;
  }

  return (
    <div className="dark:bg-black bg-amber-50 min-h-dvh">
      <h1 className="dark:text-amber-50 text-black">Testing dark mode!</h1>
      <h1 className="dark:text-amber-50 text-black">{theme}</h1>
      <div>
        <button
          className="dark:text-amber-50 text-black border p-2"
          onClick={() => HandleTheme("dark")}
        >
          dark
        </button>
        <button
          className="dark:text-amber-50 text-black border p-2"
          onClick={() => HandleTheme("light")}
        >
          light
        </button>
      </div>
    </div>
  );
}

export default App;
