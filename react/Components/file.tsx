import type { FC } from 'react'
import React, { useContext } from 'react'
import { useIntl } from 'react-intl'
import { Dropzone } from 'vtex.styleguide'

import Context from '../Context/context'
import { file } from '../utils/definedMessages'

const ImageArea: FC = () => {
  const provider = useContext(Context)
  const intl = useIntl()

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
      </div>
    </>
  )
}

export default ImageArea
