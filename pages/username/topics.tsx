import type { NextPage } from 'next'
import React from 'react'
import SidebarLayout from '../../components/layouts/sidebar-layout'

const Topics: NextPage = () => {
  return (
    <SidebarLayout searchBar={true} hCard={true} fCard={true}>
      <div>
        Topics
      </div>
    </SidebarLayout>
  )
}

export default Topics
