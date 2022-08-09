import React, { useContext } from 'react'
import Link from 'next/link'
import { darkTheme, lightTheme } from '../libs/colors'
import { ThemeContext } from '../utils/theme'

// What'happening card
export const HCard = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  return (
    <div className={`w-full min-h-min rounded-xl ${backgroundTheme === 'light' ? 'bg-slate-50' : 'brightness-125'} flex flex-col mt-3`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
      background: backgroundTheme === 'dark'
        ? darkTheme.background
        : backgroundTheme === 'black'
          ? '#000'
          : ''
    }}>
      <h2 className='text-xl tracking-widest p-3'>
        What's happening?
      </h2>
      <div></div>
      <Link href=''>
        <a className={`text-sm p-3 rounded-br-xl rounded-bl-xl ${backgroundTheme === 'light' ? 'bg-slate-50 hover:brightness-95' : 'hover:brightness-110'} duration-300`}
          style={{
            color: colorTheme,
            background: backgroundTheme === 'dark'
              ? darkTheme.background
              : backgroundTheme === 'black'
                ? '#000'
                : ''
          }}
        >
          Show more
        </a>
      </Link>
    </div>
  )
}

// Who to follow card
export const FCard = () => {
  const { backgroundTheme, colorTheme } = useContext(ThemeContext)
  return (
    <div className={`w-full min-h--min rounded-xl flex flex-col ${backgroundTheme === 'light' ? 'bg-slate-50' : 'brightness-125'} m-3`} style={{
      color: backgroundTheme === 'light'
        ? lightTheme.text
        : darkTheme.text,
      background: backgroundTheme === 'dark'
        ? darkTheme.background
        : backgroundTheme === 'black'
          ? '#000'
          : ''
    }}>
      <h2 className='text-xl tracking-widest p-3'>
        Who to follow
      </h2>
      <div></div>
      <Link href=''>
        <a className={`text-sm p-3 rounded-br-xl rounded-bl-xl ${backgroundTheme === 'light' ? 'bg-slate-50 hover:brightness-95' : 'hover:brightness-110'} duration-300`}
          style={{
            color: colorTheme,
            background: backgroundTheme === 'dark'
              ? darkTheme.background
              : backgroundTheme === 'black'
                ? '#000'
                : ''
          }}
        >
          Show more
        </a>
      </Link>
    </div>
  )
}
