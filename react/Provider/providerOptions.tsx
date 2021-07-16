import type { FC } from 'react'
import React, { useMemo } from 'react'
import { useQuery } from 'react-apollo'

import ContextOptions from '../Context/contextOptions'
import getProductsName from '../queries/getProductsName.gql'

const ProviderOptions: FC = props => {
  const { data: dataNames } = useQuery(getProductsName)

  const nameProducts: any = []

  useMemo(() => {
    if (dataNames === undefined) return
    dataNames.getProductsNames.forEach((element: string) => {
      const value = { label: element, value: element }

      nameProducts.push(value)
    })
  }, [dataNames])

  return (
    <ContextOptions.Provider
      value={{
        nameProducts,
      }}
    >
      {props.children}
    </ContextOptions.Provider>
  )
}

export default ProviderOptions
