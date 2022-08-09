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
        <div className='flex'>
          <div>
            <Image
              src={image}
            />
          </div>
          <div className='flex flex-col'>
            <span className='text-base font-bold hover:underline'>
              {nickname}
            </span>
            <span className='text-base text-slate-400'>
              {username}
            </span>
          </div>
        </div>
        <button className={`rounded-3xl py-1 px-5 flex items-center justify-center font-bold tracking-tighter ${backgroundTheme === 'light' ? 'bg-black hover:bg-slate-800' : 'bg-white hover:brightness-50'} duration-200`} style={{
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
