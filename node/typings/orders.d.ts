type OrderItemAdditionalInfo = {
  brandId: string
  categoriesId: string
}

type OrderItem = {
  id: string
  price: number
  quantity: number
  additionalInfo: OrderItemAdditionalInfo
  // any other property that may be needed to define cashback percentage rules
}

type ClientProfileData = {
  userProfileId: string
}

type OrderInfo = {
  items: OrderItem[]
  clientProfileData: ClientProfileData
}
