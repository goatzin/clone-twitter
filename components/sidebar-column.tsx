import React from 'react'
import { FCard, HCard } from './cards'
import SearchBar from './search-bar'

interface Props {
  searchBar: boolean
  hCard: boolean // What's happening card
  fCard: boolean // Who to follow
}

const SideBarColumn: React.FC<Props> = ({ searchBar, hCard, fCard }) => {
  return (
    <div className='xl:min-w-[350px] lg:min-w-[290px] lg:flex hidden flex-col items-center py-2 px-5'>
      {searchBar && <SearchBar />}
      {hCard && <HCard />}
      {fCard && <FCard />}
    </div>
  )
}

export default SideBarColumn
