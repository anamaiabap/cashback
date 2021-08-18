import React from 'react'
import { useIntl } from 'react-intl'

import { options } from './definedMessages'
import AutoComplete from './autoComplete'
import GetSpecificationNameAndValue from './specificationValues'

export function optionsFunctions() {
  const intl = useIntl()

  return {
    categoryId: {
      label: intl.formatMessage(options.category),
      verbs: [
        {
          label: intl.formatMessage(options.is),
          value: '=',
          object: (props: any) => <AutoComplete {...props} name="categoryId" />,
        },
        {
          label: intl.formatMessage(options.isNot),
          value: '!=',
          object: (props: any) => <AutoComplete {...props} name="categoryId" />,
        },
      ],
    },
    brandId: {
      label: intl.formatMessage(options.brand),
      verbs: [
        {
          label: intl.formatMessage(options.is),
          value: '=',
          object: (props: any) => <AutoComplete {...props} name="brandId" />,
        },
        {
          label: intl.formatMessage(options.isNot),
          value: '!=',
          object: (props: any) => <AutoComplete {...props} name="brandId" />,
        },
      ],
    },
    productId: {
      label: intl.formatMessage(options.product),
      verbs: [
        {
          label: intl.formatMessage(options.is),
          value: '=',
          object: (props: any) => <AutoComplete {...props} name="productId" />,
        },
        {
          label: intl.formatMessage(options.isNot),
          value: '!=',
          object: (props: any) => <AutoComplete {...props} name="productId" />,
        },
      ],
    },
    productClusters: {
      label: intl.formatMessage(options.collection),
      verbs: [
        {
          label: intl.formatMessage(options.is),
          value: '=',
          object: (props: any) => (
            <AutoComplete {...props} name="productClusters" />
          ),
        },
        {
          label: intl.formatMessage(options.isNot),
          value: '!=',
          object: (props: any) => (
            <AutoComplete {...props} name="productClusters" />
          ),
        },
      ],
    },
    specificationProperties: {
      label: intl.formatMessage(options.specification),
      verbs: [
        {
          label: intl.formatMessage(options.is),
          value: '=',
          object: (props: any) => <GetSpecificationNameAndValue {...props} />,
        },
        {
          label: intl.formatMessage(options.isNot),
          value: '!=',
          object: (props: any) => <GetSpecificationNameAndValue {...props} />,
        },
      ],
    },
    selectedItemId: {
      label: intl.formatMessage(options.sku),
      verbs: [
        {
          label: intl.formatMessage(options.is),
          value: '=',
          object: (props: any) => (
            <AutoComplete {...props} name="selectedItemId" />
          ),
        },
        {
          label: intl.formatMessage(options.isNot),
          value: '!=',
          object: (props: any) => (
            <AutoComplete {...props} name="selectedItemId" />
          ),
        },
      ],
    },
  }
}
