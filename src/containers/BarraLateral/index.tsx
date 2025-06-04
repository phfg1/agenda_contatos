import { useDispatch, useSelector } from 'react-redux'
import FiltroContato from '../../components/FIltroCard'
import { Aside, Campo } from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <>
      <Aside>
        <div>
          <Campo
            type="text"
            placeholder="Buscar"
            value={termo}
            onChange={(e) => dispatch(alterarTermo(e.target.value))}
          />
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
