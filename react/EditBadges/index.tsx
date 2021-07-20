import React, { FC, useContext } from 'react'
import { Table } from 'vtex.styleguide'

const EditBadges: FC = () => {
  const defaultSchema = {
    properties: {
      id: {
        title: 'Nome',
      },
      dockName: {
        title: 'Estilo',
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
