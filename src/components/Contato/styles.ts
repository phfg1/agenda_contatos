import styled from 'styled-components'

export const Card = styled.div`
  backgorund-color: #fcfcfc;
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
export const Categoria = styled.span`
  font-size: 0.8rem;
  margin: 0.2rem 2rem 0 0.5rem;
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
  background-color: #2f3640;
  border-radius: 0.5rem 0 0 0.5rem;
`
export const BotaoDireito = styled(BotaoEsquerdo)`
  border-radius: 0 0.5rem 0.5rem 0;
  margin-left: 0.05rem;
`
