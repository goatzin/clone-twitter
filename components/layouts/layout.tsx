import React, { useContext } from 'react'
import { ThemeContext } from '../../utils/theme'
import TabBar from '../tab-bar'

const Layout = ({ children }: any) => {
  const { backgroundTheme } = useContext(ThemeContext)
  return (
    <div className='flex min-w-full min-h-full justify-center' style={{
      background: backgroundTheme === 'light'
        ? '#ffffff'
        : backgroundTheme === 'dark'
          ? '#15202b'
          : '#000000'
    }}>
      <TabBar />
      {children}
    </div>
  )
}

export default Layout
