export default function PersonalData() {
    return (
        <form className="buyerData">
                <label for="name">Nome do comprador:</label><br></br>
                <input className="data" type="text" id="name" name="name" placeholder="Digite seu nome..."></input>
                <label for="cpf">CPF do comprador:</label>
                <input className="data" type="text" id="cpf" name="cpf" placeholder="Digite seu CPF"></input>
                <input className="submit" type="submit" value="Reservar assento(s)"></input>
        </form>
    )
}