import React from 'react'
import ReactDOM from 'react-dom/client'
import  Login  from './Login.jsx'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './router.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <MainRoutes />
    </BrowserRouter>

)
