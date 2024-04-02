import  { useEffect, useState } from 'react'
import './assets/favoritemovies.css'

const FavoriteSeries = () => {
    const [favoriteSeries, SetFavoriteSeries] = useState([])

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjNiZTUxYWU3ODZiNjFjOWVjZTYwMmM5ZTc0ZGU0OCIsInN1YiI6IjYyZWFjNmQyODU2NmQyMDA1ZmIwNmI0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ATRUTmlErPmaltiy85QxlMv8oHBpXPry6Qi8eC09sA'
        }
      };

    async function RequestFavoriteSeries(){
        try{
            const requestFavoriteSeries = await fetch('https://api.themoviedb.org/3/account/13768643/favorite/tv?language=en-US&page=1&sort_by=created_at.asc', options)
            const FavoriteSeries = await requestFavoriteSeries.json()
            SetFavoriteSeries(FavoriteSeries.results)
        } catch(erro){
            console.log(erro)
        }
    }
console.log(favoriteSeries)
    useEffect(() =>{
        RequestFavoriteSeries()
    }, [])

  return (
    <div className='list-favorite-movies'>
    {favoriteSeries.map((a) => {
      return (
        <div key={a.id} className='img-favorite-movies'>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${a.poster_path}`}
              alt=''
            />
            <span
              style={{
                background:
                  a.vote_average.toFixed(1) < 4
                    ? 'red'
                    : a.vote_average.toFixed(1) < 7
                    ? 'orange'
                    : 'green',
              }}
              className='vote'
            >
              {' '}
              {a.vote_average.toFixed(1)}
            </span>
          </div>
        </div>
      );
    })}
  </div>
  )
}

export default FavoriteSeries