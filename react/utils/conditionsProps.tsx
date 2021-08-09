import React, { useMemo } from 'react'
import { useQuery } from 'react-apollo'
import { index as RichText } from 'vtex.rich-text'
import { Image } from 'vtex.store-image'

import searchMasterdata from '../queries/searchMasterdata.gql'
import type { ImagePropsType } from '../typings/imageProps'

export const conditionsPropsFunction = (
  richTextProps: RichTextProps,
  imageProps: ImagePropsType
) => {
  const { data } = useQuery(searchMasterdata)

  const conditionsProps = useMemo(() => {
    if (data !== undefined) return data?.searchMasterdata

    return []
  }, [data])

  const conditionsMap = conditionsProps.map((element: any) => {
    return conditionsPropsValues(element, richTextProps, imageProps)
  })

  return conditionsMap
}

function conditionsPropsValues(
  data: any,
  richTextProps: RichTextProps,
  imageProps: ImagePropsType
) {
  const values = {
    conditions: conditionsFunction(data?.simpleStatements),
    matchType: data?.operator,
    Then: () => {
      if (data?.type === 'text') {
        return (
          <RichText
            text={data?.content}
            font={richTextProps.font}
            textColor={richTextProps.textColor}
            htmlId={richTextProps.htmlId}
            textAlignment={richTextProps.textAlignment}
            textPosition={richTextProps.textPosition}
            classes={richTextProps.classes}
          />
        )
      }

      if (data?.type === 'html') {
        return <div dangerouslySetInnerHTML={createMarkup(data?.content)} />
      }

      return (
        <Image
          src={data?.content}
          height={imageProps.height}
          width={imageProps.width}
          maxWidth={imageProps.maxWidth}
          maxHeight={imageProps.maxHeight}
          minWidth={imageProps.minWidth}
          minHeight={imageProps.minHeight}
          alt={imageProps.alt}
          title={imageProps.title}
          classes={imageProps.classesImage}
          preload={imageProps.preload}
        />
      )
    },
  }

  return values
}

function createMarkup(content: any) {
  return { __html: content }
}

function conditionsFunction(data: any) {
  const value: Array<{
    subject: string
    arguments: { id: string }
    toBe: boolean
  }> = []

  data.forEach((element: { subject: string; object: string; verb: string }) => {
    const rule = {
      subject: `${element.subject}`,
      arguments: {
        id: element.object,
      },
      toBe: element.verb === '=',
    }

    value.push(rule)
  })

  return value
}
