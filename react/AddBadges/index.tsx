import React, { FC, useContext } from 'react'

import ButtonArea from '../Components/button'
import ConditionsArea from '../Components/conditions'
import DividerArea from '../Components/divider'
import ImageArea from '../Components/file'
import InputArea from '../Components/input'
import HtmlArea from '../Components/textarea'
import Context from '../Context/context'

const AddBages: FC = () => {
  const provider = useContext(Context)
  return (
    <>
      <DividerArea />
      <InputArea name={'name'} />
      <ButtonArea />
      {provider.button === 1 ? (
        <ImageArea />
      ) : provider.button === 2 ? (
        <InputArea name={'text'} />
      ) : (
        <HtmlArea />
      )}
      <ConditionsArea />
    </>
  )
}

export default AddBages
