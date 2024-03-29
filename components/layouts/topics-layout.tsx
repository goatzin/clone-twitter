import React, { useCallback, useContext, useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'
import { useRouter } from 'next/router'
import TabListButton from '../tab-list-button'

interface Props {
  children: any
}

const TopicsLayout: React.FC<Props> = ({ children }) => {
  const { backgroundTheme } = useContext(ThemeContext)
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
    <div className={`w-timeline min-h-full border-l border-r items-center pt-8 ${backgroundTheme === 'light' ? 'border-gray-100' : 'border-gray-700'}`} style={{
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
        <div className='min-w-full flex px-5'>
          <button className={`rounded-full p-2 mr-5 flex items-center justify-center ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'}`} style={{
            background: backgroundTheme === 'light'
              ? lightTheme.background
              : backgroundTheme === 'dark'
                ? darkTheme.background
                : '#000'
          }}>
            <BsArrowLeft className='w-5 h-5' />
          </button>
          <h1 className='text-xl font-bold tracking-tight'>
            Topics
          </h1>
        </div>
        <nav className='flex w-full justify-between items-center'>
          <TabListButton
            link='/username/topics/followed'
            linkName='followed'
            extraLinkName='topics'
            name='Followed'
            currentPage={currentPage}
          />
          <TabListButton
            link='/username/topics/recommended'
            linkName='recommended'
            name='Suggested'
            currentPage={currentPage}
          />
          <TabListButton
            link='/username/topics/not_interested'
            linkName='not_interested'
            name='Not Interested'
            currentPage={currentPage}
          />
        </nav>
      </div>
      <div className='mt-20'>
        {children}
      </div>
    </div>
  )
}

export default TopicsLayout
