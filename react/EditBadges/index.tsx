import type { FC, SyntheticEvent } from 'react'
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

  function handleNextClick() {
    const newPage = provider.paginations.currentPage + 1
    const itemFrom = provider.paginations.currentItemTo + 1
    const itemTo = provider.paginations.tableLength * newPage

    goToPage(newPage, itemFrom, itemTo)
  }

  function handlePrevClick() {
    if (provider.paginations.currentPage === 0) return
    const newPage = provider.paginations.currentPage - 1
    const itemFrom =
      provider.paginations.currentItemFrom - provider.paginations.tableLength

    const itemTo = provider.paginations.currentItemFrom - 1

    goToPage(newPage, itemFrom, itemTo)
  }

  function goToPage(
    currentPage: number,
    currentItemFrom: number,
    currentItemTo: number
  ) {
    provider.setPaginationFunction({
      currentPage,
      currentItemFrom,
      currentItemTo,
    })
  }

  function handleRowsChange(e: any, value: string) {
    provider.setPaginationFunction({
      tableLength: parseInt(value, 10),
      currentItemTo: parseInt(value, 10),
    })
  }

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
          pagination={{
            onNextClick: (e: SyntheticEvent) => {
              e.preventDefault()
              handleNextClick()
            },
            onPrevClick: (e: SyntheticEvent) => {
              e.preventDefault()
              handlePrevClick()
            },
            currentItemFrom: provider.paginations.currentItemFrom,
            currentItemTo: provider.paginations.currentItemTo,
            onRowsChange: (e: SyntheticEvent, value: string) => {
              e.preventDefault()
              handleRowsChange(e, value)
            },
            textShowRows: intl.formatMessage(edit.textShowRows),
            textOf: intl.formatMessage(edit.textOf),
            totalItems: provider.sizeOfAllBadgesIndexed,
            rowsOptions: [5, 10, 15, 25],
          }}
        />
      </div>
    </>
  )
}

export default EditBadges
