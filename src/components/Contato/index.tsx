import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import Contato from '../../models/Contato'

type Props = Contato

const CardContato = ({ nome, categoria, telefone, email, aniversario, id }: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)
  const [telefoneEditado, setTelefoneEditado] = useState(telefone)
  const [emailEditado, setEmailEditado] = useState(email)
  const [aniversarioEditado, setAniversarioEditado] = useState(aniversario)

  const clickRemover = () => {
    const confirma = window.confirm('Tem certeza que deseja remover o contato?')

    if (confirma) {
      dispatch(remover(id))
      alert('O contato será removido')
    } else {
      alert('Operação cancelada.')
    }
  }

  const validaTelefone = (tel: string): boolean => {
    const telefoneLimpo = tel.replace(/\s/g, '')
    if (telefoneLimpo.length > 13 || telefoneLimpo.length < 12) {
      alert('Digite um número de telefone válido. ex: (13)9999-1234')
      return false
    }
    const regexTelefone = /^[0-9()-]+$/
    if (!regexTelefone.test(telefoneLimpo)) {
      alert('O telefone deve conter apenas números, parênteses e traço')
      return false
    }
    return true
  }

  const validaEmail = (mail: string): boolean => {
    const regexEmail = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    if (!regexEmail.test(mail)) {
      alert('Por favor, insira um e-mail válido')
      return false
    }
    return true
  }

  const clickSalvar = () => {
    if (!validaTelefone(telefoneEditado)) {
      return
    }
    if (!validaEmail(emailEditado)) {
      return
    }
    const regexAniversario = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])$/
    if (!regexAniversario.test(aniversarioEditado)) {
      alert('Insira uma data de aniversário válida, DD/MM (ex: 09/07).')
      return
    }
    dispatch(
      editar({
        id: id,
        telefone: telefoneEditado,
        email: emailEditado,
        aniversario: aniversarioEditado
      })
    )
    setEstaEditando(false)
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
            <S.ContatoInfos
              value={telefoneEditado}
              onChange={(e) => setTelefoneEditado(e.target.value)}
              disabled={!estaEditando}
              placeholder="telefone"
            />
          </li>
          <li>
            <S.ContatoInfos
              value={emailEditado}
              onChange={(e) => setEmailEditado(e.target.value)}
              disabled={!estaEditando}
              placeholder="e-mail"
            />
          </li>
          <li>
            <S.ContatoInfos
              value={aniversarioEditado}
              onChange={(e) => setAniversarioEditado(e.target.value)}
              disabled={!estaEditando}
              type="string"
              placeholder="aniversário (DD/MM)"
            />
          </li>
        </S.DadosEditaveis>
        <S.BarraAcoes>
          {estaEditando ? (
            <>
              <S.BotaoSalvar onClick={clickSalvar}>Salvar</S.BotaoSalvar>
              <S.BotaoDireito onClick={() => setEstaEditando(false)}>Cancelar</S.BotaoDireito>
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
