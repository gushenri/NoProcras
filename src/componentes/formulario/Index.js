import { useState } from 'react'
import Botao from '../botao/Index'
import CampoTexto from '../campoTexto/Index'
import ListaSuspensa from '../ListaSuspensa/Index'
import './Formulario.css'

const Formulario = (props) => {
    const [tarefa, setTarefa] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [prazo, setPrazo] = useState('')

    const Salvar = (evento) => {
        evento.preventDefault()
        props.cardCadastrado({
            tarefa,
            descricao,
            imagem,
            prazo
        })
        setTarefa('')
        setDescricao('')
        setImagem('')
        setPrazo('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={Salvar}>
                <h2>Preencha os dados para criar o card de Tarefa</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Tarefa"
                    placeholder="Digite o nome da tarefa"
                    valor={tarefa}
                    alterado={valor => setTarefa(valor)}
                />
                <CampoTexto obrigatorio={true} label="Descricao" placeholder="Digite a descrição" valor={descricao} alterado={valor => setDescricao(valor)} />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} alterado={valor => setImagem(valor)} />
                <ListaSuspensa obrigatorio={true} label="Prazo" itens={props.prazos} valor={prazo} alterado={valor => setPrazo(valor)} />
                <Botao>
                    Criar Card
                </Botao>
            </form>

        </section>
    )
}
export default Formulario
