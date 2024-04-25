import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from './Header';
import Footer from "./footer";
import './assets/MovieDetails.css';
export const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjNiZTUxYWU3ODZiNjFjOWVjZTYwMmM5ZTc0ZGU0OCIsInN1YiI6IjYyZWFjNmQyODU2NmQyMDA1ZmIwNmI0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ATRUTmlErPmaltiy85QxlMv8oHBpXPry6Qi8eC09sA'
    }
  };

  async function requestMovieDetails() {
    try {
      let requestMovieDetails = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options);
      let movieDetailsData = await requestMovieDetails.json();
      setMovieDetails(movieDetailsData);
      console.log(movieDetailsData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    requestMovieDetails();
  }, [id]);

  const minutes = movieDetails.runtime
  const converter = (minutes) =>{
    const hours = Math.floor(minutes / 60);
    const min = minutes % 60
    const texthours = (`00${hours}`).slice(-2);
    const textmin = (`00${min}`).slice(-2);
    return `${texthours}:${textmin} `
  }

  return (
    <div>
      <Header />
      <div className="flex-layout">
          <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} />
        <div >
          <div>
            <div className="titles">
            <h1>{movieDetails.original_title}</h1>
            <p>{movieDetails.title}</p>
            </div>
            <ul>
              <li>{movieDetails.release_date}</li>
              <li>{movieDetails.status}</li>
              <li>{converter(minutes)}</li>
              <li>{movieDetails.vote_average}</li>
              <li>{movieDetails.vote_count}</li>
            </ul>  
          </div>
          <div>
        <ul className="details">
          <li>{movieDetails.overview}</li>
        </ul>
          </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}