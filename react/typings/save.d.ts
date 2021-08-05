interface SaveValues {
  type?: string
  content?: string
  name?: string
  simpleStatements?: Array<{
    subject: string
    verb: string
    object: unknown
  }>
  operator?: string
}
