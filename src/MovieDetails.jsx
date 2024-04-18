import { useEffect, useState } from "react";

export const MovieDetails = ({movie}) => {
  const [MovieDetails, setMovieDetails] = useState([])


    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjNiZTUxYWU3ODZiNjFjOWVjZTYwMmM5ZTc0ZGU0OCIsInN1YiI6IjYyZWFjNmQyODU2NmQyMDA1ZmIwNmI0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ATRUTmlErPmaltiy85QxlMv8oHBpXPry6Qi8eC09sA'
        }
      }

      async function RequestMovieDetails() {
        try {
            let RequestMovieDetails = await fetch(`https://api.themoviedb.org/3/keyword/${movie}`, options);
            let MovieDetails = await RequestMovieDetails.json();
            setMovieDetails(MovieDetails)
        } catch (erro) {
            console.log(erro);
        }
    }

    useEffect(() =>{
      RequestMovieDetails()
    },[MovieDetails])

  return (
    <div></div>
  )
}
