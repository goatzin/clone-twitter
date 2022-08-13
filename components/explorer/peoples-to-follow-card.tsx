import React, { useContext } from 'react'
import { ThemeContext } from '../../utils/theme'
import WhoToFollowCard from './who-to-follow-card'

const PeoplesToFollowCard: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <div className={`w-timeline pt-2 mt-1 border-t ${backgroundTheme === 'light' ? 'border-gray-400' : 'border-gray-400'}`}>
      <div className='py-2 px-3 flex flex-col w-full'>
        <h2 className='font-bold text-xl'>
          Who to follow
        </h2>
        <div className='flex flex-col mt-5'>
          <WhoToFollowCard
            image='/icons/woodpecker-icon.jpg'
            nickname='Woodpecker'
            username='@TheIncredibleWoodpecker'
            description='????'
            link=''
          />
          <WhoToFollowCard
            image='/icons/duck-icon.jpg'
            nickname='Tonny Delb'
            username='@Delb'
            description=''
            link=''
          />
          <WhoToFollowCard
            image='/icons/monkey-icon.jpg'
            nickname='President'
            username='@TheMonkey'
            description=''
            link=''
          />
        </div>
      </div>
    </div>
  )
}

export default PeoplesToFollowCard 
