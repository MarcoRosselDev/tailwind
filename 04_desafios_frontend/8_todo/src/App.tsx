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
  const [data, setData] = useState<any>([]);
  const formulario = useRef<null | HTMLFormElement>(null);
  const [idCounter, setIdCounter] = useState(10);

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
    //console.log(savedData);
    if (savedData) {
      let arr_ls = JSON.parse(savedData);
      if (arr_ls.length > 0) {
        setData(arr_ls);
        //console.log("mayor a 0", arr_ls, data);
      } else {
        //console.log(arr_ls, arr_ls.length);
        setData(f);
      }
    } else {
      setData(f);
      setLocalStorageData(f);
    }
  }, []);

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
    //console.log(formulario.current);
    if (formulario.current) {
      const datos = new FormData(formulario.current);
      //console.log(...datos.entries());
      // do something with the data

      const objetoDatos: any = Object.fromEntries([...datos.entries()]);
      console.log(objetoDatos);

      // console.log(objetoDatos);
      if (!objetoDatos.task.trim()) {
        return console.log("vacío");
      }

      const isChecked = objetoDatos.check === "on";

      let newTask = {
        pr: objetoDatos.task,
        id: idCounter,
        //checked: objetoDatos.check ? objetoDatos.check : false,
        checked: isChecked,
      };
      setIdCounter((prev) => prev + 1);

      let prev = [...data];
      prev.push(newTask);
      setData(prev);
      setLocalStorageData(prev);

      formulario.current.reset();
    }
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

  function handleStateCheck(id: number, state: boolean) {
    setData((prev: any) => {
      let tx = [...prev];
      let index = tx.findIndex((el) => el.id === id);
      tx[index].checked = state;
      //console.log("on handleStateCheck", tx);
      setLocalStorageData(tx);
      return tx;
    });
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
          fn={handleStateCheck}
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
            ref={formulario}
            className=" bg-primary-gray-50 p-2 pl-4 pr-4 flex
          gap-3 rounded-sm items-center"
            onSubmit={handleSubmit}
          >
            <input
              type="checkbox"
              name="check"
              /* checked={false} */
              className={`appearance-none border 
              border-primary-gray-300 w-4 h-4 rounded-full 
              checked:bg-primary-purple-600
              transition-colors
              duration-200
              cursor-pointer
              `}
            />
            <input
              type="text"
              name="task"
              id=""
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
  fn,
}: {
  pr: string;
  checked: boolean;
  handleDelete: (id: number) => void;
  id: number;
  fn: (id: number, state: boolean) => void;
}) {
  const [ch, setCh] = useState(checked);

  function handleChecked() {
    fn(id, !ch);
    setCh((prev) => !prev);
    //console.log(!ch);
  }

  return (
    <div className="flex">
      <input
        type="checkbox"
        name=""
        id=""
        checked={ch}
        onChange={handleChecked}
      />
      <p>{pr}</p>
      <button onClick={() => handleDelete(id)}>
        <img src="/images/icon-cross.svg" alt="icon of a cross" />
      </button>
    </div>
  );
}
