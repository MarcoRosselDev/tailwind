import { useEffect, useState } from "react";

export default function Header() {

  const [theme, setTheme] = useState<"light" | "dark">("light");

  // use Effect del theme = "dark" o "ligth"
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
    <div className="flex justify-between mt-2 mb-6">
          <h1
            className="text-white text-[22px] font-bold
          font-josefine-400 tracking-[0.5rem]
          "
          >
            TODO
          </h1>
          <button
            className="p-0 pl-4"
            onClick={() =>
              theme === "dark" ? HandleTheme("light") : HandleTheme("dark")
            }
          >
            <img
              className="w-5 h-5"
              src={`${theme === "dark" ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}`}
              alt="image of a moon or a sun depending of the theme design"
            />
          </button>
        </div>
  )
}