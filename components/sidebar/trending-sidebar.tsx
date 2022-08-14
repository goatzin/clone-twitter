import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ThemeContext } from '../../utils/theme'
import { darkTheme, lightTheme } from '../../libs/colors'

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
      <a className={`flex min-w-full justify-between py-3 px-4 ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-300`} style={{
        background: backgroundTheme === 'light'
          ? lightTheme.background
          : backgroundTheme === 'dark'
            ? darkTheme.background
            : '#000'
      }}>
        <div className='flex flex-col'>
          <span className='text-sm text-slate-600'>
            {topic} · Trending
          </span>
          <h2 className='text-base' style={{
            color: backgroundTheme === 'light'
              ? 'black'
              : 'white'
          }}>
            {title}
          </h2>
        </div>
        <div className='max-w-[68px] min-w-[68px] min-h-[68px] max-h-[68px] ml-2'>
          <Image
            src={image}
            alt={title}
            width={68}
            height={68}
            className='rounded-lg'
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
      <a className={`flex flex-col min-w-full justify-between py-3 px-4 ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-300`} style={{
        background: backgroundTheme === 'light'
          ? lightTheme.background
          : backgroundTheme === 'dark'
            ? darkTheme.background
            : '#000'
      }}>
        <h2 className='text-xl' style={{
          color: backgroundTheme === 'light'
            ? 'black'
            : 'white'
        }}>
          {title}
        </h2>
        <span className='text-base text-slate-600'>
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
      <a className={`flex min-w-full justify-between py-3 px-4 items-center ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-300`} style={{
        background: backgroundTheme === 'light'
          ? lightTheme.background
          : backgroundTheme === 'dark'
            ? darkTheme.background
            : '#000'
      }}>
        <div className='flex flex-col justify-start'>
          <div className='text-slate-600 text-sm'>
            {topic} · {time}
          </div>
          <h2 className='tracking-wide text-base' style={{
            color: backgroundTheme === 'light'
              ? 'black'
              : 'white'
          }}>
            {title}
          </h2>
        </div>
        <div className='max-h-[68px] min-h-[68px] max-w-[68px] min-w-[68px] ml-2'>
          <Image
            src={image}
            alt={title}
            width={68}
            height={68}
            className='rounded-lg'
          />
        </div>
      </a>
    </Link>
  )
}
