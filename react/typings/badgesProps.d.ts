import type { ImgHTMLAttributes } from 'react'
import type { CssHandlesTypes } from 'vtex.css-handles'

const CSS_HANDLES_IMAGE = ['imageElement', 'imageElementLink'] as const

declare const CSS_HANDLES_RICH_TEXT: readonly [
  'container',
  'heading',
  'headingLevel1',
  'headingLevel2',
  'headingLevel3',
  'headingLevel4',
  'headingLevel5',
  'headingLevel6',
  'image',
  'italic',
  'link',
  'list',
  'listItem',
  'listOrdered',
  'paragraph',
  'strong',
  'table',
  'tableBody',
  'tableHead',
  'tableTd',
  'tableTh',
  'tableTr',
  'wrapper'
]
export interface BadgesProps
  extends ImageSchema,
    ImgHTMLAttributes<HTMLImageElement> {
  maxWidth?: string | number
  maxHeight?: string | number
  minWidth?: string | number
  minHeight?: string | number
  blockClass?: string
  experimentalPreventLayoutShift?: boolean
  classesImage?: CssHandlesTypes.CustomClasses<typeof CSS_HANDLES_IMAGE>
  preload?: boolean
  font?: string
  text?: string
  textAlignment?: TextAlignmentValues
  textColor?: string
  textPosition?: TextPositionValues
  htmlId?: string
  classes?: CssHandlesTypes.CustomClasses<typeof CSS_HANDLES_RICH_TEXT>
}

export interface ImageSchema {
  src?: string
  link?: Link
  alt?: string
  title?: string
  analyticsProperties?: 'none' | 'provide'
  promotionId?: string
  promotionName?: string
  promotionPosition?: string
}
