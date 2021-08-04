/* eslint-disable vtex/prefer-early-return */
import type { FC } from 'react'
import React, { useMemo, useState } from 'react'
import { useQuery } from 'react-apollo'

import getProductsName from '../queries/getProductsName.gql'
import getSkusNames from '../queries/getSkusNames.gql'
import getBrandsNames from '../queries/getBrandsNames.gql'
import getCollectionsNames from '../queries/getCollectionsNames.gql'
import getCategoryName from '../queries/getCategoryName.gql'
import getSpecificationName from '../queries/getSpecificationName.gql'
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

    if (validation.length === 0) return true

    setTextValidate(validation)

    return false
  }

  function save() {
    const validate = validateIfAllFieldsIsComplete()

    if (validate) {
      setTextValidate([''])
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

  const { data: dataProductsNames } = useQuery(getProductsName)
  const { data: dataSkuNames } = useQuery(getSkusNames)
  const { data: dataBrandsNames } = useQuery(getBrandsNames)
  const { data: dataCollectionsNames } = useQuery(getCollectionsNames)
  const { data: dataCategoryNames } = useQuery(getCategoryName)
  const { data: dataSpecificationNames } = useQuery(getSpecificationName)

  const nameProducts = useMemo(() => {
    if (dataProductsNames === undefined) return

    const namesAndIds: Array<{ label: string; value: string }> = []

    dataProductsNames.getProductsNames.forEach(
      (element: { name: string; id: string }) => {
        namesAndIds.push({ label: element.name, value: element.id })
      }
    )

    return namesAndIds
  }, [dataProductsNames])

  const nameSku = useMemo(() => {
    if (dataSkuNames === undefined) return
    const namesAndIds: Array<{ label: string; value: string }> = []

    dataSkuNames.getSkuNames.forEach(
      (element: { name: string; id: string }) => {
        namesAndIds.push({ label: element.name, value: element.id })
      }
    )

    return namesAndIds
  }, [dataSkuNames])

  const nameBrands = useMemo(() => {
    if (dataBrandsNames === undefined) return
    const namesAndIds: Array<{ label: string; value: string }> = []

    dataBrandsNames.getBrandsNames.forEach(
      (element: { name: string; id: string }) => {
        namesAndIds.push({ label: element.name, value: element.id })
      }
    )

    return namesAndIds
  }, [dataBrandsNames])

  const nameCollections = useMemo(() => {
    if (dataCollectionsNames === undefined) return
    const namesAndIds: Array<{ label: string; value: string }> = []

    dataCollectionsNames.getCollectionsNames.forEach(
      (element: { name: string; id: string }) => {
        namesAndIds.push({ label: element.name, value: element.id })
      }
    )

    return namesAndIds
  }, [dataCollectionsNames])

  const nameCategory = useMemo(() => {
    if (dataCategoryNames === undefined) return
    const namesAndIds: Array<{ label: string; value: string }> = []

    dataCategoryNames.getCategoryName.forEach(
      (element: { name: string; id: string }) => {
        namesAndIds.push({ label: element.name, value: element.id })
      }
    )

    return namesAndIds
  }, [dataCategoryNames])

  const nameSpecification = useMemo(() => {
    if (dataSpecificationNames === undefined) return
    const namesAndIds: Array<{ label: string; value: string }> = []

    dataSpecificationNames.getSpecificationName.forEach(
      (element: { name: string }) => {
        namesAndIds.push({ label: element.name, value: element.name })
      }
    )

    return namesAndIds
  }, [dataSpecificationNames])

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
        nameProducts,
        nameSku,
        nameBrands,
        nameCollections,
        nameCategory,
        nameSpecification,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export default Provider
