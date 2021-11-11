/* eslint-disable vtex/prefer-early-return */
import type { FC } from 'react'
import { useIntl } from 'react-intl'
import React, { useMemo, useState, useContext } from 'react'
import { useMutation, useQuery } from 'react-apollo'
import { ToastContext } from 'vtex.styleguide'

import saveMasterdata from '../queries/saveMasterdata.gql'
import searchMasterdata from '../queries/searchMasterdata.gql'
import deleteMasterdata from '../queries/deleteMasterdata.gql'
import updateMasterdata from '../queries/updateMasterdata.gql'
import Context from '../Context/context'
import { provider } from '../utils/definedMessages'
import { ShowAlertOptions } from '../utils/showAlertOptions'

const Provider: FC = props => {
  const intl = useIntl()
  const { showToast } = useContext(ToastContext)
  const [name, setName] = useState('')
  const [cashback, setCashback] = useState('')

  const [rule, setRule] = useState('')
  const [value, setValue] = useState('')

  const [showAlert, setShowAlert] = useState(ShowAlertOptions.notShow)
  const [textValidate, setTextValidate] = useState<string[]>([''])
  const [modalDelete, setModalDelete] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)
  const [showImage, setShowImage] = useState(false)

  const [deleteId, setDeleteId] = useState<string>()
  const [editId, setEditId] = useState<string>()
  const { data, refetch } = useQuery(searchMasterdata)

  const [deleteMasterdataMutation] = useMutation(deleteMasterdata)
  const [saveMasterdataMutation] = useMutation(saveMasterdata)
  const [editMasterdataMutation] = useMutation(updateMasterdata)

  const valuesSearch = useMemo(() => {
    if (data !== undefined) {
      return data?.searchMasterdata
    }

    return []
  }, [data])

  const listEdit = useMemo(() => {
    return valuesSearch.map((element: DataValues, indexOf: number) => {
      return {
        id: element.id,
        name: element.name,
        cashback: element.cashback,
        index: indexOf,
      }
    })
  }, [valuesSearch])

  const handleCloseAlert = () => {
    setShowAlert(ShowAlertOptions.notShow)
  }

  function validateIfAllFieldsIsComplete() {
    const validation = []

    if (!name) {
      validation.push(intl.formatMessage(provider.errorName))
    }

    if (!cashback) {
      validation.push(intl.formatMessage(provider.errorCashback))
    }

    if (!rule) {
      validation.push(intl.formatMessage(provider.errorRule))
    }

    if (!value) {
      validation.push(intl.formatMessage(provider.errorValue))
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
      valueSave.rule = rule
      valueSave.cashback = cashback
      valueSave.value = value

      const returnSaving = await saving(valueSave)

      refetch()

      return returnSaving
    }
  }

  async function saving(valueSave: SaveValues) {
    const id = await saveMasterdataMutation({
      variables: { saveData: valueSave },
    })

    if (id.data.saveMasterdata.Id != null) {
      setShowAlert(ShowAlertOptions.alertSave)

      return true
    }

    setShowAlert(ShowAlertOptions.alertError)

    return false
  }

  async function clickDelete(id: string) {
    setModalDelete(true)
    setDeleteId(id)
  }

  async function deleteCashback() {
    setModalDelete(false)

    const returnDelete = await deleteMasterdataMutation({
      variables: { id: deleteId },
    })

    if (returnDelete) {
      showToast(intl.formatMessage(provider.sucessDelete))
      refetch()
      setDeleteId('')
    } else {
      showToast(intl.formatMessage(provider.errorDelete))
    }
  }

  async function clickEdit(index: number, id: string) {
    setModalEdit(true)
    setShowAlert(ShowAlertOptions.notShow)

    setName(valuesSearch[index].name)
    setRule(valuesSearch[index].rule)
    setCashback(valuesSearch[index].cashback)
    setValue(valuesSearch[index].value)

    setEditId(id)
  }

  async function editCashback() {
    setTextValidate([''])

    const validate = validateIfAllFieldsIsComplete()

    if (validate) {
      const valueSave: SaveValues = {}

      valueSave.name = name
      valueSave.rule = rule
      valueSave.cashback = cashback
      valueSave.value = value

      const returnEdit = await editMasterdataMutation({
        variables: { id: editId, saveData: valueSave },
      })

      if (returnEdit?.data?.updateMasterdata) {
        refetch()
        showToast(intl.formatMessage(provider.sucessEdit))
        setModalEdit(false)
        setEditId('')
      } else {
        showToast(intl.formatMessage(provider.errorEdit))
      }

      clearValue()
    }
  }

  function clearValue() {
    setName('')
    setShowAlert(ShowAlertOptions.notShow)

    setCashback('')
    setValue('')
    setRule('')
  }

  return (
    <Context.Provider
      value={{
        name,
        setName,
        cashback,
        setCashback,
        textValidate,
        showAlert,
        handleCloseAlert,
        valuesSearch,
        listEdit,
        deleteCashback,
        modalDelete,
        setModalDelete,
        clickDelete,
        editCashback,
        clickEdit,
        setModalEdit,
        modalEdit,
        showImage,
        setShowImage,
        clearValue,
        save,
        rule,
        setRule,
        value,
        setValue,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export default Provider
