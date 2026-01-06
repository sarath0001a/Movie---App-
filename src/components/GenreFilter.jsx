import React from 'react'

const GenreFilter = ({ genreList ,setselectedGenre  }) => {
    return (
        < select className='
     p-2
     mb-4
     bg-gray-900
     bg-opacity-60
     backdrope-blur-md
     text-white
     rounded'
     onChange={(e)=>setselectedGenre(e.target.value) }>
        <option value="">All Genres</option>
            {
                genreList.map((genre) => {
                    return (
                        <option kay = {genre} value={genre.id}>{genre.name}</option>
                    )

                })
            }
        </select>
    )
}

export default GenreFilter