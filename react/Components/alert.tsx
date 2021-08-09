import type { FC } from 'react'
import React, { useContext } from 'react'
import { Alert } from 'vtex.styleguide'
import { useIntl } from 'react-intl'

import { alert } from '../utils/definedMessages'
import Context from '../Context/context'

const SHOW_ALERT_SAVE = 1
const SHOW_ALERT_ERROR = 2

const AlertArea: FC = () => {
  const intl = useIntl()

  const provider = useContext(Context)

  if (provider.showAlert === SHOW_ALERT_SAVE) {
    return (
      <Alert type="success" onClose={provider.handleCloseAlert}>
        {intl.formatMessage(alert.save)}
      </Alert>
    )
  }

  if (provider.showAlert === SHOW_ALERT_ERROR) {
    return (
      <Alert type="success" onClose={provider.handleCloseAlert}>
        {intl.formatMessage(alert.error)}
      </Alert>
    )
  }

  return null
}

export default AlertArea
