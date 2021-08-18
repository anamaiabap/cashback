interface SaveValues {
  type?: string
  content?: string
  name?: string
  simpleStatements?: Array<{
    subject: string
    verb: string
    object: { id: string; name: string; value: string }
  }>
  operator?: string
}
