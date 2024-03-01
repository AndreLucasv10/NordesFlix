import React from 'react'
import '/src/assets/header.css'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate()
  return (
    <header>
        <h1>NordesFlix</h1>
        <ul>
            <li><a href="/">Movies</a></li>
            <li><a href="/">About</a></li>
            <li className='profile'><button onClick={() => navigate('/profile')}><img src="/src/assets/img/profile.svg" alt="" /></button></li>
        </ul>
    </header>
  )
}

export default Header