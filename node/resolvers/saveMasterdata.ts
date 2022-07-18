import { validation } from '../utils/validation'

export async function saveMasterdata(
  _: unknown,
  saveValues: SaveValues,
  ctx: Context
) {
  validation(saveValues.saveData, false)

  const {
    clients: { cashback },
    vtex: { account },
  } = ctx

  const value = await cashback.createCashback(account, saveValues)

  return value
}
