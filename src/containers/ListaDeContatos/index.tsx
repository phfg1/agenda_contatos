import CardContato from '../../components/Contato'
import { ContainerCard, MainContainer, Titulo } from '../../styles'

const ListaContatos = () => {
  return (
    <>
      <MainContainer>
        <Titulo>Contatos</Titulo>
        <ContainerCard>
          <CardContato />
          <CardContato />
          <CardContato />
          <CardContato />
        </ContainerCard>
      </MainContainer>
    </>
  )
}

export default ListaContatos
