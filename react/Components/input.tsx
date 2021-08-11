import type { FC } from 'react'
import React, { useContext } from 'react'
import { Input } from 'vtex.styleguide'

import Context from '../Context/context'

type InputType = 'name' | 'text'

interface Props {
  name: InputType
}
const InputArea: FC<Props> = ({ name }: Props) => {
  const provider = useContext(Context)

  const updateValueName = (event: React.ChangeEvent<HTMLInputElement>) => {
    provider.setName(event.target.value ?? '')
  }

  const updateValueText = (event: React.ChangeEvent<HTMLInputElement>) => {
    provider.setText(event.target.value ?? '')
  }

  if (name === 'name') {
    return (
      <Input
        name={'name'}
        placeholder={'Escolha o nome da badges'}
        size="large"
        label={'Nome da badge'}
        value={provider.name}
        onChange={updateValueName}
      />
    )
  }

  return (
    <div className="mt5">
      <Input
        name={'text'}
        placeholder={'Insira seu texto'}
        size="large"
        label={'Insira o texto da badge'}
        value={provider.text}
        onChange={updateValueText}
      />
    </div>
  )
}

export default InputArea
