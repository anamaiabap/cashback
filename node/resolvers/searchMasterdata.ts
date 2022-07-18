export async function searchMasterdata(_: unknown, __: unknown, ctx: Context) {
  const {
    clients: { cashback },
    vtex: { account },
  } = ctx

  const value = await cashback.getCashback(account)

  return value
}
