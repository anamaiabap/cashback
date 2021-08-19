/* eslint-disable vtex/prefer-early-return */
import type { FC } from 'react'
import { useIntl } from 'react-intl'
import React, { useMemo, useState, useContext } from 'react'
import { useMutation, useQuery } from 'react-apollo'
import { ToastContext } from 'vtex.styleguide'

import uploadFile from '../queries/uploadFile.gql'
import saveMasterdata from '../queries/saveMasterdata.gql'
import getProductsName from '../queries/getProductsName.gql'
import getSkusNames from '../queries/getSkusNames.gql'
import getBrandsNames from '../queries/getBrandsNames.gql'
import getCollectionsNames from '../queries/getCollectionsNames.gql'
import getCategoryName from '../queries/getCategoryName.gql'
import getSpecificationName from '../queries/getSpecificationName.gql'
import searchMasterdata from '../queries/searchMasterdata.gql'
import deleteMasterdata from '../queries/deleteMasterdata.gql'
import updateMasterdata from '../queries/updateMasterdata.gql'
import Context from '../Context/context'
import { provider } from '../utils/definedMessages'
import {
  htmlButtonOption,
  imageButtonOption,
  textButtonOption,
  ButtonOptions,
} from '../utils/buttonOptions'
import { ShowAlertOptions } from '../utils/showAlertOptions'

const Provider: FC = props => {
  const intl = useIntl()
  const { showToast } = useContext(ToastContext)
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
  const [modalDelete, setModalDelete] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)
  const [showImage, setShowImage] = useState(false)

  const [deleteId, setDeleteId] = useState<string>()
  const [editId, setEditId] = useState<string>()
  const { data, refetch } = useQuery<BadgesData>(searchMasterdata)
  const [deleteMasterdataMutation] = useMutation(deleteMasterdata)
  const [saveMasterdataMutation] = useMutation(saveMasterdata)
  const [editMasterdataMutation] = useMutation(updateMasterdata)
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

    if (
      (text && html) ||
      (text && file.result) ||
      (html && file.result) ||
      (file.result && text && html)
    ) {
      validation.push(intl.formatMessage(provider.errorMoreThanOneTypeOfBadge))
    }

    const selectedOption = buttonOptions[button]

    const validationResult = selectedOption.validate(selectedOption.value)

    if (validationResult) validation.push(validationResult)

    if (conditions.simpleStatements.length === 0) {
      validation.push(intl.formatMessage(provider.errorSimpleStatement))
    }

    setTextValidate(validation)

    if (validation.length === 0) return true

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

      const returnSaving = await saving(valueSave)

      refetch()

      return returnSaving
    }
  }

  async function saving(valueSave: SaveValues) {
    const id = await saveMasterdataMutation({
      variables: { saveData: valueSave },
    })

    if (id.data.saveMasterdata?.Id != null) {
      setShowAlert(ShowAlertOptions.alertSave)

      return true
    }

    setShowAlert(ShowAlertOptions.alertError)

    return false
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

  const valuesSearchBadges = useMemo(() => {
    if (data !== undefined) return data?.searchMasterdata

    return []
  }, [data])

  const listBadgesEdit = useMemo(() => {
    return valuesSearchBadges.map(
      (element: BadgesDataValues, indexOf: number) => {
        return {
          id: element.id,
          name: element.name,
          type: element.type,
          index: indexOf,
        }
      }
    )
  }, [valuesSearchBadges])

  async function clickDelete(id: string) {
    setModalDelete(true)
    setDeleteId(id)
  }

  async function deleteBadges() {
    setModalDelete(false)

    const returnDelete = await deleteMasterdataMutation({
      variables: { id: deleteId },
    })

    if (returnDelete) {
      showToast(intl.formatMessage(provider.sucessDelete))
      refetch()
    } else {
      showToast(intl.formatMessage(provider.errorDelete))
    }

    setDeleteId('')
  }

  async function clickEdit(index: number, id: string) {
    setModalEdit(true)
    setShowAlert(ShowAlertOptions.notShow)

    const statementList: any = valuesSearchBadges[index].simpleStatements.map(
      (elementStatement: { subject: string; verb: string; object: any }) => {
        return {
          subject: elementStatement.subject,
          verb: elementStatement.verb,
          object: elementStatement.object || '',
        }
      }
    )

    const conditionsValues = {
      simpleStatements: statementList,
      operator: valuesSearchBadges[index].operator,
    }

    setName(valuesSearchBadges[index].name)
    if (valuesSearchBadges[index].type === ButtonOptions.html) {
      setHtml(valuesSearchBadges[index].content)
      setButton(ButtonOptions.html)
    } else if (valuesSearchBadges[index].type === ButtonOptions.text) {
      setText(valuesSearchBadges[index].content)
      setButton(ButtonOptions.text)
    } else {
      chooseFile(valuesSearchBadges[index].content)
      setButton(ButtonOptions.image)
      setShowImage(true)
    }

    setConditions(conditionsValues)
    setEditId(id)
  }

  async function editBadges() {
    setTextValidate([''])

    const validate = validateIfAllFieldsIsComplete()

    if (validate) {
      const valueSave: SaveValues = {}

      valueSave.name = name
      valueSave.operator = conditions.operator
      valueSave.simpleStatements = conditions.simpleStatements

      const selectedOption = buttonOptions[button]

      if (
        selectedOption.type === ButtonOptions.image &&
        !(typeof file.result === 'string')
      ) {
        valueSave.content = await getUrl()
      } else {
        valueSave.content = selectedOption.value
      }

      valueSave.type = selectedOption.type

      const returnEdit = await editMasterdataMutation({
        variables: { id: editId, saveData: valueSave },
      })

      if (returnEdit?.data?.updateMasterdata) {
        refetch()
        showToast(intl.formatMessage(provider.sucessEdit))
        setModalEdit(false)
      } else {
        showToast(intl.formatMessage(provider.errorEdit))
      }
    }

    setEditId('')
  }

  function clearValue() {
    setName('')
    setShowAlert(ShowAlertOptions.notShow)

    setHtml('')
    setButton(ButtonOptions.image)
    setText('')
    chooseFile('')

    setConditions({
      simpleStatements: [],
      operator: '',
    })
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
        validateIfAllFieldsIsComplete,
        valuesSearchBadges,
        listBadgesEdit,
        deleteBadges,
        modalDelete,
        setModalDelete,
        clickDelete,
        editBadges,
        clickEdit,
        setModalEdit,
        modalEdit,
        showImage,
        setShowImage,
        clearValue,
        save,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export default Provider
