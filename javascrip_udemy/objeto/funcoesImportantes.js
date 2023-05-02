const pessoa = {
    nome: 'Elany',
    idade: 27,
    peso: 62
}

console.log(Object.keys(pessoa))//pega só as chaves
console.log(Object.values(pessoa))//pega só os valores
console.log(Object.entries(pessoa)) // transforma cada atributo em um array
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}:${e[1]}`)
})
// fazendo destruing
Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}:${valor}`)
})
//aqui vc insere um novo atributo e pode fazer certas modificações
Object.defineProperty(pessoa, 'dataNascimento',{ 
    enumerable: true, //vai ser listado (.keys)
    writable:false, //n poderá ser modificado
    value: '01/01/2019'
})
pessoa.dataNascimento = '05/05/2527'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign
const dest={a:1}
const o1={b:2}
const o2={c:3, a:4}
const obj = Object.assign(dest, o1,o2)// dest recebe os atributos de o1 e o2
console.log(obj)