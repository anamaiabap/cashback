export function validation(saveValues: SaveArray, edit: boolean, id?: string) {
  const { name, cashback, value, rule } = saveValues

  if (name.length === 0) {
    throw new Error('It is necessary to send a name')
  }

  if (cashback.length === 0) {
    throw new Error('It is necessary to send a cashback')
  }

  if (value.length === 0) {
    throw new Error('It is necessary to send a value')
  }

  if (rule.length === 0) {
    throw new Error('It is necessary to send a rule')
  }

  if (edit) {
    if (!id) {
      throw new Error('It is necessary to send a ID')
    }
  }
}
