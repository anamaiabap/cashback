import { validation } from '../utils/validation'

export async function updateMasterdata(
  _: unknown,
  { idBadges, saveValues }: { idBadges: string; saveValues: UpdateValues },
  ctx: Context
) {
  validation(saveValues, true, idBadges)

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
      ctx.vtex.logger.error(
        `Error to edit Bagde through MasterdataV2 ${e.name} ${e.message}`
      )

      return false
    })
}
