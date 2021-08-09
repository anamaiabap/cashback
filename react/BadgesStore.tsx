import React from 'react'
import { ConditionLayoutProduct } from 'vtex.condition-layout'

import type { BadgesProps } from './typings/badgesProps'
import { conditionsPropsFunction } from './utils/conditionsProps'

const BadgesStore: StorefrontFunctionComponent<BadgesProps> = (props: any) => {
  const conditionsPropsValues = conditionsPropsFunction(props)

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

export default BadgesStore
