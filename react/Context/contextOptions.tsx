import React from 'react'

interface ContextType {
  nameProducts: any
}
const ContextOptions = React.createContext<ContextType>({
  nameProducts: '',
})

export default ContextOptions
