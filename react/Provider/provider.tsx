/* eslint-disable vtex/prefer-early-return */
import type { FC } from 'react'
import React, { useState } from 'react'

import Context from '../Context/context'

const Provider: FC = props => {
  const [button, setButton] = useState(1)
  const [name, setName] = useState('')
  const [html, setHtml] = useState('')
  const [file, setFile] = useState({ files: null, result: null })
  const [text, setText] = useState('')
  const [conditions, setConditions] = useState({
    simpleStatements: [],
    operator: 'all',
  })

  const [textValidate, setTextValidate] = useState<string[]>([''])

  function chooseFile(files: any) {
    setFile({ ...file, ...{ result: files } })
  }

  function validateIfAllFieldsIsComplete() {
    const validation = []

    if (name === null || name === undefined || name === '') {
      validation.push('Preencha o campo "Nome da badge"')
    }

    if (button === 1 && (file.result === null || file.result === undefined)) {
      validation.push('Adicione uma imagem no campo "Tipo de badge"')
    }

    if (button === 2 && (text === null || text === undefined || text === '')) {
      validation.push('Preencha o campo "Insira o texto da badge"')
    }

    if (button === 3 && (html === null || html === undefined || html === '')) {
      validation.push('Preencha o campo "Insira o HTML da badge"')
    }

    if (conditions.simpleStatements.length === 0) {
      validation.push('Preencha o campo "Regras de ativação"')
    }

    if (validation === []) return true

    setTextValidate(validation)

    return false
  }

  function save() {
    const validate = validateIfAllFieldsIsComplete()

    if (validate) {
      const valueSave: SaveValues = {}

      valueSave.name = name
      valueSave.operator = conditions.operator
      valueSave.simpleStatements = conditions.simpleStatements

      if (button === 1) {
        valueSave.type = 'image'
        if (file.result != null) {
          valueSave.typeValue = file.result
        }
      }

      if (button === 2) {
        valueSave.type = 'text'
        valueSave.typeValue = text
      }

      if (button === 3) {
        valueSave.type = 'html'
        valueSave.typeValue = html
      }
    }
  }

  function setConditionsFunction(statements: []) {
    setConditions({ ...conditions, ...{ simpleStatements: statements } })
  }

  function handleToggleOperator(operador: string) {
    setConditions({ ...conditions, ...{ operator: operador } })
  }

  return (
    <Context.Provider
      value={{
        button,
        setButton,
        name,
        setName,
        html,
        setHtml,
        chooseFile,
        file,
        text,
        setText,
        save,
        conditions,
        setConditionsFunction,
        handleToggleOperator,
        textValidate,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export default Provider
