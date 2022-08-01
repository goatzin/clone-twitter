import type { NextPage } from 'next'
import Link from 'next/link'

const Index: NextPage = () => {
  return (
    <div>
      <Link href='/home'>
        <a>Home</a>
      </Link>
    </div>
  )
}

export default Index 
