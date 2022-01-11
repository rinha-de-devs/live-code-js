class BancoEmMemoria {

    constructor(){
        this._dados = []
    }

    inserir(cerveja){
        this._dados.push(cerveja)
    }

    buscarTodas(){
        return this._dados
    }

    buscarCervejaPorId(id){
        return this._dados.find(cerveja => cerveja.id == id)
    }

    alterarCerveja(cerveja){
        const idElemento = this._dados.findIndex(elemento => elemento.id == cerveja.id)
        console.log(idElemento)

        if(idElemento != null){
            const cervejaAtualizada = Object.assign(this._dados[idElemento], cerveja)
            this._dados[idElemento] = cervejaAtualizada

            return this._dados[idElemento]
        }

        throw Error('Não existe cerveja para atualizar')
    }

    excluirCerveja(id){
        const idElemento = this._dados.findIndex(cerveja => cerveja.id == id)

        if(idElemento != null){
            this._dados.splice(idElemento, 1)
            return {
                "message": "Cerveja removida com sucesso"
            }
        }

        throw Error('Não existe cerveja para excluir')
    }

}

module.exports = BancoEmMemoria