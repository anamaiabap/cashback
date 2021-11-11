export async function deleteMasterdata(
  _: unknown,
  idBadge: { id: string },
  ctx: Context
) {
  const {
    clients: { cashback },
    vtex: { workspace },
  } = ctx

  const value = await cashback.deleteCashback(workspace, idBadge.id)

  return value
}
