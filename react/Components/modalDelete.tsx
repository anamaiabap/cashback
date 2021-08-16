import type { FC, SyntheticEvent } from 'react'
import React, { useContext } from 'react'
import { useIntl } from 'react-intl'
import { Button, Modal } from 'vtex.styleguide'

import ContextEdit from '../Context/contextEdit'
import { commonModal, modalDelete } from '../utils/definedMessages'

const ModalDelete: FC = () => {
  const providerEdit = useContext(ContextEdit)

  const intl = useIntl()

  function closeModal() {
    providerEdit.setModalDelete(false)
  }

  return (
    <Modal
      isOpen={providerEdit.modalDelete}
      title={intl.formatMessage(modalDelete.deleteText)}
      responsiveFullScreen
      bottomBar={
        <div className="nowrap">
          <span className="mr4">
            <Button
              variation="tertiary"
              onClick={(e: SyntheticEvent) => {
                e.preventDefault
                closeModal()
              }}
            >
              {intl.formatMessage(commonModal.cancel)}
            </Button>
          </span>
          <span>
            <Button
              variation="primary"
              onClick={(e: SyntheticEvent) => {
                e.preventDefault
                providerEdit.deleteBadges()
              }}
            >
              {intl.formatMessage(commonModal.delete)}
            </Button>
          </span>
        </div>
      }
      onClose={(e: SyntheticEvent) => {
        e.preventDefault
        closeModal()
      }}
    >
      <div className="pv3 t-body c-muted-2 mb5">
        {intl.formatMessage(modalDelete.deleteQuestion)}
      </div>
    </Modal>
  )
}

export default ModalDelete
