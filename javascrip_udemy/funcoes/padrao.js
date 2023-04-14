//estrattegia 1 para gerar valor padrao
function soma1(a,b,c){
    a=a||1
    b=b||1
    c=c||1
    return a+b+c
}

console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0)) // gerou um bug pois ele aqui o 0 vai assumir valor de falso
//estrategia 2,3 e 4 para gerar um valor padrao
function soma2(a,b,c){
    a=a !== undefined ? a:1
    b= 1 in arguments ? b:1 // o primeiro 1 se refere ao indice
    c= isNaN(c)? 1 : c
    return a+b+c
}
console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))

// valor padrao do ec2015 - a melhooor
function soma3(a=1, b=1, c=3){
    return a+b+c
}
console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0))