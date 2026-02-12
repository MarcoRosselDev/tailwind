import { useSortable } from "@dnd-kit/sortable";
import type { Sortable_Types } from "../types/Sortable_Types";
import { CSS } from "@dnd-kit/utilities";
import Task from "./Task";

function Sortable_item ({ prass, checked, handleDelete, id, handleStateCheck, showList }: Sortable_Types) {
  const { attributes, listeners, setNodeRef, transform, transition , isDragging } = useSortable({ id: id , disabled: false});
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const handleInteractiveElementClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="sortable-item w-full" >
      <Task  checked={checked} handleStateCheck={handleStateCheck} handleDelete={handleDelete} id={id} prass={prass} showList={showList} key={id} onInteractiveClick={handleInteractiveElementClick} />
    </div>
  )
}

export default Sortable_item