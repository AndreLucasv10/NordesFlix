import { useEffect, useState } from 'react'
import Header from './Header';
import Footer from './footer';
import FavoriteMovies from './FavoriteMovies';
import FavoriteSeries from './FavoriteSeries';

const Profile = () => {

  const [profile, setProfile] = useState({})
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjNiZTUxYWU3ODZiNjFjOWVjZTYwMmM5ZTc0ZGU0OCIsInN1YiI6IjYyZWFjNmQyODU2NmQyMDA1ZmIwNmI0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2ATRUTmlErPmaltiy85QxlMv8oHBpXPry6Qi8eC09sA'
    }
  };

  async function RequestProfile(){
    try{
      const profileRequest = await fetch('https://api.themoviedb.org/3/account/13768643', options)
      const profile = await profileRequest.json()
      console.log(profile)
      setProfile(profile)
    }
    catch(erro){
    console.log(erro)
  }
}

useEffect(() => {
  RequestProfile();
}, []);

const avatar = profile.avatar ? `https://image.tmdb.org/t/p/w200${profile.avatar.tmdb.avatar_path}` : "/src/assets/img/profile.svg"


  return (
    <div>
    <Header />
    <div className='main-container'>
      <div className='container-perfil'>
        <div className='perfil'>
          <img className='profile-photo' src={avatar} alt="" />
          <p className='username'>{profile.username}</p>
        </div>
     <div>
      <h1>Favorite Movies</h1>
        <FavoriteMovies />
      <h1 className='series-h1'>Favorite Series</h1>
        <FavoriteSeries />
     </div>
    </div>
     <Footer />
    </div>
    </div>
  )
}

export default Profile