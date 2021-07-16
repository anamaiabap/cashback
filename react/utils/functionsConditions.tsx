/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable radix */
import { Input, Dropdown } from 'vtex.styleguide'
import React, { useContext } from 'react'

import ContextOptions from '../Context/contextOptions'

export function ComplexDropdownObject({
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

  return (
    <Dropdown
      value={value}
      options={options}
      onChange={(e: { target: { value: any } }) => {
        onChange(e.target.value)
      }}
    />
  )
}

export function SimpleInputObject({
  value,
  onChange,
  name,
}: {
  value: string
  onChange: any
  name: string
}) {
  return (
    <Input
      value={value || name}
      onChange={(e: { target: { value: any } }) => onChange(e.target.value)}
    />
  )
}

export function ComplexNumericInputRangeObject({
  value,
  onChange,
}: {
  value: any
  onChange: any
}) {
  return (
    <div className="flex">
      <Input
        type="number"
        min="0"
        placeholder="Valor menor"
        errorMessage={
          value && parseInt(value.first) >= parseInt(value.last)
            ? 'O valor deve ser menor que o outro campo'
            : ''
        }
        value={value?.first ? value.first : ''}
        onChange={(e: any) =>
          onChange({
            ...value,
            first: e.target.value.replace(/\D/g, ''),
          })
        }
      />

      <div className="mv4 mh3 c-muted-2 b">and</div>

      <Input
        type="number"
        min={(value && `${parseInt(value.first) + 1}`) || '0'}
        placeholder="Valor maior"
        value={value?.last ? value.last : ''}
        onChange={(e: any) =>
          onChange({
            ...value,
            last: e.target.value.replace(/\D/g, ''),
          })
        }
      />
    </div>
  )
}
