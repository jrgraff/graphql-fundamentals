import { opcoesFetch } from './config'

const listarClientes = () =>
  fetch('http://localhost:4000', opcoesFetch('{clientes {id nome cpf}}'))
    .then(resp => resp.json())
    .then(dados => dados.data.clientes)

const buscarClientePorId = id =>
  fetch('http://localhost:4000', opcoesFetch(`{cliente(id: ${id}) {nome cpf}}`))
    .then(resp => resp.json())
    .then(dados => dados.data.cliente)

const adicionarCliente = cliente =>
  fetch('http://localhost:4000', opcoesFetch(`
  mutation {
    adicionarCliente(nome: "${cliente.nome}")
  }
`))
    .then(resp => resp.json())
    .then(dados => dados.data.clientes)

const alterarCliente = (id, cliente) =>
  fetch('http://localhost:4000', opcoesFetch(`
  mutation {
    atualizarCliente(id: "${id}", nome: "${cliente.nome}", cpf: "${cliente.cpf}") {
      nome
    }
  }
`))
    .then(resp => resp.json())
    .then(dados => dados.data)

const removerCliente = id =>
  fetch('http://localhost:4000', opcoesFetch(`
    mutation {
      deletarCliente(id: ${id})
    }
  `))
    .then(resp => resp.json())
    .then(dados => dados.data.clientes)

export default {
  listarClientes,
  buscarClientePorId,
  adicionarCliente,
  alterarCliente,
  removerCliente
}