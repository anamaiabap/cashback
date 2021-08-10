import type { FC } from 'react'
import React, { useContext } from 'react'
import { useIntl } from 'react-intl'
import { ButtonGroup, Button } from 'vtex.styleguide'

import Context from '../Context/context'
import { button } from '../utils/definedMessages'

const BUTTON_CHOICE_IS_IMAGE = 1
const BUTTON_CHOICE_IS_TEXT = 2
const BUTTON_CHOICE_IS_HTML = 3
const ButtonArea: FC = () => {
  const provider = useContext(Context)

  const intl = useIntl()

  return (
    <>
      <div className="mt5 mb5"> {intl.formatMessage(button.title)}</div>
      <ButtonGroup
        buttons={[
          <Button
            isActiveOfGroup={provider.button === BUTTON_CHOICE_IS_IMAGE}
            onClick={() => provider.setButton(BUTTON_CHOICE_IS_IMAGE)}
          >
            {intl.formatMessage(button.image)}
          </Button>,
          <Button
            isActiveOfGroup={provider.button === BUTTON_CHOICE_IS_TEXT}
            onClick={() => provider.setButton(BUTTON_CHOICE_IS_TEXT)}
          >
            {intl.formatMessage(button.text)}
          </Button>,
          <Button
            isActiveOfGroup={provider.button === BUTTON_CHOICE_IS_HTML}
            onClick={() => provider.setButton(BUTTON_CHOICE_IS_HTML)}
          >
            {intl.formatMessage(button.html)}
          </Button>,
        ]}
      />
    </>
  )
}

export default ButtonArea
