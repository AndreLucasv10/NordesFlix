import React, { useState, useEffect } from 'react';
import Header from './Header';
import '/src/assets/home.css';
import '/src/assets/footer.css';
import Footer from './footer';
import { GlobalContext } from './GlobalContext';
import { useNavigate } from 'react-router-dom'

const PopularMovies = () => {
  const [movies, setmovies] = useState([]);
  const [pages, setpages] = useState(1);
  const globalUrl = React.useContext(GlobalContext);
  const navigate = useNavigate()
  
  useEffect(() => {
    
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjNiZTUxYWU3ODZiNjFjOWVjZTYwMmM5ZTc0ZGU0OCIsInN1YiI6IjYyZWFjNmQyODU2NmQyMDA1ZmIwNmI0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ATRUTmlErPmaltiy85QxlMv8oHBpXPry6Qi8eC09sA',
      },
    };

    async function RequestPopularMovies() {
        try {
            let MoviesRequest = await fetch(`${globalUrl.url}&page=${pages}`, options);
            let PopularMovies = await MoviesRequest.json();
            setmovies(PopularMovies.results);
            setpages(PopularMovies.page);
            console.log(PopularMovies);
        } catch (erro) {
            console.log(erro);
        }
    }

    RequestPopularMovies();
}, [globalUrl.url, pages]);

  return (
    <div>
      <Header />
      <main>
        <h1>Movies</h1>
        <div className='movies-list'>
          {movies.map((a) => {
            return (
              <div className='movies' key={a.id}>
                <div className='img'>
                  <a href=""><img
                    src={`https://image.tmdb.org/t/p/w500/${a.poster_path}`}
                    alt=''
                  /></a>
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
        <div className='pages'>
          <button
            className='PrevButton'
            onClick={() => {
              setpages(pages - 1);
            }}
            disabled={pages === 1}
          >
            Previous page
          </button>
          <div>
            <div className='shadow'>
              <span>{pages}</span>
            </div>
          </div>
          <button onClick={() => setpages(pages + 1)}>Next page</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PopularMovies;