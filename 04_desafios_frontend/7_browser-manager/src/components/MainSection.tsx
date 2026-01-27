import { useState } from "react";
import json from "./data.json";
import Switch from "./Switch.tsx";

export default function MainSection() {
  const [activeBtn, setActiveBtn] = useState<"All" | "Active" | "Inactive">(
    "All",
  );
  const [data, setData] = useState<
    | {
        logo: string;
        name: string;
        description: string;
        isActive: boolean;
        id: number;
      }[]
    | []
  >(json);

  function handleData(index: number, bool: boolean) {
    let newData = data.map(({ logo, name, description, isActive, id }) => {
      if (id === index) {
        return { logo, name, description, isActive: bool, id };
      } else {
        return { logo, name, description, isActive, id };
      }
    });
    setData(newData);
  }
  function removeTarget(index: number) {
    let d = [];
    for (const el of data) {
      if (el.id === index) {
        continue;
      } else {
        d.push(el);
      }
    }
    setData(d);
  }

  let cards = data.map(({ logo, name, description, isActive, id }) => (
    <Card
      key={id}
      activeBtn={activeBtn}
      description={description}
      isActive={isActive}
      logo={logo}
      name={name}
      id={id}
      handleDt={handleData}
      remove={removeTarget}
    />
  ));

  return (
    <div
      className="
     w-full md:max-w-260
    md:flex md:flex-col md:justify-between
    grid grid-cols-1 text-center gap-5 mt-10 "
    >
      <div className="flex flex-col gap-5 md:flex-row md:justify-between md:w-full">
        <h1 className="font-notoSans-bold text-3xl dark:text-white text-ks-nautral-900">
          Extensions List
        </h1>

        {/* botones */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setActiveBtn("All")}
            className={`${activeBtn === "All" ? "bg-ks-red-500 hover:bg-ks-red-400 text-white hover:text-white dark:hover:text-ks-nautral-800 dark:bg-ks-red-400 shadow-own   dark:text-ks-nautral-900" : "dark:text-white text-ks-nautral-900 dark:hover:bg-ks-nautral-600 dark:hover:text-white dark:focus:bg-ks-nautral-600"} 
            cursor-pointer hover:text-ks-nautral-600
            focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1
            p-2 dark:bg-ks-nautral-700 dark:border dark:border-ks-nautral-600 shadow-own pl-4 pr-4 rounded-3xl font-notoSans-medium text-[16px] bg-ks-nautral-0`}
          >
            All
          </button>
          <button
            onClick={() => setActiveBtn("Active")}
            className={`${activeBtn === "Active" ? "bg-ks-red-500 hover:bg-ks-red-400 text-white hover:text-white dark:hover:text-ks-nautral-800 dark:bg-ks-red-400 shadow-own   dark:text-ks-nautral-900" : "dark:text-white text-ks-nautral-900 dark:hover:bg-ks-nautral-600 dark:hover:text-white dark:focus:bg-ks-nautral-600"} 
            cursor-pointer hover:text-ks-nautral-600
            focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1
            p-2 dark:bg-ks-nautral-700 dark:border dark:border-ks-nautral-600 shadow-own pl-4 pr-4 rounded-3xl font-notoSans-medium text-[16px] bg-ks-nautral-0`}
          >
            Active
          </button>
          <button
            onClick={() => setActiveBtn("Inactive")}
            className={`${activeBtn === "Inactive" ? "bg-ks-red-500 hover:bg-ks-red-400 text-white hover:text-white dark:hover:text-ks-nautral-800 dark:bg-ks-red-400 shadow-own   dark:text-ks-nautral-900" : "dark:text-white text-ks-nautral-900 dark:hover:bg-ks-nautral-600 dark:hover:text-white dark:focus:bg-ks-nautral-600"} 
            cursor-pointer hover:text-ks-nautral-600
            focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1
            p-2 dark:bg-ks-nautral-700 dark:border dark:border-ks-nautral-600 shadow-own pl-4 pr-4 rounded-3xl font-notoSans-medium text-[16px] bg-ks-nautral-0`}
          >
            Inactive
          </button>
        </div>
      </div>
      {/* targetas */}
      <div className="mt-5 flex flex-col gap-3 md:grid md:grid-cols-3">
        {cards}
      </div>
    </div>
  );
}

function Card({
  activeBtn,
  logo,
  name,
  description,
  isActive,
  id,
  remove,
  handleDt,
}: {
  activeBtn: string;
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
  id: number;
  remove: (index: number) => void;
  handleDt: (index: number, bool: boolean) => void;
}) {
  let checkActive = activeBtn === "All" || (activeBtn === "Active" && isActive);
  let checkInactives = activeBtn === "Inactive" && isActive === false;

  return (
    <div
      className={`${checkInactives ? "" : checkActive ? "" : "hidden"}
      dark:bg-ks-nautral-800 
      shadow-own bg-ks-nautral-0 rounded-2xl p-4.5 dark:border dark:border-ks-nautral-600
      flex flex-col justify-between
      
      `}
    >
      <div className="flex items-start">
        <img src={logo} alt="logo item" />
        <div className="text-left ml-4 max-w-55">
          <h1
            className="text-ks-nautral-900 font-notoSans-bold text-[19px] 
          dark:text-ks-nautral-0
          "
          >
            {name}
          </h1>
          <p className="text-ks-nautral-600 dark:text-gray-400 font-notoSans-medium text-[14.5px]">
            {description}
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-8 items-center">
        <button
          onClick={() => remove(id)}
          className="border border-ks-nautral-300 dark:border-ks-nautral-600 dark:text-ks-nautral-300 dark:hover:bg-ks-red-400 dark:hover:text-ks-nautral-900
          hover:text-white cursor-pointer
          p-2 hover:bg-ks-red-500 rounded-3xl text-ks-nautral-900 dark:text-gray-400  pl-4 pr-4 
          focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-0
          focus:bg-ks-nautral-100 dark:focus:bg-ks-nautral-600
          font-notoSans-medium"
        >
          Remove
        </button>
        <Switch inicialState={isActive} handleDt={handleDt} id={id} />
      </div>
    </div>
  );
}
