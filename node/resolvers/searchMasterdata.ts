const PAGE_DEFAULT = 1
const PAGE_SIZE_DEFAULT = 5

export async function searchMasterdata(
  _: unknown,
  {
    page = PAGE_DEFAULT,
    pageSize = PAGE_SIZE_DEFAULT,
  }: { page?: number; pageSize?: number },
  ctx: Context
) {
  return ctx.clients.badges.searchRaw({ page, pageSize }, [
    'id',
    'name',
    'content',
    'operator',
    'simpleStatements',
    'type',
  ])
}
