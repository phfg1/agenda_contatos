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
      telefone: '(13)999-97894',
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
    }
  }
})

export const { remover, editar } = contatosSlice.actions

export default contatosSlice.reducer
