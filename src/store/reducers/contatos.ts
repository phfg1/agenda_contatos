import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Pedro',
      categoria: enums.Categoria.AMIGOS,
      telefone: '(13)9999-7894',
      email: 'phfg@phfg.com.br',
      aniversario: '09/07',
      id: 1
    },
    {
      nome: 'Alice',
      categoria: enums.Categoria.FAMILIA,
      telefone: '(13)9999-7894',
      email: 'phfg@phfg.com.br',
      aniversario: '09/07',
      id: 2
    },
    {
      nome: 'Thaís',
      categoria: enums.Categoria.TRABALHO,
      telefone: '(13)9999-7894',
      email: 'phfg@phfg.com.br',
      aniversario: '09/07',
      id: 3
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((contato) => contato.id !== action.payload)
    },
    editar: (
      state,
      action: PayloadAction<{
        id: number
        telefone: string
        email: string
        aniversario: string
      }>
    ) => {
      const indexDoContato = state.itens.findIndex((c) => c.id === action.payload.id)
      if (indexDoContato >= 0)
        state.itens[indexDoContato] = {
          ...state.itens[indexDoContato],
          telefone: action.payload.telefone,
          email: action.payload.email,
          aniversario: action.payload.aniversario
        }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) => contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato cadastrado com este nome, insira sobrenome!')
      } else {
        const ultimoId = state.itens.length > 0 ? Math.max(...state.itens.map((c) => c.id)) : 0
        const novoId = ultimoId + 1

        const novoContato = {
          ...action.payload,
          id: novoId
        }
        state.itens.push(novoContato as Contato)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
