const http = require('http')
const people = require('./data/people')

const server = http.createServer((req, res) => {
    if(req.url === '/api' && req.method === 'GET'){
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(people))
    }else if(req.url.match(/\/api\/([0-9]+)/)){
        const id = req.url.split('/')[2]
        const person = people.find((p) => p.id == id)
        if(!person){
            res.writeHead(404, {'Content-Type': 'application/json'})
            res.end(JSON.stringify({message: 'Pessoa nao encontrada'}))
        } else {
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(person))
        }
    }else{
        res.writeHead(400, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: 'Rota nao encontrada'}))
    }
})

server.listen(3000, () => console.log("Server rodando na porta 3000"))

module.exports = server