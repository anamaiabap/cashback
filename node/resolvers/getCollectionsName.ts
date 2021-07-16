export async function getCollectionsNames(
  _: unknown,
  __: unknown,
  ctx: Context
) {
  const {
    clients: { products },
    vtex: { workspace },
  } = ctx

  return products.getCollectionsNames(workspace)
}
