import React, { useContext } from 'react'
import type { NextPage } from 'next'
import { HiOutlineSparkles } from 'react-icons/hi'
import PostBox from '../components/post-box'
import { ThemeContext } from '../utils/theme'
import s from '../styles/timeline.module.css'

const Home: NextPage = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`${s.default_width} border border-gray-100 flex flex-col items-center py-2 px-5 mx-4`}>
      <div className='w-full flex justify-between items-center' style={{
        color: theme[0] === 'light' ? 'black' : 'white'
      }}>
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
    </div>
  )
}

export default Home
