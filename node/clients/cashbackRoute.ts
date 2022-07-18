import type { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'

export class CashbackRoute extends JanusClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(ctx, {
      ...options,
      headers: {
        ...options?.headers,
        ...(ctx.authToken ? { VtexIdclientAutCookie: ctx.authToken } : null),
        'Content-Type': 'application/json',
      },
    })
  }

  public async getRulesFromMD(): Promise<CashbackRuleSchema[]> {
    return this.http.get(`/api/dataentities/CA/search?_fields=_all`)
  }

  public async saveLogOnMD(cashbackLog: CashbackLogSchema) {
    return this.http.post('/api/dataentities/CB/documents', cashbackLog)
  }
}
