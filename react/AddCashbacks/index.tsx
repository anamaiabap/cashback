import type { FC } from 'react'
import React from 'react'

import AlertArea from '../Components/alert'
import ButtonSaveArea from '../Components/buttonSave'
import ConditionsArea from '../Components/conditions'
import DividerArea from '../Components/divider'
import InputArea from '../Components/input'
import ValidationArea from '../Components/validations'

const AddCashbacks: FC = () => {
  return (
    <>
      <DividerArea />
      <InputArea name={'name'} />
      <InputArea name={'cashback'} />
      <ConditionsArea />
      <ValidationArea />
      <ButtonSaveArea />
      <AlertArea />
    </>
  )
}

export default AddCashbacks
