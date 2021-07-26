/* eslint-disable vtex/prefer-early-return */
import type { FC } from 'react'
import React, { useState } from 'react'
import { useMutation } from 'react-apollo'

import uploadFile from '../queries/uploadFile.gql'
import saveMasterdata from '../queries/saveMasterdata.gql'
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
  const [saveMutation] = useMutation(uploadFile)
  const [saveMasterdataMutation] = useMutation(saveMasterdata)

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

    if (validation.length === 0) return true

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
        if (file.result !== null) {
          const url = await saveMutation({
            variables: { file: file.result?.[0] },
          })

          if (url != null) valueSave.content = url.data.uploadFile.fileUrl
        }
      }

      if (button === 2) {
        valueSave.type = 'text'
        valueSave.content = text
      }

      if (button === 3) {
        valueSave.type = 'html'
        valueSave.content = html
      }

      saving(valueSave)
    }
  }

  async function saving(valueSave: SaveValues) {
    const id = await saveMasterdataMutation({
      variables: { saveData: valueSave },
    })

    if (id.data.saveMasterdata.Id != null) {
      setShowAlert(1)
    } else {
      setShowAlert(2)
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
