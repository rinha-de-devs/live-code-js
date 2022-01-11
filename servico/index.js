const Cerveja = require('../dominio')

class ServicoCerveja {

    constructor(repositorio){
        this.repositorio = repositorio
    }

    inserirCerveja(cerveja){
        const cervejaPraSalvar = new Cerveja(cerveja.sku, cerveja.nome, cerveja.tipo, cerveja.quantidade)
        this.repositorio.inserir(cervejaPraSalvar)
        return cervejaPraSalvar.nome
    }

    buscarCervejas(){
        return this.repositorio.buscarTodas()
    }

    buscarCervejaPorId(id){
        const cerveja = this.repositorio.buscarCervejaPorId(id)
        if(cerveja){
            return cerveja
        }
        return Error('Erro na busca da cerveja')
    }

    alterarCerveja(cerveja){
        const resultado = this.repositorio.alterarCerveja(cerveja)
        if(resultado){
            return resultado 
        }
        return Error('Erro na exclusão da cerveja')
    }

    excluirCerveja(id){
        const resultado = this.repositorio.excluirCerveja(id)
        if(resultado){
            return resultado 
        }
        return Error('Erro na exclusão da cerveja')
    }
}

module.exports = ServicoCerveja