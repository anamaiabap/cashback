import React from 'react'

import { ShowAlertOptions } from '../utils/showAlertOptions'

interface ContextType {
  button: ButtonOptions
  setButton: (button: ButtonOptions) => void
  name: string
  setName: (name: string) => void
  html: string
  setHtml: (html: string) => void
  chooseFile: (files: any) => void
  file: any
  text: string
  setText: (text: string) => void
  save: () => void
  conditions: {
    simpleStatements: Array<{
      subject: string
      verb: string
      object: unknown
    }>
    operator: string
  }
  setConditionsFunction: (object: any) => void
  handleToggleOperator: (operator: string) => void
  textValidate: string[]
  showAlert: number
  handleCloseAlert: () => void
  nameProducts: Name[] | undefined
  nameSku: Name[] | undefined
  nameBrands: Name[] | undefined
  nameCollections: Name[] | undefined
  nameCategory: Name[] | undefined
  nameSpecification: Name[] | undefined
}
const Context = React.createContext<ContextType>({
  button: 'image',
  setButton: () => {},
  name: '',
  setName: () => {},
  html: '',
  setHtml: () => {},
  chooseFile: () => {},
  file: '',
  text: '',
  setText: () => {},
  save: () => {},
  conditions: { simpleStatements: [], operator: '' },
  setConditionsFunction: () => {},
  handleToggleOperator: () => {},
  textValidate: [],
  showAlert: ShowAlertOptions.notShow,
  handleCloseAlert: () => {},
  nameProducts: [{ label: '', value: '' }],
  nameSku: [{ label: '', value: '' }],
  nameBrands: [{ label: '', value: '' }],
  nameCollections: [{ label: '', value: '' }],
  nameCategory: [{ label: '', value: '' }],
  nameSpecification: [{ label: '', value: '' }],
})

export default Context
