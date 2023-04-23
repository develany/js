const soma = function(x,y){
    return x + y
}
const imprimirResultados = function (a,b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultados (2,4)
imprimirResultados (2,4,soma)
imprimirResultados(2,4,function (x,y){
    return x-y
})
imprimirResultados (2,4, (x,y) => x*y)

const pessoa = {
    falar (){
        console.log('opa')
    }
}

pessoa.falar()
