import { json } from 'co-body'

import { calculateCashbackAmount } from '../middlewares'

export async function calculateCashbackService({
  req: request,
  clients: { orders, cashbackRoute },
}: Context) {
  const body = await json(request)

  if (!body.orderId) throw Error

  const cashbackRules = await cashbackRoute.getRulesFromMD()

  const {
    items,
    clientProfileData: { userProfileId },
  } = await orders.getOrder(body.orderId)

  const cashbackAmount = calculateCashbackAmount(items, cashbackRules)

  return cashbackRoute.saveLogOnMD({
    userId: userProfileId,
    orderId: body.orderId,
    cashback: cashbackAmount,
  })
}
