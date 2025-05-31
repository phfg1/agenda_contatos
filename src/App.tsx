import React from 'react'
import GLobalStyle, { Container } from './styles'
import BarraLateral from './containers/BarraLateral'
import ListaContatos from './containers/ListaDeContatos'

function App() {
  return (
    <>
      <GLobalStyle />
      <Container>
        <BarraLateral />
        <ListaContatos />
      </Container>
    </>
  )
}

export default App
