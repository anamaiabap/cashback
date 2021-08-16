/* eslint-disable vtex/prefer-early-return */
import type { FC } from 'react'
import { useIntl } from 'react-intl'
import React, { useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-apollo'

import uploadFile from '../queries/uploadFile.gql'
import saveMasterdata from '../queries/saveMasterdata.gql'
import getProductsName from '../queries/getProductsName.gql'
import getSkusNames from '../queries/getSkusNames.gql'
import getBrandsNames from '../queries/getBrandsNames.gql'
import getCollectionsNames from '../queries/getCollectionsNames.gql'
import getCategoryName from '../queries/getCategoryName.gql'
import getSpecificationName from '../queries/getSpecificationName.gql'
import ContextAdd from '../Context/contextAdd'
import { provider } from '../utils/definedMessages'
import {
  htmlButtonOption,
  imageButtonOption,
  textButtonOption,
} from '../utils/buttonOptions'
import { ShowAlertOptions } from '../utils/showAlertOptions'

const enum ButtonOptions {
  image = 'image',
  text = 'text',
  html = 'html',
}

const ProviderAdd: FC = props => {
  const intl = useIntl()

  const [button, setButton] = useState(ButtonOptions.image)
  const [name, setName] = useState('')
  const [html, setHtml] = useState('')
  const [file, setFile] = useState({ files: null, result: null })
  const [text, setText] = useState('')
  const [conditions, setConditions] = useState({
    simpleStatements: [],
    operator: 'all',
  })

  const [showAlert, setShowAlert] = useState(ShowAlertOptions.notShow)
  const [textValidate, setTextValidate] = useState<string[]>([''])
  const [saveMasterdataMutation] = useMutation(saveMasterdata)
  const [saveMutation] = useMutation(uploadFile)

  const buttonOptions: {
    [key in ButtonOptions]: any
  } = useMemo(() => {
    return {
      image: { ...imageButtonOption, value: file.result },
      text: { ...textButtonOption, value: text },
      html: { ...htmlButtonOption, value: html },
    }
  }, [file, text, html])

  async function getUrl() {
    if (file.result !== null) {
      const url = await saveMutation({
        variables: { file: file.result?.[0] },
      })

      if (url != null) return url.data.uploadFile.fileUrl
    } else {
      return null
    }
  }

  const handleCloseAlert = () => {
    setShowAlert(ShowAlertOptions.notShow)
  }

  function chooseFile(files: any) {
    setFile({ ...file, ...{ result: files } })
  }

  function validateIfAllFieldsIsComplete() {
    const validation = []

    if (!name) {
      validation.push(intl.formatMessage(provider.errorName))
    }

    const selectedOption = buttonOptions[button]

    const validationResult = selectedOption.validate(selectedOption.value)

    if (validationResult) validation.push(validationResult)

    if (conditions.simpleStatements.length === 0) {
      validation.push(intl.formatMessage(provider.errorSimpleStatement))
    }

    if (validation.length === 0) return true

    setTextValidate(validation)

    return false
  }

  async function save() {
    setShowAlert(ShowAlertOptions.notShow)
    setTextValidate([''])
    const validate = validateIfAllFieldsIsComplete()

    if (validate) {
      setTextValidate([''])
      const valueSave: SaveValues = {}

      valueSave.name = name
      valueSave.operator = conditions.operator
      valueSave.simpleStatements = conditions.simpleStatements

      const selectedOption = buttonOptions[button]

      if (selectedOption.type === 'image') valueSave.content = await getUrl()
      else valueSave.content = selectedOption.value

      valueSave.type = selectedOption.type

      saving(valueSave)
    }
  }

  async function saving(valueSave: SaveValues) {
    const id = await saveMasterdataMutation({
      variables: { saveData: valueSave },
    })

    if (id.data.saveMasterdata.Id != null) {
      setShowAlert(ShowAlertOptions.alertSave)
    } else {
      setShowAlert(ShowAlertOptions.alertError)
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
    <ContextAdd.Provider
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
        nameProducts,
        nameSku,
        nameBrands,
        nameCollections,
        nameCategory,
        nameSpecification,
        setConditions,
      }}
    >
      {props.children}
    </ContextAdd.Provider>
  )
}

export default ProviderAdd
