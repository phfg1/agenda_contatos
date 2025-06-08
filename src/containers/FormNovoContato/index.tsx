import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { CampoCadastro, MainContainer, Titulo } from '../../styles'
import { ContainerRadio, Form } from './styles'
import * as enums from '../../utils/enums/Contato'

import { cadastrar } from '../../store/reducers/contatos'
import { validaSalvamento } from '../../utils/validacoes/validacoes'
import { BotaoCadastrar } from '../../components/Contato/styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [aniversario, setAniversario] = useState('')
  const [categoria, setCategoria] = useState(enums.Categoria.FAMILIA)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const confirmacao = window.confirm(
      `Os dados nome: ${nome} e categoria: ${categoria} estão corretos? Não é possível edita-los.`
    )
    if (!confirmacao) {
      return
    }
    const contatoParaAdicionar = { nome, categoria, telefone, email, aniversario }
    if (!validaSalvamento(telefone, email, aniversario)) {
      return
    }
    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <CampoCadastro
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
        />
        <CampoCadastro
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="text"
          placeholder="Telefone - (DD)XXXXX-XXXX"
        />
        <CampoCadastro
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="text"
          placeholder="Email - exemplo@email.com.br"
        />
        <CampoCadastro
          value={aniversario}
          onChange={(evento) => setAniversario(evento.target.value)}
          type="text"
          placeholder="Aniversário - ex: 09/07"
        />
        <ContainerRadio>
          <p>Categoria:</p>
          {Object.values(enums.Categoria)
            .filter((categoria) => categoria !== enums.Categoria.TODOS)
            .map((categoria) => (
              <div key={categoria}>
                <input
                  value={categoria}
                  name="categoria"
                  type="radio"
                  id={categoria}
                  defaultChecked={categoria === enums.Categoria.FAMILIA}
                  onChange={(evento) => setCategoria(evento.target.value as enums.Categoria)}
                />
                <label htmlFor={categoria}>{categoria}</label>
              </div>
            ))}
        </ContainerRadio>
        <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
