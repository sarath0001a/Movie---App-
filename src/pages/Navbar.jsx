import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WatchListContext } from '../Context/WatchListContext'

const   Navbar = () => {
 const {watchlist}=  useContext(WatchListContext)
  return (
    <nav className='bg-slate-600 p-4 text-white flex justify-between fixed w-full z-10'>
         <Link to='/' className='text-xl font-bold'>Movie App</Link>
         <Link to = "/watchlist" className='text-xl'>WatchList({watchlist.length})</Link>
         
    </nav>
  )
}

export default Navbar