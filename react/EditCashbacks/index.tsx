import type { FC } from 'react'
import React, { useContext } from 'react'
import { useIntl } from 'react-intl'
import { Table } from 'vtex.styleguide'

import ModalDelete from '../Components/modalDelete'
import ModalEdit from '../Components/modalEdit'
import Context from '../Context/context'
import { edit } from '../utils/definedMessages'

const EditCashbacks: FC = () => {
  const intl = useIntl()
  const provider = useContext(Context)
  const defaultSchema = {
    properties: {
      name: {
        title: intl.formatMessage(edit.name),
      },
      cashback: {
        title: intl.formatMessage(edit.cashback),
      },
    },
  }

  const lineActions = [
    {
      label: () => intl.formatMessage(edit.edit),
      onClick: ({ rowData }: { rowData: any }) => {
        provider.clickEdit(rowData.index, rowData.id)
      },
    },
    {
      label: () => intl.formatMessage(edit.delete),
      isDangerous: true,
      onClick: ({ rowData }: { rowData: any }) => {
        provider.clickDelete(rowData.id)
      },
    },
  ]

  if (provider.modalDelete) return <ModalDelete></ModalDelete>
  if (provider.modalEdit) return <ModalEdit></ModalEdit>

  return (
    <>
      <div className="mb5">
        <Table
          fullWidth
          schema={defaultSchema}
          items={provider.listEdit}
          lineActions={lineActions}
        />
      </div>
    </>
  )
}

export default EditCashbacks
