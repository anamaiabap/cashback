export async function updateMasterdata(
  _: unknown,
  { idBadges, saveValues }: { idBadges: string; saveValues: UpdateValues },
  ctx: Context
) {
  const { name, content, operator, simpleStatements, type } = saveValues

  if (name.length === 0) {
    throw new Error('É necessário enviar um name')
  }

  if (content.length === 0) {
    throw new Error('É necessário enviar um content')
  }

  if (operator.length === 0) {
    throw new Error('É necessário enviar um operator')
  }

  if (simpleStatements.length === 0) {
    throw new Error('É necessário enviar um simpleStatements')
  }

  if (type.length === 0) {
    throw new Error('É necessário enviar um type')
  }

  if (!idBadges) {
    throw new Error('É necessário enviar um ID')
  }

  return ctx.clients.badges
    .update(idBadges, {
      content: saveValues.content,
      name: saveValues.name,
      operator: saveValues.operator,
      simpleStatements: saveValues.simpleStatements,
      type: saveValues.type,
    })
    .then(() => true)
    .catch((e: any) => {
      ctx.vtex.logger.error(`Erro ao editar Badge através do MasterdataV2 ${e}`)

      return false
    })
}
