/* eslint-disable radix */
import { Input } from 'vtex.styleguide'
import React from 'react'

function SimpleInputObject({
  value,
  onChange,
}: {
  value: string
  onChange: any
}) {
  return (
    <Input
      value={value || ''}
      onChange={(e: { target: { value: any } }) => onChange(e.target.value)}
    />
  )
}

function ComplexNumericInputRangeObject({
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
        placeholder="Age from..."
        errorMessage={
          value && parseInt(value.first) >= parseInt(value.last)
            ? 'Must be smaller than other input'
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
        placeholder="Age to..."
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

export const options = {
  name: {
    label: 'User name',
    verbs: [
      {
        label: 'is',
        value: '=',
        object: (props: any) => <SimpleInputObject {...props} />,
      },
      {
        label: 'is not',
        value: '!=',
        object: (props: any) => <SimpleInputObject {...props} />,
      },
    ],
  },
  email: {
    label: 'Email',
    verbs: [
      {
        label: 'contains',
        value: 'contains',
        object: (props: any) => <SimpleInputObject {...props} />,
      },
      {
        label: 'is',
        value: '=',
        object: (props: any) => <SimpleInputObject {...props} />,
      },
      {
        label: 'is not',
        value: '!=',
        object: (props: any) => <SimpleInputObject {...props} />,
      },
      {
        label: 'is between',
        value: 'between',
        object: (props: any) => <ComplexNumericInputRangeObject {...props} />,
      },
    ],
  },
}
