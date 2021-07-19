import React from 'react'

interface ContextType {
  nameProducts: any
  nameSku: any
  nameBrands: any
  nameCollections: any
  nameCategory: any
}
const ContextOptions = React.createContext<ContextType>({
  nameProducts: [''],
  nameSku: [''],
  nameBrands: [''],
  nameCollections: [''],
  nameCategory: [''],
})

export default ContextOptions
