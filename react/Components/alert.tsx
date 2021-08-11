import type { FC } from 'react'
import React, { useContext } from 'react'
import { Alert } from 'vtex.styleguide'

import Context from '../Context/context'
import { ShowAlertOptions } from '../utils/showAlertOptios'

const AlertArea: FC = () => {
  const provider = useContext(Context)

  if (provider.showAlert === ShowAlertOptions.alertSave) {
    return (
      <Alert type="success" onClose={provider.handleCloseAlert}>
        Dados salvos!
      </Alert>
    )
  }

  if (provider.showAlert === ShowAlertOptions.alertError) {
    return (
      <Alert type="success" onClose={provider.handleCloseAlert}>
        Erro ao salvar os dados
      </Alert>
    )
  }

  return null
}

export default AlertArea
