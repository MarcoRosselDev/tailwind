function App() {
  return (
    <div className="bg-black h-dvh">
      {/* <h1 className="text-3xl font-bold underline hover:text-blue-800">
        Hello world!
      </h1> */}
      <h1 className="text-3xl bg-amber-400 text-blue-800 hover:bg-amber-100 hover:text-amber-800">
        testing colors
      </h1>
      <h2 className="text-2xl bg-personal-blue">testing colors</h2>
      <div>
        <h3 className="text-1xl bg-marcus">lkasdf</h3>
        <p className="bg-[#79d2e6] hover:bg-marcus">lkajsdf</p>
      </div>

      {/* ejemplo 01 de la documentacion */}
      <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img
          className="size-12 shrink-0"
          src="https://avatars.githubusercontent.com/u/97572795?v=4"
          alt="mi imagen de usuario de github"
        />
        <div>
          <div className="text-xl font-medium text-black dark:text-white">
            ChitChat
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            You have a new message!
          </p>
        </div>
      </div>

      {/* ejemplo 2 targeta responsiva */}
      <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 bg-blue-900">
        <img
          className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="https://avatars.githubusercontent.com/u/97572795?v=4"
          alt="mi imagen de usuario de github"
        />
        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-black">Erin Lindford</p>
            <p className="font-medium text-gray-500">Product Engineer</p>
          </div>
          <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
