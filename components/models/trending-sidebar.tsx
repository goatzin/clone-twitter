import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ThemeContext } from '../../utils/theme'
import { darkTheme } from '../../libs/colors'

interface TrendingProps {
  topic: string
  title: string
  image: string
  link: string
}

export const Trending: React.FC<TrendingProps> = ({ topic, title, image, link }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <Link href={link}>
      <a className={`flex min-w-full justify-between py-3 px-4 ${backgroundTheme === 'light' ? 'bg-slate-50 hover:brightness-95' : 'hover:brightness-110'} duration-300`} style={{
        background: backgroundTheme === 'dark'
          ? darkTheme.background
          : backgroundTheme === 'black'
            ? '#000'
            : ''
      }}>
        <div className='flex flex-col'>
          <span className='text-sm text-slate-400'>
            {topic} · Trending
          </span>
          <h2 className='text-xl font-bold' style={{
            color: backgroundTheme === 'light'
              ? 'black'
              : 'white'
          }}>
            {title}
          </h2>
        </div>
        <div>
          <Image
            src={image}
          />
        </div>
      </a>
    </Link>
  )
}

interface HashProps {
  title: string
  content: string
  link: string
}

export const HashTrending: React.FC<HashProps> = ({ title, content, link }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <Link href={link}>
      <a className={`flex flex-col min-w-full justify-between py-3 px-4 ${backgroundTheme === 'light' ? 'bg-slate-50 hover:brightness-95' : 'hover:brightness-110'} duration-300`} style={{
        background: backgroundTheme === 'dark'
          ? darkTheme.background
          : backgroundTheme === 'black'
            ? '#000'
            : ''
      }}>
        <h2 className='text-xl font-bold' style={{
          color: backgroundTheme === 'light'
            ? 'black'
            : 'white'
        }}>
          {title}
        </h2>
        <span className='text-base text-slate-400'>
          {content}
        </span>
      </a>
    </Link>
  )
}

interface NoticesProps {
  topic: string
  title: string
  time: string
  image: string
  link: string
}

export const NoticesTrending: React.FC<NoticesProps> = ({ topic, title, time, image, link }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <Link href={link}>
      <a className={`flex min-w-full justify-between py-3 px-4 ${backgroundTheme === 'light' ? 'bg-slate-50 hover:brightness-95' : 'hover:brightness-110'} duration-300`} style={{
        background: backgroundTheme === 'dark'
          ? darkTheme.background
          : backgroundTheme === 'black'
            ? '#000'
            : ''
      }}>
        <div className='flex flex-col justify-start'>
          <div className='text-slate-400 text-sm'>
            {topic} · {time}
          </div>
          <h2 className='font-bold tracking-wide text-xl' style={{
            color: backgroundTheme === 'light'
              ? 'black'
              : 'white'
          }}>
            {title}
          </h2>
        </div>
        <Image
          src={image}
        />
      </a>
    </Link>
  )
}