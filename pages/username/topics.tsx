import type { NextPage } from 'next'
import React from 'react'
import SidebarLayout from '../../components/layouts/sidebar-layout'
import TopicsLayout from '../../components/layouts/topics-layout'

const Topics: NextPage = () => {
  return (
    <SidebarLayout searchBar={true} hCard={true} fCard={true}>
      <TopicsLayout>
        <div>
          Topics
        </div>
      </TopicsLayout>
    </SidebarLayout>
  )
}

export default Topics
