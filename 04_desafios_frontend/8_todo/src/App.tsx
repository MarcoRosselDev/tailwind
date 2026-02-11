import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import type { Data } from "./types/Data";

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

export default function App () {
  const [data, setData] = useState<any>([]);
  const [idCounter, setIdCounter] = useState(0);
  const [showList, setShowList] = useState<"All" | "Active" | "Completed">("All");

  function handleCount() {
    setIdCounter(prev => prev + 1)
  }

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

  function handleSetData(data:Data) {
    setData(data)
  }

  function setLocalStorageData(data: Data) {
    localStorage.setItem("myData", JSON.stringify(data)); // Stringify
  }

  return (
  <div className="min-h-dvh bg-primary-gray-100 text-[12px] font-josefine-400">
    <div
      className="
      bg-[url(/images/bg-mobile-light.jpg)]
      dark:bg-[url(/images/bg-mobile-dark.jpg)]
      p-6 pt-9 bg-no-repeat min-h-dvh dark:bg-primary-navy-950 text-center"
    >
      <Header />
      <Formulario  idCounter={idCounter}  handleCount={handleCount} data={data} setLocalStorageData={setLocalStorageData} handleSetData={handleSetData} />

      {data.map(
        ({pr,checked,id }: { pr: string ,checked: boolean ,id: number }) => {
          return (
            <p key={id}>{pr} checked? : {checked.toString()}</p>
          );
        },
      )}
    
    </div>
  </div>
  )
}