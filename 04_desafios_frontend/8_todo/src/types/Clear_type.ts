import type { Data } from "./Data"

export type Clear_type = {
  data: Data
  setLocalStorageData: (data: Data) => void
  handleSetData: (data: Data) => void
}