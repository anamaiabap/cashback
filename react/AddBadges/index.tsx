import React, { FC, useCallback, useContext } from 'react'

import ButtonArea from '../Components/button'
import ConditionsArea from '../Components/conditions'
import DividerArea from '../Components/divider'
import ImageArea from '../Components/file'
import InputArea from '../Components/input'
import HtmlArea from '../Components/textarea'
import Context from '../Context/context'

const AddBages: FC = () => {
  const provider = useContext(Context)

  const getContent = useCallback((button) => {
    if (button === 1) return <ImageArea />

    if (button === 2) return <InputArea name={'text'} />

    return <HtmlArea />
  }, [])
  return (
    <>
      <DividerArea />
      <InputArea name={'name'} />
      <ButtonArea />
      {getContent(provider.button)}

      <ConditionsArea />
    </>
  )
}

export default AddBages
