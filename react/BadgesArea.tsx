import type { FC } from 'react'
import React, { useState } from 'react'
import { Layout, PageBlock, Tabs, Tab, ToastProvider } from 'vtex.styleguide'
import './styles.global.css'
import { useIntl } from 'react-intl'

import AddBages from './AddBadges'
import EditBadges from './EditBadges'
import Provider from './Provider/provider'
import { badgessArea } from './utils/definedMessages'

const BadgesArea: FC = () => {
  const [tab, setTab] = useState({
    currentTab: 1,
  })

  const intl = useIntl()

  return (
    <ToastProvider positioning="window">
      <Provider>
        <Layout>
          <PageBlock
            title={intl.formatMessage(badgessArea.title)}
            variation="full"
          >
            <Tabs>
              <Tab
                label={intl.formatMessage(badgessArea.labelTab1)}
                active={tab.currentTab === 1}
                onClick={() => setTab({ currentTab: 1 })}
              >
                <AddBages></AddBages>
              </Tab>
              <Tab
                label={intl.formatMessage(badgessArea.labelTab2)}
                active={tab.currentTab === 2}
                onClick={() => setTab({ currentTab: 2 })}
              >
                <EditBadges />
              </Tab>
            </Tabs>
          </PageBlock>
        </Layout>
      </Provider>
    </ToastProvider>
  )
}

export default BadgesArea
