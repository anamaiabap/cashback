import React, { useMemo } from 'react'
import { useQuery } from 'react-apollo'
import { index as RichText } from 'vtex.rich-text'
import { Image } from 'vtex.store-image'

import searchMasterdata from '../queries/searchMasterdata.gql'

export const conditionsPropsFunction = (
  props: any,
  handles: HandlesType,
  withModifiers: any
) => {
  const { data } = useQuery<BadgesData>(searchMasterdata)

  const conditionsProps = useMemo(() => {
    if (data !== undefined) return data?.searchMasterdata?.data

    return []
  }, [data])

  const conditionsMap = conditionsProps.map((element: BadgesDataValues) => {
    return conditionsPropsValues(element, props, handles, withModifiers)
  })

  return conditionsMap
}

function conditionsPropsValues(
  data: BadgesDataValues,
  props: any,
  handles: HandlesType,
  withModifiers: any
) {
  const values = {
    conditions: conditionsFunction(data?.simpleStatements),
    matchType: data?.operator,
    Then: () => {
      const classes = withModifiers('badges', data?.type)

      const allClasses = `${handles.badgeContainer} ${classes}`

      return (
        <span className={allClasses}>
          {decisionBetweenTextImageHtml(data, props)}
        </span>
      )
    },
  }

  return values
}

function decisionBetweenTextImageHtml(data: BadgesDataValues, props: any) {
  if (data?.type === 'text') {
    return <RichText {...props.text} text={data?.content} />
  }

  if (data?.type === 'html') {
    return <div dangerouslySetInnerHTML={createMarkup(data?.content)} />
  }

  return <Image {...props.image} src={data?.content} />
}

function createMarkup(content: any) {
  return { __html: content }
}

function conditionsFunction(
  data: Array<{
    subject: any
    object: { id: string; name: string; value: string }
    verb: string
  }>
) {
  const value: Array<{
    subject: string
    arguments: { id?: string; name?: string; value?: string }
    toBe: boolean
  }> = []

  data.forEach(element => {
    if (element.object.id) {
      const rule = {
        subject: `${element.subject}`,
        arguments: {
          id: element.object.id,
        },
        toBe: element.verb === '=',
      }

      value.push(rule)
    } else {
      const rule = {
        subject: `${element.subject}`,
        arguments: {
          name: element.object.name,
          value: element.object.value,
        },
        toBe: element.verb === '=',
      }

      value.push(rule)
    }
  })

  return value
}
