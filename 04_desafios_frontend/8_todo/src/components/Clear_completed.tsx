import type { Clear_type } from "../types/Clear_type";
import type { Data } from "../types/Data";
import List_toggle from "./List_toggle";


export default function Clear_completed({data, setLocalStorageData, handleSetData, showList, handleSetShowList}: Clear_type) {
  function handleDeleteCompleted() {
    let new_data : Data = []

    for (let i = 0; i < data.length; i++) {
      if (!data[i].checked) { // si no es check lo pushea si no es ignorado = eliminado
        new_data.push(data[i]);
      }
    }
    setLocalStorageData(new_data);
    handleSetData(new_data)
    return
  }

  return (
    <div
      className="flex p-4  justify-between
    text-gray-400 font-bold  dark:text-primary-navy-850 
    "
    >
      <p>{data.length} items left</p>
      <div className="hidden sm:block">
      <List_toggle showList={showList} handleSetShowList={handleSetShowList} />
      </div>
      <button className="cursor-pointer" onClick={handleDeleteCompleted}>
        Clear Completed
      </button>
    </div>
  )
}