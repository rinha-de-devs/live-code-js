const fastify = require('fastify')({ logger: true })
const ServicoCerveja = require('./servico')

const RepositorioCerveja = require('./repositorio/bancoMemoria')
const CassandraRepositorio = require('./repositorio/cassandraRepositorio')
const cassandraRepositorio = new CassandraRepositorio()
const repositorioCerveja = new RepositorioCerveja()

const servicoCerveja = new ServicoCerveja(repositorioCerveja)


fastify.get('/cervejas', async (request, reply) => {
  return servicoCerveja.buscarCervejas()
})

fastify.get('/cerveja/:id', async(req, resp) => {
    const id = req.params.id

    const cerveja = servicoCerveja.buscarCervejaPorId(id)

    if(!cerveja){
        const msg = {"message": `Cerveja id: ${id} nao foi encontrada`}
        resp.code(404).send(msg)
    }

    return cerveja
})

fastify.post('/cerveja', async(req, res) => {
    const cerveja = req.body

    const cervejaNome = servicoCerveja.inserirCerveja(cerveja)

    res.code(201).send({"nome": cervejaNome})
})

fastify.put('/cerveja/:id', async(req, res) => {
  const cerveja = req.body
  const id = req.params.id
  cerveja.id = parseInt(id)

  console.log(cerveja)
  const cervejaAtualizada = servicoCerveja.alterarCerveja(cerveja)
  res.code(200).send(cervejaAtualizada)
})

fastify.delete('/cerveja/:id', async(req, res) =>{
  const id = req.params.id

  const mensagem = servicoCerveja.excluirCerveja(id)

  res.code(200).send(mensagem)
})

const start = async () => {
  try {
    await fastify.listen(8080)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()