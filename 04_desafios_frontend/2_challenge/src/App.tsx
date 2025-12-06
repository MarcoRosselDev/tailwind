import logo from "./assets/images/logo.svg";
import Units from "./components/Units";
//import Header from "./components/Header";

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen text-neutral-0 desktop:max-w-xl p-4">
      <header className="flex justify-between">
        <img src={logo} alt="logo weather now app" className=" w-36 h-10" />
        <Units />
      </header>
      <main>{/* <Header /> */}</main>
    </div>
  );
}

export default App;
