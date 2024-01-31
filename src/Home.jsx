import React, { useState,useEffect } from 'react'
import Header from './Header'
import '/src/assets/home.css'
const Home = () => {
  const [movies, setmovies] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjNiZTUxYWU3ODZiNjFjOWVjZTYwMmM5ZTc0ZGU0OCIsInN1YiI6IjYyZWFjNmQyODU2NmQyMDA1ZmIwNmI0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ATRUTmlErPmaltiy85QxlMv8oHBpXPry6Qi8eC09sA'
    }
  };

  async function RequestPopularMovies(){
    try{
      let MoviesRequest = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      let PopularMovies = await MoviesRequest.json()
      setmovies(PopularMovies.results)
    }catch(erro){
      console.log(erro)
    }
  }
  useEffect(() => {
    RequestPopularMovies()
  },[])

  useEffect(() => {
    console.log(movies);
  }, [movies]);
  
  return (
    <div>
    <Header />
    <main>
      <h1>Popular Movies</h1>
      <div className='movies-list'>{movies.map((a) =>{
       return <div key={a.id}>
        <div className='img'>
        <img src={`https://image.tmdb.org/t/p/w500/${a.poster_path}`} alt="" />
        <span>{a.vote_average}</span>
        </div>
        <p>{a.title}</p>
        </div>
      })}
      </div>
    </main>
    </div>    
  )
}

export default Home