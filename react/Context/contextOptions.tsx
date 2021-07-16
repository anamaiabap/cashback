import React from 'react'

interface ContextType {
  nameProducts: any
  nameSku: any
  nameBrands: any
}
const ContextOptions = React.createContext<ContextType>({
  nameProducts: [''],
  nameSku: [''],
  nameBrands: [''],
})

export default ContextOptions
