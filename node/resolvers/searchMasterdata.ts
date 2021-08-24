const PAGE_DEFAULT = 1
const PAGE_SIZE_DEFAULT = 5

export async function searchMasterdata(
  _: unknown,
  {
    page = PAGE_DEFAULT,
    pageSize = PAGE_SIZE_DEFAULT,
    where,
  }: { page?: number; pageSize?: number; where: { where: string } },
  ctx: Context
) {
  return ctx.clients.badges.searchRaw(
    { page, pageSize },
    ['id', 'name', 'content', 'operator', 'simpleStatements', 'type'],
    undefined,
    where.where
  )
}
