import type { FC } from 'react'
import React, { useMemo } from 'react'
import { useQuery } from 'react-apollo'

import ContextOptions from '../Context/contextOptions'
import getProductsName from '../queries/getProductsName.gql'
import getSkusNames from '../queries/getSkusNames.gql'
import getBrandsNames from '../queries/getBrandsNames.gql'

const ProviderOptions: FC = props => {
  const { data: dataProductsNames } = useQuery(getProductsName)
  const { data: dataSkuNames } = useQuery(getSkusNames)
  const { data: dataBrandsNames } = useQuery(getBrandsNames)

  const nameProducts: any = []
  const nameSku: any = []
  const nameBrands: any = []

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

  useMemo(() => {
    if (dataBrandsNames === undefined) return
    dataBrandsNames.getBrandsNames.forEach((element: string) => {
      const value = { label: element, value: element }

      nameBrands.push(value)
    })
  }, [dataBrandsNames])

  return (
    <ContextOptions.Provider
      value={{
        nameProducts,
        nameSku,
        nameBrands,
      }}
    >
      {props.children}
    </ContextOptions.Provider>
  )
}

export default ProviderOptions
