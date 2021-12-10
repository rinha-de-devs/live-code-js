const fastify = require('fastify')({ logger: true })
const ServicoCerveja = require('./servico')
const RepositorioCerveja = require('./repositorio')
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

    servicoCerveja.inserirCerveja(cerveja)

    res.code(201).send(cerveja)
})

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()