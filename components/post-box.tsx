import React, { useContext } from 'react'
import Link from 'next/link'
import { RiUser3Line } from 'react-icons/ri'
import { ThemeContext } from '../utils/theme'

const PostBox = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <div className='w-full flex flex-row mt-4'>
      <div className='flex justify-center'>
        <Link href='/username'>
          <a className='w-12 h-12 border rounded-full flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 duration-300'>
            <RiUser3Line className='w-7 h-7' style={{
              color: backgroundTheme === 'light' ? 'gray' : 'white'
            }} />
          </a>
        </Link>
      </div>
      <div className='min-w-full flex flex-1 flex-col justify-center'>
        <form>
          <textarea
            className='w-full outline-none placeholder:text-xl placeholder:items-center'
            placeholder="What's happening"
            maxLength={280}
            rows={4}
          ></textarea>
        </form>
        <div className='flex items-center justify-between'>
          <div></div>
          <button type='submit'>
            Tweet
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostBox
