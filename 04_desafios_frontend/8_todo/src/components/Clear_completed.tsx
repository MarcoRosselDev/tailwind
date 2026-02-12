import type { Clear_type } from "../types/Clear_type";
import type { Data } from "../types/Data";


export default function Clear_completed({data, setLocalStorageData, handleSetData}: Clear_type) {
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
    text-primary-gray-600 
    "
    >
      <p>{data.length} items left</p>
      <button className="cursor-pointer" onClick={handleDeleteCompleted}>
        clear Completed
      </button>
    </div>
  )
}