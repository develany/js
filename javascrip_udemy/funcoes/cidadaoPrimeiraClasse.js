//Função em JS é First-Class Object (Citizens) -  Voçe pode usar a função como dado
//Higher-order function - Ordens de organização

// Criar de forma literal
function fun1() {}
//Função armazenada em uma váriavel 
const fun2 = function () {}
// Amazenando em um array
const array = [function (a,b) {return a + b}, fun1, fun2]
console.log (array[1](2,3))
//Armazenando em um atributo de um objeto
const obj = {}
obj.falr = function () { return  'opa'}
console.log(obj.falr())
// passar funçao como parametro
function run (fun) {
    fun()
}
run (function (){console.log('executando')})

//uma funçao pode retornar/conter uma funçao
function soma (a,b){
    return function (c){
        console.log(a+b+c)
    }
} 
soma (2,3)(4)


//proxima aula 89