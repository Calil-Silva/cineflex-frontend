import './movieOption.css'

export default function MovieOption({ movieInfo }) {
    return (
        <div className="movie-option">
            <div className="movie-img">
                <img src={movieInfo.posterURL} />
            </div>
            <span>{movieInfo.title}</span>
        </div>
    )
}