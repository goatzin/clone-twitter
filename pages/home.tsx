import React, { useContext } from 'react'
import type { NextPage } from 'next'
import { HiOutlineSparkles } from 'react-icons/hi'
import PostBox from '../components/post-box'
import { ThemeContext } from '../utils/theme'

const Home: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <div className='w-timeline border-l border-r border-gray-600 flex flex-col items-center mx-4' style={{
      color: backgroundTheme === 'light' ? '#000000' : '#ffffff',
    }}>
      <div className='w-full flex justify-between items-center py-2 px-5'>
        <div className='flex justify-center'>
          <h1 className='text-xl font-bold'>
            Home
          </h1>
        </div>
        <button className='w-9 h-9 flex justify-center items-center rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
          <HiOutlineSparkles className='w-6 h-6' />
        </button>
      </div>
      <PostBox />
      <div className='min-w-full border-b border-gray-600'></div>
    </div>
  )
}

export default Home
