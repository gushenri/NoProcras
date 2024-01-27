import "./Card.css"

const Card = ({ tarefa, imagem, descricao, corDeFundo }) => {
    // essa forma é difirente do (props) funciona igual porém eu passo as variaveis 
    //específicas do props
    return (<div className="card">
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={tarefa} />
        </div>
        <div className='rodape'>
            <h4>{tarefa}</h4>
            <h5>{descricao}</h5>
        </div>
    </div>)
}

export default Card
