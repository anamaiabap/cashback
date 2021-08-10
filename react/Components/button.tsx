import type { FC } from 'react'
import React, { useContext } from 'react'
import { ButtonGroup, Button } from 'vtex.styleguide'

import Context from '../Context/context'

const ButtonArea: FC = () => {
  const provider = useContext(Context)

  return (
    <>
      <div className="mt5 mb5"> Tipo do Badge</div>
      <ButtonGroup
        buttons={[
          <Button
            isActiveOfGroup={provider.button === 'image'}
            onClick={() => provider.setButton('image')}
          >
            Imagem
          </Button>,
          <Button
            isActiveOfGroup={provider.button === 'text'}
            onClick={() => provider.setButton('text')}
          >
            Texto
          </Button>,
          <Button
            isActiveOfGroup={provider.button === 'html'}
            onClick={() => provider.setButton('html')}
          >
            HTML
          </Button>,
        ]}
      />
    </>
  )
}

export default ButtonArea
