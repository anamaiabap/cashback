import type { FC } from 'react'
import React, { useState } from 'react'
import { Layout, PageBlock, Tabs, Tab, ToastProvider } from 'vtex.styleguide'
import './styles.global.css'
import { useIntl } from 'react-intl'

import Provider from './Provider/provider'
import { cashbacksArea } from './utils/definedMessages'
import AddCashbacks from './AddCashbacks'
import EditCashbacks from './EditCashbacks'

const CashbackArea: FC = () => {
  const [tab, setTab] = useState({
    currentTab: 1,
  })

  const intl = useIntl()

  return (
    <ToastProvider positioning="window">
      <Provider>
        <Layout>
          <PageBlock
            title={intl.formatMessage(cashbacksArea.title)}
            variation="full"
          >
            <Tabs>
              <Tab
                label={intl.formatMessage(cashbacksArea.labelTab1)}
                active={tab.currentTab === 1}
                onClick={() => setTab({ currentTab: 1 })}
              >
                <AddCashbacks />
              </Tab>
              <Tab
                label={intl.formatMessage(cashbacksArea.labelTab2)}
                active={tab.currentTab === 2}
                onClick={() => setTab({ currentTab: 2 })}
              >
                <EditCashbacks />
              </Tab>
            </Tabs>
          </PageBlock>
        </Layout>
      </Provider>
    </ToastProvider>
  )
}

export default CashbackArea
