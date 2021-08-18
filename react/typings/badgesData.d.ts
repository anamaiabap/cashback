interface BadgesDataValues {
  type: string
  content: string
  name: string
  simpleStatements: Array<{
    subject: string
    object: {
      name: string
      value: string
      id: string
    }
    verb: string
  }>
  operator: string
  id: string
}

interface BadgesData {
  searchMasterdata: BadgesDataValues[]
}
