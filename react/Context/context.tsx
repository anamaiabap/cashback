import React from 'react'

import { ShowAlertOptions } from '../utils/showAlertOptions'

interface ContextType {
  button: ButtonOptions
  setButton: (button: any) => void
  name: string
  setName: (name: string) => void
  html: string
  setHtml: (html: string) => void
  chooseFile: (files: any) => void
  file: any
  text: string
  setText: (text: string) => void
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
  setConditions: (conditions: {
    simpleStatements: any
    operator: string
  }) => void
  validateIfAllFieldsIsComplete: () => boolean
  valuesSearchBadges: BadgesDataValues[]
  listBadgesEdit: Array<{
    id: string
    name: string
    type: string
    index: number
  }>
  deleteBadges: () => void
  modalDelete: boolean
  setModalDelete: (modalDelete: boolean) => void
  clickDelete: (id: string) => void
  editBadges: () => void
  clickEdit: (index: number, id: string) => void
  setModalEdit: (modalEdit: boolean) => void
  modalEdit: boolean
  showImage: boolean
  setShowImage: (showImage: boolean) => void
  clearValue: () => void
  save: () => void
  paginations: Pagination
  setPaginationFunction: (pagination: any) => void
  lengthAllItems: number
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
  setConditions: () => {},
  validateIfAllFieldsIsComplete: () => false,
  valuesSearchBadges: [],
  listBadgesEdit: [],
  deleteBadges: () => {},
  modalDelete: false,
  setModalDelete: () => {},
  clickDelete: () => {},
  editBadges: () => {},
  clickEdit: () => {},
  setModalEdit: () => {},
  modalEdit: false,
  showImage: false,
  setShowImage: () => {},
  clearValue: () => {},
  save: () => {},
  paginations: {
    currentPage: 0,
    currentItemFrom: 0,
    currentItemTo: 0,
    tableLength: 0,
  },
  setPaginationFunction: () => {},
  lengthAllItems: 0,
})

export default Context
