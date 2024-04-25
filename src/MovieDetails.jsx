import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from './Header';
import Footer from "./footer";
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

  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}