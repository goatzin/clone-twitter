import React, { useState, useEffect, useCallback, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsTwitter } from 'react-icons/bs'
import {
  RiHome7Line, RiHome7Fill,
  RiSearch2Line, RiSearch2Fill,
  RiNotification2Line, RiNotification2Fill,
  RiMailLine, RiMailFill,
  RiBookmarkLine, RiBookmarkFill,
  RiFileList2Fill, RiFileList2Line,
  RiUser3Line, RiUser3Fill,
  RiMoreLine, RiQuillPenFill
} from 'react-icons/ri'
import { ThemeContext } from '../utils/theme'

const TabBar: React.FC = () => {
  const { backgroundTheme, handleBackground } = useContext(ThemeContext)
  const [currentPage, setCurrentPage] = useState('')
  const router = useRouter()
  const handlePage = useCallback(() => {
    setCurrentPage(window.location.pathname)
  }, [])

  useEffect(() => {
    if (currentPage !== router.asPath) {
      handlePage()
    }
  }, [router])

  return (
    <div>
      <ul className='flex flex-col items-center justify-between min-h-screen w-17'>
        <li className='flex flex-col w-max items-center'>
          <Link href='/home'>
            <a className='w-outsideIcon h-outsideIcon flex items-center justify-center border border-transparent rounded-full hover:bg-blue-50 active:bg-blue-100 duration-300'>
              <BsTwitter className='w-icon h-icon' style={{
                color: backgroundTheme === 'light' ? '#1d9cf0' : 'lightgray'
              }} />
            </a>
          </Link>
          <Link href='/home'>
            <a className='w-outsideIcon h-outsideIcon flex items-center justify-center border border-transparent rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
              {currentPage === '/home'
                ? <RiHome7Fill className='w-icon h-icon' style={{
                  color: backgroundTheme === 'light' ? 'black' : 'lightgray'
                }} />
                : <RiHome7Line className='w-icon h-icon' style={{
                  color: backgroundTheme === 'light' ? 'black' : 'lightgray'
                }} />
              }
            </a>
          </Link>
          <Link href='/explorer'>
            <a className=' w-outsideIcon h-outsideIcon flex items-center justify-center border border-transparent rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
              {currentPage === '/explorer'
                ? <RiSearch2Fill className='w-icon h-icon' style={{
                  color: backgroundTheme === 'light' ? 'black' : 'lightgray'
                }} />
                : <RiSearch2Line className='w-icon h-icon' style={{
                  color: backgroundTheme === 'light' ? 'black' : 'lightgray'
                }} />
              }
            </a>
          </Link>
          <Link href='/notifications'>
            <a className=' w-outsideIcon h-outsideIcon flex items-center justify-center border border-transparent rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
              {currentPage === '/notifications'
                ? <RiNotification2Fill className='w-icon h-icon' style={{
                  color: backgroundTheme === 'light' ? 'black' : 'lightgray'
                }} />
                : <RiNotification2Line className='w-icon h-icon' style={{
                  color: backgroundTheme === 'light' ? 'black' : 'lightgray'
                }} />
              }
            </a>
          </Link>
          <Link href='/messages'>
            <a className=' w-outsideIcon h-outsideIcon flex items-center justify-center border border-transparent rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
              {currentPage === '/messages'
                ? <RiMailFill className='w-icon h-icon' style={{
                  color: backgroundTheme === 'light' ? 'black' : 'lightgray'
                }} />
                : <RiMailLine className='w-icon h-icon' style={{
                  color: backgroundTheme === 'light' ? 'black' : 'lightgray'
                }} />
              }
            </a>
          </Link>
          <Link href='/i/bookmarks'>
            <a className=' w-outsideIcon h-outsideIcon flex items-center justify-center border border-transparent rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
              {currentPage === '/i/bookmarks'
                ? <RiBookmarkFill className='w-icon h-icon' style={{
                  color: backgroundTheme === 'light' ? 'black' : 'lightgray'
                }} />
                : <RiBookmarkLine className='w-icon h-icon' style={{
                  color: backgroundTheme === 'light' ? 'black' : 'lightgray'
                }} />
              }
            </a>
          </Link>
          <Link href='/username/lists'>
            <a className='w-outsideIcon h-outsideIcon flex items-center justify-center border border-transparent rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
              {currentPage === '/username/lists'
                ? <RiFileList2Fill className='w-icon h-icon' style={{
                  color: backgroundTheme === 'light' ? 'black' : 'lightgray'
                }} />
                : <RiFileList2Line className='w-icon h-icon' style={{
                  color: backgroundTheme === 'light' ? 'black' : 'lightgray'
                }} />
              }
            </a>
          </Link>
          <Link href='/username'>
            <a className='w-outsideIcon h-outsideIcon flex items-center justify-center border border-transparent rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
              {currentPage === '/username'
                ? <RiUser3Fill className='w-icon h-icon' style={{
                  color: backgroundTheme === 'light' ? 'black' : 'lightgray'
                }} />
                : <RiUser3Line className='w-icon h-icon' style={{
                  color: backgroundTheme === 'light' ? 'black' : 'lightgray'
                }} />
              }
            </a>
          </Link>
          <div className='border border-transparent w-outsideIcon h-outsideIcon flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
            <button className='flex items-center justify-center w-icon h-icon border-2 rounded-full bg-transparent' style={{
              borderColor: backgroundTheme === 'light' ? 'black' : 'lightgray'
            }}>
              <RiMoreLine className='w-6 h-6' style={{
                color: backgroundTheme === 'light' ? 'black' : 'lightgray'
              }} />
            </button>
          </div>
          <button className='bg-default-blue w-outsideIcon h-outsideIcon flex items-center justify-center rounded-full hover:bg-blue-500 active:bg-blue-600 duration-300'>
            <RiQuillPenFill className='w-icon h-icon' style={{
              color: backgroundTheme === 'light' ? 'white' : 'lightgray'
            }} />
          </button>
        </li>
        <li className='mb-5'>
          <div className='flex items-center justify-center w-outsideIcon h-outsideIcon rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
            <button className='flex items-center justify-center border-2 w-10 h-10 rounded-full' style={{
              borderColor: backgroundTheme === 'light' ? 'black' : 'lightgray'
            }}>
              <RiUser3Line className='w-icon h-icon' style={{
                color: backgroundTheme === 'light' ? 'black' : 'lightgray'
              }} />
            </button>
            <button className='border' onClick={handleBackground}>
              toggle
            </button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default TabBar
