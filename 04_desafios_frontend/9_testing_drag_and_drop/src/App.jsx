import "./App.css";
import {useState} from 'react';
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

function App() {
  const [items, setItems] = useState([
    {id: 1, title: "item 1"},
    {id: 2, title: "item 2"},
    {id: 3, title: "item 3"},
    {id: 4, title: "item 4"},
    {id: 5, title: "item 5"},
    {id: 6, title: "item 6"},
    {id: 7, title: "item 7"},
    {id: 8, title: "item 8"},
  ]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

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
        {items.map((item) =>  <SortableItem key={item.id} id={item.id} />)}
      </SortableContext>
    </DndContext>
  );
  
  function handleDragEnd(event) {
    const {active, over} = event;
    console.log(event);
    
    
    if (active.id !== over.id) {
      setItems((items) => {
        //const oldIndex = items.indexOf(active.id);
        const oldIndex = items.findIndex(item => item.id === active.id)
        //const newIndex = items.indexOf(over.id);
        const newIndex = items.findIndex(item => item.id === over.id);
        
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}

export default App

import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
    <div className="border p-3 border-red-400 text-blue-700 mb-3" 
    ref={setNodeRef} 
    style={style} 
    {...attributes} 
    {...listeners}>
      {/* ... */}
      <p>{props.id}</p>
    </div>
  );
}