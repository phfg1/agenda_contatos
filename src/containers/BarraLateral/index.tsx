import FiltroContato from '../../components/FIltroCard'
import { Aside, Campo } from './styles'

const BarraLateral = () => {
  return (
    <>
      <Aside>
        <div>
          <Campo type="text" placeholder="buscar" />
        </div>
        <div>
          <FiltroContato contador={15} legenda={'Todos'} ativo />
          <FiltroContato contador={5} legenda={'Família'} />
          <FiltroContato contador={5} legenda={'Amigos'} />
          <FiltroContato contador={5} legenda={'Trabalho'} />
        </div>
      </Aside>
    </>
  )
}

export default BarraLateral
