import * as S from './styles'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
}

const FiltroContato = ({ ativo, contador, legenda }: Props) => (
  <S.Card ativo={ativo}>
    <S.Contador>{contador} Contatos</S.Contador>
    <S.Label>
      <b>Categoria:</b> {legenda}
    </S.Label>
  </S.Card>
)

export default FiltroContato
