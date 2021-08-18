declare module 'vtex.condition-layout' {
  import type React from 'react'

  type MatchType = 'any' | 'all' | 'none'

  type Condition = {
    subject: string
    arguments: { id: number }
    toBe: boolean
  }

  type Props = {
    conditions: Condition[]
    matchType?: MatchType
    Else?: React.ElementType
    Then?: React.ElementType
  }
  export const ConditionLayoutProduct: React.FC<Props>
}
