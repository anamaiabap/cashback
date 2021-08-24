export async function searchMasterdata(
  _: unknown,
  { page, pageSize }: { page: number; pageSize: number },
  ctx: Context
) {
  if (!page) page = 1
  if (!pageSize) {
    const tamTotal = ctx.clients.badges.searchRaw({ page: 1, pageSize: 1 }, [])

    pageSize = (await tamTotal).pagination.total
  }

  return ctx.clients.badges.searchRaw({ page, pageSize }, [
    'id',
    'name',
    'content',
    'operator',
    'simpleStatements',
    'type',
  ])
}
