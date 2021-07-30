import React from 'react'
import { ConditionLayoutProduct } from 'vtex.condition-layout'

import { conditionsProps } from './utils/conditionsProps'

const BadgesStore: StorefrontFunctionComponent = () => {
  const conditionsPropsValues = conditionsProps

  return (
    <div className="t-body c-on-base pa6 h-100 w-100">
      <ConditionLayoutProduct {...conditionsPropsValues} />
    </div>
  )
}

BadgesStore.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    targetDate: {
      title: 'Data final',
      description: 'Data final utilizada no contador',
      type: 'string',
      default: null,
    },
  },
}

export default BadgesStore
