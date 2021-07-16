import type { FC } from 'react'
import React, { useContext, useCallback } from 'react'
import { Input } from 'vtex.styleguide'

import Context from '../Context/context'

type InputType = 'name' | 'text'

interface Props {
  name: InputType
}
const InputArea: FC<Props> = ({ name }: Props) => {
  const provider = useContext(Context)

  const updateValueName = (event: { target: { value?: string } }) => {
    provider.setName(event.target.value ?? '')
  }

  const updateValueText = (event: { target: { value?: string } }) => {
    provider.setText(event.target.value ?? '')
  }

  const getInput = useCallback((inputType: InputType) => {
    if (inputType === 'name') {
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
      <Input
        name={'text'}
        placeholder={'Insira seu texto'}
        size="large"
        label={'Insira o texto da badge'}
        value={provider.text}
        onChange={updateValueText}
      />
    )
  }, [])

  return (
    <>
      <div className="mb5 mt5">{getInput(name)}</div>
    </>
  )
}

export default InputArea
