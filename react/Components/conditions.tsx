import type { FC } from 'react'
import React, { useContext } from 'react'
import { Conditions, Card } from 'vtex.styleguide'

import { optionsFunctions } from '../utils/optionsConditions'
import Context from '../Context/context'

const ConditionsArea: FC = () => {
  const provider = useContext(Context)

  const optionsValues = optionsFunctions()

  return (
    <div className="mt5">
      <div className="mb5"> Regras de ativação </div>
      <Card>
        <Conditions
          canDelete
          onChangeOperator={provider.handleToggleOperator}
          onChangeStatements={(statements: []) => {
            provider.setConditionsFunction(statements)
          }}
          operator={provider.conditions.operator}
          options={optionsValues}
          subjectPlaceholder="Selecione a regra"
          statements={provider.conditions.simpleStatements}
          labels={{
            headerPrefix: 'Corresponder a',
            operatorAll: 'todas',
            operatorAny: 'nenhuma',
            headerSufix: 'condições',
            addNewCondition: 'Adicionar nova condição',
            operatorAnd: 'e',
            operatorOr: 'ou',
          }}
        />
      </Card>
    </div>
  )
}

export default ConditionsArea
