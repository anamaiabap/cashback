import React, { FC, useState } from 'react'
import { Conditions, Card } from 'vtex.styleguide'

import { options } from '../utils/optionsConditions'

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

  return (
    <div className="mt5">
      <div className="mb5"> Regras de ativação </div>
      <Card>
        <Conditions
          canDelete
          isFullWidth
          onChangeOperator={handleToggleOperator}
          onChangeStatements={(statements: any) => {
            setConditions({
              ...conditions,
              ...{ simpleStatements: statements },
            })
          }}
          operator={conditions.operator}
          options={options}
          subjectPlaceholder="Select subject"
          statements={conditions.simpleStatements}
        />
      </Card>
    </div>
  )
}

export default ConditionsArea
