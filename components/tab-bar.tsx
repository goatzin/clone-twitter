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
  const buttonIcons = [
    {
      id: 1, path: '/home',
      actived: <RiHome7Fill />, desatived: <RiHome7Line />
    },
    {
      id: 2, path: '/explorer',
      actived: <RiSearch2Fill />, desatived: <RiSearch2Line />
    },
    {
      id: 3, path: '/notifications',
      actived: <RiNotification2Fill />, desatived: <RiNotification2Line />
    },
    {
      id: 4, path: '/messages',
      actived: <RiMailFill />, desatived: <RiMailLine />
    },
    {
      id: 5, path: '/i/bookmarks',
      actived: <RiBookmarkFill />, desatived: <RiBookmarkLine />
    },
    {
      id: 6, path: '/username/lists',
      actived: <RiFileList2Fill />, desatived: <RiFileList2Line />
    },
    {
      id: 7, path: '/username',
      actived: <RiUser3Fill />, desatived: <RiUser3Line />
    },
  ]

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
      <ul className={`text-${backgroundTheme}-icon flex flex-col items-center justify-between min-h-screen w-17`}>
        <li className='flex flex-col w-max items-center'>
          <Link href='/home'>
            <a className={` w-outsideIcon h-outsideIcon flex items-center justify-center border border-transparent rounded-full hover:bg-${backgroundTheme}-thover active:bg-${backgroundTheme}-tactive duration-300`}>
              <BsTwitter className={`w-icon h-icon bg-${backgroundTheme}-ticon`} />
            </a>
          </Link>
          {buttonIcons.map((button) =>
            <Link href={button.path} key={button.id}>
              <a className='w-outsideIcon first:w-icon first:h-icon h-outsideIcon flex items-center justify-center border border-transparent rounded-full hover:bg-gray-300 active:bg-gray-400 duration-300'>
                {currentPage === button.path
                  ? button.actived
                  : button.desatived
                }
              </a>
            </Link>
          )}
          <div className='border border-transparent w-outsideIcon h-outsideIcon flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
            <button className={`border-${backgroundTheme}-icon flex items-center justify-center w-icon h-icon border-2 rounded-full bg-transparent`}>
              <RiMoreLine className='w-6 h-6' />
            </button>
          </div>
          <button className={`bg-${colorTheme}-color w-outsideIcon h-outsideIcon flex items-center justify-center rounded-full hover:bg-blue-500 active:bg-blue-600 duration-300`}>
            <RiQuillPenFill className={`w-icon h-icon text-${backgroundTheme}-color`} />
          </button>
        </li>
        <li className='mb-5'>
          <div className='flex items-center justify-center w-outsideIcon h-outsideIcon rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
            <button className={`border-${backgroundTheme}-icon flex items-center justify-center border-2 w-10 h-10 rounded-full`}>
              <RiUser3Line className='w-icon h-icon' />
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
