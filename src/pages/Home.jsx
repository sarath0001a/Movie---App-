import React, { useEffect, useState } from 'react'
import Moviecard from '../components/Moviecard'



const Home = () => {
    const [movies, setmovies] = useState([])
    const [page, setpage] = useState(1)
    const [search,setsearch] = useState()


    useEffect(() => {
        let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=5dc13a658cb47d95ffd7f1288be881d3`
         if(search){
             url =  `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=5dc13a658cb47d95ffd7f1288be881d3`
         }

        fetch(url)
            .then((response) => response.json())
            .then((data) => setmovies(data.results))
    }, [page,search])

    return (
        <div className='p-4 pt-16  '>
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
           transform -translate-x-1/2 z-10'
           onChange={(e)=>{setsearch(e.target.value)}}
           />

            <div className='movies-container 
            grid grid-cols-1 
            md:grid-cols-3 
            lg:grid-cols-4 gap-4 mt-16'>

                {
                    movies.map((movie, index) => (
                        <Moviecard key={index} movie={movie} />
                    ))
                }
            </div>


            <div className="pagination-container flex justify-between mt-5">
                <button className='p-2 bg-gray-700 text-white rounded'
                    disabled={page == 1}
                    onClick={() => {
                        setpage(prev => prev - 1)
                    }
                    }
                >PREV</button>
                <button className='p-2 bg-gray-700 text-white rounded'
                    onClick={() => {
                        setpage(prev => prev +1)
                    }
                    }
                >NEXT</button>
            </div>
        </div>
    )
}

export default Home