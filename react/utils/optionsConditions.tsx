import React from 'react'

import {
  ComplexDropdownObject,
  ComplexNumericInputRangeObject,
  SimpleInputObject,
} from './functionsConditions'

export function optionsFunctions() {
  return {
    department: {
      label: 'Departamento',
      verbs: [
        {
          label: 'é',
          value: '=',
          object: (props: any) => (
            <SimpleInputObject {...props} name={'departament'} />
          ),
        },
        {
          label: 'não é',
          value: '!=',
          object: (props: any) => (
            <SimpleInputObject {...props} name={'departament'} />
          ),
        },
      ],
    },
    category: {
      label: 'Categoria',
      verbs: [
        {
          label: 'é',
          value: '=',
          object: (props: any) => (
            <SimpleInputObject {...props} name={'category'} />
          ),
        },
        {
          label: 'não é',
          value: '!=',
          object: (props: any) => (
            <SimpleInputObject {...props} name={'category'} />
          ),
        },
      ],
    },
    brand: {
      label: 'Marca',
      verbs: [
        {
          label: 'é',
          value: '=',
          object: (props: any) => (
            <SimpleInputObject {...props} name={'brand'} />
          ),
        },
        {
          label: 'não é',
          value: '!=',
          object: (props: any) => (
            <SimpleInputObject {...props} name={'brand'} />
          ),
        },
      ],
    },
    product: {
      label: 'Produto',
      verbs: [
        {
          label: 'é',
          value: '=',
          object: (props: any) => (
            <ComplexDropdownObject {...props} name={'product'} />
          ),
        },
        {
          label: 'não é',
          value: '!=',
          object: (props: any) => (
            <ComplexDropdownObject {...props} name={'product'} />
          ),
        },
      ],
    },
    collection: {
      label: 'Coleção',
      verbs: [
        {
          label: 'é',
          value: '=',
          object: (props: any) => (
            <SimpleInputObject {...props} name={'collection'} />
          ),
        },
        {
          label: 'não é',
          value: '!=',
          object: (props: any) => (
            <SimpleInputObject {...props} name={'collection'} />
          ),
        },
      ],
    },
    specification: {
      label: 'Especificação',
      verbs: [
        {
          label: 'é',
          value: '=',
          object: (props: any) => (
            <SimpleInputObject {...props} name={'specification'} />
          ),
        },
        {
          label: 'não é',
          value: '!=',
          object: (props: any) => (
            <SimpleInputObject {...props} name={'specification'} />
          ),
        },
      ],
    },
    sale: {
      label: 'Promoção',
      verbs: [
        {
          label: 'é',
          value: '=',
          object: (props: any) => (
            <SimpleInputObject {...props} name={'sale'} />
          ),
        },
        {
          label: 'não é',
          value: '!=',
          object: (props: any) => (
            <SimpleInputObject {...props} name={'sale'} />
          ),
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
          object: (props: any) => (
            <ComplexDropdownObject {...props} name={'sku'} />
          ),
        },
        {
          label: 'não é',
          value: '!=',
          object: (props: any) => (
            <ComplexDropdownObject {...props} name={'sku'} />
          ),
        },
      ],
    },
  }
}
