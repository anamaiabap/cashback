export async function getProductsNames(_: unknown, __: unknown, ctx: Context) {
  const {
    clients: { products },
    vtex: { workspace },
  } = ctx

  const ids = await products.getProductsId(workspace)
  const names = await products.getProductsName(workspace, ids)

  return names
}
