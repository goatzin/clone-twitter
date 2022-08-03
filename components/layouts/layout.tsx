import React from 'react'
import TabBar from '../tab-bar'

const Layout = ({ children }: any) => {
  return (
    <div className='flex min-w-min min-h-min justify-center'>
      <TabBar />
      {children}
    </div>
  )
}

export default Layout
