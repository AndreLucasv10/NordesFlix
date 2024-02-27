import React from 'react'
import ReactDOM from 'react-dom/client'
import  Login  from './Login.jsx'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './router.jsx'
import Slide from './carousel.jsx'
import popularMovies from './PopularMovies.jsx'
import App from './App.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>

)
