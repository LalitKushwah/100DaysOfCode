const Movie = (props) => {
    return (
        <div className="movie">
            <img src={process.env.REACT_APP_IMG_PATH + props.poster_path} alt={props.title} title={props.title} />
            <div className="movie-info">
                <h5>{ props.title }</h5>
                <span>{props.vote_average}</span>
            </div>
            <div className="movie-over">
                <h2>Overview:</h2>
                <p>{props.overview}</p>
            </div>
        </div>
    )
}
export default Movie;