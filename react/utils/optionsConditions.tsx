import React from 'react'

import { AutoComplete } from './functionsConditions'

export function optionsFunctions() {
  return {
    categoryId: {
      label: 'Categoria',
      verbs: [
        {
          label: 'é',
          value: '=',
          object: (props: any) => (
            <AutoComplete {...props} name={'categoryId'} />
          ),
        },
        {
          label: 'não é',
          value: '!=',
          object: (props: any) => (
            <AutoComplete {...props} name={'categoryId'} />
          ),
        },
      ],
    },
    brandId: {
      label: 'Marca',
      verbs: [
        {
          label: 'é',
          value: '=',
          object: (props: any) => <AutoComplete {...props} name={'brandId'} />,
        },
        {
          label: 'não é',
          value: '!=',
          object: (props: any) => <AutoComplete {...props} name={'brandId'} />,
        },
      ],
    },
    productId: {
      label: 'Produto',
      verbs: [
        {
          label: 'é',
          value: '=',
          object: (props: any) => (
            <AutoComplete {...props} name={'productId'} />
          ),
        },
        {
          label: 'não é',
          value: '!=',
          object: (props: any) => (
            <AutoComplete {...props} name={'productId'} />
          ),
        },
      ],
    },
    productClusters: {
      label: 'Coleção',
      verbs: [
        {
          label: 'é',
          value: '=',
          object: (props: any) => (
            <AutoComplete {...props} name={'productClusters'} />
          ),
        },
        {
          label: 'não é',
          value: '!=',
          object: (props: any) => (
            <AutoComplete {...props} name={'productClusters'} />
          ),
        },
      ],
    },
    specificationProperties: {
      label: 'Especificação',
      verbs: [
        {
          label: 'é',
          value: '=',
          object: (props: any) => (
            <AutoComplete {...props} name={'specificationProperties'} />
          ),
        },
        {
          label: 'não é',
          value: '!=',
          object: (props: any) => (
            <AutoComplete {...props} name={'specificationProperties'} />
          ),
        },
      ],
    },
    selectedItemId: {
      label: 'SKU',
      verbs: [
        {
          label: 'é',
          value: '=',
          object: (props: any) => (
            <AutoComplete {...props} name={'selectedItemId'} />
          ),
        },
        {
          label: 'não é',
          value: '!=',
          object: (props: any) => (
            <AutoComplete {...props} name={'selectedItemId'} />
          ),
        },
      ],
    },
  }
}
