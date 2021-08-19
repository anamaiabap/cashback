import type { FC, SyntheticEvent } from 'react'
import React, { useContext } from 'react'
import { useIntl } from 'react-intl'
import { Dropzone, Button } from 'vtex.styleguide'

import Context from '../Context/context'
import { commonModal, file, modalEdit } from '../utils/definedMessages'

const ImageEdit: FC = () => {
  const provider = useContext(Context)

  const intl = useIntl()

  if (provider.showImage) {
    return (
      <div className="mt5">
        <div>
          <img src={provider.file.result} height="300"></img>
        </div>
        <Button
          onClick={(e: SyntheticEvent) => {
            e.preventDefault()
            provider.setShowImage(false)
          }}
        >
          {intl.formatMessage(modalEdit.changeImage)}
        </Button>
      </div>
    )
  }

  return (
    <>
      <div className="mt5">
        <Dropzone
          onDropAccepted={provider.chooseFile}
          label={intl.formatMessage(file.label)}
          accept=".png,.jpg,.jpeg"
        >
          <div className="pt7">
            <div>
              <span className="f4">
                {`${intl.formatMessage(file.dropImage)} `}{' '}
              </span>
              <span className="f4 c-link" style={{ cursor: 'pointer' }}>
                {intl.formatMessage(file.choiceImage)}
              </span>
            </div>
            <div className="ml8">
              <span>{intl.formatMessage(file.acceptFiles)}</span>
            </div>
          </div>
        </Dropzone>
        {provider.file.result && (
          <Button
            onClick={(e: SyntheticEvent) => {
              e.preventDefault()
              provider.setShowImage(true)
            }}
          >
            {intl.formatMessage(commonModal.cancel)}
          </Button>
        )}
      </div>
    </>
  )
}

export default ImageEdit
