export async function getSpecificationName(
  _: unknown,
  __: unknown,
  ctx: Context
) {
  const {
    clients: { products },
    vtex: { workspace },
  } = ctx

  const ids = await products.getCategoryId(workspace)
  const names = await products.getSpecificationName(workspace, ids)

  return names
}
