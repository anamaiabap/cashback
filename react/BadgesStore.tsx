/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'

interface BadgesStoreProps {}

// eslint-disable-next-line no-empty-pattern
const BadgesStore: StorefrontFunctionComponent<BadgesStoreProps> = ({}) => {
  return (
    <div>
      <h1>Teste BadgesStore</h1>
    </div>
  )
}

BadgesStore.schema = {
  title: 'editor.BadgesStore.title',
  description: 'editor.BadgesStore.description',
  type: 'object',
  properties: {},
}

export default BadgesStore
