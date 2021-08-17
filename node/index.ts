import { Service } from '@vtex/api'
import type { ServiceContext } from '@vtex/api'

import type { Clients } from './clients'
import { clients } from './clients'
import { saveMasterdata } from './resolvers/saveMasterdata'
import { getProductsIds } from './resolvers/getProductsIds'
import { getProductsNames } from './resolvers/getProductsName'
import { getSkuNames } from './resolvers/getSkuNames'
import { getBrandsNames } from './resolvers/getBrandsNames'
import { getCollectionsNames } from './resolvers/getCollectionsName'
import { getCategoryName } from './resolvers/getCategoryName'
import { getSpecificationName } from './resolvers/getSpecificationName'
import { searchMasterdata } from './resolvers/searchMasterdata'
import { deleteMasterdata } from './resolvers/deleteMasterdata'
import { updateMasterdata } from './resolvers/updateMasterdata'

declare global {
  // We declare a global Context type just to avoid re-writing ServiceContext<Clients, State> in every handler and resolver
  type Context = ServiceContext<Clients>
}

// Export a service that defines route handlers and client options.
export default new Service({
  clients,
  graphql: {
    resolvers: {
      Mutation: {
        saveMasterdata,
        deleteMasterdata,
        updateMasterdata,
      },
      Query: {
        getProductsIds,
        getProductsNames,
        getSkuNames,
        getBrandsNames,
        getCollectionsNames,
        getCategoryName,
        getSpecificationName,
        searchMasterdata,
      },
    },
  },
})
