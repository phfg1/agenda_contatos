import { useDispatch, useSelector } from 'react-redux'
import FiltroContato from '../../components/FIltroCard'
import { Aside, Campo } from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'
import BotaoCadastro from '../../components/BotaoCadastro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const { contatos } = useSelector((state: RootReducer) => state)

  const getContadorPorCategoria = (categoria: 'Família' | 'Amigos' | 'Trabalho' | 'Todos') => {
    if (categoria === 'Todos') {
      return contatos.itens.length
    } else {
      return contatos.itens.filter((item) => item.categoria === categoria).length
    }
  }

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
            criterio={'todos'}
            valor="Todos"
            quantidadeContatos={getContadorPorCategoria('Todos')}
            legenda={'Todos'}
          />
          <FiltroContato
            criterio={'categoria'}
            valor={enums.Categoria.FAMILIA}
            quantidadeContatos={getContadorPorCategoria(enums.Categoria.FAMILIA)}
            legenda={'Família'}
          />
          <FiltroContato
            criterio={'categoria'}
            valor={enums.Categoria.AMIGOS}
            quantidadeContatos={getContadorPorCategoria(enums.Categoria.AMIGOS)}
            legenda={'Amigos'}
          />
          <FiltroContato
            criterio={'categoria'}
            valor={enums.Categoria.TRABALHO}
            quantidadeContatos={getContadorPorCategoria(enums.Categoria.TRABALHO)}
            legenda={'Trabalho'}
          />
        </div>
        <BotaoCadastro />
      </Aside>
    </>
  )
}

export default BarraLateral
