import type { FC } from 'react'
import React, { useContext } from 'react'
import { Button } from 'vtex.styleguide'

import Context from '../Context/context'

const ButtonSaveArea: FC = () => {
  const provider = useContext(Context)

  return (
    <div className="flex flex-column w-100" style={{ alignItems: 'flex-end' }}>
      <span className="mt5">
        <Button onClick={provider.save}>Salvar</Button>
      </span>
    </div>
  )
}

export default ButtonSaveArea
