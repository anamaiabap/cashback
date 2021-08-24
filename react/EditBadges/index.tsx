import type { FC } from 'react'
import React, { useContext } from 'react'
import { useIntl } from 'react-intl'
import { Table } from 'vtex.styleguide'

import ModalDelete from '../Components/modalDelete'
import ModalEdit from '../Components/modalEdit'
import Context from '../Context/context'
import { edit } from '../utils/definedMessages'

const EditBadges: FC = () => {
  const intl = useIntl()
  const provider = useContext(Context)
  const defaultSchema = {
    properties: {
      name: {
        title: intl.formatMessage(edit.name),
      },
      type: {
        title: intl.formatMessage(edit.style),
      },
    },
  }

  const lineActions = [
    {
      label: () => `Editar`,
      onClick: ({ rowData }: { rowData: any }) => {
        provider.clickEdit(rowData.index, rowData.id)
      },
    },
    {
      label: () => `Excluir`,
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
          items={provider.listBadgesEdit}
          lineActions={lineActions}
        />
      </div>
    </>
  )
}

export default EditBadges
