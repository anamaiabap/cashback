/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable radix */
import { Input } from 'vtex.styleguide'
import React from 'react'

/* export function ComplexDropdownObject({
  value,
  onChange,
  name,
}: {
  value: any
  onChange: any
  name: string
}) {
  const provider = useContext(ContextOptions)

  let options = []

  if (name === 'product') options = provider.nameProducts
  if (name === 'sku') options = provider.nameSku
  if (name === 'brand') options = provider.nameBrands
  if (name === 'collection') options = provider.nameCollections
  if (name === 'category') options = provider.nameCategory

  return (
    <Dropdown
      value={value}
      options={options}
      onChange={(e: { target: { value: any } }) => {
        onChange(e.target.value)
      }}
    />
  )
} */

export function SimpleInputObject({
  value,
  onChange,
}: {
  value: string
  onChange: any
}) {
  return (
    <Input
      value={value}
      onChange={(e: { target: { value: any } }) => {
        onChange(e.target.value)
      }}
    />
  )
}
