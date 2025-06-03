import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type CategoriaProps = {
  categoria: string
}

function RetornaCorCategoria(props: CategoriaProps): string {
  if ('categoria' in props) {
    if (props.categoria === 'Todos') return variaveis.cinza
    if (props.categoria === 'Família') return variaveis.verde
    if (props.categoria === 'Amigos') return variaveis.azul
    if (props.categoria === 'Trabalho') return variaveis.vermelho
  }
  return variaveis.cinza
}

export const Card = styled.div`
  backgorund-color: ${variaveis.cinzaClaro};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  width: 100%;
  }
`
export const TopCard = styled.div`
  display: flex;
  align-itens: center;
  justify-content: space-between;
`
export const Nome = styled.h3`
  font-size: 1.125rem;
  font-weight: bold;
  margin: 0 0.5rem 0 0.5rem;
`
export const Categoria = styled.span<CategoriaProps>`
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  margin: 0.2rem 2rem 0 0.5rem;
  border-radius: 0.5rem;
  color: ${variaveis.cinzaClaro};
  background-color: ${(props) => RetornaCorCategoria(props)};
`
export const DadosEditaveis = styled.ul`
  margin-bottom: 0.5rem;
`
export const ContatoInfos = styled.input`
  height: 1rem;
  width: 15rem;
  margin-left: 0.5rem;
  border: none;
  background-color: transparet;
  cursor: pointer;
`
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const BotaoEsquerdo = styled.button`
  font-weight: bold;
  font-size: 0.75rem;
  color: #fff;
  padding: 0.5rem 0.75rem;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinza};
  border-radius: 0.5rem 0 0 0.5rem;
`
export const BotaoDireito = styled(BotaoEsquerdo)`
  border-radius: 0 0.5rem 0.5rem 0;
  margin-left: 0.05rem;
`
export const BotaoSalvar = styled(BotaoEsquerdo)`
  background-color: ${variaveis.verde};
`
export const BotaoExcluir = styled(BotaoDireito)`
  background-color: ${variaveis.vermelho};
`
