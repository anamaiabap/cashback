import type { FC } from 'react'
import React, { useContext } from 'react'
import { useIntl } from 'react-intl'
import { Table } from 'vtex.styleguide'

import ModalDelete from '../Components/modalDelete'
import ModalEdit from '../Components/modalEdit'
import ContextEdit from '../Context/contextEdit'
import { edit } from '../utils/definedMessages'

const EditBadges: FC = () => {
  const intl = useIntl()
  const providerEdit = useContext(ContextEdit)
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
        providerEdit.clickEdit(rowData.index)
      },
    },
    {
      label: () => `Excluir`,
      isDangerous: true,
      onClick: ({ rowData }: { rowData: any }) => {
        providerEdit.clickDelete(rowData.id)
      },
    },
  ]

  if (providerEdit.modalDelete) return <ModalDelete></ModalDelete>
  if (providerEdit.modalEdit) return <ModalEdit></ModalEdit>

  return (
    <>
      <div className="mb5">
        <Table
          fullWidth
          schema={defaultSchema}
          items={providerEdit.listBadgesEdit}
          lineActions={lineActions}
        />
      </div>
    </>
  )
}

export default EditBadges
