import type { FC, SyntheticEvent } from 'react'
import React, { useCallback, useContext } from 'react'
import { Button, Modal } from 'vtex.styleguide'
import { useIntl } from 'react-intl'

import AlertArea from './alert'
import ButtonArea from './button'
import ConditionsArea from './conditions'
import DividerArea from './divider'
import InputArea from './input'
import HtmlArea from './textarea'
import ValidationArea from './validations'
import { commonModal, modalEdit } from '../utils/definedMessages'
import ImageEdit from './imageEdit'
import Context from '../Context/context'
import { ButtonOptions } from '../utils/buttonOptions'

const ModalEdit: FC = () => {
  const provider = useContext(Context)

  const getContent = useCallback(button => {
    if (button === ButtonOptions.image) return <ImageEdit />

    if (button === ButtonOptions.text) return <InputArea name={'text'} />

    return <HtmlArea />
  }, [])

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
                provider.editBadges()
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
      <ButtonArea />
      {getContent(provider.button)}
      <ConditionsArea />
      <ValidationArea />
      <AlertArea />
    </Modal>
  )
}

export default ModalEdit
