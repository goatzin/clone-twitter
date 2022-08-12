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
      <div className={`w-timeline min-h-screen border-l border-r ${backgroundTheme === 'light' ? 'border-gray-300' : 'border-gray-600'} items-center mx-4 pt-8`} style={{
        color: backgroundTheme === 'light' ? lightTheme.text : darkTheme.text
      }}>
        <div className='w-[598px] backdrop-blur-sm min-w-min flex justify-between items-center py-2 px-5 z-10 fixed top-0' style={{
          background: backgroundTheme === 'light'
            ? 'rgba(255, 255, 255, 0.85)'
            : backgroundTheme === 'dark'
              ? 'rgba(21, 32, 43, 0.85)'
              : 'rgba(0, 0, 0, 0.85)'
        }}>
          <div className='flex justify-center'>
            <h1 className='text-xl font-bold'>
              Home
            </h1>
          </div>
          <button className='p-1 flex justify-center items-center rounded-full hover:brightness-75 active:brightness-50 duration-200' style={{
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
