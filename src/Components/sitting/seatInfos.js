export default function SeatInfos() {
    return (
        <div className="seats-info">
            <div className="info">
                <div className="seat selected"></div>
                <span>Selecionado</span>
            </div>

            <div className="info">
                <div className="seat available"></div>
                <span>Disponível</span>
            </div>

            <div className="info">
                <div className="seat unavailable"></div>
                <span>Indisponível</span>
            </div>
        </div>
    )
}