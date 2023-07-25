import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/landingPage";
import { MovieDetails } from "../pages/movieDetails";

export function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <LandingPage/> }  />
                <Route exact path="/movie/:movieId" element={ <MovieDetails/> }  />
            </Routes>
        </BrowserRouter>
    )
}

