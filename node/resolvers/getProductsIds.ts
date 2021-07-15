export async function getProductsIds(_: unknown, __: unknown, ctx: Context) {
  const {
    clients: { products },
    vtex: { workspace },
  } = ctx

  return products.getProductsId(workspace)
}
