import React from 'react'
import { ConditionLayoutProduct } from 'vtex.condition-layout'

import { conditionsPropsFunction } from './utils/conditionsProps'

const BadgesStore: StorefrontFunctionComponent = () => {
  const conditionsPropsValues = conditionsPropsFunction()

  return (
    <div className="container">
      {conditionsPropsValues.map((element: any) => {
        return (
          <span>
            <ConditionLayoutProduct {...element} />
          </span>
        )
      })}
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
