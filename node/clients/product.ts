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

  public async getCollectionsNames(workspace: string) {
    const names: string[] = []

    const value = await this.http.get(
      `https://${workspace}.vtexcommercestable.com.br/api/catalog_system/pvt/collection/search`
    )

    const { items } = value

    items.forEach((element: any) => {
      names.push(element.name)
    })

    return names
  }

  public async getCategoryName(workspace: string) {
    const names: string[] = []

    const value = await this.http.get(
      `https://${workspace}.vtexcommercestable.com.br//api/catalog_system/pub/category/tree/100`
    )

    value.forEach(async (element: any) => {
      names.push(element.name)
      if (element.children) {
        recursiveGetCategoryNameChildren(element.children, names)
      }
    })

    return names
  }

  public async getCategoryId(workspace: string) {
    const ids: number[] = []

    const value = await this.http.get(
      `https://${workspace}.vtexcommercestable.com.br//api/catalog_system/pub/category/tree/100`
    )

    value.forEach(async (element: any) => {
      ids.push(parseInt(element.id, 10))
      if (element.children) {
        recursiveGetCategoryIdChildren(element.children, ids)
      }
    })

    return ids
  }

  public async getSpecificationName(workspace: string, ids: number[]) {
    const names: string[] = []

    for (const id of ids) {
      // eslint-disable-next-line no-await-in-loop
      const value = await this.http.get(
        `https://${workspace}.vtexcommercestable.com.br/api/catalog_system/pub/specification/field/listByCategoryId/${id}`
      )

      value.forEach((element: { FieldId: number; Name: string }) => {
        const type = element.Name

        names.push(`${type}`)
      })
    }

    return names
  }
}

function recursiveGetCategoryNameChildren(children: any, names: string[]) {
  children.forEach((element: { name: string; children: any }) => {
    names.push(element.name)
    if (element.children) {
      recursiveGetCategoryNameChildren(element.children, names)
    }
  })
}

function recursiveGetCategoryIdChildren(children: any, ids: number[]) {
  children.forEach((element: { id: number; children: any }) => {
    ids.push(element.id)
    if (element.children) {
      recursiveGetCategoryIdChildren(element.children, ids)
    }
  })
}
