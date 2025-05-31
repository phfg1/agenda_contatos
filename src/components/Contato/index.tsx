import {
  BarraAcoes,
  BotaoDireito,
  BotaoEsquerdo,
  Card,
  Categoria,
  ContatoInfos,
  DadosEditaveis,
  Nome,
  TopCard
} from './styles'

const CardContato = () => {
  return (
    <>
      <Card>
        <TopCard>
          <Nome>Nome</Nome>
          <Categoria>Categoria</Categoria>
        </TopCard>
        <DadosEditaveis>
          <li>
            <ContatoInfos readOnly type="number" placeholder="telefone" />
          </li>
          <li>
            <ContatoInfos readOnly type="email" placeholder="e-mail" />
          </li>
          <li>
            <ContatoInfos readOnly type="date" placeholder="aniversário" />
          </li>
        </DadosEditaveis>
        <BarraAcoes>
          <BotaoEsquerdo>Editar</BotaoEsquerdo>
          <BotaoDireito>Remover</BotaoDireito>
        </BarraAcoes>
      </Card>
    </>
  )
}

export default CardContato
