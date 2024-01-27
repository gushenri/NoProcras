import { useState } from 'react'; //para atualizar o estado quando você pede
import Banner from "./componentes/banner/Index"
import Formulario from './componentes/formulario/Index';
import Prazo from './componentes/prazo/Index';

function App() {

  const prazos = [
    {
      tarefa: 'Hoje',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      tarefa: 'Semana',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      tarefa: 'Mês',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      tarefa: 'Ano',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      tarefa: 'Objetivos',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      tarefa: 'Conquistas',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }

  ]

  const [cards, setCards] = useState([])

  const cardAdd = (card) => {
    console.log(card)
    setCards([...cards, card])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario prazos={prazos.map(prazo => prazo.tarefa)} cardCadastrado={card => cardAdd(card)} />
      {prazos.map(prazo => <Prazo
        key={prazo.tarefa}
        tarefa={prazo.tarefa} //
        corPrimaria={prazo.corPrimaria}
        corSecundaria={prazo.corSecundaria}
        cards={cards.filter(card => card.prazo === prazo.tarefa)}
      />)}

    </div>
  );
}

export default App;