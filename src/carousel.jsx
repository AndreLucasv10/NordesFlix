import React, { useState, useEffect, useRef } from 'react';
import '/src/assets/slide.css';
import { useNavigate, Link } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';

const Carousel = ({ Request, title, Navigate }) => {
  const [movies, setMovies] = useState([]);
  const carousel = useRef(null);
  const navigate = useNavigate();
  const globalUrl = React.useContext(GlobalContext);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjNiZTUxYWU3ODZiNjFjOWVjZTYwMmM5ZTc0ZGU0OCIsInN1YiI6IjYyZWFjNmQyODU2NmQyMDA1ZmIwNmI0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ATRUTmlErPmaltiy85QxlMv8oHBpXPry6Qi8eC09sA',
    },
  };

  const requestMovies = async () => {
    try {
      const moviesRequest = await fetch(Request, options);
      const moviesData = await moviesRequest.json();
      setMovies(moviesData.results);
      console.log(moviesData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    requestMovies();
  }, [Request]);

  const handleClickLeft = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    console.log(carousel.current.offsetWidth);
  };

  const handleClickRight = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    console.log(carousel.current.offsetWidth);
  };

  return (
    <div className='container'>
      <div className='header-carousel'>
        <h1>{title}</h1>
        <button onClick={() => { navigate(Navigate); globalUrl.Seturl(Request); }}>Ver mais...</button>
      </div>
      <div className='carousel' ref={carousel}>
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} className='carousel-movies' key={movie.id}>
            <div className='img'>
              <img className='carousel-img' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
              <span style={{ background: movie.vote_average.toFixed(1) < 4 ? 'red' : movie.vote_average.toFixed(1) < 7 ? 'orange' : 'green' }} className='vote'>
                {movie.vote_average.toFixed(1)}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className='seta'>
        <button className='seta-Left' onClick={handleClickLeft}>
          <img src="/src/assets/img/seta-esquerda.png" alt="Scroll Left" />
        </button>
        <button className='seta-Right' onClick={handleClickRight}>
          <img src="/src/assets/img/seta-direita.png" alt="Scroll Right" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;