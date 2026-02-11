import type { Data } from "./Data"

export type FormularioProps = {
  idCounter:number
  handleCount:() => void
  data: Data
  setLocalStorageData: (data: Data) => void
  handleSetData: (data: Data) => void
}