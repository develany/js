function meuObjeto (){} // funçao costrutora, aqui no caso constroi obj
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto


// ao instanciar um novo obj a partir de uma função construtora esse novo obj tem como prototipo a função construtora:
console.log(obj1.__proto__===obj2.__proto__)
console.log(meuObjeto.prototype===obj1.__proto__)

meuObjeto.prototype.nome='Elany'
meuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}
obj1.falar()
obj2.nome='John'
obj2.falar()
const obj3 = {}
obj3.__proto__=meuObjeto.prototype // definindo meuObjeto como prototipo
obj3.nome='obj3'
obj3.falar()