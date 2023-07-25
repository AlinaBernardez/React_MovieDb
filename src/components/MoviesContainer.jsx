import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
// import { getData } from "../data/httpClient";
import "../components/styles/MoviesContainer.css"
import { options } from "../data/httpClient";

export function MoviesContainer() {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie', options)
        .then(response => response.json())
        .then((response) => setMovies(response.results))
        .catch((error) => console.log(error))
    }, []);

    return (
            <ul className="container">
                { movies.map((item) => (
                    <MovieCard key={item.id}  movie={item}/>
                ))}
            </ul>
    )
}