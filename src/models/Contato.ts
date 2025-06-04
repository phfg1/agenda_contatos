import * as enums from '../utils/enums/Contato'

class Contato {
  nome: string
  categoria: enums.Categoria
  telefone: string
  email: string
  aniversario: string
  id: number

  constructor(
    nome: string,
    categoria: enums.Categoria,
    telefone: string,
    email: string,
    aniversario: string,
    id: number
  ) {
    this.nome = nome
    this.categoria = categoria
    this.telefone = telefone
    this.email = email
    this.aniversario = aniversario
    this.id = id
  }
}

export default Contato
