import type { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'

export class Cashback extends JanusClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(ctx, {
      ...options,
      headers: {
        ...options?.headers,
        ...(ctx.adminUserAuthToken
          ? { VtexIdclientAutCookie: ctx.adminUserAuthToken }
          : null),
      },
    })
  }

  public async getCashback(account: string) {
    const value = await this.http.get(
      `https://${account}.vtexcommercestable.com.br/api/dataentities/CA/search?_fields=id,name,rule,cashback,value`
    )

    return value
  }

  public async updateCashback(account: string, data: UpdateValues, id: string) {
    await this.http.patch(
      `https://${account}.vtexcommercestable.com.br/api/dataentities/CA/documents/${id}`,
      data
    )

    return true
  }

  public async createCashback(account: string, data: SaveValues) {
    const value = await this.http.post(
      `https://${account}.vtexcommercestable.com.br/api/dataentities/CA/documents/`,
      data.saveData
    )

    return value
  }

  public async deleteCashback(account: string, id: string) {
    await this.http.delete(
      `https://${account}.vtexcommercestable.com.br/api/dataentities/CA/documents/${id}`
    )

    return true
  }
}
