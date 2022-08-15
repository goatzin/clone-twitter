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
    <div className={`w-timeline min-h-full border-l border-r items-center pt-8 ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-700'}`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <div className={`fixed top-0 z-10 w-[598px]  flex flex-col border-b items-center py-3 backdrop-blur-sm ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-700'}`} style={{
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
          <button className={`p-2 flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95 active:brightness-90' : 'hover:brightness-110 active:brightness-125'} duration-200`} style={{
            background: backgroundTheme === 'light'
              ? lightTheme.background
              : backgroundTheme === 'dark'
                ? darkTheme.background
                : '#000'
          }}>
            <IoSettingsOutline className='w-5 h-5' />
          </button>
        </div>
        <ul className='w-full flex justify-between'>
          <li className='w-full'>
            <Link href='/notifications'>
              <a className={`w-full pt-3 flex items-center justify-center ${backgroundTheme === 'light' ? 'hover:bg-neutral-100' : 'hover:bg-gray-800'} duration-200`} style={{
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
              <a className={`w-full pt-3 flex items-center justify-center ${backgroundTheme === 'light' ? 'hover:bg-neutral-100' : 'hover:bg-gray-800'} duration-200`} style={{
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
