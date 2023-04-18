//this dentro de uma funfção normal vai apontar para o global/windows

let comparaComThis = function (param){
    console.log (this === param)
}

comparaComThis (global)

const obj = {}
// aqui o this vai apontar para o obj
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global) // ou comparaComThis(this) 
comparaComThis(obj)
//this dentro de uma função arrow vai apontar para o mudulo que foi inserido
let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global)
comparaComThisArrow(module.exports) // ou comparaComThis(this)


