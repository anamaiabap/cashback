import type { FC } from 'react'
import React, { useState } from 'react'
import { Conditions, Card } from 'vtex.styleguide'

import { optionsFunctions } from '../utils/optionsConditions'

const ConditionsArea: FC = () => {
  const [conditions, setConditions] = useState({
    simpleStatements: [],
    operator: 'all',
  })

  function handleToggleOperator(operator: string) {
    setConditions({
      ...conditions,
      ...{ operator: conditions.operator === 'all' ? 'any' : 'all' },
    })
  }

  const optionsValues = optionsFunctions()

  return (
    <div className="mt5">
      <div className="mb5"> Regras de ativação </div>
      <Card>
        <Conditions
          canDelete
          onChangeOperator={handleToggleOperator}
          onChangeStatements={(statements: any) => {
            setConditions({
              ...conditions,
              ...{ simpleStatements: statements },
            })
          }}
          operator={conditions.operator}
          options={optionsValues}
          subjectPlaceholder="Selecione a regra"
          statements={conditions.simpleStatements}
        />
      </Card>
    </div>
  )
}

export default ConditionsArea
