import type { FC } from 'react'
import React, { useContext } from 'react'
import { useIntl } from 'react-intl'
import { Button } from 'vtex.styleguide'

import Context from '../Context/context'
import { buttonSave } from '../utils/definedMessages'

const ButtonSaveArea: FC = () => {
  const provider = useContext(Context)

  const intl = useIntl()

  return (
    <div className="flex flex-column w-100" style={{ alignItems: 'flex-end' }}>
      <span className="mt5">
        <Button onClick={provider.save}>
          {intl.formatMessage(buttonSave.save)}
        </Button>
      </span>
    </div>
  )
}

export default ButtonSaveArea
