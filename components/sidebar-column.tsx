import React from 'react'
import { FCard, HCard } from './cards'
import SearchBar from './search-bar'
import SidebarFooter from './sidebar-footer'

interface Props {
  searchBar: boolean
  hCard: boolean // What's happening card
  fCard: boolean // Who to follow
}

const SideBarColumn: React.FC<Props> = ({ searchBar, hCard, fCard }) => {
  return (
    <div className='xl:min-w-[400px] xl:max-w-[400px] lg:min-w-[340px] lg:max-w-[340px] lg:flex hidden flex-col items-center px-5'>
      {searchBar && <SearchBar />}
      <div style={{ marginTop: searchBar ? '3.5rem' : '1rem' }}>
        {hCard && <HCard />}
        {fCard && <FCard />}
        <SidebarFooter />
      </div>
    </div>
  )
}

export default SideBarColumn
