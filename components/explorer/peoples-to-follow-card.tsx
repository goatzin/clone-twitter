import React, { useContext } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../../utils/theme'
import WhoToFollowCard from './who-to-follow-card'

const PeoplesToFollowCard: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  return (
    <div className={`w-timeline pt-2 mt-1 border-t ${backgroundTheme === 'light' ? 'border-gray-300' : 'border-gray-600'}`}>
      <div className='py-2 flex flex-col w-full'>
        <h2 className='px-3 font-bold text-xl'>
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
          <Link href=''>
            <a className={`text-sm py-3 px-4 w-full ${backgroundTheme === 'light' ? 'hover:bg-gray-300' : 'hover:bg-slate-800'} duration-200`}
              style={{
                color: colorTheme,
              }}
            >
              Show more
            </a>
          </Link>
        </div>
        {/* make some comments before */}
      </div>
    </div>
  )
}

export default PeoplesToFollowCard 
