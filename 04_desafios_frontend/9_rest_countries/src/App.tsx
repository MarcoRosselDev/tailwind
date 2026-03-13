import Header from "./components/Header"

function App() {
  return (
    <div className="b-2 dark:bg-gray-800 dark:text-white  min-h-dvh font-nunito-variable">
      <Header />
      <div>
        <form >
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
    </div>
  )
}

export default App
