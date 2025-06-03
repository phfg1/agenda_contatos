import CardContato from '../../components/Contato'
import { ContainerCard, MainContainer, Titulo } from '../../styles'

const contatos = [
  {
    nome: 'Alice',
    categoria: 'Família',
    telefone: '(13)9999-1234',
    email: 'lylis@lilys.com',
    aniversario: '16/02/2022'
  },
  {
    nome: 'Bob Marley',
    categoria: 'Amigos',
    telefone: '(13)9999-1234',
    email: 'lylis@lilys.com',
    aniversario: '16/02/2022'
  },
  {
    nome: 'Clinton Fearon',
    categoria: 'Trabalho',
    telefone: '(13)9999-1234',
    email: 'lylis@lilys.com',
    aniversario: '16/02/2022'
  }
]

const ListaContatos = () => {
  return (
    <>
      <MainContainer>
        <Titulo>Contatos</Titulo>
        <ContainerCard>
          {contatos.map((c) => (
            <li key={c.nome}>
              <CardContato
                nome={c.nome}
                categoria={c.categoria}
                telefone={c.telefone}
                email={c.email}
                aniversario={c.aniversario}
              />
            </li>
          ))}
        </ContainerCard>
      </MainContainer>
    </>
  )
}

export default ListaContatos
