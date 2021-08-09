import type { ImgHTMLAttributes } from 'react'
import type { CssHandlesTypes } from 'vtex.css-handles'

const CSS_HANDLES = ['imageElement', 'imageElementLink'] as const

export interface ImagePropsType
  extends ImageSchema,
    ImgHTMLAttributes<HTMLImageElement> {
  maxWidth?: string | number
  maxHeight?: string | number
  minWidth?: string | number
  minHeight?: string | number
  blockClass?: string
  experimentalPreventLayoutShift?: boolean
  classesImage?: CssHandlesTypes.CustomClasses<typeof CSS_HANDLES>
  preload?: boolean
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
