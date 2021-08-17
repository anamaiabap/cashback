import { defineMessages } from 'react-intl'

export const alert = defineMessages({
  save: { id: 'badges.data.save' },
  error: { id: 'badges.data.save.errors' },
})

export const button = defineMessages({
  title: { id: 'badges.button.title' },
  image: { id: 'badges.button.image' },
  text: { id: 'badges.button.text' },
  html: { id: 'badges.button.html' },
})

export const buttonSave = defineMessages({
  save: { id: 'badges.button.save' },
})

export const conditions = defineMessages({
  rule: { id: 'badges.conditions.rule' },
  selectRule: { id: 'badges.conditions.select.rule' },
  headerPrefix: { id: 'badges.conditions.header.prefix' },
  all: { id: 'badges.conditions.all' },
  none: { id: 'badges.conditions.none' },
  headerSufix: { id: 'badges.conditions.header.sufix' },
  new: { id: 'badges.conditions.new' },
  and: { id: 'badges.conditions.and' },
  or: { id: 'badges.conditions.or' },
})

export const file = defineMessages({
  label: { id: 'badges.file.label' },
  dropImage: { id: 'badges.file.drop.image' },
  choiceImage: { id: 'badges.file.choice.image' },
  acceptFiles: { id: 'badges.file.accept.files' },
})

export const input = defineMessages({
  namePlaceholder: { id: 'badges.input.name.placeholder' },
  nameLabel: { id: 'badges.input.name.label' },
  textPlaceholder: { id: 'badges.input.text.placeholder' },
  textLabel: { id: 'badges.input.text.label' },
})

export const html = defineMessages({
  label: { id: 'badges.html.label' },
})

export const edit = defineMessages({
  name: { id: 'badges.edit.name' },
  style: { id: 'badges.edit.style' },
})

export const provider = defineMessages({
  errorName: { id: 'badges.provider.error.name' },
  errorImage: { id: 'badges.provider.error.image' },
  errorText: { id: 'badges.provider.error.text' },
  errorHtml: { id: 'badges.provider.error.html' },
  errorSimpleStatement: { id: 'badges.provider.error.simple.statement' },
  errorMoreThanOneTypeOfBadge: {
    id: 'badges.error.more.than.one.type.of.badge',
  },
})

export const options = defineMessages({
  category: { id: 'badges.options.category' },
  brand: { id: 'badges.options.brand' },
  product: { id: 'badges.options.product' },
  collection: { id: 'badges.options.collection' },
  specification: { id: 'badges.options.specification' },
  sku: { id: 'badges.options.sku' },
  is: { id: 'badges.options.is' },
  isNot: { id: 'badges.options.not.is' },
})

export const badgessArea = defineMessages({
  title: { id: 'badges.badges.area.title' },
  labelTab1: { id: 'badges.badges.area.tab.1.label' },
  labelTab2: { id: 'badges.badges.area.tab.2.label' },
})

export const commonModal = defineMessages({
  save: {
    id: 'badges.modal.save',
  },
  cancel: {
    id: 'badges.modal.cancel',
  },
  delete: {
    id: 'badges.modal.delete',
  },
  edit: {
    id: 'badges.modal.edit',
  },
})

export const modalDelete = defineMessages({
  deleteText: {
    id: 'badges.modal.delete.text',
  },
  deleteQuestion: {
    id: 'badges.modal.delete.question',
  },
})

export const modalEdit = defineMessages({
  editText: {
    id: 'badges.modal.edit.text',
  },
  changeImage: {
    id: 'badges.modal.edit.change.image',
  },
})
