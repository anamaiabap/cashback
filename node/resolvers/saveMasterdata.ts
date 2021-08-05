export async function saveMasterdata(
  _: unknown,
  saveValues: SaveValues,
  ctx: Context
) {
  const { name, content, operator, simpleStatements, type } =
    saveValues.saveData

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

  return ctx.clients.badges.save({
    content: saveValues.saveData.content,
    name: saveValues.saveData.name,
    operator: saveValues.saveData.operator,
    simpleStatements: saveValues.saveData.simpleStatements,
    type: saveValues.saveData.type,
  })
}
