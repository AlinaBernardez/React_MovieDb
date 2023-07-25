import PropTypes from "prop-types";
import "../components/styles/MovieCard.css"
import { Link } from "react-router-dom";

export function MovieCard({movie}) {
    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    
    return (
        <li className="card">
            <Link to={"/movie/"+ movie.id}>
                <img className="card-img" width={230} height={345} src={imgUrl} alt={movie.title} />
                <div className="card-title">{movie.title}</div>
            </Link>
        </li>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.string
}