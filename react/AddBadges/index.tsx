import type { FC } from 'react'
import React, { useCallback, useContext } from 'react'

import AlertArea from '../Components/alert'
import ButtonArea from '../Components/button'
import ButtonSaveArea from '../Components/buttonSave'
import ConditionsArea from '../Components/conditions'
import DividerArea from '../Components/divider'
import ImageArea from '../Components/file'
import InputArea from '../Components/input'
import HtmlArea from '../Components/textarea'
import ValidationArea from '../Components/validations'
import Context from '../Context/context'

const AddBages: FC = () => {
  const provider = useContext(Context)

  const getContent = useCallback(button => {
    if (button === 'image') return <ImageArea />

    if (button === 'text') return <InputArea name={'text'} />

    return <HtmlArea />
  }, [])

  return (
    <>
      <DividerArea />
      <InputArea name={'name'} />
      <ButtonArea />
      {getContent(provider.button)}
      <ConditionsArea />
      <ValidationArea />
      <ButtonSaveArea />
      <AlertArea />
    </>
  )
}

export default AddBages
