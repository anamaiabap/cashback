declare const CSS_HANDLES: readonly [
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

declare type RichTextProps = {
  font?: string
  text?: string
  textAlignment?: TextAlignmentValues
  textColor?: string
  textPosition?: TextPositionValues
  htmlId?: string
  classes?: CssHandlesTypes.CustomClasses<typeof CSS_HANDLES>
}
