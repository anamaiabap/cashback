import React from 'react'

interface ContextType {
  button: number
  setButton: (button: number) => void
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
    simpleStatements: never[]
    operator: string
  }
  setConditionsFunction: (object: any) => void
  handleToggleOperator: (operator: string) => void
  textValidate: string[]
}
const Context = React.createContext<ContextType>({
  button: 1,
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
})

export default Context
