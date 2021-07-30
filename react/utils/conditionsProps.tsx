/* eslint-disable eqeqeq */
import React from 'react'
import { index as RichText } from 'vtex.rich-text'
import { Image } from 'vtex.store-image'

// eslint-disable-next-line @typescript-eslint/naming-convention
type valueType = 'texto' | 'imagem'

export const type: valueType = 'texto'

export const conditionsProps = {
  conditions: [
    {
      subject: 'categoryId',
      arguments: {
        id: 5,
      },
    },
  ],
  Then: () => {
    if (type === 'texto') {
      return <RichText text={type} />
    }

    return (
      <Image
        src="https://storecomponents.vteximg.com.br/arquivos/banner-infocard2.png"
        height={100}
        width={200}
        description="teste2"
      />
    )
  },
  Else: () => <RichText text={'Não é o produto'} />,
}
