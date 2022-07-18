// eslint-disable-next-line @typescript-eslint/naming-convention
type cashbackRuleType = 'product' | 'category' | 'brand'

interface CashbackRuleSchema {
  cashback: number
  name: string
  rule: cashbackRuleType
  value: string
}

interface CashbackLogSchema {
  userId: string
  orderId: string
  cashback: number
}
