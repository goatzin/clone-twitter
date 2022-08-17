import React, { useState, useEffect, useCallback, useContext, useRef } from 'react'
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
import PopupMenu from './popup-menu'
import ProfilePopupMenu from './profile-popup-menu'

const TabBar: React.FC = () => {
  const nickname = 'nickname'
  const username = 'username'
  const { backgroundTheme, colorTheme, handleBackground } = useContext(ThemeContext)
  const refMoreButton = useRef<HTMLButtonElement>(null)
  const refProfileButton = useRef<HTMLButtonElement>(null)
  const [moreActived, setMoreActived] = useState(false)
  const [profilePopupActived, setProfilePopupActived] = useState(false)
  const [currentPage, setCurrentPage] = useState([''])
  const router = useRouter()
  const handlePage = useCallback(() => {
    const path = window.location.pathname.split('/')
    setCurrentPage(path)
  }, [])
  const handleMorePopup = useCallback(() => {
    setMoreActived(!moreActived)
  }, [moreActived])
  const handleProfilePopup = useCallback(() => {
    setProfilePopupActived(!profilePopupActived)
  }, [profilePopupActived])

  useEffect(() => {
    if (currentPage.join('/') !== router.asPath) {
      handlePage()
    }
  }, [router])

  useEffect(() => {
    if (moreActived) {
      refMoreButton.current?.addEventListener('focusout', handleMorePopup, { passive: true })
      return () => refMoreButton.current?.removeEventListener('focusout', handleMorePopup)
    }
  }, [moreActived])

  useEffect(() => {
    if (profilePopupActived) {
      refProfileButton.current?.addEventListener('focusout', handleProfilePopup, { passive: true })
      return () => refProfileButton.current?.removeEventListener('focusout', handleMorePopup)
    }
  }, [profilePopupActived])

  return (
    <div className='mr-[60px] 2xl:mr-[280px] flex'>
      <ul className='mr-6 min-w-max flex flex-col items-center justify-between 2xl:items-start 2xl:left-5 min-h-screen fixed' style={{
        color: backgroundTheme === 'light' ? lightTheme.icon : darkTheme.icon,
      }}>
        <li className='flex flex-col w-full min-h-min'>
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
            <a className={`tall:mb-2 w-outsideIcon h-outsideIcon 2xl:w-max 2xl:h-max 2xl:p-3 flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
              backgroundColor: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              {currentPage[1] === 'home'
                ? (
                  <div className='flex'>
                    <RiHome7Fill className='w-icon h-icon' />
                    <span className='hidden 2xl:inline-block font-bold text-xl mx-4'>
                      Home
                    </span>
                  </div>
                )
                : (
                  <div className='flex'>
                    <RiHome7Line className='w-icon h-icon' />
                    <span className='hidden 2xl:inline-block text-xl mx-4'>
                      Home
                    </span>
                  </div>
                )
              }
            </a>
          </Link>
          <Link href='/explorer'>
            <a className={`tall:mb-2 w-outsideIcon h-outsideIcon 2xl:w-max 2xl:h-max 2xl:p-3 flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
              backgroundColor: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              {currentPage[1] === 'explorer'
                ? (
                  <div className='flex'>
                    <RiSearch2Fill className='w-icon h-icon' />
                    <span className='hidden 2xl:inline-block text-xl font-bold mx-4'>
                      Explore
                    </span>
                  </div>
                )
                : (
                  <div className='flex'>
                    <RiSearch2Line className='w-icon h-icon' />
                    <span className='hidden 2xl:inline-block text-xl mx-4'>
                      Explore
                    </span>
                  </div>
                )
              }
            </a>
          </Link>
          <Link href='/notifications'>
            <a className={`tall:mb-2 w-outsideIcon h-outsideIcon 2xl:w-max 2xl:h-max 2xl:p-3 flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
              backgroundColor: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              {currentPage[1] === 'notifications'
                ? (
                  <div className='flex'>
                    <RiNotification2Fill className='w-icon h-icon' />
                    <span className='hidden 2xl:inline-block text-xl font-bold mx-4'>
                      Notifications
                    </span>
                  </div>
                )
                : (
                  <div className='flex'>
                    <RiNotification2Line className='w-icon h-icon' />
                    <span className='hidden 2xl:inline-block text-xl mx-4'>
                      Notifications
                    </span>
                  </div>
                )
              }
            </a>
          </Link>
          <Link href='/messages'>
            <a className={`tall:mb-2 w-outsideIcon h-outsideIcon 2xl:w-max 2xl:h-max 2xl:p-3 flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
              backgroundColor: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              {currentPage[1] === 'messages'
                ? (
                  <div className='flex'>
                    <RiMailFill className='w-icon h-icon' />
                    <span className='hidden 2xl:inline-block text-xl font-bold mx-4'>
                      Messages
                    </span>
                  </div>
                )
                : (
                  <div className='flex'>
                    <RiMailLine className='w-icon h-icon' />
                    <span className='hidden 2xl:inline-block text-xl mx-4'>
                      Messages
                    </span>
                  </div>
                )
              }
            </a>
          </Link>
          <Link href='/i/bookmarks'>
            <a className={`hidden short:flex tall:mb-2 w-outsideIcon h-outsideIcon 2xl:w-max 2xl:h-max 2xl:p-3 items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
              backgroundColor: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              {currentPage[2] === 'bookmarks'
                ? (
                  <div className='flex'>
                    <RiBookmarkFill className='w-icon h-icon' />
                    <span className='hidden 2xl:inline-block text-xl font-bold mx-4'>
                      Bookmarks
                    </span>
                  </div>
                )
                : (
                  <div className='flex'>
                    <RiBookmarkLine className='w-icon h-icon' />
                    <span className='hidden 2xl:inline-block text-xl mx-4'>
                      Bookmarks
                    </span>
                  </div>
                )
              }
            </a>
          </Link>
          <Link href='/username/lists'>
            <a className={`hidden short:flex tall:mb-2 w-outsideIcon h-outsideIcon 2xl:w-max 2xl:h-max 2xl:p-3 items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
              backgroundColor: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              {currentPage[2] === 'lists'
                ? (
                  <div className='flex'>
                    <RiFileList2Fill className='w-icon h-icon' />
                    <span className='hidden 2xl:inline-block text-xl font-bold mx-4'>
                      Lists
                    </span>
                  </div>
                )
                : (
                  <div className='flex'>
                    <RiFileList2Line className='w-icon h-icon' />
                    <span className='hidden 2xl:inline-block text-xl mx-4'>
                      Lists
                    </span>
                  </div>
                )
              }
            </a>
          </Link>
          <Link href='/username'>
            <a className={`tall:mb-2 w-outsideIcon h-outsideIcon 2xl:w-max 2xl:h-max 2xl:p-3 flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
              backgroundColor: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              {currentPage[1] === 'username' && currentPage[2] !== 'lists'
                ? (
                  <div className='flex'>
                    <RiUser3Fill className='w-icon h-icon' />
                    <span className='hidden 2xl:inline-block text-xl font-bold mx-4'>
                      Profile
                    </span>
                  </div>
                )
                : (
                  <div className='flex'>
                    <RiUser3Line className='w-icon h-icon' />
                    <span className='hidden 2xl:inline-block text-xl mx-4'>
                      Profile
                    </span>
                  </div>
                )
              }
            </a>
          </Link>
          <button ref={refMoreButton} className={`tall:mb-2 cursor-pointer w-outsideIcon h-outsideIcon 2xl:w-max 2xl:h-max 2xl:p-3 flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95 active:brightness-90' : 'hover:brightness-110 active:brightness-125'} duration-200`} style={{
            backgroundColor: backgroundTheme === 'light'
              ? lightTheme.background
              : backgroundTheme === 'dark'
                ? darkTheme.background
                : '#000'
          }} onClick={handleMorePopup}>
            <div className='flex items-center'>
              <div className='flex items-center justify-center w-icon h-icon border-2 rounded-full bg-transparent' style={{
                borderColor: backgroundTheme === 'light' ? lightTheme.icon : darkTheme.icon
              }}>
                <RiMoreLine className='w-6 h-6' />
              </div>
              <span className='hidden 2xl:inline-block text-xl mx-4'>
                More
              </span>
            </div>
          </button>
          <button className='w-outsideIcon h-outsideIcon 2xl:w-min 2xl:h-min flex items-center justify-center rounded-full hover:brightness-90 active:brightness-75 duration-200' style={{
            backgroundColor: colorTheme
          }}>
            <RiQuillPenFill className='w-icon h-icon text-white 2xl:hidden' />
            <span className='hidden text-xl font-bold 2xl:inline-block text-white py-3 px-10'>
              Tweet
            </span>
          </button>
        </li>
        <li className='mb-5'>
          <button ref={refProfileButton} className={`cursor-pointer flex items-center justify-center w-outsideIcon h-outsideIcon 2xl:w-max 2xl:h-max 2xl:py-2 2xl:px-3 rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95 active:brightness-90' : 'hover:brightness-110 active:brightness-125'} duration-200`} style={{
            backgroundColor: backgroundTheme === 'light'
              ? lightTheme.background
              : backgroundTheme === 'dark'
                ? darkTheme.background
                : '#000'
          }} onClick={handleProfilePopup}>
            <div className='flex items-center justify-center p-3 rounded-full bg-slate-300 text-slate-500'>
              <RiUser3Fill className='w-icon h-icon' />
            </div>
            <div className='hidden 2xl:flex w-full justify-between items-center ml-2'>
              <div className='flex flex-col items-start'>
                <span className='text-base'>
                  {nickname}
                </span>
                <span className='text-base text-slate-400'>
                  @{username}
                </span>
              </div>
              <RiMoreLine className='w-icon h-icon text-slate-400 ml-10' />
            </div>
          </button>
          <button className='border' onClick={handleBackground}>
            toggle
          </button>
        </li>
      </ul>
      <PopupMenu actived={moreActived} />
      <ProfilePopupMenu actived={profilePopupActived} />
    </div>
  )
}

export default TabBar
