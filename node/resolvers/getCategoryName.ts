export async function getCategoryName(_: unknown, __: unknown, ctx: Context) {
  const {
    clients: { products },
    vtex: { workspace },
  } = ctx

  return products.getCategoryName(workspace)
}
