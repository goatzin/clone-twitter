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
  const { backgroundTheme, colorTheme, handleBackground, handleColors } = useContext(ThemeContext)
  const [currentPage, setCurrentPage] = useState('')
  const router = useRouter()
  let twitterHover = ['more light', 'more dark']
  const handlePage = useCallback(() => {
    setCurrentPage(window.location.pathname)
  }, [])

  useEffect(() => {
    if (currentPage !== router.asPath) {
      handlePage()
    }
  }, [router])

  useEffect(() => {
    if (backgroundTheme !== 'light') {
      twitterHover = ['', '']
    } else {
      switch (colorTheme) {
        case '#1d9cf0':
          twitterHover = ['', '']
          break
        default:
          break
      }
    }
  }, [colorTheme])

  return (
    <div>
      <ul className='flex flex-col items-center justify-between min-h-screen w-17' style={{
        color: backgroundTheme === 'light' ? '#000000' : '#d3d3d3'
      }}>
        <li className='flex flex-col w-max items-center'>
          <Link href='/home'>
            <a className={`w-outsideIcon h-outsideIcon flex items-center justify-center border border-transparent rounded-full hover:bg-[${twitterHover[0]}] active:bg-[${twitterHover[1]}] duration-300`}>
              <BsTwitter className='w-icon h-icon' style={{
                color: backgroundTheme === 'light' ? '#1d9cf0' : '#d3d3d3'
              }} />
            </a>
          </Link>
          <Link href='/home'>
            <a className='w-outsideIcon h-outsideIcon flex items-center justify-center border border-transparent rounded-full hover:bg-gray-300 active:bg-gray-400 duration-300'>
              {currentPage === '/home'
                ? <RiHome7Fill className='w-icon h-icon' />
                : <RiHome7Line className='w-icon h-icon' />
              }
            </a>
          </Link>
          <Link href='/explorer'>
            <a className='w-outsideIcon h-outsideIcon flex items-center justify-center border border-transparent rounded-full hover:bg-gray-300 active:bg-gray-400 duration-300'>
              {currentPage === '/explorer'
                ? <RiSearch2Fill className='w-icon h-icon' />
                : <RiSearch2Line className='w-icon h-icon' />
              }
            </a>
          </Link>
          <Link href='/notifications'>
            <a className='w-outsideIcon h-outsideIcon flex items-center justify-center border border-transparent rounded-full hover:bg-gray-300 active:bg-gray-400 duration-300'>
              {currentPage === '/notifications'
                ? <RiNotification2Fill className='w-icon h-icon' />
                : <RiNotification2Line className='w-icon h-icon' />
              }
            </a>
          </Link>
          <Link href='/messages'>
            <a className='w-outsideIcon h-outsideIcon flex items-center justify-center border border-transparent rounded-full hover:bg-gray-300 active:bg-gray-400 duration-300'>
              {currentPage === '/messages'
                ? <RiMailFill className='w-icon h-icon' />
                : <RiMailLine className='w-icon h-icon' />
              }
            </a>
          </Link>
          <Link href='/i/bookmarks'>
            <a className='w-outsideIcon h-outsideIcon flex items-center justify-center border border-transparent rounded-full hover:bg-gray-300 active:bg-gray-400 duration-300'>
              {currentPage === '/i/bookmarks'
                ? <RiBookmarkFill className='w-icon h-icon' />
                : <RiBookmarkLine className='w-icon h-icon' />
              }
            </a>
          </Link>
          <Link href='/username/lists'>
            <a className='w-outsideIcon h-outsideIcon flex items-center justify-center border border-transparent rounded-full hover:bg-gray-300 active:bg-gray-400 duration-300'>
              {currentPage === '/username/lists'
                ? <RiFileList2Fill className='w-icon h-icon' />
                : <RiFileList2Line className='w-icon h-icon' />
              }
            </a>
          </Link>
          <Link href='/username'>
            <a className='w-outsideIcon h-outsideIcon flex items-center justify-center border border-transparent rounded-full hover:bg-gray-300 active:bg-gray-400 duration-300'>
              {currentPage === '/username'
                ? <RiUser3Fill className='w-icon h-icon' />
                : <RiUser3Line className='w-icon h-icon' />
              }
            </a>
          </Link>
          <div className='border border-transparent w-outsideIcon h-outsideIcon flex items-center justify-center rounded-full hover:bg-gray-300 active:bg-gray-400 duration-300'>
            <button className='flex items-center justify-center w-icon h-icon border-2 rounded-full bg-transparent' style={{
              borderColor: backgroundTheme === 'light' ? '#000000' : '#d3d3d3'
            }}>
              <RiMoreLine className='w-6 h-6' />
            </button>
          </div>
          <button className='w-outsideIcon h-outsideIcon flex items-center justify-center rounded-full hover:bg-blue-500 active:bg-blue-600 duration-300' style={{
            backgroundColor: colorTheme
          }}>
            <RiQuillPenFill className='w-icon h-icon text-white' />
          </button>
        </li>
        <li className='mb-5'>
          <div className='flex items-center justify-center w-outsideIcon h-outsideIcon rounded-full hover:bg-gray-300 active:bg-gray-400 duration-300'>
            <button className='flex items-center justify-center border-2 w-10 h-10 rounded-full' style={{
              borderColor: backgroundTheme === 'light' ? '#000000' : '#d3d3d3'
            }}>
              <RiUser3Line className='w-icon h-icon' />
            </button>
          </div>
          <button className='border' onClick={handleBackground}>
            toggle
          </button>
        </li>
      </ul>
    </div>
  )
}

export default TabBar
