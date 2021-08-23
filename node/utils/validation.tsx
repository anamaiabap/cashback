export function validation(
  saveValues: SaveArray,
  edit: boolean,
  idBadges?: string
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

  if (edit) {
    if (!idBadges) {
      throw new Error('It is necessary to send a ID')
    }
  }
}
