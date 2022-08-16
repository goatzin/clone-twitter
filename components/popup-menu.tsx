import React, { useContext } from 'react'
import Link from 'next/link'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { BiHelpCircle } from 'react-icons/bi'
import { BsChatRightText, BsPencilSquare } from 'react-icons/bs'
import { FiBarChart2 } from 'react-icons/fi'
import { ImNewspaper } from 'react-icons/im'
import {
  IoRocketOutline,
  IoOpenOutline,
  IoSettingsOutline,
  IoAccessibility
} from 'react-icons/io5'
import { ThemeContext } from '../utils/theme'
import { darkTheme, lightTheme } from '../libs/colors'

interface Props {
  actived: boolean
  setActived: (props: boolean) => any
}

const PopupMenu: React.FC<Props> = ({ actived }) => {
  const { backgroundTheme } = useContext(ThemeContext)
  return actived ? (
    <div className={`fixed top-0 z-20 min-w-[225px] ${backgroundTheme === 'light' ? 'drop-shadow-xl' : 'drop-shadow-[0_20px_13px_rgba(255,255,255,.05)]'} rounded-xl`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <ul className='w-full flex flex-col'>
        <li className='w-full'>
          <Link href='/username/topics'>
            <a className={`flex items-center py-4 px-5 w-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              <div className='mr-4'>
                <BsChatRightText className='w-5 h-5' />
              </div>
              Topics
            </a>
          </Link>
          <Link href='/i/moment_maker'>
            <a className={`flex items-center py-4 px-5 w-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              <div className='mr-4'>
                <AiOutlineThunderbolt className='w-5 h-5' />
              </div>
              Moments
            </a>
          </Link>
          <Link href='/i/newsletters'>
            <a className={`flex items-center py-4 px-5 w-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              <div className='mr-4'>
                <ImNewspaper className='w-5 h-5' />
              </div>
              Newsletters
            </a>
          </Link>
          <Link href='/i/flow/convert_to_professional'>
            <a className={`flex items-center py-4 px-5 w-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              <div className='mr-4'>
                <IoRocketOutline className='w-5 h-5' />
              </div>
              Twitter for Professionals
            </a>
          </Link>
          <Link href='/home'>
            <a className={`flex items-center py-4 px-5 w-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              <div className='mr-4'>
                <IoOpenOutline className='w-5 h-5' />
              </div>
              Twitter Ads
            </a>
          </Link>
          <Link href='/home'>
            <a className={`flex items-center py-4 px-5 w-full border-b ${backgroundTheme === 'light' ? 'border-gray-100 hover:brightness-95' : 'border-gray-700 hover:brightness-110'} duration-200`} style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              <div className='mr-4'>
                <FiBarChart2 className='w-5 h-5' />
              </div>
              Analytics
            </a>
          </Link>
          <Link href='/settings/account'>
            <a className={`flex items-center py-4 px-5 w-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              <div className='mr-4'>
                <IoSettingsOutline className='w-5 h-5' />
              </div>
              Settings and privacy
            </a>
          </Link>
          <Link href='/home'>
            <a className={`flex items-center py-4 px-5 w-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              <div className='mr-4'>
                <BiHelpCircle className='w-5 h-5' />
              </div>
              Help Center
            </a>
          </Link>
          <Link href='/i/display'>
            <a className={`flex items-center py-4 px-5 w-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              <div className='mr-4'>
                <BsPencilSquare className='w-5 h-5' />
              </div>
              Display
            </a>
          </Link>
          <Link href='/i/keyboard_shortcuts'>
            <a className={`flex items-center py-4 px-5 w-full ${backgroundTheme === 'light' ? 'hover:brightness-95' : 'hover:brightness-110'} duration-200`} style={{
              background: backgroundTheme === 'light'
                ? lightTheme.background
                : backgroundTheme === 'dark'
                  ? darkTheme.background
                  : '#000'
            }}>
              <div className='mr-4'>
                <IoAccessibility className='w-5 h-5' />
              </div>
              Keyboard shortcuts
            </a>
          </Link>
        </li>
      </ul>
    </div>
  ) : (null)
}

export default PopupMenu