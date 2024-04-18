import {Routes, Route} from "react-router-dom" ;
import Login from "./Login";
import Home from "./Home";
import PopularMovies from "./PopularMovies";
import Profile from "./Profile";
import { MovieDetails } from "./MovieDetails";
function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />}/>
            <Route path="/PopularMovies" element={<PopularMovies />}/>
            <Route path="/Profile" element={<Profile />}/>
            <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
    )
}

export default MainRoutes;