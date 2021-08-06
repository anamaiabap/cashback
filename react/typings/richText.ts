export declare const enum TextPositionValues {
  CENTER = 'CENTER',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}
export declare const enum TextAlignmentValues {
  CENTER = 'CENTER',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}
export declare const textPositionTypes: Record<
  string,
  {
    name: string
    value: TextPositionValues
  }
>
export declare const textAlignmentTypes: Record<
  string,
  {
    name: string
    value: TextAlignmentValues
  }
>

export const DEFAULT_VALUES = {
  textPosition: textPositionTypes.TEXT_POSITION_LEFT.value,
  textAlignment: textAlignmentTypes.TEXT_ALIGNMENT_LEFT.value,
}
