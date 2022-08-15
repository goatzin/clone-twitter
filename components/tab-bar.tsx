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
import { colors, darkTheme, lightTheme } from '../libs/colors'

const TabBar: React.FC = () => {
  const { backgroundTheme, colorTheme, handleBackground } = useContext(ThemeContext)
  const [currentPage, setCurrentPage] = useState([''])
  const router = useRouter()
  const handlePage = useCallback(() => {
    const path = window.location.pathname.split('/')
    setCurrentPage(path)
  }, [])

  useEffect(() => {
    if (currentPage.join('/') !== router.asPath) {
      handlePage()
    }
  }, [router])

  return (
    <div className='mr-[60px]'>
      <ul className='mr-6 flex flex-col items-center justify-between min-h-screen fixed' style={{
        color: backgroundTheme === 'light' ? lightTheme.icon : darkTheme.icon,
      }}>
        <li className='flex flex-col w-max items-center min-h-min'>
          <Link href='/home'>
            <a className={`tall:mb-2 w-outsideIcon h-outsideIcon flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:bg-blue-100' : 'hover:brightness-110'} duration-200`} style={{
              backgroundColor: backgroundTheme === 'dark'
                ? darkTheme.background
                : backgroundTheme === 'black'
                  ? '#000'
                  : ''
            }}>
              <BsTwitter className='w-icon h-icon' style={{
                color: backgroundTheme === 'light' ? colors.default : darkTheme.icon
              }} />
            </a>
          </Link>
          <Link href='/home'>
            <a className={`tall:mb-2 w-outsideIcon h-outsideIcon flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
              backgroundColor: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              {currentPage[1] === 'home'
                ? <RiHome7Fill className='w-icon h-icon' />
                : <RiHome7Line className='w-icon h-icon' />
              }
            </a>
          </Link>
          <Link href='/explorer'>
            <a className={`tall:mb-2 w-outsideIcon h-outsideIcon flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
              backgroundColor: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              {currentPage[1] === 'explorer'
                ? <RiSearch2Fill className='w-icon h-icon' />
                : <RiSearch2Line className='w-icon h-icon' />
              }
            </a>
          </Link>
          <Link href='/notifications'>
            <a className={`tall:mb-2 w-outsideIcon h-outsideIcon flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
              backgroundColor: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              {currentPage[1] === 'notifications'
                ? <RiNotification2Fill className='w-icon h-icon' />
                : <RiNotification2Line className='w-icon h-icon' />
              }
            </a>
          </Link>
          <Link href='/messages'>
            <a className={`tall:mb-2 w-outsideIcon h-outsideIcon flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
              backgroundColor: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              {currentPage[1] === 'messages'
                ? <RiMailFill className='w-icon h-icon' />
                : <RiMailLine className='w-icon h-icon' />
              }
            </a>
          </Link>
          <Link href='/i/bookmarks'>
            <a className={`hidden short:flex tall:mb-2 w-outsideIcon h-outsideIcon items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
              backgroundColor: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              {currentPage[2] === 'bookmarks'
                ? <RiBookmarkFill className='w-icon h-icon' />
                : <RiBookmarkLine className='w-icon h-icon' />
              }
            </a>
          </Link>
          <Link href='/username/lists'>
            <a className={`hidden short:flex tall:mb-2 w-outsideIcon h-outsideIcon items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
              backgroundColor: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              {currentPage[2] === 'lists'
                ? <RiFileList2Fill className='w-icon h-icon' />
                : <RiFileList2Line className='w-icon h-icon' />
              }
            </a>
          </Link>
          <Link href='/username'>
            <a className={`tall:mb-2 w-outsideIcon h-outsideIcon flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
              backgroundColor: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              {currentPage[1] === 'username' && currentPage[2] !== 'lists'
                ? <RiUser3Fill className='w-icon h-icon' />
                : <RiUser3Line className='w-icon h-icon' />
              }
            </a>
          </Link>
          <div className={`tall:mb-2 w-outsideIcon h-outsideIcon flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95 active:brightness-90' : 'hover:brightness-110 active:brightness-125'} duration-200`} style={{
            backgroundColor: backgroundTheme === 'light'
              ? lightTheme.background
              : backgroundTheme === 'dark'
                ? darkTheme.background
                : '#000'
          }}>
            <button className='flex items-center justify-center w-icon h-icon border-2 rounded-full bg-transparent' style={{
              borderColor: backgroundTheme === 'light' ? lightTheme.icon : darkTheme.icon
            }}>
              <RiMoreLine className='w-6 h-6' />
            </button>
          </div>
          <button className='w-outsideIcon h-outsideIcon flex items-center justify-center rounded-full hover:brightness-90 active:brightness-75 duration-200' style={{
            backgroundColor: colorTheme
          }}>
            <RiQuillPenFill className='w-icon h-icon text-white' />
          </button>
        </li>
        <li className='mb-5'>
          <div className={`flex items-center justify-center w-outsideIcon h-outsideIcon rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95 active:brightness-90' : 'hover:brightness-110 active:brightness-125'} duration-200`} style={{
            backgroundColor: backgroundTheme === 'light'
              ? lightTheme.background
              : backgroundTheme === 'dark'
                ? darkTheme.background
                : '#000'
          }}>
            <button className='flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 text-slate-500'>
              <RiUser3Fill className='w-icon h-icon' />
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
