import {Routes, Route} from "react-router-dom" ;
import Login from "./Login";
import Home from "./Home";
import PopularMovies from "./PopularMovies";
function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />}/>
            <Route path="/PopularMovies" element={<PopularMovies />}/>
        </Routes>
    )
}

export default MainRoutes;