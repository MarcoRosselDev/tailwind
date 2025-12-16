import { useState } from "react";

function App() {
  const [hiddenMenu, setHiddenMenu] = useState(false);

  return (
    <div className="bg-blue-950 min-h-screen text-white">
      <div
        className={`w-full h-screen fixed top-0 left-0 bg-blue-tr ${
          hiddenMenu ? "" : "hidden"
        }`}
        onClick={() => setHiddenMenu((prev) => !prev)}
      ></div>
      <header className="flex justify-between">
        <p>logo</p>
        {/* div para que si clickeo fuera de la lista se cierre la lista y el div */}
        <div className="bg-red-800 border hover:bg-blue-800 absolute right-0 z-10">
          <div
            className="p-4 border-2"
            onClick={() => setHiddenMenu((prev) => !prev)}
          >
            <button>svg de amburgesa</button>
          </div>
          <ul className={`${hiddenMenu ? "" : "hidden"}`}>
            <li className="w-full text-center h-9 bg-black">
              <a
                href="http://www.github.com"
                target="_blank"
                className="hover:bg-orange-800 h-full border w-full flex justify-center"
              >
                check my github
              </a>
            </li>
            <li className="w-full text-center h-9 bg-black">
              <a
                href="http://www.google.com"
                target="_blank"
                className="hover:bg-orange-800 h-full border w-full flex justify-center"
              >
                ask google
              </a>
            </li>
            <li className="w-full text-center h-9 bg-black">
              <a
                href="http://www.youtube.com"
                target="_blank"
                className="hover:bg-orange-800 h-full border w-full flex justify-center"
              >
                go youtube
              </a>
            </li>
          </ul>
        </div>
      </header>
      <p>
        testing fonts Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Molestiae, laboriosam. Numquam earum quos aspernatur, atque ea non quo
        similique tempora quibusdam delectus sunt reiciendis perspiciatis!
        Maiores at perferendis deserunt a. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quasi odit necessitatibus accusantium
        laborum ducimus, sapiente reprehenderit debitis aut harum laboriosam
        dolorum in quam officia inventore temporibus a dolores! Cumque, eius.
      </p>
      <p>
        testing fonts Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Molestiae, laboriosam. Numquam earum quos aspernatur, atque ea non quo
        similique tempora quibusdam delectus sunt reiciendis perspiciatis!
        Maiores at perferendis deserunt a. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quasi odit necessitatibus accusantium
        laborum ducimus, sapiente reprehenderit debitis aut harum laboriosam
        dolorum in quam officia inventore temporibus a dolores! Cumque, eius.
      </p>
      <p>
        testing fonts Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Molestiae, laboriosam. Numquam earum quos aspernatur, atque ea non quo
        similique tempora quibusdam delectus sunt reiciendis perspiciatis!
        Maiores at perferendis deserunt a. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quasi odit necessitatibus accusantium
        laborum ducimus, sapiente reprehenderit debitis aut harum laboriosam
        dolorum in quam officia inventore temporibus a dolores! Cumque, eius.
      </p>
      <p>
        testing fonts Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Molestiae, laboriosam. Numquam earum quos aspernatur, atque ea non quo
        similique tempora quibusdam delectus sunt reiciendis perspiciatis!
        Maiores at perferendis deserunt a. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quasi odit necessitatibus accusantium
        laborum ducimus, sapiente reprehenderit debitis aut harum laboriosam
        dolorum in quam officia inventore temporibus a dolores! Cumque, eius.
      </p>
      <p>
        testing fonts Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Molestiae, laboriosam. Numquam earum quos aspernatur, atque ea non quo
        similique tempora quibusdam delectus sunt reiciendis perspiciatis!
        Maiores at perferendis deserunt a. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quasi odit necessitatibus accusantium
        laborum ducimus, sapiente reprehenderit debitis aut harum laboriosam
        dolorum in quam officia inventore temporibus a dolores! Cumque, eius.
      </p>
    </div>
  );
}

export default App;
