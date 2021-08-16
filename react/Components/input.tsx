import type { FC } from 'react'
import React, { useContext } from 'react'
import { useIntl } from 'react-intl'
import { Input } from 'vtex.styleguide'

import ContextAdd from '../Context/contextAdd'
import { input } from '../utils/definedMessages'

type InputType = 'name' | 'text'

interface Props {
  name: InputType
}
const InputArea: FC<Props> = ({ name }: Props) => {
  const provider = useContext(ContextAdd)

  const intl = useIntl()

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
        placeholder={intl.formatMessage(input.namePlaceholder)}
        size="large"
        label={intl.formatMessage(input.nameLabel)}
        value={provider.name}
        onChange={updateValueName}
      />
    )
  }

  return (
    <div className="mt5">
      <Input
        name={'text'}
        placeholder={intl.formatMessage(input.textPlaceholder)}
        size="large"
        label={intl.formatMessage(input.textLabel)}
        value={provider.text}
        onChange={updateValueText}
      />
    </div>
  )
}

export default InputArea
