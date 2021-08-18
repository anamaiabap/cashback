export async function searchMasterdata(_: unknown, __: unknown, ctx: Context) {
  const get = await ctx.clients.badges.search({ page: 1, pageSize: 1000 }, [
    'name',
    'content',
    'operator',
    'simpleStatements',
    'type',
  ])

  return get
}
