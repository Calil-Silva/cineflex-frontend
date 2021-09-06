import './sitting.css';

export default function PersonalData( { setName, setCpf, name, cpf } ) {

    return (
        <form className="buyerData">
                <label for="name">Nome do comprador:</label>
                <input className="data" type="text" id="name" name="name" placeholder="Digite seu nome..." value={name} onChange={(event) => setName(event.target.value)}  />
                <label for="cpf">CPF do comprador:</label>
                <input className="data" type="text" id="cpf" name="cpf" placeholder="Digite seu CPF" value={cpf} onChange={(event) => setCpf(event.target.value)} />
        </form>
    )
}