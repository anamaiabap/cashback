export async function searchMasterdata(_: unknown, __: unknown, ctx: Context) {
  const {
    clients: { cashback },
    vtex: { workspace },
  } = ctx

  const value = await cashback.getCashback(workspace)

  return value
}
