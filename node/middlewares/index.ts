function cashbackPercentagePerItem(
  item: OrderItem,
  schema: CashbackRuleSchema
): number {
  // eslint-disable-next-line default-case
  switch (schema.rule) {
    case 'product':
      return schema.value === item.id ? schema.cashback : 0

    case 'brand':
      return schema.value === item.additionalInfo.brandId ? schema.cashback : 0

    case 'category':
      return schema.value === item.additionalInfo.categoriesId
        ? schema.cashback
        : 0
  }
}

function cashbackAmountPerItem(
  item: OrderItem,
  cashbackRules: CashbackRuleSchema[]
): number {
  let bestCashBackPercentage = 0

  cashbackRules.forEach(schema => {
    const itemCashbackPercentage = cashbackPercentagePerItem(item, schema)

    if (bestCashBackPercentage < itemCashbackPercentage) {
      bestCashBackPercentage = itemCashbackPercentage
    }
  })

  return (item.price * bestCashBackPercentage) / 100
}

export const calculateCashbackAmount = (
  items: OrderItem[],
  cashbackRules: CashbackRuleSchema[]
): number => {
  let cashbackAmount = 0

  items.forEach(item => {
    cashbackAmount += cashbackAmountPerItem(item, cashbackRules)
  })

  return cashbackAmount
}
