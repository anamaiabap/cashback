import React from 'react'
import { ConditionLayoutProduct } from 'vtex.condition-layout'
import { useCssHandles } from 'vtex.css-handles'

import { conditionsPropsFunction } from './utils/conditionsProps'

const CSS_HANDLES = [
  'allBadgesContainer',
  'badgeContainer',
  'badgesText',
  'badgesHtml',
  'badgesImage',
] as const

const BadgesStore: StorefrontFunctionComponent = (props: any) => {
  const handles = useCssHandles(CSS_HANDLES)
  const conditionsPropsValues = conditionsPropsFunction(props, handles)

  return (
    <div className={handles.allBadgesContainer}>
      {conditionsPropsValues.map((element: any) => {
        return <ConditionLayoutProduct {...element} />
      })}
    </div>
  )
}

export default BadgesStore
