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
    <div className="grid grid-cols-1 text-center gap-5 mt-10">
      <h1 className="font-notoSans-bold text-3xl dark:text-white text-ks-nautral-900">
        Extensions List
      </h1>
      {/* botones */}
      <div className="flex gap-3 justify-center">
        <button
          onClick={() => setActiveBtn("All")}
          className={`${activeBtn === "All" ? "bg-ks-red-500 text-white dark:bg-ks-red-400 dark:text-ks-nautral-900" : "dark:text-white text-ks-nautral-900"} p-2 dark:bg-ks-nautral-600 shadow-own pl-4 pr-4 rounded-3xl font-notoSans-medium text-[16px] bg-ks-nautral-0`}
        >
          All
        </button>
        <button
          onClick={() => setActiveBtn("Active")}
          className={`${activeBtn === "Active" ? "bg-ks-red-500 text-white dark:bg-ks-red-400 dark:text-ks-nautral-900" : "dark:text-white text-ks-nautral-900"} p-2 dark:bg-ks-nautral-600 shadow-own pl-4 pr-4 rounded-3xl font-notoSans-medium text-[16px] bg-ks-nautral-0`}
        >
          Active
        </button>
        <button
          onClick={() => setActiveBtn("Inactive")}
          className={`${activeBtn === "Inactive" ? "bg-ks-red-500 text-white dark:bg-ks-red-400 dark:text-ks-nautral-900" : "dark:text-white text-ks-nautral-900"} p-2 dark:bg-ks-nautral-600 shadow-own pl-4 pr-4 rounded-3xl font-notoSans-medium text-[16px] bg-ks-nautral-0`}
        >
          Inactive
        </button>
      </div>
      {/* targetas */}
      <div className="mt-5 flex flex-col gap-3">{cards}</div>
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
      className={`${checkInactives ? "" : checkActive ? "" : "hidden"} shadow-own bg-ks-nautral-0 rounded-2xl p-4.5 `}
    >
      <div className="flex items-start">
        <img src={logo} alt="logo item" />
        <div className="text-left ml-4">
          <h1 className="text-ks-nautral-900 font-notoSans-bold text-[19px]">
            {name}
          </h1>
          <p className="text-ks-nautral-600 font-notoSans-medium text-sm">
            {description}
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <button
          onClick={() => remove(id)}
          className="border border-ks-nautral-300 p-2 rounded-3xl"
        >
          Remove
        </button>
        <Switch inicialState={isActive} handleDt={handleDt} id={id} />
      </div>
    </div>
  );
}
