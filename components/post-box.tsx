// configure later
import React, { useContext } from 'react'
import Link from 'next/link'
import { AiOutlineFileGif } from 'react-icons/ai'
import { HiOutlineChartBar } from 'react-icons/hi'
import { RiUser3Line, RiMapPinLine } from 'react-icons/ri'
import { BsImage, BsEmojiSmile, BsCalendar4Event } from 'react-icons/bs'
import { ThemeContext } from '../utils/theme'
import { lightTheme, darkTheme } from '../libs/colors'

const PostBox = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  return (
    <div className='flex flex-row mt-4 py-2 px-5'>
      <div className='flex justify-center text-neutral-300'>
        <Link href='/username'>
          <a className='w-12 h-12 border rounded-full flex justify-center items-center hover:brightness-90 duration-300' style={{
            backgroundColor: backgroundTheme === 'light'
              ? lightTheme.background
              : backgroundTheme === 'dark'
                ? darkTheme.background
                : '#000'
          }}>
            <RiUser3Line className='w-7 h-7' />
          </a>
        </Link>
      </div>
      <div className='min-h-min flex flex-1 flex-col justify-center' style={{
        color: backgroundTheme === 'light' ? lightTheme.text : darkTheme.text
      }}>
        <form className='flex flex-col min-w-full'>
          <textarea
            className='w-full min-h-min outline-none bg-transparent overflow-hidden resize-none p-2 placeholder:text-xl placeholder:items-center'
            placeholder="What's happening"
            maxLength={280}
            cols={5}
            rows={1}
          ></textarea>
          <div className='flex items-center justify-between pt-4' style={{
            color: colorTheme
          }}>
            <ul className='flex'>
              <li>
                <button className={`p-2 flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:bg-blue-100' : 'hover:brightness-75'} duration-300`} style={{
                  backgroundColor: backgroundTheme === 'dark'
                    ? darkTheme.background
                    : backgroundTheme === 'black'
                      ? '#000'
                      : ''
                }}>
                  <BsImage className='w-5 h-5' />
                </button>
              </li>
              <li>
                <button className={`p-2 flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:bg-blue-100' : 'hover:brightness-75'} duration-300`} style={{
                  backgroundColor: backgroundTheme === 'dark'
                    ? darkTheme.background
                    : backgroundTheme === 'black'
                      ? '#000'
                      : ''
                }}>
                  <AiOutlineFileGif className='w-5 h-5' />
                </button>
              </li>
              <li>
                <button className={`p-2 flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:bg-blue-100' : 'hover:brightness-75'} duration-300`} style={{
                  backgroundColor: backgroundTheme === 'dark'
                    ? darkTheme.background
                    : backgroundTheme === 'black'
                      ? '#000'
                      : ''
                }}>
                  <HiOutlineChartBar className='w-5 h-5' />
                </button>
              </li>
              <li>
                <button className={`p-2 flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:bg-blue-100' : 'hover:brightness-75'} duration-300`} style={{
                  backgroundColor: backgroundTheme === 'dark'
                    ? darkTheme.background
                    : backgroundTheme === 'black'
                      ? '#000'
                      : ''
                }}>
                  <BsEmojiSmile className='w-5 h-5' />
                </button>
              </li>
              <li>
                <button className={`p-2 flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:bg-blue-100' : 'hover:brightness-75'} duration-300`} style={{
                  backgroundColor: backgroundTheme === 'dark'
                    ? darkTheme.background
                    : backgroundTheme === 'black'
                      ? '#000'
                      : ''
                }}>
                  <BsCalendar4Event className='w-5 h-5' />
                </button>
              </li>
              <li>
                <button className={`p-2 flex items-center justify-center rounded-full ${backgroundTheme === 'light' ? 'hover:bg-blue-100' : 'hover:brightness-75'} duration-300`} style={{
                  backgroundColor: backgroundTheme === 'dark'
                    ? darkTheme.background
                    : backgroundTheme === 'black'
                      ? '#000'
                      : ''
                }}>
                  <RiMapPinLine className='w-5 h-5' />
                </button>
              </li>
            </ul>
            <button type='submit' className='flex items-center justify-center text-white rounded-full text-base font-bold px-5 py-1.5 hover:brightness-90 active:brightness-75 duration-300' style={{
              background: colorTheme
            }}>
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PostBox
