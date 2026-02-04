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
  const [idCounter, setIdCounter] = useState(0);

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

  // use Effect get data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("myData");
    if (savedData) {
      let arr_ls = JSON.parse(savedData);
      if (arr_ls.length > 0) {
        setData(arr_ls);
        // nos aseguramos de que el contador de id sea mayor al id mas alto del array salbado en localStorage
        let biger_id = 0;
        for (let i = 0; i < arr_ls.length; i++) {
          if (arr_ls[i].id >= biger_id) {
            biger_id = arr_ls[i].id + 1;
          }
        }
        setIdCounter(biger_id);
      } else {
        setData(f);
        setIdCounter(f[f.length - 1].id + 1);
      }
    } else {
      setData(f);
      setIdCounter(f[f.length - 1].id + 1);
      setLocalStorageData(f);
    }
  }, []);

  function setLocalStorageData(info: any) {
    localStorage.setItem("myData", JSON.stringify(info)); // Stringify
    //console.log("localStorage actualizado... with :", info);
  }

  function HandleTheme(theme: "dark" | "light") {
    setTheme(theme);
    localStorage.theme = theme;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (formulario.current) {
      const datos = new FormData(formulario.current);
      const objetoDatos: any = Object.fromEntries([...datos.entries()]);

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
    <div className="min-h-dvh bg-primary-gray-100">
      <div
        className="
        bg-[url(/images/bg-mobile-light.jpg)]
        dark:bg-[url(/images/bg-mobile-dark.jpg)]
        p-6 pt-9 bg-no-repeat min-h-dvh dark:bg-primary-navy-950"
      >
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
        <div>
          <div
            className="border
          bg-linear-to-br from-blue-400 via-blue-300 to-purple-500
          "
          >
            <div
              className="
            bg-[url('/images/icon-check.svg')]
            bg-no-repeat
            bg-center
            mask-exclude
            "
            >
              <p>testing div with bg color gradiant</p>
            </div>
          </div>
          <form
            ref={formulario}
            className=" bg-primary-gray-50 p-2 pl-4 pr-4 flex
          gap-3 rounded-sm items-center h-11"
            onSubmit={handleSubmit}
          >
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
              <path
                fill="black"
                className="w-6 h-6 border"
                d="M1 4.304L3.696 7l6-6"
              />
            </svg> */}
            <input
              type="checkbox"
              name="check"
              className={`

                  appearance-none w-5 h-5 rounded-full border border-gray-300 
                  checked:bg-[url('/images/icon-check.svg'),linear-gradient(330deg,#a465c6,#62abff)]
                  bg-center bg-no-repeat
                  focus:outline-none 
                  transition-colors
                  duration-200
                  cursor-pointer
                  focus:border-primary-gray-600   
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
        <div
          className="mt-3 bg-primary-gray-50 
          gap-3 rounded-sm items-center p-2"
        >
          {tasks}
        </div>
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

/* 

appearance-none border 
border-primary-gray-300 w-4 h-4 rounded-full 
checked:bg-linear-to-br checked:from-blue-400 checked:via-blue-300 checked:to-purple-500
checked:mask-[url('/images/icon-check.svg')]
checked:mask-no-repeat
checked:mask-center
checked:mask-size-[60%]
checked:mask-exclude
transition-colors
duration-200
cursor-pointer
<input
              type="checkbox"
              name="check"
              className={`appearance-none border 
              border-primary-gray-300 w-4 h-4 rounded-full 
              checked:bg-linear-to-br checked:from-blue-400 checked:via-blue-300 checked:to-purple-500



              checked:mask-[url('/images/icon-check.svg')] 
              checked:mask-no-repeat checked:mask-center
            checked:[mask-size:60%]"

              transition-colors
              duration-200
              cursor-pointer
              `}
            />
*/
