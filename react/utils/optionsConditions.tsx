import React from 'react'

import {
  SimpleInputObject,
  ComplexNumericInputRangeObject,
} from './functionsConditions'

export function optionsFunctions() {
  return {
    category: {
      label: 'Categoria',
      verbs: [
        {
          label: 'é',
          value: '=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
        {
          label: 'não é',
          value: '!=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
      ],
    },
    brand: {
      label: 'Marca',
      verbs: [
        {
          label: 'é',
          value: '=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
        {
          label: 'não é',
          value: '!=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
      ],
    },
    product: {
      label: 'Produto',
      verbs: [
        {
          label: 'é',
          value: '=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
        {
          label: 'não é',
          value: '!=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
      ],
    },
    collection: {
      label: 'Coleção',
      verbs: [
        {
          label: 'é',
          value: '=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
        {
          label: 'não é',
          value: '!=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
      ],
    },
    specification: {
      label: 'Especificação',
      verbs: [
        {
          label: 'é',
          value: '=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
        {
          label: 'não é',
          value: '!=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
      ],
    },
    sale: {
      label: 'Promoção',
      verbs: [
        {
          label: 'é',
          value: '=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
        {
          label: 'não é',
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
      label: 'SKU',
      verbs: [
        {
          label: 'é',
          value: '=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
        {
          label: 'não é',
          value: '!=',
          object: (props: any) => <SimpleInputObject {...props} />,
        },
      ],
    },
  }
}
