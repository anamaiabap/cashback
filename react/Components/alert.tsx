import type { FC } from 'react'
import React, { useContext } from 'react'
import { Alert } from 'vtex.styleguide'

import Context from '../Context/context'

const AlertArea: FC = () => {
  const provider = useContext(Context)

  if (provider.showAlert === 1) {
    return (
      <Alert type="success" onClose={provider.handleCloseAlert}>
        Dados salvos!
      </Alert>
    )
  }

  if (provider.showAlert === 2) {
    return (
      <Alert type="success" onClose={provider.handleCloseAlert}>
        Erro ao salvar os dados
      </Alert>
    )
  }

  return null
}

export default AlertArea
