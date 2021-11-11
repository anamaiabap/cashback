import React from 'react'

import { ShowAlertOptions } from '../utils/showAlertOptions'

interface ContextType {
  name: string
  setName: (name: string) => void
  cashback: string
  setCashback: (cashback: string) => void
  textValidate: string[]
  showAlert: number
  handleCloseAlert: () => void
  valuesSearch: DataValues[]
  listEdit: Array<{
    id: string
    name: string
    cashback: string
    index: number
  }>
  deleteCashback: () => void
  modalDelete: boolean
  setModalDelete: (modalDelete: boolean) => void
  clickDelete: (id: string) => void
  editCashback: () => void
  clickEdit: (index: number, id: string) => void
  setModalEdit: (modalEdit: boolean) => void
  modalEdit: boolean
  showImage: boolean
  setShowImage: (showImage: boolean) => void
  clearValue: () => void
  save: () => void
  rule: string
  setRule: (rule: string) => void
  value: string
  setValue: (value: string) => void
}
const Context = React.createContext<ContextType>({
  name: '',
  setName: () => {},
  cashback: '',
  setCashback: () => {},
  textValidate: [],
  showAlert: ShowAlertOptions.notShow,
  handleCloseAlert: () => {},
  valuesSearch: [],
  listEdit: [],
  deleteCashback: () => {},
  modalDelete: false,
  setModalDelete: () => {},
  clickDelete: () => {},
  editCashback: () => {},
  clickEdit: () => {},
  setModalEdit: () => {},
  modalEdit: false,
  showImage: false,
  setShowImage: () => {},
  clearValue: () => {},
  save: () => {},
  rule: '',
  setRule: () => {},
  value: '',
  setValue: () => {},
})

export default Context
