function App() {
  return (
    <div
      className="dark:bg-primary-dark-blue min-h-dvh dark:text-primary-text-dark text-primary-dark-blue
      grid grid-cols-3 grid-rows-5 gap-2 p-2
    "
    >
      <div className=" bg-black border col-span-2">1</div>
      <div className=" bg-black border row-span-3">2</div>
      <div className=" bg-black border row-span-2">3</div>
      <div className=" bg-black border">4</div>
      <div className=" bg-black border">5</div>
    </div>
  );
}

export default App;
