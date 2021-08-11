import type { FC } from 'react'
import React from 'react'
import { Divider } from 'vtex.styleguide'

const DividerArea: FC = () => {
  return (
    <div className="mv6">
      <Divider orientation="horizontal" />
    </div>
  )
}

export default DividerArea
