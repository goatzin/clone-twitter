import type { NextPage } from 'next'
import React from 'react'
import PeoplesToFollowCard from '../../components/explorer/peoples-to-follow-card'
import ProfileLayout from '../../components/layouts/profile-layout'
import SidebarLayout from '../../components/layouts/sidebar-layout'

const WithReplies: NextPage = () => {
  return (
    <SidebarLayout searchBar={true} hCard={true} fCard={true}>
      <ProfileLayout value='Tweets' quantity={0}>
        {/* make tweets later */}
        <PeoplesToFollowCard />
        <div>
          {/* make this later */}
          Topics to follow
        </div>
      </ProfileLayout>
    </SidebarLayout>
  )
}

export default WithReplies
