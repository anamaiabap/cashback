import type { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'

export class Products extends JanusClient {
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

  public async getProductsId(workspace: string) {
    const value = await this.http.get(
      `https://${workspace}.vtexcommercestable.com.br/api/catalog_system/pvt/products/GetProductAndSkuIds`
    )

    const products = Object.entries(value.data)

    const ids: number[] = []

    products.forEach(element => {
      ids.push(parseInt(element[0], 10))
    })

    return ids
  }

  public async getProductsName(workspace: string, ids: number[]) {
    const names: string[] = []

    for (const id of ids) {
      // eslint-disable-next-line no-await-in-loop
      const value = await this.http.get(
        `https://${workspace}.vtexcommercestable.com.br/api/catalog/pvt/product/${id}`
      )

      names.push(value.Name)
    }

    return names
  }

  public async getBrandsNames(workspace: string) {
    const names: string[] = []

    const value = await this.http.get(
      `https://${workspace}.vtexcommercestable.com.br/api/catalog_system/pvt/brand/list`
    )

    value.forEach((element: any) => {
      names.push(element.name)
    })

    return names
  }
}
