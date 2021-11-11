import type { FC } from 'react'
import React, { useContext } from 'react'
import { useIntl } from 'react-intl'
import { Input } from 'vtex.styleguide'

import Context from '../Context/context'
import { input } from '../utils/definedMessages'

type InputType = 'name' | 'cashback'

interface Props {
  name: InputType
}
const InputArea: FC<Props> = ({ name }: Props) => {
  const provider = useContext(Context)

  const intl = useIntl()

  const updateValueName = (event: React.ChangeEvent<HTMLInputElement>) => {
    provider.setName(event.target.value ?? '')
  }

  const updateValueCashback = (event: React.ChangeEvent<HTMLInputElement>) => {
    provider.setCashback(event.target.value ?? '')
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
        placeholder={intl.formatMessage(input.cashbackPlaceholder)}
        size="large"
        label={intl.formatMessage(input.cashbackLabel)}
        value={provider.cashback}
        type="number"
        onChange={updateValueCashback}
      />
    </div>
  )
}

export default InputArea
