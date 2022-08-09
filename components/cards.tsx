import React, { useContext } from 'react'
import Link from 'next/link'
import { darkTheme, lightTheme } from '../libs/colors'
import { ThemeContext } from '../utils/theme'
import { HashTrending, NoticesTrending, Trending } from './models/trending-sidebar'
import WhoToFollow from './models/peoples-to-follow-sidebar'

// What'happening card
export const HCard: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  return (
    <div className={`w-full min-h-min rounded-xl ${backgroundTheme === 'light' ? 'bg-slate-50' : 'brightness-125'} flex flex-col mt-3`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
      background: backgroundTheme === 'dark'
        ? darkTheme.background
        : backgroundTheme === 'black'
          ? '#000'
          : ''
    }}>
      <h1 className='text-xl tracking-widest py-3 px-4 font-bold'>
        What's happening?
      </h1>
      <div>
        <NoticesTrending
          topic='WoodPecker'
          time='2 hours ago'
          title='One woodpecker is picking'
          image=''
          link=''
        />
        <HashTrending
          title='#Something'
          content='this is just a test my friend'
          link=''
        />
        <Trending
          topic='Nature'
          title='Giant tree'
          image=''
          link=''
        />
        <Trending
          topic='Gaming'
          title='New console has gone'
          image=''
          link=''
        />
        <NoticesTrending
          topic='Politics'
          time='LIVE'
          title='One monkey is in top'
          image=''
          link=''
        />
      </div>
      <Link href=''>
        <a className={`text-sm py-3 px-4 rounded-br-xl rounded-bl-xl ${backgroundTheme === 'light' ? 'bg-slate-50 hover:brightness-95' : 'hover:brightness-110'} duration-200`}
          style={{
            color: colorTheme,
            background: backgroundTheme === 'dark'
              ? darkTheme.background
              : backgroundTheme === 'black'
                ? '#000'
                : ''
          }}
        >
          Show more
        </a>
      </Link>
    </div>
  )
}

// Who to follow card
export const FCard: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  return (
    <div className={`w-full min-h-min rounded-xl flex flex-col ${backgroundTheme === 'light' ? 'bg-slate-50' : 'brightness-125'} m-3`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
      background: backgroundTheme === 'dark'
        ? darkTheme.background
        : backgroundTheme === 'black'
          ? '#000'
          : ''
    }}>
      <h1 className='text-xl tracking-widest p-3 font-bold'>
        Who to follow
      </h1>
      <div>
        <WhoToFollow
          image=''
          nickname='Woodpecker'
          username='@TheIncredibleWoodpecker'
          link=''
        />
      </div>
      <Link href=''>
        <a className={`text-sm p-3 rounded-br-xl rounded-bl-xl ${backgroundTheme === 'light' ? 'bg-slate-50 hover:brightness-95' : 'hover:brightness-110'} duration-200`}
          style={{
            color: colorTheme,
            background: backgroundTheme === 'dark'
              ? darkTheme.background
              : backgroundTheme === 'black'
                ? '#000'
                : ''
          }}
        >
          Show more
        </a>
      </Link>
    </div>
  )
}
