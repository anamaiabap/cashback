export async function deleteMasterdata(
  _: unknown,
  idBadge: { id: string },
  ctx: Context
) {
  const {
    clients: { cashback },
    vtex: { account },
  } = ctx

  const value = await cashback.deleteCashback(account, idBadge.id)

  return value
}
