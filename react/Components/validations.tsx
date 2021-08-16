import type { FC } from 'react'
import React, { useContext } from 'react'

import ContextAdd from '../Context/contextAdd'

const ValidationArea: FC = () => {
  const provider = useContext(ContextAdd)

  return (
    <div>
      {provider.textValidate.map(element => {
        return (
          <p className="mt2" style={{ color: 'red', fontSize: '12px' }}>
            {element}
          </p>
        )
      })}
    </div>
  )
}

export default ValidationArea
