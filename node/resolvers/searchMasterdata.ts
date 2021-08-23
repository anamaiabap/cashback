export async function searchMasterdata(
  _: unknown,
  where: { where: string },
  ctx: Context
) {
  return ctx.clients.badges.search(
    { page: 1, pageSize: 1000 },
    ['id', 'name', 'content', 'operator', 'simpleStatements', 'type'],
    undefined,
    where.where
  )
}
