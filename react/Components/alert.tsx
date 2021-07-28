import type { FC } from 'react'
import React, { useContext } from 'react'
import { Alert } from 'vtex.styleguide'
import { useIntl } from 'react-intl'

import { alert } from '../utils/definedMessages'
import Context from '../Context/context'

const AlertArea: FC = () => {
  const intl = useIntl()

  const provider = useContext(Context)

  if (provider.showAlert === 1) {
    return (
      <Alert type="success" onClose={provider.handleCloseAlert}>
        {intl.formatMessage(alert.save)}
      </Alert>
    )
  }

  if (provider.showAlert === 2) {
    return (
      <Alert type="success" onClose={provider.handleCloseAlert}>
        {intl.formatMessage(alert.error)}
      </Alert>
    )
  }

  return null
}

export default AlertArea
