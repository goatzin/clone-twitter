import React, { useContext } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { darkTheme, lightTheme } from '../libs/colors'
import { ThemeContext } from '../utils/theme'

const SearchBar: React.FC = () => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <div className={`min-w-full px-2 flex items-center rounded-full ${backgroundTheme !== 'light' ? 'brightness-150' : ''}`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
      background: backgroundTheme === 'light'
        ? '#f1f5f9' // bg-slate-100
        : backgroundTheme === 'dark'
          ? darkTheme.background
          : '#000'
    }}>
      <div className={`p-3 ${backgroundTheme !== 'light' ? 'text-slate-600' : ''}`}>
        <RiSearch2Line />
      </div>
      <input
        type='search'
        placeholder='Search Twitter'
        className={`placeholder:text-sm border-none outline-none w-full ${backgroundTheme === 'light' ? 'bg-slate-100 placeholder:text-black' : 'placeholder:text-gray-600'}`}
        style={{
          background: backgroundTheme === 'dark'
            ? darkTheme.background
            : backgroundTheme === 'black'
              ? '#000'
              : ''
        }}
      />
    </div>
  )
}

export default SearchBar
