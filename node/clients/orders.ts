import type { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'

export class Orders extends JanusClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(ctx, {
      ...options,
      headers: {
        ...options?.headers,
        ...(ctx.authToken ? { VtexIdclientAutCookie: ctx.authToken } : null),
        'Content-Type': 'application/json',
      },
    })
  }

  public async getOrder(orderId: string): Promise<OrderInfo> {
    return this.http.get(`/api/oms/pvt/orders/${orderId}`)
  }
}
