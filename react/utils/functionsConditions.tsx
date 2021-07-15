/* eslint-disable radix */
import { Input } from 'vtex.styleguide'
import React from 'react'

export function SimpleInputObject({
  value,
  onChange,
  name
}: {
  value: string
  onChange: any
  name:string
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

