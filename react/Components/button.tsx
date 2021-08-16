import type { FC } from 'react'
import React, { useContext } from 'react'
import { useIntl } from 'react-intl'
import { ButtonGroup, Button } from 'vtex.styleguide'

import ContextAdd from '../Context/contextAdd'
import { button } from '../utils/definedMessages'

const ButtonArea: FC = () => {
  const provider = useContext(ContextAdd)

  const intl = useIntl()

  return (
    <>
      <div className="mt5 mb5"> {intl.formatMessage(button.title)}</div>
      <ButtonGroup
        buttons={[
          <Button
            isActiveOfGroup={provider.button === 'image'}
            onClick={() => provider.setButton('image')}
          >
            {intl.formatMessage(button.image)}
          </Button>,
          <Button
            isActiveOfGroup={provider.button === 'text'}
            onClick={() => provider.setButton('text')}
          >
            {intl.formatMessage(button.text)}
          </Button>,
          <Button
            isActiveOfGroup={provider.button === 'html'}
            onClick={() => provider.setButton('html')}
          >
            {intl.formatMessage(button.html)}
          </Button>,
        ]}
      />
    </>
  )
}

export default ButtonArea
