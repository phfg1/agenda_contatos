import { useSelector } from 'react-redux'
import CardContato from '../../components/Contato'
import { ContainerCard, MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

const ListaContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state)
  const contatosOrdenados = [...contatos.itens].sort((a, b) => {
    return a.nome.localeCompare(b.nome)
  })

  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    return contatosOrdenados.filter(
      (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }
  return (
    <>
      <MainContainer>
        <Titulo>Contatos</Titulo>
        <span>{termo}</span> <br />
        <ContainerCard>
          {filtraContatos().map((c) => (
            <li key={c.nome}>
              <CardContato
                nome={c.nome}
                categoria={c.categoria}
                telefone={c.telefone}
                email={c.email}
                aniversario={c.aniversario}
                id={c.id}
              />
            </li>
          ))}
        </ContainerCard>
      </MainContainer>
    </>
  )
}

export default ListaContatos
