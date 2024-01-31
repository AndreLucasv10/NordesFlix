import React from 'react'
import '/src/assets/header.css'
const Header = () => {
  return (
    <header>
        <h1>NordesFlix</h1>
        <ul>
            <li><a href="/">Movies</a></li>
            <li><a href="/">About</a></li>
            <li className='profile'><a href="/"><img src="/src/assets/img/profile.svg" alt="" /></a></li>
        </ul>
    </header>
  )
}

export default Header