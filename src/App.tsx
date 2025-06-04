import React from 'react'
import GLobalStyle, { Container } from './styles'
import BarraLateral from './containers/BarraLateral'
import ListaContatos from './containers/ListaDeContatos'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GLobalStyle />
      <Container>
        <BarraLateral />
        <ListaContatos />
      </Container>
    </Provider>
  )
}

export default App
