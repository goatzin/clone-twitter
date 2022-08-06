import React, { useContext } from 'react'
import Link from 'next/link'
import { RiUser3Line } from 'react-icons/ri'
import { ThemeContext } from '../utils/theme'

const PostBox = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  return (
    <div className='w-full flex flex-row mt-4'>
      <div className='flex justify-center' style={{
        color: '#d3d3d3'
      }}>
        <Link href='/username'>
          <a className='w-12 h-12 border rounded-full flex justify-center items-center hover:bg-gray-300 active:bg-gray-400 duration-300'>
            <RiUser3Line className='w-7 h-7' />
          </a>
        </Link>
      </div>
      <div className='min-w-full flex flex-1 flex-col justify-center' style={{
        color: backgroundTheme === 'light' ? '#000000' : '#ffffff'
      }}>
        <form>
          <textarea
            className='w-full outline-none placeholder:text-xl placeholder:items-center'
            placeholder="What's happening"
            maxLength={280}
            rows={4}
          ></textarea>
        </form>
        <div className='flex items-center justify-between' style={{
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
