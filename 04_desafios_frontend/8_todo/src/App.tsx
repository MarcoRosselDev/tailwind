import { useEffect, useRef, useState, type FormEvent } from "react";

let f = [
  {
    pr: "Complete online JavaScript course",
    id: 1,
    checked: true,
  },
  {
    pr: "Jog around the park 3x",
    id: 2,
    checked: false,
  },
  {
    pr: "10 minutes meditation",
    id: 3,
    checked: false,
  },
  {
    pr: "Read for 1 hour",
    id: 4,
    checked: false,
  },
  {
    pr: "Pick up groceries",
    id: 5,
    checked: false,
  },
  {
    pr: "Complete Todo App on Frontend Mentor",
    id: 6,
    checked: false,
  },
];

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const inputRef = useRef(null);
  const checkRef = useRef(null);
  const [data, setData] = useState<any>([]);

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

  // use Effect de la data en el localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("myData");
    if (savedData) {
      let arr_ls = JSON.parse(savedData);
      if (arr_ls.length > 0) {
        setData(arr_ls);
        console.log("mayor a 0", arr_ls, data);
      } else {
        console.log(arr_ls, arr_ls.length);
        setData(f);
      }
    }
  }, []);

  /* useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(data)); // Stringify
    console.log("localStorage actualizado... with :", data);
  }, [data]); */
  function setLocalStorageData(info: any) {
    localStorage.setItem("myData", JSON.stringify(info)); // Stringify
    console.log("localStorage actualizado... with :", info);
  }

  function HandleTheme(theme: "dark" | "light") {
    setTheme(theme);
    localStorage.theme = theme;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    //inputRef.
    /* if (inputRef.current.value) {
      let value = inputRef.current.value;
      let value_check = checkRef.current.value;
      console.log({ value_check, value });
      inputRef.current.value = "";
      value_check.current.value = "";
      //setCheked(false);
    } */
    console.log("escribe algo imbesil");
  }

  function handleDelete(id: number) {
    let indexToRemove = data.findIndex((el: { id: number }) => el.id === id);
    if (indexToRemove !== -1) {
      let tx = [...data];
      tx.splice(indexToRemove, 1);
      setData(tx);
      setLocalStorageData(tx);
    }
  }

  let tasks = data.map(
    ({ pr, checked, id }: { pr: string; checked: boolean; id: number }) => {
      return (
        <Task
          handleDelete={handleDelete}
          key={id}
          checked={checked}
          id={id}
          pr={pr}
        />
      );
    },
  );

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
              ref={checkRef}
              /* checked={false} */
              className={`appearance-none border 
              border-primary-gray-300 w-4 h-4 rounded-full 
              checked:bg-primary-purple-600
              ${checkRef ? "" : ""}
              transition-colors
              duration-200
              cursor-pointer
              `}
            />
            <input
              type="text"
              name=""
              id=""
              ref={inputRef}
              placeholder="Create a new todo..."
              className="bg-primary-gray-50 w-full"
            />
          </form>
        </div>
        <div>{tasks}</div>
      </div>
    </div>
  );
}

export default App;

function Task({
  pr,
  checked,
  handleDelete,
  id,
}: {
  pr: string;
  checked: boolean;
  handleDelete: (id: number) => void;
  id: number;
}) {
  return (
    <div className="flex">
      <input type="checkbox" name="" id="" checked={checked} />
      <p>{pr}</p>
      <button onClick={() => handleDelete(id)}>
        <img src="/images/icon-cross.svg" alt="icon of a cross" />
      </button>
    </div>
  );
}
