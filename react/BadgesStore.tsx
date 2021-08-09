import React from 'react'
import { ConditionLayoutProduct } from 'vtex.condition-layout'

import type { BadgesProps } from './typings/badgesProps'
import { conditionsPropsFunction } from './utils/conditionsProps'

const BadgesStore: StorefrontFunctionComponent<BadgesProps> = (
  props: BadgesProps
) => {
  const {
    font,
    textAlignment,
    textColor,
    textPosition,
    classes,
    htmlId,
    alt = '',
    maxWidth,
    maxHeight,
    minWidth,
    minHeight,
    width,
    height,
    srcSet = '',
    sizes = '',
    link,
    title,
    experimentalPreventLayoutShift,
    analyticsProperties = 'none',
    promotionId,
    promotionName,
    promotionPosition,
    classesImage,
    preload,
  } = props

  const richTextProps = {
    font,
    textAlignment,
    textColor,
    textPosition,
    classes,
    htmlId,
  }

  const imageProps = {
    alt,
    maxWidth,
    maxHeight,
    minWidth,
    minHeight,
    width,
    height,
    title,
    classesImage,
    preload,
    srcSet,
    sizes,
    link,
    experimentalPreventLayoutShift,
    analyticsProperties,
    promotionId,
    promotionName,
    promotionPosition,
  }

  const conditionsPropsValues = conditionsPropsFunction(
    richTextProps,
    imageProps
  )

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
