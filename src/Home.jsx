import React from 'react'
import Header from './Header'
import Footer from './footer'
import Carousel from './carousel'

const Home = () => {
  

  return (
    <div>
      <Header />
      <div>
        <Carousel Navigate={'/PopularMovies'} title={'Popular Movies'} Request={`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`} />
      </div>
      <Footer />
    </div>
  )
}

export default Home