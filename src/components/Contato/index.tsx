import { useState } from 'react'
import * as S from './styles'

type Props = {
  nome: string
  categoria: string
  telefone: string
  email: string
  aniversario: string
}

const CardContato = ({ nome, categoria, telefone, email, aniversario }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const clickRemover = () => {
    // const confirma = PROGRAMAR A LOGICA DE EXCLUSÂO
    window.confirm('Tem certeza que deseja remover o conto? A ação não pode ser desfeita.')
  }

  return (
    <>
      <S.Card>
        <S.TopCard>
          <S.Nome>{nome}</S.Nome>
          <S.Categoria categoria={categoria}>{categoria}</S.Categoria>
        </S.TopCard>
        <S.DadosEditaveis>
          <li>
            <S.ContatoInfos value={telefone} readOnly placeholder="telefone" />
          </li>
          <li>
            <S.ContatoInfos value={email} readOnly placeholder="e-mail" />
          </li>
          <li>
            <S.ContatoInfos readOnly value={aniversario} type="date" placeholder="aniversário" />
          </li>
        </S.DadosEditaveis>
        <S.BarraAcoes>
          {estaEditando ? (
            <>
              <S.BotaoSalvar>Salvar</S.BotaoSalvar>
              <S.BotaoExcluir onClick={() => setEstaEditando(false)}>Cancelar</S.BotaoExcluir>
            </>
          ) : (
            <>
              <S.BotaoEsquerdo onClick={() => setEstaEditando(true)}>Editar</S.BotaoEsquerdo>
              <S.BotaoDireito onClick={clickRemover}>Remover</S.BotaoDireito>
            </>
          )}
        </S.BarraAcoes>
      </S.Card>
    </>
  )
}

export default CardContato
