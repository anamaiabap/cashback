export async function searchMasterdata(_: unknown, __: unknown, ctx: Context) {
  return ctx.clients.badges.search({ page: 1, pageSize: 1000 }, [
    'id',
    'name',
    'content',
    'operator',
    'simpleStatements',
    'type',
  ])
}
