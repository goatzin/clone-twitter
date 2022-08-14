import type { NextPage } from 'next'
import React from 'react'
import DialogBox from '../components/messages/dialog-box'
import Navigations from '../components/messages/navigations'

const Messages: NextPage = () => {
  return (
    <div className='flex min-w-min'>
      <Navigations />
      <DialogBox />
    </div>
  )
}

export default Messages
