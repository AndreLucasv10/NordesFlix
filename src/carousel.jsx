import React, { useState,useEffect, useRef } from 'react'
import '/src/assets/slide.css'
import { useNavigate } from 'react-router-dom'

const Carousel = ({Request, title, Navigate}) => {
    const [movies, setmovies] = useState([])
    const carousel = useRef(null)
    const navigate = useNavigate()
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjNiZTUxYWU3ODZiNjFjOWVjZTYwMmM5ZTc0ZGU0OCIsInN1YiI6IjYyZWFjNmQyODU2NmQyMDA1ZmIwNmI0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ATRUTmlErPmaltiy85QxlMv8oHBpXPry6Qi8eC09sA'
        }
      };

    async function RequestMovies(){
        try{
          let MoviesRequest = await fetch(Request, options)
          let Movies = await MoviesRequest.json()
          setmovies(Movies.results)
          console.log(Movies)  
        }catch(erro){
          console.log(erro)
        }
      }
      useEffect(() => {
        RequestMovies()
      },[Request]);

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
      <div className='header-carousel'>
        <h1>{title}</h1>
        <button onClick={() => navigate(Navigate, { replace: true, state:{ Request } })}>Ver mais...</button>
      </div>
        <div className='carousel' ref={carousel}>
          {movies.map((a) =>{
          return <div className='carousel-movies' key={a.id}>
        <div className='img'>
        <img className='carousel-img' src={`https://image.tmdb.org/t/p/w500/${a.poster_path}`} alt="" />
        <span style={{background: a.vote_average.toFixed(1) < 4 ? 'red' : a.vote_average.toFixed(1) < 7 ? 'orange' : 'green'}}className='vote'> {a.vote_average.toFixed(1)}</span>  
        </div>
          </div>
    })}
        </div>
        <div className='seta' >
          <button className='seta-Left' onClick={handleClickLeft} > <img src="/src/assets/img/seta-esquerda.png" alt="Scroll Left" /> </button>
          <button className='seta-Right' onClick={handleClickRight}> <img src="/src/assets/img/seta-direita.png" alt="Scroll Right" /> </button>
        </div>
            </div>
  )
}

export default Carousel