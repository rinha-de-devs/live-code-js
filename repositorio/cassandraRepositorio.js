class CassandraRepositorio {

    constructor(){
        this._cassandra = require('cassandra-driver')
        const auth = new this._cassandra.auth.PlainTextAuthProvider('cassandra', 'cassandra')
        const distance = this._cassandra.types.distance
        const options = {
            contactPoints:['localhost'], 
            localDataCenter: 'datacenter1', 
            authProvider: auth, 
            pooling: { 
                coreConnectionsPerHost: { 
                    [distance.local]: 2, 
                    [distance.remote]: 1 
                } 
            }}
        this.client = new this._cassandra.Client(options)
    }

    async inserir(cerveja){
        const query = `INSERT INTO liveCode.cerveja (sku, nome, tipo, quantidade) VALUES (?, ?, ?, ?)`
        const resultado = await this.client.execute(query, [cerveja.sku, cerveja.nome, cerveja.tipo, cerveja.quantidade], {prepare: true})
        return resultado.rows
    }

    async buscarTodas(){
        const query = 'SELECT * FROM liveCode.cerveja'
        const resultado = await this.client.execute(query, [], {prepare: true})
        return resultado.rows
    }

    async buscarCervejaPorId(id){
        const query = 'SELECT * FROM liveCode.cerveja WHERE sku = ?'
        const resultado = await this.client.execute(query, [id], {prepare: true})
        return resultado.rows[0]
    }

    async alterarCerveja(cerveja){
        const query = 'UPDATE liveCode.cerveja SET nome = ?, tipo = ?, quantidade = ?, '
        const resultado = await this.client.execute(query, [cerveja.nome, cerveja.tipo, cerveja.quantidade], {prepare: true})
        return resultado.rows[0]
    }

    async excluirCerveja(id){
        const query = 'DELETE FROM liveCode.cerveja WHERE id = ?'
        const resultado = await this.client.execute(query, [id], {prepare: true})
    }
}

module.exports = CassandraRepositorio