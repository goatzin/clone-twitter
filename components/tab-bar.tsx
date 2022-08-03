import React, { useState, useEffect, useCallback, useContext } from 'react'
import Link from 'next/link'
import { BsTwitter } from 'react-icons/bs'
import {
  RiHome7Line, RiHome7Fill,
  RiSearchLine, RiSearchFill,
  RiFileList2Fill, RiFileList2Line
} from 'react-icons/ri'
import {
  MdOutlineNotifications, MdNotifications,
  MdOutlineEmail, MdEmail,
  MdBookmarkBorder, MdBookmark
} from 'react-icons/md'
import { IoPerson, IoPersonOutline } from 'react-icons/io5'
import { ThemeContext } from '../utils/theme'

const TabBar: React.FC = () => {
  const { theme } = useContext(ThemeContext)
  const [currentPage, setCurrentPage] = useState('')
  const handlePage = useCallback(() => {
    setCurrentPage(window.location.pathname)
  }, [])

  useEffect(() => {
    document.addEventListener('click', handlePage)
    return () => document.removeEventListener('click', handlePage)
  }, [handlePage])

  return (
    <ul className='flex flex-col items-center justify-start min-h-screen w-17 my-1'>
      <li className='my-1'>
        <Link href='/home'>
          <a className={`w-11 h-11 flex items-center justify-center border border-transparent rounded-full hover:bg-${theme[1]}-50 active:bg-${theme[1]}-100 duration-300`}>
            <BsTwitter className={`text-${theme[1]}-400 w-7 h-7`} />
          </a>
        </Link>
      </li>
      <li className='my-1'>
        <Link href='/home'>
          <a className='w-11 h-11 flex items-center justify-center border border-transparent rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
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
      </li>
      <li className='my-1'>
        <Link href='/explorer'>
          <a className=' w-11 h-11 flex items-center justify-center border border-transparent rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
            {currentPage === '/explorer'
              ? <RiSearchFill className='w-7 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
              : <RiSearchLine className='w-7 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
            }
          </a>
        </Link>
      </li>
      <li className='my-1'>
        <Link href='/notifications'>
          <a className=' w-11 h-11 flex items-center justify-center border border-transparent rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
            {currentPage === '/notifications'
              ? <MdNotifications className='w-7 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
              : <MdOutlineNotifications className='w-7 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
            }
          </a>
        </Link>
      </li>
      <li className='my-1'>
        <Link href='/messages'>
          <a className=' w-11 h-11 flex items-center justify-center border border-transparent rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
            {currentPage === '/messages'
              ? <MdEmail className='w-7 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
              : <MdOutlineEmail className='w-7 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
            }
          </a>
        </Link>
      </li>
      <li className='my-1'>
        <Link href='/i/bookmarks'>
          <a className=' w-11 h-11 flex items-center justify-center border border-transparent rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
            {currentPage === '/i/bookmarks'
              ? <MdBookmark className='w-7 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
              : <MdBookmarkBorder className='w-7 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
            }
          </a>
        </Link>
      </li>
      <li className='my-1'>
        <Link href='/username/lists'>
          <a className=' w-11 h-11 flex items-center justify-center border border-transparent rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
            {currentPage === '/username/lists'
              ? <RiFileList2Fill className='w-7 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
              : <RiFileList2Line className='w-7 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
            }
          </a>
        </Link>
      </li>
      <li className='my-1'>
        <Link href='/username'>
          <a className=' w-11 h-11 flex items-center justify-center border border-transparent rounded-full hover:bg-gray-100 active:bg-gray-200 duration-300'>
            {currentPage === '/username'
              ? <IoPerson className='w-7 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
              : <IoPersonOutline className='w-7 h-7' style={{
                color: theme[0] === 'light' ? 'black' : 'white'
              }} />
            }
          </a>
        </Link>
      </li>
    </ul>
  )
}

export default TabBar
