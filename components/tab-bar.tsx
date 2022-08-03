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
  const { theme } = useContext(ThemeContext)
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
    <ul className='flex flex-col items-center justify-between min-h-screen w-17'>
      <li className='flex flex-col w-max items-center'>
        <Link href='/home'>
          <a className='w-14 h-14 flex items-center justify-center border border-transparent rounded-full hover:bg-blue-50 active:bg-blue-100 duration-300'>
            <BsTwitter className='text-blue-400 w-8 h-8' />
          </a>
        </Link>
        <Link href='/home'>
          <a className='w-14 h-14 flex items-center justify-center border border-transparent rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
            {currentPage === '/home'
              ? <RiHome7Fill className='w-7 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
              : <RiHome7Line className='w-7 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
            }
          </a>
        </Link>
        <Link href='/explorer'>
          <a className=' w-14 h-14 flex items-center justify-center border border-transparent rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
            {currentPage === '/explorer'
              ? <RiSearch2Fill className='w-7 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
              : <RiSearch2Line className='w-7 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
            }
          </a>
        </Link>
        <Link href='/notifications'>
          <a className=' w-14 h-14 flex items-center justify-center border border-transparent rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
            {currentPage === '/notifications'
              ? <RiNotification2Fill className='w-7 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
              : <RiNotification2Line className='w-7 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
            }
          </a>
        </Link>
        <Link href='/messages'>
          <a className=' w-14 h-14 flex items-center justify-center border border-transparent rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
            {currentPage === '/messages'
              ? <RiMailFill className='w-9 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
              : <RiMailLine className='w-9 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
            }
          </a>
        </Link>
        <Link href='/i/bookmarks'>
          <a className=' w-14 h-14 flex items-center justify-center border border-transparent rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
            {currentPage === '/i/bookmarks'
              ? <RiBookmarkFill className='w-9 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
              : <RiBookmarkLine className='w-9 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
            }
          </a>
        </Link>
        <Link href='/username/lists'>
          <a className='w-14 h-14 flex items-center justify-center border border-transparent rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
            {currentPage === '/username/lists'
              ? <RiFileList2Fill className='w-9 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
              : <RiFileList2Line className='w-9 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
            }
          </a>
        </Link>
        <Link href='/username'>
          <a className='w-14 h-14 flex items-center justify-center border border-transparent rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
            {currentPage === '/username'
              ? <RiUser3Fill className='w-9 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
              : <RiUser3Line className='w-9 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
            }
          </a>
        </Link>
        <div className='border border-transparent w-14 h-14 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
          <button className='flex items-center justify-center w-7 h-7 border-2 rounded-full bg-transparent' style={{
            borderColor: theme[0] === 'light' ? 'black' : 'white'
          }}>
            <RiMoreLine className='w-7 h-7' style={{
              color: theme[0] === 'light' ? 'black' : 'white'
            }} />
          </button>
        </div>
        <button className='bg-blue-400 w-14 h-14 flex items-center justify-center rounded-full hover:bg-blue-500 active:bg-blue-600 duration-300'>
          <RiQuillPenFill className='w-7 h-7' style={{
            color: theme[0] === 'light' ? 'white' : 'black'
          }} />
        </button>
      </li>
      <li className='mb-5'>
        <div className='flex items-center justify-center w-14 h-14 rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
          <button className='flex items-center justify-center border-2 w-10 h-10 rounded-full' style={{
            borderColor: theme[0] === 'light' ? 'black' : 'white'
          }}>
            <RiUser3Line className='w-7 h-7' style={{
              color: theme[0] === 'light' ? 'black' : 'white'
            }} />
          </button>
        </div>
      </li>
    </ul>
  )
}

export default TabBar
