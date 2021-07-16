export async function getBrandsNames(_: unknown, __: unknown, ctx: Context) {
  const {
    clients: { products },
    vtex: { workspace },
  } = ctx

  return products.getBrandsNames(workspace)
}
