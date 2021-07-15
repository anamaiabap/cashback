import {  ServiceContext } from '@vtex/api'
import { Service } from '@vtex/api'
import { clients, Clients } from './clients'

import {getProductsIds} from './resolvers/getProductsIds'
import {getProductsNames} from './resolvers/getProductsName'


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
        getProductsNames
      },
    },
  },
})
