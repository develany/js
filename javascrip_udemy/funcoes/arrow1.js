//modo tradicional
let dobro = function (a){
    return 2*a
}
//modo 1 de usar arrow (funcão anonima- vc só consegue chamar ela novamente se armazernar ela dentro de uma váriavel)
dobro = (a)=> {
    return 2*a
}
//modo 2 - quando vc só tem um parametro e uma so coisa a se fazer(cabe em uma linha)
dobro = a => 2*a
console.log(dobro(Math.PI))

let ola = function(){
    return 'Ola'
}

ola = () => 'Ola' //n tem parametro
ola = _ => 'Ola' // possui um paramtro, mas pra chamá-la n precisa por parametros

console.log(ola())
