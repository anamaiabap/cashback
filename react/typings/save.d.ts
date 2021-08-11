interface SaveValues {
  type?: string
  typeValue?: any
  name?: string
  simpleStatements?: Array<{
    subject: string
    verb: string
    object: unknown
  }>
  operator?: string
}
