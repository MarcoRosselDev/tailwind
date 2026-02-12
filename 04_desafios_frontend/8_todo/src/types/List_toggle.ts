import type { ShowList } from "./ShowList"

export type List_toggle = {
  showList : string
  handleSetShowList: (value: ShowList) => void
}