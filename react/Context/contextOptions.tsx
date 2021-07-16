import React from 'react'

interface ContextType {
  nameProducts: any
  nameSku: any
  nameBrands: any
  nameCollections: any
}
const ContextOptions = React.createContext<ContextType>({
  nameProducts: [''],
  nameSku: [''],
  nameBrands: [''],
  nameCollections: [''],
})

export default ContextOptions
