import React, { useContext, useState } from 'react'

import GenreFilter from '../components/GenreFilter'
import { WatchListContext } from '../Context/WatchListContext'
import Moviecard from '../components/Moviecard'
const Watchlist = () => {
  const { watchlist , generList } = useContext(WatchListContext)

  const [search, setsearch] = useState('')
  const [selectedGenre , setselectedGenre] = useState("")
  const filteredMovies = watchlist.filter(
    (movie) => movie.title.toLowerCase().includes(search.toLowerCase()) || movie.overview.toLowerCase().includes(search.toLowerCase()))
    . filter(movie =>{
      return !selectedGenre ||  movie.genre_ids.includes(Number (selectedGenre))
    })
    
  return (
    <div className='p-4 pt-16'>
      <input type='text'
        placeholder='Search Movies...'
        className=' border-gray-700
             p-2 w-3/4
             mt-1
             md:w-1/2 
             border rounded
             bg-gray-700
            bg-opacity-60 
            backdrop-blur-xl
           text-white 
           fixed top-16 left-1/2 
           transform -translate-x-1/2 z-10
           
          '
        onChange={(e) => setsearch(e.target.value)} />

      <div className='mt-16 flex justify-center'>
        <GenreFilter genreList = {generList} setselectedGenre = {setselectedGenre}/>
      </div>

      <div className='movies-container 
            grid grid-cols-1 
            md:grid-cols-3 
            lg:grid-cols-4 gap-4 mt-16'>

        {
          filteredMovies.map((movie, index) => (
            <Moviecard key={index} movie={movie} />
          ))
        }
      </div>
    </div>
  )
}

export default Watchlist