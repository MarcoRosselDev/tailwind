import { useEffect, useState, type FormEvent } from "react";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [cheked, setCheked] = useState<boolean>(false);
  const [task, setTask] = useState<string | null>(null);

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

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setCheked(false);
    setTask(null);
    console.log({ cheked, task });
  }

  return (
    <div className="min-h-dvh bg-primary-gray-50">
      <div
        className="
        bg-[url(/images/bg-mobile-light.jpg)]
        dark:bg-[url(/images/bg-mobile-dark.jpg)]
      p-7 pt-9 bg-no-repeat min-h-dvh dark:bg-primary-navy-950"
      >
        <div className="flex justify-between">
          <h1>TODO</h1>
          <button
            className=""
            onClick={() =>
              theme === "dark" ? HandleTheme("light") : HandleTheme("dark")
            }
          >
            <img
              src={`${theme === "dark" ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}`}
              alt="image of a moon or a sun depending of the theme design"
            />
          </button>
        </div>
        <div>
          <form
            className=" bg-primary-gray-50 p-2 pl-4 pr-4 flex
          gap-3 rounded-sm items-center"
            onSubmit={handleSubmit}
          >
            <input
              type="checkbox"
              onChange={() => setCheked((prev) => !prev)}
              className={`appearance-none border 
              border-primary-gray-300 w-4 h-4 rounded-full 
              checked:bg-primary-purple-600
              ${cheked ? "" : ""}
              transition-colors
              duration-200
              cursor-pointer
              `}
            />
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => setTask(e.target.value)}
              placeholder="Create a new todo..."
              className="bg-primary-gray-50 w-full"
            />
          </form>
        </div>
        <div>
          <div className="flex">
            <input type="checkbox" name="" id="" />
            <p>job around the park 3x</p>
            <button>
              <img src="/images/icon-cross.svg" alt="icon of a cross" />
            </button>
          </div>
          <div className="flex">
            <input type="checkbox" name="" id="" />
            <p>job around the park 3x</p>
            <button>
              <img src="/images/icon-cross.svg" alt="icon of a cross" />
            </button>
          </div>
          <div className="flex">
            <input type="checkbox" name="" id="" />
            <p>job around the park 3x</p>
            <button>
              <img src="/images/icon-cross.svg" alt="icon of a cross" />
            </button>
          </div>
          <div className="flex">
            <input type="checkbox" name="" id="" />
            <p>job around the park 3x</p>
            <button>
              <img src="/images/icon-cross.svg" alt="icon of a cross" />
            </button>
          </div>
          <div className="flex">
            <input type="checkbox" name="" id="" />
            <p>job around the park 3x</p>
            <button>
              <img src="/images/icon-cross.svg" alt="icon of a cross" />
            </button>
          </div>
          <div className="flex">
            <input type="checkbox" name="" id="" />
            <p>job around the park 3x</p>
            <button>
              <img src="/images/icon-cross.svg" alt="icon of a cross" />
            </button>
          </div>
          <div className="flex">
            <input type="checkbox" name="" id="" />
            <p>job around the park 3x</p>
            <button>
              <img src="/images/icon-cross.svg" alt="icon of a cross" />
            </button>
          </div>
          <div className="flex">
            <input type="checkbox" name="" id="" />
            <p>job around the park 3x</p>
            <button>
              <img src="/images/icon-cross.svg" alt="icon of a cross" />
            </button>
          </div>
          <div className="flex">
            <input type="checkbox" name="" id="" />
            <p>job around the park 3x</p>
            <button>
              <img src="/images/icon-cross.svg" alt="icon of a cross" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
