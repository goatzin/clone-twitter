import React, { useContext } from 'react'
import { darkTheme, lightTheme } from '../../libs/colors'
import { ThemeContext } from '../../utils/theme'

const PinnedLists = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <div className={`w-full px-5 py-3 border-b ${backgroundTheme === 'light' ? 'border-gray-300' : 'border-gray-600'}`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text
    }}>
      <h2 className='text-2xl font-bold'>
        Pinned Lists
      </h2>
      <div className='flex my-3'>O_o</div>
      <div className='w-full items-center justify-center text-sm text-slate-300'>
        Nothing to see here yet —— pin your favorite Lists to access them quickly.
      </div>
    </div>
  )
}

export default PinnedLists
