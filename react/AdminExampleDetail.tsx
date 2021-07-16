import type { FC } from 'react'
import React from 'react'
import { FormattedMessage } from 'react-intl'

import './styles.global.css'

const AdminExampleDetail: FC = () => {
  return <FormattedMessage id="admin-example.hello-world" />
}

export default AdminExampleDetail
