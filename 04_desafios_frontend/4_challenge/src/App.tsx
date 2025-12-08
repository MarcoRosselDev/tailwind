function App() {
  return (
    <div className="p-4 pt-7 bg-primary-green-200 min-w-screen min-h-screen">
      <div className="bg-neutral-white rounded-xl p-3 text-sm">
        <h1 className="font-karla-bold text-primary-green-900 text-2xl p-1.5">
          Contact Us
        </h1>
        <form className="font-karla text-primary-green-900 mt-2">
          {/* contenedor de name y last name para tamaño escritorio */}
          <div className="">
            {/* first name */}
            <div className="p-1 w-full pt-2 flex flex-col gap-2">
              <label htmlFor="name">
                First Name <span className="text-primary-green-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="border border-b-green w-full rounded-md p-2.5"
              />
            </div>
            <div className="h-2.5">
              <span className="pl-1 text-primary-red ">
                This field es required
              </span>
            </div>

            {/* last name */}
            <div className="p-1 w-full pt-2 flex flex-col gap-2">
              <label htmlFor="name">
                First Name <span className="text-primary-green-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="border border-b-green w-full rounded-md p-2.5"
              />
            </div>
            <div className="h-4.5">
              <span className="pl-1 text-primary-red ">
                This field es required
              </span>
            </div>
          </div>
          {/* fin contenedor de name y last name para tamaño escritorio */}
        </form>
      </div>
    </div>
  );
}

export default App;
