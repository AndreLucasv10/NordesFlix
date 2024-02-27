import React from 'react'
import Header from './Header'
import Footer from './footer'
import Carousel from './carousel'

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <Carousel Navigate={'/PopularMovies'} title={'Popular Movies'} Request={`https://api.themoviedb.org/3/movie/popular?language=en-US`} />
        <Carousel Navigate={'/PopularMovies'} title={'Top Rated'} Request={`https://api.themoviedb.org/3/movie/top_rated?language=en-US`} />
        <Carousel Navigate={'/PopularMovies'} title={'Upcoming'} Request={`https://api.themoviedb.org/3/movie/upcoming?language=en-US`} />
        <Carousel Navigate={'/PopularMovies'} title={'Now Playing'} Request={`https://api.themoviedb.org/3/movie/now_playing?language=en-US`} />
      </div>
      <Footer />
    </div>
  )
}

export default Home