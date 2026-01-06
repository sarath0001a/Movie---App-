import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./pages/navbar"
import Home from "./pages/Home"
import Watchlist from "./pages/Watchlist"
import { WatchListProvider } from "./Context/WatchListContext"

export default function App() {
  return (

    <WatchListProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/watchlist" element={<Watchlist />}></Route>
        </Routes>
      </BrowserRouter>
    </WatchListProvider>

  )
}