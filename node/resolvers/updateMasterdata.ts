import { validation } from '../utils/validation'

export async function updateMasterdata(
  _: unknown,
  { id, saveValues }: { id: string; saveValues: UpdateValues },
  ctx: Context
) {
  validation(saveValues, true, id)

  const {
    clients: { cashback },
    vtex: { workspace },
  } = ctx

  const value = await cashback.updateCashback(workspace, saveValues, id)

  return value
}
