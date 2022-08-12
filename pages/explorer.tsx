import type { NextPage } from 'next'
import React from 'react'
import ExplorerLayout from '../components/layouts/explorer-layout'
import SidebarLayout from '../components/layouts/sidebar-layout'

const Explorer: NextPage = () => {
  return (
    <SidebarLayout searchBar={false} hCard={false} fCard={true}>
      <ExplorerLayout>
        <div>O_o</div>
      </ExplorerLayout>
    </SidebarLayout>
  )
}

export default Explorer
