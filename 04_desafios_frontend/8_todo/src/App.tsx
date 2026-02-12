import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import type { Data } from "./types/Data";
import Clear_completed from "./components/Clear_completed";
import List_toggle from "./components/List_toggle";
import type { ShowList } from "./types/ShowList";
import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors, type DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Sortable_item from "./components/Sortable_item";


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
  const [showList, setShowList] = useState<ShowList>("All");


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
  function handleSetShowList(value:ShowList) {
    setShowList(value)
  }

  function setLocalStorageData(data: Data) {
    localStorage.setItem("myData", JSON.stringify(data)); // Stringify
  }

  /* de aqui en adelante trabajaremos con el drag and drop */

  const sensors = useSensors(
    useSensor(PointerSensor, {
      // Configurar el sensor para ignorar elementos interactivos
      activationConstraint: {
        distance: 5, // Mínimo 5px de movimiento antes de activar el drag
        // Ignorar elementos con estas clases o atributos
        ignore: ['input', 'button', 'textarea', 'select', 'option'],
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function handleDragEnd(event: DragEndEvent) {
    if (!event || !event.over) {
      return
    }
    const { active, over } = event;
    //console.log(event);

    if (active.id !== over.id) {
      setData((items: any) => {
        //const oldIndex = items.indexOf(active.id);
        const oldIndex = items.findIndex((item: any) => item.id === active.id);
        //const newIndex = items.indexOf(over.id);
        const newIndex = items.findIndex((item : any) => item.id === over.id);

        let data:Data = arrayMove(items, oldIndex, newIndex);
        //console.log("data to save on ls:", data);
        setLocalStorageData(data);
        return data;
      });
    }
  }

  function handleDelete(id: number) {
    setData((prev: any) => {
      let indexToRemove = data.findIndex((el: { id: number }) => el.id === id);
      console.log(indexToRemove);      
      if (indexToRemove !== -1) {
        let tx = [...data];
        tx.splice(indexToRemove, 1);
        setLocalStorageData(tx);
        return tx;
      } else {
        return prev
      }

    })
  }

  function handleStateCheck(id: number) {
    let prev = [...data]
    let index = prev.findIndex((item) => item.id === id);
    
    console.log({id, "id del prev:": prev[index].id , "index:": index, "estado anterior:": prev[index].checked});
    prev[index].checked = !prev[index].checked;
    console.log("estado despues:", prev[index].checked);
    
    //console.log(prev[index], id);
    
    setData(prev)
    setLocalStorageData(prev)
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
              ({pr,checked,id }: { pr: string ,checked: boolean ,id: number }) => {
                /* const checkActive = showList === "All" || (showList === "Active" && checked === false);
                const checkInactives = showList === "Completed" && checked; */
                return (
                  <Sortable_item checked={checked} handleDelete={handleDelete} handleStateCheck={handleStateCheck} id={id} prass={pr} showList={showList} key={id} />
                    
                );
              },
            )}
          </SortableContext>
        </DndContext>
      </div>
      <Clear_completed data={data} handleSetData={handleSetData} setLocalStorageData={setLocalStorageData} />
      <List_toggle showList={showList} handleSetShowList={handleSetShowList} />
    

      <h2 className="mt-9 mb-8 text-gray-400 font-semibold">
        Drag and drop to reorder list
      </h2>
    </div>
  </div>
  )
}