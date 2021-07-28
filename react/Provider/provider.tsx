/* eslint-disable vtex/prefer-early-return */
import type { FC } from 'react'
import React, { useState } from 'react'
import { useMutation } from 'react-apollo'

import uploadFile from '../queries/uploadFile.gql'
import saveMasterdata from '../queries/saveMasterdata.gql'
import Context from '../Context/context'

const BUTTON_CHOICE_IS_IMAGEM = 1
const BUTTON_CHOICE_IS_TEXT = 2
const BUTTON_CHOICE_IS_HTML = 3

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

  const [showAlert, setShowAlert] = useState(0)

  const [textValidate, setTextValidate] = useState<string[]>([''])
  const [saveMutation] = useMutation(uploadFile)
  const [saveMasterdataMutation] = useMutation(saveMasterdata)

  const handleCloseAlert = () => {
    setShowAlert(0)
  }

  function chooseFile(files: any) {
    setFile({ ...file, ...{ result: files } })
  }

  function validateIfAllFieldsIsComplete() {
    const validation = []

    if (!name) {
      validation.push('Preencha o campo "Nome da badge"')
    }

    if (
      button === BUTTON_CHOICE_IS_IMAGEM &&
      (file.result === null || file.result === undefined)
    ) {
      validation.push('Adicione uma imagem no campo "Tipo de badge"')
    }

    if (button === BUTTON_CHOICE_IS_TEXT && !text) {
      validation.push('Preencha o campo "Insira o texto da badge"')
    }

    if (button === BUTTON_CHOICE_IS_HTML && !html) {
      validation.push('Preencha o campo "Insira o HTML da badge"')
    }

    if (conditions.simpleStatements.length === 0) {
      validation.push('Preencha o campo "Regras de ativação"')
    }

    if (validation.length === 0) return true

    setTextValidate(validation)

    return false
  }

  async function save() {
    setShowAlert(0)
    setTextValidate([''])
    const validate = validateIfAllFieldsIsComplete()

    if (validate) {
      const valueSave: SaveValues = {}

      valueSave.name = name
      valueSave.operator = conditions.operator
      valueSave.simpleStatements = conditions.simpleStatements

      if (button === BUTTON_CHOICE_IS_IMAGEM) {
        valueSave.type = 'image'
        if (file.result !== null) {
          const url = await saveMutation({
            variables: { file: file.result?.[0] },
          })

          if (url != null) valueSave.content = url.data.uploadFile.fileUrl
        }
      }

      if (button === BUTTON_CHOICE_IS_TEXT) {
        valueSave.type = 'text'
        valueSave.content = text
      }

      if (button === BUTTON_CHOICE_IS_HTML) {
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
        showAlert,
        handleCloseAlert,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export default Provider
