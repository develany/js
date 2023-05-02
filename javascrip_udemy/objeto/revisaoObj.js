// coleção dinâmica de pares chve/valor

const produto = new Object // new object é uma funçao construtora onde instacia um novo objeto
produto.nome =  'Cadeira'
produto ['marca do produto'] = 'Generica'
produto.preco = 220
console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo:'A4',
    valor: 8900,
    proprietario: {
        nome:'Elany',
        idade: 26,
        endereco:{
            logradouro: 'Rua Tiago Gomes',
            numero: 1014
        }
    }, 
    condutores:[{
        nome: 'John',
        idade: 30
    }, {
        nome: 'Aladdim',
        idade: 5
    }],
    calcularValorSeguro (){
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Major Assis'
console.log(carro)
delete carro.condutores
console.log(carro)