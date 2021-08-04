import type { FC } from 'react'
import React, { useRef, useState, useContext } from 'react'
import { AutocompleteInput } from 'vtex.styleguide'

import Context from '../Context/context'

interface Props {
  onChange: any
  name: string
}

const AutoComplete: FC<Props> = ({
  onChange,
  name,
}: {
  onChange: any
  name: string
}) => {
  const [term, setTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const timeoutRef = useRef<any>()

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
      onSelect: (e: { label: string; value: string }) => {
        loading
        onChange(e.value)
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
    value: term,
  }

  return (
    <>
      <AutocompleteInput input={input} options={options} />
    </>
  )
}

export default AutoComplete
