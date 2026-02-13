import type { Data } from "./Data"
import type { ShowList } from "./ShowList"

export type Clear_type = {
  data: Data
  setLocalStorageData: (data: Data) => void
  handleSetData: (data: Data) => void
  showList : string
  handleSetShowList: (value: ShowList) => void
}