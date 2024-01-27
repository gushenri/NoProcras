import Card from '../card/Index'
import './Prazo.css'

const Prazo = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.cards.length > 0) && <section className='prazo' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.tarefa}</h3>
            <div className='cards'>
                {props.cards.map(card => <Card corDeFundo={props.corPrimaria} key={card.tarefa} tarefa={card.tarefa} descricao={card.descricao} imagem={card.imagem} />)}
            </div>
        </section >
    )
}

export default Prazo