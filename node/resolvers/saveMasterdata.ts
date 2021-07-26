export async function saveMasterdata(
  _: unknown,
  saveValues: SaveValues,
  ctx: Context
) {
  const save = await ctx.clients.badges.save({
    content: saveValues.saveData.content,
    name: saveValues.saveData.name,
    operator: saveValues.saveData.operator,
    simpleStatements: saveValues.saveData.simpleStatements,
    type: saveValues.saveData.type,
  })

  return save
}
