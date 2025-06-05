import { useDispatch } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
  valor: 'Família' | 'Amigos' | 'Trabalho' | 'Todos'
  criterio: enums.Categoria
}

const FiltroContato = ({ ativo, contador, legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }
  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador} Contatos</S.Contador>
      <S.Label>
        <b>Categoria:</b> {legenda}
      </S.Label>
    </S.Card>
  )
}

export default FiltroContato
