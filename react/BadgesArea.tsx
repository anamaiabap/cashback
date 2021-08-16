import type { FC } from 'react'
import React, { useState } from 'react'
import { Layout, PageBlock, Tabs, Tab } from 'vtex.styleguide'
import './styles.global.css'
import { useIntl } from 'react-intl'

import AddBages from './AddBadges'
import EditBadges from './EditBadges'
import ProviderAdd from './Provider/providerAdd'
import { badgessArea } from './utils/definedMessages'
import ProviderEdit from './Provider/providerEdit'

const BadgesArea: FC = () => {
  const [tab, setTab] = useState({
    currentTab: 1,
  })

  const intl = useIntl()

  return (
    <ProviderAdd>
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
              <ProviderEdit>
                <EditBadges />
              </ProviderEdit>
            </Tab>
          </Tabs>
        </PageBlock>
      </Layout>
    </ProviderAdd>
  )
}

export default BadgesArea
