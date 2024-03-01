import React, { useEffect, useState } from 'react'

const FavoriteMovies = () => {
    const [favoriteMovies, SetFavoriteMovies] = useState({})

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjNiZTUxYWU3ODZiNjFjOWVjZTYwMmM5ZTc0ZGU0OCIsInN1YiI6IjYyZWFjNmQyODU2NmQyMDA1ZmIwNmI0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ATRUTmlErPmaltiy85QxlMv8oHBpXPry6Qi8eC09sA'
        }
      };

    async function RequestFavoriteMovies(){
        try{
            const requestFavoriteMovies = await fetch('https://api.themoviedb.org/3/account/13768643/favorite/movies?language=en-US&page=1&sort_by=created_at.asc', options)
            const FavoriteMovies = await requestFavoriteMovies.json()
            SetFavoriteMovies(FavoriteMovies)
        } catch(erro){
            console.log(erro)
        }
    }
console.log(favoriteMovies)
    useEffect(() =>{
        RequestFavoriteMovies()
    }, [])

  return (
    <div></div>
  )
}

export default FavoriteMovies