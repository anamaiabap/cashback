export async function deleteMasterdata(
  _: unknown,
  idBadge: { id: string },
  ctx: Context
) {
  return ctx.clients.badges
    .delete(idBadge.id)
    .then(() => true)
    .catch((e: any) => {
      ctx.vtex.logger.error(`Error to delete Bagde through MasterdataV2 ${e}`)
      false
    })
}
