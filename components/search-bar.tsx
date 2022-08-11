import React, { useContext } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { darkTheme, lightTheme } from '../libs/colors'
import { ThemeContext } from '../utils/theme'

const SearchBar = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <div className='xl:min-w-[400px] xl:max-w-[400px] lg:min-w-[340px] lg:max-w-[340px] lg:flex hidden flex-col items-center px-5 py-2 fixed z-10' style={{
      background: backgroundTheme === 'light'
        ? lightTheme.background
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000'
    }}>
      <div className={`min-w-full flex items-center rounded-full ${backgroundTheme !== 'light' ? 'brightness-150' : ''}`} style={{
        color: backgroundTheme === 'light'
          ? lightTheme.text
          : darkTheme.text,
        background: backgroundTheme === 'light'
          ? '#f1f5f9' // bg-slate-100
          : backgroundTheme === 'dark'
            ? darkTheme.background
            : '#000'
      }}>
        <div className={`p-3 ${backgroundTheme !== 'light' ? 'text-gray-600' : ''}`}>
          <RiSearch2Line />
        </div>
        <input
          type='search'
          placeholder='Search Twitter'
          className={`border-none outline-none ${backgroundTheme === 'light' ? 'bg-slate-100 placeholder:text-black' : 'placeholder:text-gray-600'}`}
          style={{
            background: backgroundTheme === 'dark'
              ? darkTheme.background
              : backgroundTheme === 'black'
                ? '#000'
                : ''
          }}
        />
      </div>
    </div>
  )
}

export default SearchBar
