import { useEffect, useState } from "react";
import NavHeader from "./components/NavHeader";
import MainSection from "./components/MainSection";

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
    <div className=" md:flex md:flex-col md:items-center text-base bg-linear-180 from-[#EBF2FC] to-[#EEF8F9] dark:from-[#040918] dark:to-[#091540] bg-amber-50 min-h-dvh p-4 pt-6">
      <NavHeader theme={theme} handleTheme={HandleTheme} />

      <MainSection />
    </div>
  );
}

export default App;
