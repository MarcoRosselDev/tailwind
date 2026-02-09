import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    "item 1",
    "item 2",
    "item 3",
    "item 4",
    "item 5",
    "item 6",
    "item 7",
  ]);
  const [dragIndex, setDragIndex] = useState(null);

  function handleDragStart(index) {
    setDragIndex(index);
  }
  function handleDragOver(e) {
    e.preventDefault();
  }
  function handleDrop(index) {
    const newItems = [...items];
    const draggedItem = newItems[dragIndex];
    newItems.splice(dragIndex, 1);
    newItems.splice(index, 0, draggedItem);
    setItems(newItems);
    setDragIndex(null);
  }

  return (
    <div>
      <ul>
        {items.map((item, index) => {
          return (
            <li
              key={index}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(index)}
              className={index === dragIndex ? "dragging" : ""}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
