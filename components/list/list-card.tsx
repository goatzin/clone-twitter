import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  link: string
  image: string
  name: string
  creatorImage: string
  nickname: string
  username: string
}

const ListCard: React.FC<Props> = ({ link, image, name, creatorImage, nickname, username }) => {
  return (
    <Link href={link}>
      <a>
        <div>
          <Image
            src={image}
            alt={name}
            width={3}
            height={5}
          />
        </div>
        <div>
          <h3 className='text-base font-bold'>
            {name}
          </h3>
          <div>
            <Image
              src={creatorImage}
              alt={username}
              width={3}
              height={4}
            />
            {nickname} {username}
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ListCard
