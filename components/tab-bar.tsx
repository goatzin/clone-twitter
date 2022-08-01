import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const TabBar: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {

  }, [window.location.pathname, setCurrentPage])

  return (
    <ul>
      <li>
        <Link href='/home'>
          <a>Twitter icon</a>
        </Link>
      </li>
    </ul>
  )
}

export default TabBar
