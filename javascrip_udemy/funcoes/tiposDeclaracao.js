console.log(soma (3,4))

// function declaration - dessa forma as funções são lidas primeiro e vc pode chamá-las em linhas acima
function soma(x,y) {
    return x + y
}

//function expression
const sub = function (x,y){
    return x-y
}
console.log(sub (3,4))

// named function expression - pouco usada
const mult = function mult (x,y){
    return x*y
}
console.log(mult (3,4))

//prox 104
