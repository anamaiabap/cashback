export async function updateMasterdata(
  _: unknown,
  { idBadges, saveValues }: { idBadges: string; saveValues: UpdateValues },
  ctx: Context
) {
  const { name, content, operator, simpleStatements, type } = saveValues

  if (name.length === 0) {
    throw new Error('It is necessary to send a name')
  }

  if (content.length === 0) {
    throw new Error('It is necessary to send a content')
  }

  if (operator.length === 0) {
    throw new Error('It is necessary to send a operator')
  }

  if (simpleStatements.length === 0) {
    throw new Error('It is necessary to send a simpleStatements')
  }

  if (type.length === 0) {
    throw new Error('It is necessary to send a type')
  }

  if (!idBadges) {
    throw new Error('It is necessary to send a ID')
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
      ctx.vtex.logger.error(`Error to edit Bagde through MasterdataV2${e}`)

      return false
    })
}
