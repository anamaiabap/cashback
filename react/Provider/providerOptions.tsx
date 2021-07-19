import type { FC } from 'react'
import React, { useMemo } from 'react'
import { useQuery } from 'react-apollo'

import ContextOptions from '../Context/contextOptions'
import getProductsName from '../queries/getProductsName.gql'
import getSkusNames from '../queries/getSkusNames.gql'
import getBrandsNames from '../queries/getBrandsNames.gql'
import getCollectionsNames from '../queries/getCollectionsNames.gql'
import getCategoryName from '../queries/getCategoryName.gql'

const ProviderOptions: FC = props => {
  const { data: dataProductsNames } = useQuery(getProductsName)
  const { data: dataSkuNames } = useQuery(getSkusNames)
  const { data: dataBrandsNames } = useQuery(getBrandsNames)
  const { data: dataCollectionsNames } = useQuery(getCollectionsNames)
  const { data: dataCategoryNames } = useQuery(getCategoryName)

  const nameProducts: any = []
  const nameSku: any = []
  const nameBrands: any = []
  const nameCollections: any = []
  const nameCategory: any = []

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

  useMemo(() => {
    if (dataCollectionsNames === undefined) return
    dataCollectionsNames.getCollectionsNames.forEach((element: string) => {
      const value = { label: element, value: element }

      nameCollections.push(value)
    })
  }, [dataCollectionsNames])

  useMemo(() => {
    if (dataCategoryNames === undefined) return
    dataCategoryNames.getCategoryName.forEach((element: string) => {
      const value = { label: element, value: element }

      nameCategory.push(value)
    })
  }, [dataCategoryNames])

  return (
    <ContextOptions.Provider
      value={{
        nameProducts,
        nameSku,
        nameBrands,
        nameCollections,
        nameCategory,
      }}
    >
      {props.children}
    </ContextOptions.Provider>
  )
}

export default ProviderOptions
