import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { darkTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'

interface Props {
  image: string
  username: string
  nickname: string
  link: string
}

const WhoToFollow: React.FC<Props> = ({ image, username, nickname, link }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <Link href={link}>
      <a className={`flex items-center justify-between min-w-full py-3 px-5 ${backgroundTheme === 'light' ? 'bg-slate-50 hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
        background: backgroundTheme === 'dark'
          ? darkTheme.background
          : backgroundTheme === 'black'
            ? '#000'
            : ''
      }}>
        <div className='flex mr-1'>
          <div className='max-w-[48px] max-h-[48px] min-h-[48px] min-w-[48px] mr-3'>
            <Image
              src={image}
              alt={username}
              width={400}
              height={400}
              className='rounded-full'
            />
          </div>
          <div className='flex flex-col'>
            <span className='text-sm font-bold hover:underline'>
              {nickname}
            </span>
            <span className='text-sm text-slate-400'>
              {username}
            </span>
          </div>
        </div>
        <button className={`rounded-3xl py-1 px-4 flex items-center justify-center font-bold tracking-tighter ${backgroundTheme === 'light' ? 'bg-black hover:bg-slate-800' : 'bg-white hover:brightness-50'} duration-200`} style={{
          color: backgroundTheme === 'light'
            ? '#fff'
            : '#000'
        }}>
          Follow
        </button>
      </a>
    </Link>
  )
}

export default WhoToFollow
