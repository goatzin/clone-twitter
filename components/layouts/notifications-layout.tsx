import React, { useCallback, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import { useRouter } from 'next/router'
import { IoSettingsOutline } from 'react-icons/io5'

interface Props {
  children: any
}

const NotificationsLayout: React.FC<Props> = ({ children }) => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  const [currentPage, setCurrentPage] = useState('')
  const router = useRouter()
  const handlePage = useCallback(() => {
    const path = window.location.pathname.split('/')
    setCurrentPage(path[path.length - 1])
  }, [])

  useEffect(() => {
    if (currentPage !== router.asPath) {
      handlePage()
    }
  }, [router.asPath])

  return (
    <div className={`w-timeline min-h-screen border-l border-r items-center pt-8 ${backgroundTheme === 'light' ? 'border-gray-300' : 'border-gray-600'}`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <div className={`fixed top-0 z-10 w-[598px]  flex flex-col border-b items-center py-3 backdrop-blur-sm ${backgroundTheme === 'light' ? 'border-gray-300' : 'border-gray-600'}`} style={{
        background: backgroundTheme === 'light'
          ? 'rgba(255, 255, 255, .85)'
          : backgroundTheme === 'dark'
            ? 'rgba(21, 32, 43, .85)'
            : 'rgba(0, 0, 0, .85)'
      }}>
        <div className='w-full flex justify-between items-center px-5'>
          <h1 className='font-bold text-xl'>
            Notifications
          </h1>
          <button className='p1 flex items-center justify-center rounded-full hover:brightness-75 active:brightness-50 duration-200' style={{
            background: backgroundTheme === 'light'
              ? lightTheme.background
              : backgroundTheme === 'dark'
                ? darkTheme.background
                : '#000'
          }}>
            <IoSettingsOutline className='w-6 h-6' />
          </button>
        </div>
        <ul className='w-full flex justify-between'>
          <li className='w-full'>
            <Link href='/notifications'>
              <a className={`w-full pt-3 flex items-center justify-center tracking-wide ${backgroundTheme === 'light' ? 'hover:bg-neutral-300' : 'hover:bg-slate-800'} duration-200`} style={{
                fontWeight: currentPage === 'notifications'
                  ? 'bold'
                  : 'normal'
              }}>
                <div style={{
                  borderBottom: currentPage === 'notifications'
                    ? `5px solid ${colorTheme}`
                    : '',
                  paddingBottom: currentPage === 'notifications'
                    ? '8px'
                    : '12px'
                }}>
                  All
                </div>
              </a>
            </Link>
          </li>
          <li className='w-full'>
            <Link href='/notifications/mentions'>
              <a className={`w-full pt-3 flex items-center justify-center tracking-wide ${backgroundTheme === 'light' ? 'hover:bg-neutral-300' : 'hover:bg-slate-800'} duration-200`} style={{
                fontWeight: currentPage === 'mentions'
                  ? 'bold'
                  : 'normal'
              }}>
                <div style={{
                  borderBottom: currentPage === 'mentions'
                    ? `5px solid ${colorTheme}`
                    : '',
                  paddingBottom: currentPage === 'mentions'
                    ? '8px'
                    : '12px'
                }}>
                  Mentions
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      {children}
    </div>
  )
}

export default NotificationsLayout
