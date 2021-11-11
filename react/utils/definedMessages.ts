import { defineMessages } from 'react-intl'

export const alert = defineMessages({
  save: { id: 'cashback.data.save' },
  error: { id: 'cashback.data.save.errors' },
})

export const buttonSave = defineMessages({
  save: { id: 'cashback.button.save' },
})

export const conditions = defineMessages({
  rule: { id: 'cashback.conditions.rule' },
  value: { id: 'cashback.conditions.value' },
  category: { id: 'cashback.conditions.category' },
  brand: { id: 'cashback.conditions.brand' },
  product: { id: 'cashback.conditions.product' },
  placeholderDropdown: { id: 'cashback.conditions.placeholder.dropdown' },
  placeholderInput: { id: 'cashback.conditions.placeholder.input' },
})

export const input = defineMessages({
  namePlaceholder: { id: 'cashback.input.name.placeholder' },
  nameLabel: { id: 'cashback.input.name.label' },
  cashbackPlaceholder: { id: 'cashback.input.cashback.placeholder' },
  cashbackLabel: { id: 'cashback.input.cashback.label' },
})

export const edit = defineMessages({
  name: { id: 'cashback.edit.name' },
  cashback: { id: 'cashback.edit.cashback' },
  edit: { id: 'cashback.edit.edit' },
  delete: { id: 'cashback.edit.delete' },
})

export const provider = defineMessages({
  errorName: { id: 'cashback.provider.error.name' },
  errorCashback: { id: 'cashback.provider.error.cashback' },
  errorValue: { id: 'cashback.provider.error.value' },
  errorRule: { id: 'cashback.provider.error.rule' },
  sucessEdit: { id: 'cashback.provider.sucess.edit' },
  errorEdit: { id: 'cashback.provider.error.edit' },
  sucessDelete: { id: 'cashback.provider.sucess.delete' },
  errorDelete: { id: 'cashback.provider.error.delete' },
})

export const cashbacksArea = defineMessages({
  title: { id: 'cashback.cashback.area.title' },
  labelTab1: { id: 'cashback.cashback.area.tab.1.label' },
  labelTab2: { id: 'cashback.cashback.area.tab.2.label' },
})

export const commonModal = defineMessages({
  cancel: {
    id: 'cashback.modal.cancel',
  },
  delete: {
    id: 'cashback.modal.delete',
  },
  edit: {
    id: 'cashback.modal.edit',
  },
})

export const modalDelete = defineMessages({
  deleteText: {
    id: 'cashback.modal.delete.text',
  },
  deleteQuestion: {
    id: 'cashback.modal.delete.question',
  },
})

export const modalEdit = defineMessages({
  editText: {
    id: 'cashback.modal.edit.text',
  },
})
