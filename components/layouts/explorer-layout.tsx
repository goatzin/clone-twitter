import React, { useCallback, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { IoSettingsOutline } from 'react-icons/io5'
import { lightTheme, darkTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import SearchBar from '../search-bar'
import { useRouter } from 'next/router'

interface Props {
  children: any
}

const ExplorerLayout: React.FC<Props> = ({ children }) => {
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
  }, [router])

  return (
    <div className={`w-timeline min-h-screen border-l border-r items-center pt-8 ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-700'}`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <div className={`fixed top-0 z-10 w-[598px] flex flex-col border-b items-center py-3 backdrop-blur-sm ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-700'}`} style={{
        background: backgroundTheme === 'light'
          ? 'rgba(255, 255, 255, 0.85)'
          : backgroundTheme === 'dark'
            ? 'rgba(21, 32, 43, 0.85)'
            : 'rgba(0, 0, 0, 0.85)'
      }}>
        <div className='w-full flex justify-between items-center px-5'>
          <div className='min-w-[502px]'>
            <SearchBar />
          </div>
          <button className={`p-1 flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:brightness-95 active:brightness-90' : 'hover:brightness-110 active:brightness-125'} duration-200`} style={{
            background: backgroundTheme === 'light'
              ? lightTheme.background
              : backgroundTheme === 'dark'
                ? darkTheme.background
                : '#000'
          }}>
            <IoSettingsOutline className='w-6 h-6' />
          </button>
        </div>
        <ul className='flex justify-between w-full'>
          <li className='w-full'>
            <Link href='/explorer/tabs/for-you'>
              <a className={`w-full pt-3 flex items-center justify-center ${backgroundTheme === 'light' ? 'hover:bg-neutral-100' : 'hover:bg-gray-800'} duration-200`} style={{
                fontWeight: currentPage === 'for-you' || currentPage === 'explorer'
                  ? 'bold'
                  : 'normal',
              }}>
                <div style={{
                  borderBottom: currentPage === 'for-you' || currentPage === 'explorer'
                    ? `5px solid ${colorTheme}`
                    : '',
                  paddingBottom: currentPage === 'for-you' || currentPage === 'explorer'
                    ? '8px'
                    : '12px'
                }}>
                  For you
                </div>
              </a>
            </Link>
          </li>
          <li className='w-full'>
            <Link href='/explorer/tabs/trending'>
              <a className={`w-full pt-3 flex items-center justify-center ${backgroundTheme === 'light' ? 'hover:bg-neutral-100' : 'hover:bg-gray-800'} duration-200`} style={{
                fontWeight: currentPage === 'trending'
                  ? 'bold'
                  : 'normal',
              }}>
                <div className='pb-2' style={{
                  borderBottom: currentPage === 'trending'
                    ? `5px solid ${colorTheme}`
                    : '',
                  paddingBottom: currentPage === 'trending'
                    ? '8px'
                    : '12px'
                }}>
                  Trending
                </div>
              </a>
            </Link>
          </li>
          <li className='w-full'>
            <Link href='/explorer/tabs/news'>
              <a className={`w-full pt-3 flex items-center justify-center ${backgroundTheme === 'light' ? 'hover:bg-neutral-100' : 'hover:bg-gray-800'} duration-200`} style={{
                fontWeight: currentPage === 'news'
                  ? 'bold'
                  : 'normal'
              }}>
                <div className='pb-2' style={{
                  borderBottom: currentPage === 'news'
                    ? `5px solid ${colorTheme}`
                    : '',
                  paddingBottom: currentPage === 'news'
                    ? '8px'
                    : '12px'
                }}>
                  News
                </div>
              </a>
            </Link>
          </li>
          <li className='w-full'>
            <Link href='/explorer/tabs/sports'>
              <a className={`w-full pt-3 flex items-center justify-center ${backgroundTheme === 'light' ? 'hover:bg-neutral-100' : 'hover:bg-gray-800'} duration-200`} style={{
                fontWeight: currentPage === 'sports'
                  ? 'bold'
                  : 'normal'
              }}>
                <div className='pb-2' style={{
                  borderBottom: currentPage === 'sports'
                    ? `5px solid ${colorTheme}`
                    : '',
                  paddingBottom: currentPage === 'sports'
                    ? '8px'
                    : '12px'
                }}>
                  Sports
                </div>
              </a>
            </Link>
          </li>
          <li className='w-full'>
            <Link href='/explorer/tabs/entertainment'>
              <a className={`w-full pt-3 flex items-center justify-center ${backgroundTheme === 'light' ? 'hover:bg-neutral-100' : 'hover:bg-gray-800'} duration-200`} style={{
                fontWeight: currentPage === 'entertainment'
                  ? 'bold'
                  : 'normal'
              }}>
                <div className='pb-2' style={{
                  borderBottom: currentPage === 'entertainment'
                    ? `5px solid ${colorTheme}`
                    : '',
                  paddingBottom: currentPage === 'entertainment'
                    ? '8px'
                    : '12px'
                }}>
                  Entertainment
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      {children}
    </div >
  )
}

export default ExplorerLayout
