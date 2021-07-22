import type { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'

export class Skus extends JanusClient {
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

  public async getSkuId(workspace: string) {
    const value = await this.http.get(
      `https://${workspace}.vtexcommercestable.com.br/api/catalog_system/pvt/products/GetProductAndSkuIds`
    )

    const sku = Object.entries(value.data)

    const ids: number[] = []

    sku.forEach(element => {
      const skus = element[1] as []

      if (skus) {
        skus.forEach((values: number) => {
          ids.push(values)
        })
      }
    })

    return ids
  }

  public async getSkuName(workspace: string, ids: number[]) {
    const names: string[] = []

    const promises = []

    for (const id of ids) {
      promises.push(
        this.http.get(
          `https://${workspace}.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/${id}`
        )
      )
    }

    await Promise.all(promises).then(values => {
      values.forEach(value => names.push(value.NameComplete))
    })

    return names
  }
}
