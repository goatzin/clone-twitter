import React from 'react'
import { HashTrending, NoticesTrending, Trending } from '../sidebar/trending-sidebar'

const TrendingsCard: React.FC = () => {
  return (
    <div className='min-h-min w-full flex flex-col mt-1 border-b-slate-400 bg-white'>
      <NoticesTrending
        topic='Outdoors'
        time='2 hours ago'
        title='A woodpecker was seen pecking'
        image='/trending/woodpecker-trending.jpg'
        link=''
      />
      <HashTrending
        title="#IDon'tKnow"
        content="I really don't know what to put here O_o"
        link=''
      />
      <Trending
        topic='News'
        title='Ducks have envolved a lot, being considered dangerous to several countries'
        image='/trending/duck-trending.jpg'
        link=''
      />
      <Trending
        topic='Technology'
        title='Dogs are crashing the economy by running online shopping bots'
        image='/trending/dog-trending.jpg'
        link=''
      />
    </div>
  )
}

export default TrendingsCard
