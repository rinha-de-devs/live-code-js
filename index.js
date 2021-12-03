const fastify = require('fastify')({ logger: true })

const cervejas = [
    {
        "nome": "Bud",
        "tipo": "Larger",
        "quantidade": 10
    },
    {
        "nome": "Skol",
        "tipo": "Pilsen",
        "quantidade": 15
    },
    {
        "nome": "Coruja",
        "tipo": "IPA",
        "quantidade": 5
    }
]

fastify.get('/cervejas', async (request, reply) => {
  return cervejas
})

fastify.get('/cerveja/:nome', async(req, resp) => {
    const nomeDaCerveja = req.params.nome

    const cerveja = cervejas.find(elem => elem.nome === nomeDaCerveja)

    if(!cerveja){
        const msg = {"message": `Cerveja ${nomeDaCerveja} nao foi encontrada`}
        resp.code(404).send(msg)
    }

    return cerveja
})

fastify.post('/cerveja', async(req, res) => {
    const cerveja = req.body

    if(cerveja?.nome || cerveja?.tipo || cerveja?.quantidade <= 0){
        const msg = {msg: "ERRRRROOOOOUUUUU"}
        res.code(400).send(msg)
    }

    cervejas.push(cerveja)

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