import React from 'react'
import { useIntl } from 'react-intl'

import { options } from './definedMessages'
import {
  SimpleInputObject,
  ComplexNumericInputRangeObject,
} from './functionsConditions'

export function optionsFunctions() {
  const intl = useIntl()

  return {
    category: {
      label: intl.formatMessage(options.category),
      verbs: [
        {
          label: intl.formatMessage(options.is),
          value: '=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
        {
          label: intl.formatMessage(options.isNot),
          value: '!=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
      ],
    },
    brand: {
      label: intl.formatMessage(options.brand),
      verbs: [
        {
          label: intl.formatMessage(options.is),
          value: '=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
        {
          label: intl.formatMessage(options.isNot),
          value: '!=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
      ],
    },
    product: {
      label: intl.formatMessage(options.product),
      verbs: [
        {
          label: intl.formatMessage(options.is),
          value: '=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
        {
          label: intl.formatMessage(options.isNot),
          value: '!=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
      ],
    },
    collection: {
      label: intl.formatMessage(options.collection),
      verbs: [
        {
          label: intl.formatMessage(options.is),
          value: '=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
        {
          label: intl.formatMessage(options.isNot),
          value: '!=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
      ],
    },
    specification: {
      label: intl.formatMessage(options.specification),
      verbs: [
        {
          label: intl.formatMessage(options.is),
          value: '=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
        {
          label: intl.formatMessage(options.isNot),
          value: '!=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
      ],
    },
    sale: {
      label: 'Promoção',
      verbs: [
        {
          label: intl.formatMessage(options.is),
          value: '=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
        {
          label: intl.formatMessage(options.isNot),
          value: '!=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
        {
          label: 'está entre',
          value: 'between',
          object: (props: any) => <ComplexNumericInputRangeObject {...props} />,
        },
      ],
    },
    sku: {
      label: intl.formatMessage(options.sku),
      verbs: [
        {
          label: intl.formatMessage(options.is),
          value: '=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
        {
          label: intl.formatMessage(options.isNot),
          value: '!=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
      ],
    },
  }
}
