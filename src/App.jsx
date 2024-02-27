import React from 'react'
import { GlobalStorage } from './GlobalContext'
import Carousel from './carousel'
import PopularMovies from './PopularMovies'
import Home from './Home'
import MainRoutes from './router'

const App = () => {
  return (
    <GlobalStorage>
      <MainRoutes />
    </GlobalStorage>
  )
  
}

export default App