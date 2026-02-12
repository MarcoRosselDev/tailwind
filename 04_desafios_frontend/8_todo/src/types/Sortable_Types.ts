export type Sortable_Types = { 
  prass: string;
  checked: boolean;
  handleDelete: (id: number) => void;
  id: number;
  handleStateCheck: (id: number) => void;
  showList: string;
}

export type Task_types =  Sortable_Types & {
  onInteractiveClick: (e: React.MouseEvent<Element, MouseEvent>) => void
}