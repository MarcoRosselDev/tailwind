import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

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
  const [showList, setShowList] = useState<"All" | "Active" | "Completed">(
    "All",
  );

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

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

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

  function handleDeleteCompleted() {
    setData((prev: any) => {
      let new_data = [];
      for (let i = 0; i < prev.length; i++) {
        if (prev[i].checked) {
          //console.log("delete this one white id : ", data[i].id);
        } else {
          new_data.push(prev[i]);
        }
      }
      setLocalStorageData(new_data);
      return new_data;
    });
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    //console.log(event);

    if (active.id !== over.id) {
      setData((items) => {
        //const oldIndex = items.indexOf(active.id);
        const oldIndex = items.findIndex((item) => item.id === active.id);
        //const newIndex = items.indexOf(over.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
      setLocalStorageData(data);
    }
  }

  /* let tasks = data.map(
    ({ pr, checked, id }: { pr: string; checked: boolean; id: number }) => {
      return (
        <Task
          handleDelete={handleDelete}
          key={id}
          checked={checked}
          id={id}
          pr={pr}
          fn={handleStateCheck}
          showList={showList}
        />
      );
    },
  ); */

  return (
    <div className="min-h-dvh bg-primary-gray-100 text-[12px] font-josefine-400">
      <div
        className="
        bg-[url(/images/bg-mobile-light.jpg)]
        dark:bg-[url(/images/bg-mobile-dark.jpg)]
        p-6 pt-9 bg-no-repeat min-h-dvh dark:bg-primary-navy-950 text-center"
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
          <form
            ref={formulario}
            className=" bg-primary-gray-50 p-4 flex
          gap-3 rounded-sm items-center h-13"
            onSubmit={handleSubmit}
          >
            <input
              type="checkbox"
              name="check"
              className="
              appearance-none w-5 h-5 rounded-full border border-gray-300 
              checked:bg-[url('/images/icon-check.svg'),linear-gradient(330deg,#a465c6,#62abff)]
              bg-center bg-no-repeat
              focus:outline-none 
              transition-colors
              duration-200
              cursor-pointer
              focus:border-primary-gray-600"
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
           rounded-sm items-center"
        >
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={data}
              strategy={verticalListSortingStrategy}
            >
              {data.map(
                ({
                  pr,
                  checked,
                  id,
                }: {
                  pr: string;
                  checked: boolean;
                  id: number;
                }) => {
                  return (
                    <SortableItem
                      key={id}
                      id={id}
                      pr={pr}
                      checked={checked}
                      handleDelete={handleDelete}
                      fn={handleStateCheck}
                      showList={showList}
                    />
                  );
                },
              )}
            </SortableContext>
          </DndContext>
          {/* {tasks} */}
          {/* las part with count */}
          <div
            className="flex p-4  justify-between
          text-primary-gray-600 
          "
          >
            <p>{data.length} items left</p>
            <button className="cursor-pointer" onClick={handleDeleteCompleted}>
              clear Completed
            </button>
          </div>
        </div>
        {/* las var to select all, active, completed */}
        <div
          className="mt-3 bg-primary-gray-50 
           rounded-sm items-center p-4 flex justify-center gap-5
           font-bold text-primary-gray-600
           "
        >
          <button
            className={`${showList === "All" ? "text-blue-500" : ""} hover:text-blue-500 cursor-pointer`}
            onClick={() => setShowList("All")}
          >
            All
          </button>
          <button
            className={`${showList === "Active" ? "text-blue-500" : ""} hover:text-blue-500 cursor-pointer`}
            onClick={() => setShowList("Active")}
          >
            Active
          </button>
          <button
            className={`${showList === "Completed" ? "text-blue-500" : ""} hover:text-blue-500 cursor-pointer`}
            onClick={() => setShowList("Completed")}
          >
            Completed
          </button>
        </div>
        {/*  */}
        <h2 className="mt-9 mb-8 text-gray-400 font-semibold">
          Drag and drop to reorder list
        </h2>
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
  showList,
}: {
  pr: string;
  checked: boolean;
  handleDelete: (id: number) => void;
  id: number;
  fn: (id: number, state: boolean) => void;
  showList: string;
}) {
  const [ch, setCh] = useState(checked);

  function handleChecked() {
    fn(id, !ch);
    setCh((prev) => !prev);
  }

  let checkActive =
    showList === "All" || (showList === "Active" && ch === false);
  let checkInactives = showList === "Completed" && ch;

  return (
    <div
      className={`
    ${checkInactives ? "" : checkActive ? "" : "hidden"}
    flex p-4 border-b border-b-primary-gray-300`}
    >
      <input
        type="checkbox"
        className="
        appearance-none w-5 h-5 rounded-full border border-gray-300 
        checked:bg-[url('/images/icon-check.svg'),linear-gradient(330deg,#a465c6,#62abff)]
        bg-center bg-no-repeat
        focus:outline-none 
        transition-colors
        duration-200
        cursor-pointer
        focus:border-primary-gray-600"
        name=""
        id=""
        checked={ch}
        onChange={handleChecked}
      />
      <div className="ml-3 flex w-full justify-between">
        <p
          className={`font-josefine-400  font-semibold
          ${ch ? "text-primary-gray-300 line-through decoration-primary-gray-600" : "text-primary-gray-600"}
          
          `}
        >
          {pr}
        </p>
        <button className="cursor-pointer" onClick={() => handleDelete(id)}>
          <img
            src="/images/icon-cross.svg"
            className=" w-3.5 h-3.5"
            alt="icon of a cross"
          />
        </button>
      </div>
    </div>
  );
}

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SortableItem({
  pr,
  checked,
  handleDelete,
  id,
  fn,
  showList,
}: {
  pr: string;
  checked: boolean;
  handleDelete: (id: number) => void;
  id: number;
  fn: (id: number, state: boolean) => void;
  showList: string;
}) {
  //const { pr, checked, handleDelete, id, fn, showList } = props;
  //console.log({ pr, checked, handleDelete, id, fn, showList });

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const [ch, setCh] = useState(checked);

  function handleChecked() {
    fn(id, !ch);
    setCh((prev) => !prev);
  }

  let checkActive =
    showList === "All" || (showList === "Active" && ch === false);
  let checkInactives = showList === "Completed" && ch;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
    ${checkInactives ? "" : checkActive ? "" : "hidden"}
    flex p-4 border-b border-b-primary-gray-300`}
    >
      <input
        type="checkbox"
        className="
        appearance-none w-5 h-5 rounded-full border border-gray-300 
        checked:bg-[url('/images/icon-check.svg'),linear-gradient(330deg,#a465c6,#62abff)]
        bg-center bg-no-repeat
        focus:outline-none 
        transition-colors
        duration-200
        cursor-pointer
        focus:border-primary-gray-600"
        name=""
        id=""
        checked={ch}
        onChange={handleChecked}
      />
      <div className="ml-3 flex w-full justify-between">
        <p
          className={`font-josefine-400  font-semibold
          ${ch ? "text-primary-gray-300 line-through decoration-primary-gray-600" : "text-primary-gray-600"}
          
          `}
        >
          {pr}
        </p>
        <button className="cursor-pointer" onClick={() => handleDelete(id)}>
          <img
            src="/images/icon-cross.svg"
            className=" w-3.5 h-3.5"
            alt="icon of a cross"
          />
        </button>
      </div>
    </div>
  );
}
