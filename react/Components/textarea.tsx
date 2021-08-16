import type { FC } from 'react'
import React, { useContext } from 'react'
import { useIntl } from 'react-intl'
import { Textarea } from 'vtex.styleguide'

import ContextAdd from '../Context/contextAdd'
import { html } from '../utils/definedMessages'

const HtmlArea: FC = () => {
  const provider = useContext(ContextAdd)

  const intl = useIntl()

  return (
    <>
      <div className="mt5 mb6">
        <Textarea
          label={intl.formatMessage(html.label)}
          onChange={(e: any) => {
            provider.setHtml(e.target.value)
          }}
          value={provider.html}
        ></Textarea>
      </div>
    </>
  )
}

export default HtmlArea
