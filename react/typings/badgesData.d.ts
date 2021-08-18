interface BadgesDataValues {
  type?: string
  content?: string
  name?: string
  simpleStatements: Array<{
    subject: string
    object: string
    verb: string
  }>
  operator?: string
}

interface BadgesData {
  searchMasterdata: BadgesDataValues[]
}
