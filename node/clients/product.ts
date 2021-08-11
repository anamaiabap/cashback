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
    const names: Name[] = []

    const promises = []

    for (const id of ids) {
      promises.push(
        this.http.get(
          `https://${workspace}.vtexcommercestable.com.br/api/catalog/pvt/product/${id}`
        )
      )
    }

    await Promise.all(promises).then(values => {
      values.forEach(value => names.push({ id: value.Id, name: value.Name }))
    })

    return names
  }

  public async getBrandsNames(workspace: string) {
    const names: Name[] = []

    const value = await this.http.get(
      `https://${workspace}.vtexcommercestable.com.br/api/catalog_system/pvt/brand/list`
    )

    value.forEach((element: Name) => {
      names.push({ id: element.id, name: element.name })
    })

    return names
  }

  public async getCollectionsNames(workspace: string) {
    const names: Name[] = []

    const value = await this.http.get(
      `https://${workspace}.vtexcommercestable.com.br/api/catalog_system/pvt/collection/search`
    )

    const { items } = value

    items.forEach((element: Name) => {
      names.push({ id: element.id, name: element.name })
    })

    return names
  }

  public async getCategoryName(workspace: string) {
    const names: Name[] = []

    const categories = await this.http.get(
      `https://${workspace}.vtexcommercestable.com.br/api/catalog_system/pub/category/tree/100`
    )

    categories.forEach(
      async (element: { id: string; name: string; children: any }) => {
        names.push({ id: element.id, name: element.name })
        if (element.children) {
          recursiveGetCategoryNameChildren(element.children, names)
        }
      }
    )

    return names
  }

  public async getCategoryId(workspace: string) {
    const ids: number[] = []

    const value = await this.http.get(
      `https://${workspace}.vtexcommercestable.com.br/api/catalog_system/pub/category/tree/100`
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
    const names: Array<{ name: string }> = []

    const promises = []

    for (const id of ids) {
      promises.push(
        this.http.get(
          `https://${workspace}.vtexcommercestable.com.br/api/catalog_system/pub/specification/field/listByCategoryId/${id}`
        )
      )
    }

    await Promise.all(promises).then(values => {
      values.forEach(value => {
        value.forEach((element: { Name: string }) =>
          names.push({ name: element.Name })
        )
      })
    })

    return names
  }
}

function recursiveGetCategoryNameChildren(children: any, names: Name[] = []) {
  children.forEach((element: { name: string; children: any; id: string }) => {
    names.push({ id: element.id, name: element.name })
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
