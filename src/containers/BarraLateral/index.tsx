import { useDispatch, useSelector } from 'react-redux'
import FiltroContato from '../../components/FIltroCard'
import { Aside, Campo } from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'

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
          <FiltroContato
            criterio={enums.Categoria.TODOS}
            valor="Todos"
            contador={15}
            legenda={'Todos'}
            ativo
          />
          <FiltroContato
            criterio={enums.Categoria.FAMILIA}
            valor="Família"
            contador={5}
            legenda={'Família'}
          />
          <FiltroContato
            criterio={enums.Categoria.AMIGOS}
            valor="Amigos"
            contador={5}
            legenda={'Amigos'}
          />
          <FiltroContato
            criterio={enums.Categoria.TRABALHO}
            valor="Trabalho"
            contador={5}
            legenda={'Trabalho'}
          />
        </div>
      </Aside>
    </>
  )
}

export default BarraLateral
