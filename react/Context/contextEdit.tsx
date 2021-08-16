import React from 'react'

interface ContextTypeEdit {
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
}
const ContextEdit = React.createContext<ContextTypeEdit>({
  valuesSearchBadges: [],
  listBadgesEdit: [],
  deleteBadges: () => {},
  modalDelete: false,
  setModalDelete: () => {},
  clickDelete: () => {},
})

export default ContextEdit
