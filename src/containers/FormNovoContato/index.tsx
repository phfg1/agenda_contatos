import { CampoCadastro, MainContainer, Titulo } from '../../styles'
import { Form, Selecao } from './styles'

const Formulario = () => (
  <MainContainer>
    <Titulo>Novo Contato</Titulo>
    <Form action="">
      <CampoCadastro type="text" name="" id="" placeholder="Nome" />
      <CampoCadastro type="text" name="" id="" placeholder="Telefone" />
      <CampoCadastro type="text" name="" id="" placeholder="Email" />
      <CampoCadastro type="text" name="" id="" placeholder="Aniversário" />
      <div>
        <Selecao>Categoria</Selecao>
        <input type="radio" name="valor" id="Família" /> <label htmlFor="Família">Família</label>
        <input type="radio" name="valor" id="Amigos" /> <label htmlFor="Amigos">Amigos</label>
        <input type="radio" name="valor" id="Trabalho" /> <label htmlFor="Trabalho">Trabalho</label>
      </div>
      <button type="submit">Cadastrar</button>
    </Form>
  </MainContainer>
)

export default Formulario
