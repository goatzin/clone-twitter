import type { NextPage } from 'next'
import React from 'react'
import ExplorerLayout from '../components/layouts/explorer-layout'
import SidebarLayout from '../components/layouts/sidebar-layout'
import TopTrendingNews from '../components/explorer/top-trending-news'

const Explorer: NextPage = () => {
  return (
    <SidebarLayout searchBar={false} hCard={false} fCard={true}>
      <ExplorerLayout>
        <TopTrendingNews
          topic={'Politics'}
          time='Live'
          context='Our beloved new president made his address at a party'
          image='/trending/monkey-trending.jpg'
        />
      </ExplorerLayout>
    </SidebarLayout>
  )
}

export default Explorer
