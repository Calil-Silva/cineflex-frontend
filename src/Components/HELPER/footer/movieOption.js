import './movieOption.css'

export default function MovieOption({ movieInfo, date, schedule }) {
    return (
        <div className="movie-option">
            <div className="movie-img">
                <img src={movieInfo.posterURL} alt=""/>
            </div>
            <div className="movie-schedule-info">
            <span>{movieInfo.title}</span>
            {(date) ? <span>{date} - {schedule}</span> : <></>}
            </div>
        </div>
    )
}