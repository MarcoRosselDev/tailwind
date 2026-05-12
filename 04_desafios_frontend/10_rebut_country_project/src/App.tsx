import './App.css'
import Header from "./components/Header.js"
import data from "./data.json"

function App() {

  console.log(data[249]);


  return (

    <div className='bg-white dark:bg-black dark:text-white'>
      <Header />
      <p className='text-red-600 '>testing</p>
      <form>
        <input type="text" placeholder='Search for a country...' />

      </form>
      <div>
        <p>this gona be a filter</p>
      </div>
      <div>
        <p>this gona be all the countrys</p>
      </div>
    </div>
  )
}

export default App
