import type { FC } from 'react'
import React, { useContext } from 'react'
import { Alert } from 'vtex.styleguide'

import Context from '../Context/context'

const SHOW_ALERT_SAVE = 1
const SHOW_ALERT_ERROR = 2

const AlertArea: FC = () => {
  const provider = useContext(Context)

  if (provider.showAlert === SHOW_ALERT_SAVE) {
    return (
      <Alert type="success" onClose={provider.handleCloseAlert}>
        Dados salvos!
      </Alert>
    )
  }

  if (provider.showAlert === SHOW_ALERT_ERROR) {
    return (
      <Alert type="success" onClose={provider.handleCloseAlert}>
        Erro ao salvar os dados
      </Alert>
    )
  }

  return null
}

export default AlertArea
