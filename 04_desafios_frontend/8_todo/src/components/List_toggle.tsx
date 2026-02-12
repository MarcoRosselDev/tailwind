import type { List_toggle } from "../types/List_toggle";


export default function List_toggle({showList, handleSetShowList}: List_toggle) {
  return (
    <div
      className="mt-3 bg-primary-gray-50 
        rounded-sm items-center p-4 flex justify-center gap-5
        font-bold text-primary-gray-600
        "
    >
      <button
        className={`${showList === "All" ? "text-blue-500" : ""} hover:text-blue-500 cursor-pointer`}
        onClick={() => handleSetShowList("All")}
      >
        All
      </button>
      <button
        className={`${showList === "Active" ? "text-blue-500" : ""} hover:text-blue-500 cursor-pointer`}
        onClick={() => handleSetShowList("Active")}
      >
        Active
      </button>
      <button
        className={`${showList === "Completed" ? "text-blue-500" : ""} hover:text-blue-500 cursor-pointer`}
        onClick={() => handleSetShowList("Completed")}
      >
        Completed
      </button>
    </div>
  )
}