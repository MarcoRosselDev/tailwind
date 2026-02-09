import { useState } from "react";
import "./App.css";
import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import {SortableItem} from './SortableItem.jsx';

function App() {

  const [items, setItems] = useState([
    {id:1, title: "some text 1"},
    {id:2, title: "some text 2"},
    {id:3, title: "some text 3"},
    {id:4, title: "some text 4"},
    {id:5, title: "some text 5"},
    {id:6, title: "some text 6"},
  ])
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const getTaskPos = (id) => items.findIndex((item) => item.id === id);

  function handleDragEnd(event) {
    const {active, over} = event;
    
    if (active.id !== over.id) {
      setItems((items) => {
        const original = getTaskPos(active.id)
        const newPos = getTaskPos(over.id)
        //const oldIndex = items.indexOf(active.id);
        //const newIndex = items.indexOf(over.id);
        
        return arrayMove(items, original, newPos);
      });
    }
  }

  return (
    <DndContext 
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext 
        items={items}
        strategy={verticalListSortingStrategy}
      >
        {items.map((item, index) => <SortableItem key={item.id} id={item.id} title={item.title} />)}
      </SortableContext>
    </DndContext>
  );
}

export default App