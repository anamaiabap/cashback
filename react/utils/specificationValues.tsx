import { Input } from 'vtex.styleguide'
import type { FC } from 'react'
import React from 'react'

interface Props {
  onChange: any
  name: string
  value: string
}

const GetSpecificationNameAndValue: FC<Props> = ({
  value,
  onChange,
}: {
  value: any
  onChange: any
}) => {
  return (
    <div className="flex">
      <div>
        <Input
          onChange={(e: { target: { value: string } }) =>
            onChange({
              ...value,
              name: e.target.value,
              id: 'null',
            })
          }
          placeholder="Nome da especificação"
          type="string"
          value={value?.name || ''}
        />
      </div>

      <div className="mv4 mh3 c-muted-2 b">e</div>

      <div>
        <Input
          onChange={(e: { target: { value: string } }) =>
            onChange({
              ...value,
              value: e.target.value,
              id: 'null',
            })
          }
          placeholder="Valor da especificação"
          type="string"
          value={value?.value || ''}
        />
      </div>
    </div>
  )
}

export default GetSpecificationNameAndValue
