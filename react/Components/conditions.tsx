import type { FC } from 'react'
import React, { useContext } from 'react'
import { Conditions, Card } from 'vtex.styleguide'
import { useIntl } from 'react-intl'

import { optionsFunctions } from '../utils/optionsConditions'
import Context from '../Context/context'
import { conditions } from '../utils/definedMessages'

const ConditionsArea: FC = () => {
  const provider = useContext(Context)

  const optionsValues = optionsFunctions()

  const intl = useIntl()

  return (
    <div className="mt5">
      <div className="mb5"> {intl.formatMessage(conditions.rule)} </div>
      <Card>
        <Conditions
          canDelete
          onChangeOperator={provider.handleToggleOperator}
          onChangeStatements={(statements: []) => {
            provider.setConditionsFunction(statements)
          }}
          operator={provider.conditions.operator}
          options={optionsValues}
          subjectPlaceholder={intl.formatMessage(conditions.selectRule)}
          statements={provider.conditions.simpleStatements}
          labels={{
            headerPrefix: intl.formatMessage(conditions.headerPrefix),
            operatorAll: intl.formatMessage(conditions.all),
            operatorAny: intl.formatMessage(conditions.none),
            headerSufix: intl.formatMessage(conditions.headerSufix),
            addNewCondition: intl.formatMessage(conditions.new),
            operatorAnd: intl.formatMessage(conditions.and),
            operatorOr: intl.formatMessage(conditions.or),
          }}
          loadingOptions={provider.conditions}
        />
      </Card>
    </div>
  )
}

export default ConditionsArea
