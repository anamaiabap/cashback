import { ClientsConfig, IOClients, LRUCache } from '@vtex/api'

import {Products} from './product'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {

  public get products() {
    return this.getOrSet('products', Products)
  }
}

const REQUESTS_TIMEOUT = 10000

// Create a LRU memory cache for the Status client.
// The @vtex/api HttpClient respects Cache-Control headers and uses the provided cache.
const memoryCache = new LRUCache<string, any>({ max: 5000 })
metrics.trackCache('status', memoryCache)


export const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: {
      retries: 2,
      timeout: REQUESTS_TIMEOUT,
    },
    status: {
      memoryCache,
    }
  },
}
