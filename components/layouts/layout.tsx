import React from 'react'
import TabBar from '../tab-bar'

const Layout = ({ children }: any) => {
  return (
    <div>
      <TabBar />
      {children}
    </div>
  )
}

export default Layout
