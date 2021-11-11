import type { FC } from 'react'
import React, { useContext } from 'react'
import { Dropdown, Input } from 'vtex.styleguide'
import { useIntl } from 'react-intl'

import Context from '../Context/context'
import { conditions } from '../utils/definedMessages'

const ConditionsArea: FC = () => {
  const provider = useContext(Context)

  const intl = useIntl()

  const options = [
    { value: 'category', label: intl.formatMessage(conditions.category) },
    { value: 'brand', label: intl.formatMessage(conditions.brand) },
    { value: 'product', label: intl.formatMessage(conditions.product) },
  ]

  return (
    <div className="mt5">
      <div className="mb5"> {intl.formatMessage(conditions.rule)} </div>
      <Dropdown
        placeholder={intl.formatMessage(conditions.placeholderDropdown)}
        options={options}
        value={provider.rule}
        onChange={(_: any, v: any) => provider.setRule(v)}
      />

      <div className="mb5 mt5"> {intl.formatMessage(conditions.value)} </div>

      <Input
        placeholder={intl.formatMessage(conditions.placeholderInput)}
        size="regular"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          provider.setValue(e.target.value)
        }
        value={provider.value}
      />
    </div>
  )
}

export default ConditionsArea
