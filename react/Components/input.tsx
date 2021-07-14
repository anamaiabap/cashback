import React, { useContext, FC } from 'react'
import { Input } from 'vtex.styleguide'

import Context from '../Context/context'

interface Props {
  name: string
}
const InputArea: FC<Props> = ({ name }: Props) => {
  const provider = useContext(Context)

  const updateValueName = (event: { target: { value?: string } }) => {
    provider.setName(event.target.value ?? '')
  }

  const updateValueText = (event: { target: { value?: string } }) => {
    provider.setText(event.target.value ?? '')
  }
  return (
    <>
      <div className="mb5 mt5">
        <Input
          name={name === 'name' ? 'name' : 'text'}
          placeholder={
            name === 'name' ? 'Escolha o nome da badges' : 'Insira seu texto'
          }
          size="large"
          label={name === 'name' ? 'Nome da badge' : 'Insira o texto da badge'}
          value={name === 'name' ? provider.name : provider.text}
          onChange={name === 'name' ? updateValueName : updateValueText}
        />
      </div>
    </>
  )
}

export default InputArea
