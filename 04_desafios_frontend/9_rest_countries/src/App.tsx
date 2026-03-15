import { useState, type FormEvent } from "react"
import Header from "./components/Header"

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
        <div>
          <h1>Filter by Region</h1>
          <ul>
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europa</li>
            <li>Oceania</li>
          </ul>
        </div>
      </div>
      <p>{char}</p>
    </div>
  )
}

export default App
