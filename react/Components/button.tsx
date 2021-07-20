import React, { useContext, FC } from 'react'
import { ButtonGroup, Button } from 'vtex.styleguide'

import Context from '../Context/context'

const ButtonArea: FC = () => {
  const provider = useContext(Context)
  return (
    <>
      <div className="mb5"> Tipo do Badge</div>
      <ButtonGroup
        buttons={[
          <Button
            isActiveOfGroup={provider.button === 1}
            onClick={() => provider.setButton(1)}
          >
            Imagem
          </Button>,
          <Button
            isActiveOfGroup={provider.button === 2}
            onClick={() => provider.setButton(2)}
          >
            Texto
          </Button>,
          <Button
            isActiveOfGroup={provider.button === 3}
            onClick={() => provider.setButton(3)}
          >
            HTML
          </Button>,
        ]}
      />
    </>
  )
}

export default ButtonArea
