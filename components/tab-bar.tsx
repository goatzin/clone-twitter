import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BsTwitter } from 'react-icons/bs'

const TabBar: React.FC = () => {
  const pathname = window.location.pathname
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {

  }, [pathname, setCurrentPage])

  return (
    <ul>
      <li>
        <Link href='/home'>
          <a><BsTwitter /></a>
        </Link>
      </li>
      <li>
        <Link href='/home'>
          <a>Home icon</a>
        </Link>
      </li>
    </ul>
  )
}

export default TabBar
