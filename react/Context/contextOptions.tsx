import React from 'react'

interface ContextType {
  nameProducts: any
  nameSku: any
}
const ContextOptions = React.createContext<ContextType>({
  nameProducts: [''],
  nameSku: [''],
})

export default ContextOptions
