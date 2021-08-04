/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable radix */
import { Input, AutocompleteInput } from 'vtex.styleguide'
import React, { useContext } from 'react'

import Context from '../Context/context'

export function AutoComplete({ name }: { name: string }) {
  const provider = useContext(Context)

  let values

  if (name === 'productId') values = provider.nameProducts
  if (name === 'selectedItemId') values = provider.nameSku
  if (name === 'brandId') values = provider.nameBrands
  if (name === 'productClusters') values = provider.nameCollections
  if (name === 'categoryId') values = provider.nameCategory
  if (name === 'specificationProperties') values = provider.nameSpecification
  let options

  if (values !== undefined) {
    options = {
      onSelect: () => provider.loading,
      value: !provider.term.length
        ? []
        : values.filter((user: any) =>
            typeof user === 'string'
              ? user.toLowerCase().includes(provider.term.toLowerCase())
              : user.label.toLowerCase().includes(provider.term.toLowerCase())
          ),
    }
  }

  const input = {
    onChange: (term: any) => {
      if (provider.term) {
        provider.setLoading(true)
        if (provider.timeoutRef.current) {
          clearTimeout(provider.timeoutRef.current)
        }

        provider.timeoutRef.current = setTimeout(() => {
          provider.setLoading(false)
          provider.setTerm(term)
          provider.timeoutRef.current = null
        }, 1000)
      } else {
        provider.setTerm(term)
      }
    },
    onClear: () => provider.setTerm(''),
    placeholder: 'Comece a digitar para as opções aparecerem',
    value: provider.term,
  }

  return <AutocompleteInput input={input} options={options} />
}
