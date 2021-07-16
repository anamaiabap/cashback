import type { FC } from 'react'
import React, { useMemo } from 'react'
import { useQuery } from 'react-apollo'

import ContextOptions from '../Context/contextOptions'
import getProductsName from '../queries/getProductsName.gql'
import getSkusNames from '../queries/getSkusNames.gql'

const ProviderOptions: FC = props => {
  const { data: dataProductsNames } = useQuery(getProductsName)
  const { data: dataSkuNames } = useQuery(getSkusNames)

  const nameProducts: any = []
  const nameSku: any = []

  useMemo(() => {
    if (dataProductsNames === undefined) return
    dataProductsNames.getProductsNames.forEach((element: string) => {
      const value = { label: element, value: element }

      nameProducts.push(value)
    })
  }, [dataProductsNames])

  useMemo(() => {
    if (dataSkuNames === undefined) return
    dataSkuNames.getSkuNames.forEach((element: string) => {
      const value = { label: element, value: element }

      nameSku.push(value)
    })
  }, [dataSkuNames])

  return (
    <ContextOptions.Provider
      value={{
        nameProducts,
        nameSku,
      }}
    >
      {props.children}
    </ContextOptions.Provider>
  )
}

export default ProviderOptions
