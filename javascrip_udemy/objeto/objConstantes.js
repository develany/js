//pessoa -> espaço 1 na memória -> {...}
const pessoa = {nome:'John'}
pessoa.nome = 'Elany'
console.log(pessoa)

// o que fica constante sem poder alterar é o espaço especifico na memória, os atributos do objeto podem mudar.

Object.freeze(pessoa) // isso faz com q n seja mais possivel alterar os atributos do objeto]
pessoa.nome = "Maria"

console.log(pessoa.nome)