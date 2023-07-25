import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";
import { options } from "../data/httpClient";
import "../pages/movieDetails.css"

export function MovieDetails() {
    const {movieId} = useParams();
    const [movie, setMovie] = useState([]);


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options)
        .then(data => data.json())
        .then((data) => setMovie(data))
        .catch((error) => console.log(error))
    }, [movieId]);

    const imgUrl = getMovieImg(movie.poster_path, 500);
    console.log(movie)
    let generos = movie.genres;
    console.log(movie.genres)

    return (
        <div className="movie-details">
            <div className="movie-container">
                <img className="movie-img" src={ imgUrl } alt={ movie.title }></img>
                <div className="movie-description">
                    <p className="movie-title">
                        <strong>TITLE: </strong>
                        { movie.title } / <em>{ movie.tagline }</em>
                    </p>
                    <p>
                        <strong>YEAR: </strong>
                        { movie.release_date }
                    </p>
                    <p className="movie-over">
                        <strong>OVERVIEW: </strong>
                        { movie.overview }
                    </p>
                    <ul className="movie-gen">
                    <strong>GÉNEROS: </strong>
                        { generos.map(genero => (
                        <li key={ genero.id }> { genero.name } </li>
                    ))}
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

