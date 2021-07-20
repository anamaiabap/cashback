import React, { FC, useContext } from 'react'
import { Textarea } from 'vtex.styleguide'

import Context from '../Context/context'

const HtmlArea: FC = () => {
  const provider = useContext(Context)
  return (
    <>
      <div className="mt5 mb6">
        <Textarea
          label="Insira o HTML da badge"
          onChange={(e: any) => {
            provider.setHtml(e.target.value)
          }}
          value={provider.html}
        >
          Please enter your feedbacks here…
        </Textarea>
      </div>
    </>
  )
}

export default HtmlArea
