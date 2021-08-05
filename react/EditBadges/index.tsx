import type { FC } from 'react'
import React from 'react'
import { useIntl } from 'react-intl'
import { Table } from 'vtex.styleguide'

import { edit } from '../utils/definedMessages'

const EditBadges: FC = () => {
  const intl = useIntl()
  const defaultSchema = {
    properties: {
      id: {
        title: intl.formatMessage(edit.name),
      },
      dockName: {
        title: intl.formatMessage(edit.style),
      },
    },
  }

  return (
    <>
      <div className="mb5">
        <Table fullWidth schema={defaultSchema} />
      </div>
    </>
  )
}

export default EditBadges
