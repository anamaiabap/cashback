export async function getSkuNames(_: unknown, __: unknown, ctx: Context) {
  const {
    clients: { skus },
    vtex: { workspace },
  } = ctx

  const ids = await skus.getSkuId(workspace)
  const names = await skus.getSkuName(workspace, ids)

  return names
}
