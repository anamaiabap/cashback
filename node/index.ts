import { method, Service } from '@vtex/api'
import type { ServiceContext } from '@vtex/api'

import type { Clients } from './clients'
import { clients } from './clients'
import { saveMasterdata } from './resolvers/saveMasterdata'
import { searchMasterdata } from './resolvers/searchMasterdata'
import { deleteMasterdata } from './resolvers/deleteMasterdata'
import { updateMasterdata } from './resolvers/updateMasterdata'
import { calculateCashbackService } from './services/calculateCashback'

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
        searchMasterdata,
      },
    },
  },
  routes: {
    calculateCashback: method({
      POST: [calculateCashbackService],
    }),
  },
})
