import React, { FC, useContext, useState } from 'react'
import { Dropzone } from 'vtex.styleguide'

import Context from '../Context/context'

const ImageArea: FC = () => {
  const provider = useContext(Context)

  return (
    <>
      <div className="mt5">
        <Dropzone
          onDropAccepted={provider.chooseFile}
          label="Insira o arquivo da badge"
        >
          <div className="pt7">
            <div>
              <span className="f4">Arraste a imagem aqui </span>
              <span className="f4 c-link" style={{ cursor: 'pointer' }}>
                escolha um arquivo
              </span>
            </div>
          </div>
        </Dropzone>
      </div>
    </>
  )
}

export default ImageArea
