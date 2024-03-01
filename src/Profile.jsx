import React, { useEffect, useState } from 'react'
import Header from './Header';
import Footer from './footer';
import FavoriteMovies from './FavoriteMovies';


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
     <img src={avatar} alt="" />
     <p>{profile.username}</p>
     <FavoriteMovies />
     <Footer />
    </div>
  )
}

export default Profile