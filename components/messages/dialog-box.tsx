import React, { useContext } from 'react'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'

const DialogBox: React.FC = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  return (
    <div className={`hidden lg:flex lg:w-timeline h-screen flex-1 items-center border-r border-l ${backgroundTheme === 'light' ? 'border-gray-300' : 'border-slate-800'}`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <div className='w-full h-full justify-center items-center flex flex-col'>
        <h2 className='font-bold text-3xl'>
          Select a message
        </h2>
        <span className='text-sm text-slate-300 w-[300px] text-start py-2 mb-5'>
          Choose from your existing conversations, start a
          new one, or just keep swimming
        </span>
        <button className='rounded-full px-8 py-4 flex items-center justify-center font-bold w-max text-white hover:brightness-95 duration-200' style={{
          background: colorTheme
        }}>
          New message
        </button>
      </div>
    </div>
  )
}

export default DialogBox
