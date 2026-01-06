import { createContext, useState , useEffect } from "react";

export const WatchListContext = createContext()

export const WatchListProvider = ({ children }) => {
    const [watchlist, setwatchlist] = useState([])
    const [generList, setgenerLit] = useState([])
    

    useEffect(() => {
        let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=5dc13a658cb47d95ffd7f1288be881d3`
        fetch(url)
            .then((response) => response.json())
            .then((data) => setgenerLit(data.genres || []));
    }, [])


    const toggleWatchlist = (movie) => {
        const index = watchlist.findIndex((m) => m.id === movie.id);
        if (index === -1) {
            setwatchlist([...watchlist, movie]);
        }
        else {
            setwatchlist([...watchlist.slice(0, index), ...watchlist.slice(index + 1)])
        }
    }
    return (
        <WatchListContext.Provider value={{ watchlist, toggleWatchlist , generList }}>
            {children}
        </WatchListContext.Provider>
    )
}