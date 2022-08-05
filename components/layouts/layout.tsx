import React from 'react'
import TabBar from '../tab-bar'

const Layout = ({ children }: any) => {
  return (
    <div className='flex min-w-full min-h-full justify-center'>
      <TabBar />
      {children}
    </div>
  )
}

export default Layout
