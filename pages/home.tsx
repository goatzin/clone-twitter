import React, { useContext } from 'react'
import type { NextPage } from 'next'
import { HiOutlineSparkles } from 'react-icons/hi'
import PostBox from '../components/post-box'
import { ThemeContext } from '../utils/theme'
import { darkTheme, lightTheme } from '../libs/colors'
import SidebarLayout from '../components/layouts/sidebar-layout'

const Home: NextPage = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <SidebarLayout searchBar={true} hCard={true} fCard={true}>
      <div className={`w-timeline min-h-full border-l border-r ${backgroundTheme === 'light' ? 'border-gray-300' : 'border-gray-600'} items-center mx-4 `} style={{
        color: backgroundTheme === 'light' ? lightTheme.text : darkTheme.text
      }}>
        <div className='w-full flex justify-between items-center py-2 px-5'>
          <div className='flex justify-center'>
            <h1 className='text-xl font-bold'>
              Home
            </h1>
          </div>
          <button className='w-9 h-9 flex justify-center items-center rounded-full hover:brightness-75 active:brightness-50 duration-200' style={{
            backgroundColor: backgroundTheme === 'light'
              ? lightTheme.background
              : backgroundTheme === 'dark'
                ? darkTheme.background
                : '#000'
          }}>
            <HiOutlineSparkles className='w-6 h-6' />
          </button>
        </div>
        <PostBox />
        <div className={`min-w-full border-b ${backgroundTheme === 'light' ? 'border-gray-300' : 'border-gray-600'}`} />
      </div>
    </SidebarLayout>
  )
}

export default Home
