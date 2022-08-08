import React, { useContext } from 'react'
import Link from 'next/link'
import { RiUser3Line } from 'react-icons/ri'
import { ThemeContext } from '../utils/theme'
import { lightTheme, darkTheme } from '../libs/colors'

const PostBox = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  return (
    <div className='w-full flex flex-row mt-4'>
      <div className='flex justify-center text-neutral-300'>
        <Link href='/username'>
          <a className='w-12 h-12 border rounded-full flex justify-center items-center hover:brightness-90 duration-300' style={{
            backgroundColor: backgroundTheme === 'light'
              ? lightTheme.background
              : backgroundTheme === 'dark'
                ? darkTheme.background
                : '#000'
          }}>
            <RiUser3Line className='w-7 h-7' />
          </a>
        </Link>
      </div>
      <div className='min-w-full flex flex-1 flex-col justify-center' style={{
        color: backgroundTheme === 'light' ? lightTheme.text : darkTheme.text
      }}>
        <form>
          <textarea
            className='sticky w-full outline-none placeholder:text-xl placeholder:items-center'
            placeholder="What's happening"
            maxLength={280}
            rows={4}
          ></textarea>
        </form>
        <div className='flex items-center justify-between hover:brightness-90 active:brightness-75 duration-300' style={{
          color: colorTheme
        }}>
          <div></div>
          <button type='submit' className='flex items-center justify-center text-white' style={{
            background: colorTheme
          }}>
            Tweet
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostBox
