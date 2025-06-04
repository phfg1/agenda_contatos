import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Contato'

type FiltroState = {
  termo: string
  criterio: enums.Categoria
}

const initialState: FiltroState = {
  termo: '',
  criterio: enums.Categoria.TODOS
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alterarTermo } = filtroSlice.actions

export default filtroSlice.reducer
