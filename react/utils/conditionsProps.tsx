import React, { useMemo } from 'react'
import { useQuery } from 'react-apollo'
import { index as RichText } from 'vtex.rich-text'
import { Image } from 'vtex.store-image'

import searchMasterdata from '../queries/searchMasterdata.gql'

export const conditionsPropsFunction = () => {
  const { data } = useQuery(searchMasterdata)

  const conditionsProps = useMemo(() => {
    if (data !== undefined) return data?.searchMasterdata

    return []
  }, [data])

  const conditionsMap = conditionsProps.map((element: any) => {
    return conditionsPropsValues(element)
  })

  return conditionsMap
}

function conditionsPropsValues(data: any) {
  const values = {
    conditions: conditionsFunction(data?.simpleStatements),
    matchType: data?.operator,
    Then: () => {
      if (data?.type === 'text') {
        return <RichText text={data?.content} />
      }

      if (data?.type === 'html') {
        return <div dangerouslySetInnerHTML={createMarkup(data?.content)} />
      }

      return <Image src={data?.content} height={100} width={200} />
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
