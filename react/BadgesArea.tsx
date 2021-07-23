import type { FC } from 'react'
import React, { useState } from 'react'
import { Layout, PageBlock, Tabs, Tab } from 'vtex.styleguide'

import './styles.global.css'
import AddBages from './AddBadges'
import EditBadges from './EditBadges'
import Provider from './Provider/provider'

const BadgesArea: FC = () => {
  const [tab, setTab] = useState({
    currentTab: 1,
  })

  return (
    <Provider>
      <Layout>
        <PageBlock title="Gerenciamento de Badges" variation="full">
          <Tabs>
            <Tab
              label="Adicionar badges"
              active={tab.currentTab === 1}
              onClick={() => setTab({ currentTab: 1 })}
            >
              <AddBages></AddBages>
            </Tab>
            <Tab
              label="Editar Badges"
              active={tab.currentTab === 2}
              onClick={() => setTab({ currentTab: 2 })}
            >
              <EditBadges></EditBadges>
            </Tab>
          </Tabs>
        </PageBlock>
      </Layout>
    </Provider>
  )
}

export default BadgesArea
