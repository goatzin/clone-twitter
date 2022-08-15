import React, { useCallback, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ThemeContext } from '../../utils/theme'

const TabBar: React.FC = () => {
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
    <ul className={`flex w-full justify-between items-center border-b ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-700'}`}>
      <li className='w-full'>
        <Link href='/username'>
          <a className={`w-full pt-3 flex items-center justify-center ${backgroundTheme === 'light' ? 'hover:bg-neutral-100' : 'hover:bg-gray-800'} duration-200`} style={{
            fontWeight: currentPage === 'username'
              ? 'bold'
              : 'normal',
          }}>
            <div style={{
              borderBottom: currentPage === 'username'
                ? `5px solid ${colorTheme}`
                : '',
              paddingBottom: currentPage === 'username'
                ? '8px'
                : '12px'
            }}>
              Tweets
            </div>
          </a>
        </Link>
      </li>
      <li className='w-full'>
        <Link href='/username/with_replies'>
          <a className={`w-full pt-3 flex itemediams-center justify-center ${backgroundTheme === 'light' ? 'hover:bg-neutral-100' : 'hover:bg-gray-800'} duration-200`} style={{
            fontWeight: currentPage === 'with_replies'
              ? 'bold'
              : 'normal',
          }}>
            <div style={{
              borderBottom: currentPage === 'with_replies'
                ? `5px solid ${colorTheme}`
                : '',
              paddingBottom: currentPage === 'with_replies'
                ? '8px'
                : '12px'
            }}>
              Tweets & replies
            </div>
          </a>
        </Link>
      </li>
      <li className='w-full'>
        <Link href='/username/media'>
          <a className={`w-full pt-3 flex items-center justify-center ${backgroundTheme === 'light' ? 'hover:bg-neutral-100' : 'hover:bg-gray-800'} duration-200`} style={{
            fontWeight: currentPage === 'media'
              ? 'bold'
              : 'normal',
          }}>
            <div style={{
              borderBottom: currentPage === 'media'
                ? `5px solid ${colorTheme}`
                : '',
              paddingBottom: currentPage === 'media'
                ? '8px'
                : '12px'
            }}>
              Media
            </div>
          </a>
        </Link>
      </li>
      <li className='w-full'>
        <Link href='/username/likes'>
          <a className={`w-full pt-3 flex items-center justify-center ${backgroundTheme === 'light' ? 'hover:bg-neutral-100' : 'hover:bg-gray-800'} duration-200`} style={{
            fontWeight: currentPage === 'likes'
              ? 'bold'
              : 'normal',
          }}>
            <div style={{
              borderBottom: currentPage === 'likes'
                ? `5px solid ${colorTheme}`
                : '',
              paddingBottom: currentPage === 'likes'
                ? '8px'
                : '12px'
            }}>
              Likes
            </div>
          </a>
        </Link>
      </li>
    </ul>
  )
}

export default TabBar
