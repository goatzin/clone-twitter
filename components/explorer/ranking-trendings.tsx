import React, { useContext } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../../utils/theme'

interface Props {
  link: string
  ranking: number
  topic: string
  content: string
  tweets: number
}

const RankingTrendings: React.FC<Props> = ({ link, ranking, topic, content, tweets }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  const tweetsTotal = tweets > 9999
    ? (tweets / 1000) + 'K'
    : new Intl.NumberFormat().format(tweets)
  return (
    <Link href={link}>
      <a className={`px-3 py-2 w-full flex flex-col justify-center items-start ${backgroundTheme === 'light' ? 'hover:bg-gray-300' : 'hover:bg-slate-800'} duration-200`}>
        <span className='text-sm text-slate-400'>
          {ranking} ·&nbsp;
          {topic !== '' && <span>{topic} ·&nbsp;</span>}
          Trending
        </span>
        <span className='text-base font-bold'>
          {content}
        </span>
        <span className='text-sm text-slate-400'>
          {tweetsTotal} Tweets
        </span>
      </a>
    </Link>
  )
}

export default RankingTrendings
