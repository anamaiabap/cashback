import { Service } from '@vtex/api'
import type { ServiceContext } from '@vtex/api'

import type { Clients } from './clients'
import { clients } from './clients'
import { getProductsIds } from './resolvers/getProductsIds'
import { getProductsNames } from './resolvers/getProductsName'
import { getSkuNames } from './resolvers/getSkuNames'
import { getBrandsNames } from './resolvers/getBrandsNames'

declare global {
  // We declare a global Context type just to avoid re-writing ServiceContext<Clients, State> in every handler and resolver
  type Context = ServiceContext<Clients>
}

// Export a service that defines route handlers and client options.
export default new Service({
  clients,
  graphql: {
    resolvers: {
      Query: {
        getProductsIds,
        getProductsNames,
        getSkuNames,
        getBrandsNames,
      },
    },
  },
})
