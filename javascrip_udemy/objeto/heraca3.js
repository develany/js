const pai = {nome:'Pedro', corCabelo:'preto'}
const filha1 = Object.create(pai) // cria um novo obj tendo como prototipo o obj pai
filha1.nome='Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {nome:{value:'Bia', writable:false, enumerable:true}})
console.log(filha2.nome)
filha2.nome='Elany'
console.log(`${filha2.nome} tem o cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) // mesmo tendo herança o metodo keys só apresenta o que foi denfinido no obj atual
console.log(Object.keys(filha2))
for (let key in filha2){filha2.hasOwnProperty(key)?console.log(key):console.log(`Por herança`)} //hasOwnProperty(tem propriedade própria) 
