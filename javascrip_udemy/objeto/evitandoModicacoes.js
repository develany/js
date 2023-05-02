//Object.preventeExtensions - não será possivel inserir novos atributos

const produto = Object.preventExtensions({
    nome: 'Qualque', preco: 2.99, tag:'promocao'
})
console.log('Extensível:', Object.isExtensible(produto))// diz se é possível inserir novos atributos
produto.nome = 'Borracha'
produto.descricao= 'Boarracha branca'
delete produto.tag
console.log(produto)

//Object.seal - não será possivel inserir novos atributos e nem excluir

const pessoa = {nome: 'Elany', idade: 27}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))// diz se está selado
pessoa.sobrenome='Peixoto'
delete pessoa.nome
pessoa.idade=30
console.log(pessoa)

//Object.freeze - Não da pra fazer nenhuma alteração

