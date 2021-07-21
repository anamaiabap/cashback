import type { FC } from 'react'
import React, { useContext } from 'react'

import Context from '../Context/context'

const ValidationArea: FC = () => {
  const provider = useContext(Context)

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
