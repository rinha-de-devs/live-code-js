const ServicoCerveja = require('.')
const Cerveja = require('../dominio')
const RepositorioCerveja = require('../repositorio/bancoMemoria')

describe("Testa Servico Cerveja", () => {

    const repositorioCerveja = new RepositorioCerveja()
    let servicoCerveja

    beforeEach(() => {
        servicoCerveja = new ServicoCerveja(repositorioCerveja)
    })

    it("deve inserir cerveja corretamente", () => {
        const cerveja = new Cerveja("001", "Patagonia", "Pilsen", 10)
        const cervejaSalva = servicoCerveja.inserirCerveja(cerveja)
        expect(cervejaSalva).toBe("Patagonia")
    })

    it("deve buscar todas as cervejas", () => {
        const cerveja = new Cerveja("001", "Patagonia", "Pilsen", 10)
        servicoCerveja.inserirCerveja(cerveja)
        const cervejasEncontradas = servicoCerveja.buscarCervejas()
        expect(cervejasEncontradas).toEqual(expect.arrayContaining([cerveja]))
    })
})