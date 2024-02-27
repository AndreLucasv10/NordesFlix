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
        <Carousel Navigate={'/PopularMovies'} title={'Top Rated'} Request={'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'} />
        <Carousel Navigate={'/PopularMovies'} title={'Upcoming'} Request={'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'} />
        <Carousel Navigate={'/PopularMovies'} title={'Now Playing'} Request={'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'} />
      </div>
      <Footer />
    </div>
  )
}

export default Home