export async function saveMasterdata(
  _: unknown,
  saveValues: SaveValues,
  ctx: Context
) {
  if (saveValues.saveData.name.length === 0) {
    throw new Error('É necessário enviar um name')
  }

  if (saveValues.saveData.content.length === 0) {
    throw new Error('É necessário enviar um content')
  }

  if (saveValues.saveData.operator.length === 0) {
    throw new Error('É necessário enviar um operator')
  }

  if (saveValues.saveData.simpleStatements.length === 0) {
    throw new Error('É necessário enviar um simpleStatements')
  }

  if (saveValues.saveData.type.length === 0) {
    throw new Error('É necessário enviar um type')
  }

  const save = await ctx.clients.badges.save({
    content: saveValues.saveData.content,
    name: saveValues.saveData.name,
    operator: saveValues.saveData.operator,
    simpleStatements: saveValues.saveData.simpleStatements,
    type: saveValues.saveData.type,
  })

  return save
}
