import React, { useState,useEffect, useRef } from 'react'
import '/src/assets/slide.css'
const Slide = () => {
    const [movies, setmovies] = useState([])
    const carousel = useRef(null)
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjNiZTUxYWU3ODZiNjFjOWVjZTYwMmM5ZTc0ZGU0OCIsInN1YiI6IjYyZWFjNmQyODU2NmQyMDA1ZmIwNmI0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ATRUTmlErPmaltiy85QxlMv8oHBpXPry6Qi8eC09sA'
        }
      };

    async function RequestPopularMovies(){
        try{
          let MoviesRequest = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, options)
          let PopularMovies = await MoviesRequest.json()
          setmovies(PopularMovies.results)
          console.log(PopularMovies)  
        }catch(erro){
          console.log(erro)
        }
      }
      useEffect(() => {
        RequestPopularMovies()
      },[]);

      function handleClickLeft(e){
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
        console.log(carousel.current.offsetWidth);
      }
      
      function handleClickRight(e){
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
        console.log(carousel.current.offsetWidth);
      }

      




  return (
    <div className='container'>
        <div className='carousel' ref={carousel}>
          {movies.map((a) =>{
            return <div className='movies' key={a.id}>
        <div className='img'>
        <img src={`https://image.tmdb.org/t/p/w500/${a.poster_path}`} alt="" />
        <span style={{background: a.vote_average.toFixed(1) < 4 ? 'red' : a.vote_average.toFixed(1) < 7 ? 'orange' : 'green'}}className='vote'> {a.vote_average.toFixed(1)}</span>
        </div>
        <div>
        </div>
            </div>
    })}
        </div>
        <div className='seta' >
          <button className='seta-Left' onClick={handleClickLeft} > <img src="/src/assets/img/seta-esquerda.png" alt="Scroll Left" />  </button>
          <button className='seta-Right' onClick={handleClickRight}> <img src="/src/assets/img/seta-direita.png" alt="Scroll Right" />  </button>
        </div>
            </div>
  )
}

export default Slide