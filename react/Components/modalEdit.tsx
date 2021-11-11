import type { FC, SyntheticEvent } from 'react'
import React, { useContext } from 'react'
import { Button, Modal } from 'vtex.styleguide'
import { useIntl } from 'react-intl'

import AlertArea from './alert'
import ConditionsArea from './conditions'
import DividerArea from './divider'
import InputArea from './input'
import ValidationArea from './validations'
import { commonModal, modalEdit } from '../utils/definedMessages'
import Context from '../Context/context'

const ModalEdit: FC = () => {
  const provider = useContext(Context)

  const intl = useIntl()

  function closeModal() {
    provider.setModalEdit(false)
    provider.clearValue()
  }

  return (
    <Modal
      isOpen={provider.modalEdit}
      title={intl.formatMessage(modalEdit.editText)}
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
                provider.editCashback()
              }}
            >
              {intl.formatMessage(commonModal.edit)}
            </Button>
          </span>
        </div>
      }
      onClose={(e: SyntheticEvent) => {
        e.preventDefault
        closeModal()
      }}
    >
      <DividerArea />
      <InputArea name={'name'} />
      <InputArea name={'cashback'} />
      <ConditionsArea />
      <ValidationArea />
      <AlertArea />
    </Modal>
  )
}

export default ModalEdit
