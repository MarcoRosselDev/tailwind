import { useState, type FormEvent } from "react"
import Header from "./components/Header"
import Region_var from "./components/Region_var";
import Banderas from "./components/Banderas";

/* 
1. menu desplegable
2. estilizar el main
3. 
*/

function App() {

  const [char, setChar] = useState("")

  function handleSubmit(event:FormEvent) {
    event.preventDefault();
    console.log(char);
  }

  return (
    <div className="b-2 dark:bg-gray-800 dark:text-white  min-h-dvh font-nunito-variable">
      <Header />
      <div className="flex flex-col md:flex-row md:justify-between">
        <form onSubmit={handleSubmit}>
          <input type="text"
          placeholder="Search for a country..." 
          className="p-4 border w-full"
          />
        </form>
        <Region_var />
        <Banderas />
      </div>
      
    </div>
  )
}

export default App
