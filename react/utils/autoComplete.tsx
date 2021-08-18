import type { FC } from 'react'
import React, { useMemo, useRef, useState, useContext } from 'react'
import { AutocompleteInput } from 'vtex.styleguide'

import Context from '../Context/context'

interface Props {
  onChange: any
  name: string
  value: string
}

// eslint-disable-next-line no-restricted-syntax
enum FieldNames {
  productId = 'productId',
  selectedItemId = 'selectedItemId',
  brandId = 'brandId',
  productClusters = 'productClusters',
  categoryId = 'categoryId',
  specificationProperties = 'specificationProperties',
}

const AutoComplete: FC<Props> = ({
  onChange,
  name,
  value,
}: {
  onChange: any
  name: string
  value: any
}) => {
  const [term, setTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const timeoutRef = useRef<any>()

  const provider = useContext(Context)

  const fields: any = useMemo(() => {
    return {
      [FieldNames.productId]: provider.nameProducts,
      [FieldNames.selectedItemId]: provider.nameSku,
      [FieldNames.brandId]: provider.nameBrands,
      [FieldNames.productClusters]: provider.nameCollections,
      [FieldNames.categoryId]: provider.nameCategory,
      [FieldNames.specificationProperties]: provider.nameSpecification,
    }
  }, [
    provider.nameBrands,
    provider.nameCategory,
    provider.nameCollections,
    provider.nameProducts,
    provider.nameSku,
    provider.nameSpecification,
  ])

  const values = useMemo(() => fields[name], [fields, name])

  const nameValue = values.filter((element: any) =>
    element.value === value?.id ? element : ''
  )

  const options = useMemo(() => {
    if (values !== undefined) {
      return {
        onSelect: (e: { label: string; value: string }) => {
          loading
          onChange({ id: e.value })
        },
        value: !term.length
          ? []
          : values.filter((user: any) =>
              typeof user === 'string'
                ? user.toLowerCase().includes(term.toLowerCase())
                : user.label.toLowerCase().includes(term.toLowerCase())
            ),
      }
    }
  }, [loading, onChange, term, values])

  const input = {
    onChange: (termOnChange: any) => {
      if (termOnChange) {
        setLoading(true)
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
          setLoading(false)
          setTerm(termOnChange)
          timeoutRef.current = null
        }, 1000)
      } else {
        setTerm(termOnChange)
      }
    },
    onClear: () => setTerm(''),
    placeholder: 'Comece a digitar para as opções aparecerem',
    value: nameValue.length > 0 ? nameValue[0].label : term,
  }

  return (
    <>
      <AutocompleteInput input={input} options={options} />
    </>
  )
}

export default AutoComplete
