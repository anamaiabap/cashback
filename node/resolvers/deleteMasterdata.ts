export async function deleteMasterdata(
  _: unknown,
  idBadge: { id: string },
  ctx: Context
) {
  const retorno = await ctx.clients.badges
    .delete(idBadge.id)
    .then(() => true)
    .catch(() => {
      // adicionar erro no log
      ctx.vtex.logger.error('Erro ao deletar Badge através do MasterdataV2')
      false
    })

  return retorno
}
