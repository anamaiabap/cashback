export async function saveMasterdata(
  _: unknown,
  saveValues: SaveValues,
  ctx: Context
) {
  const { name, content, operator, simpleStatements, type } =
    saveValues.saveData

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

  return ctx.clients.badges.save({
    content: saveValues.saveData.content,
    name: saveValues.saveData.name,
    operator: saveValues.saveData.operator,
    simpleStatements: saveValues.saveData.simpleStatements,
    type: saveValues.saveData.type,
  })
}
