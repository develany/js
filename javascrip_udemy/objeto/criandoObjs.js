//Usadando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções cosntrutoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesc = ()=> {
        return preco*(1-desc)
    }
}
const p1 = new Produto('Caneta', 7.99,0.15)
const p2 = new Produto('Notebook', 2855.99, 0.25)
console.log(p1.getPrecoComDesc(), p2.getPrecoComDesc())

// Função Factory

function criaFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30-faltas)
        }
    }
}
const f1 = criaFuncionario('Elany', 7980, 4)
const f2 = criaFuncionario('John', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Elany'
console.log(filha)

//Uma funçao famosa que retorna Objeto...
const fromJSOM = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSOM.info)