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

interface PaginationValues {
  page: number
  pageSize: number
  total: number
}

interface BadgesData {
  searchMasterdata: {
    data: BadgesDataValues[]
    pagination: PaginationValues
  }
}
