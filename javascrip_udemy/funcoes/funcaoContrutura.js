function carro (velocidadeMax = 200, delta = 5){
    //atributo privado (só tem dentro da função)
    let velocidadeAtual = 0
    //metodo publico (por conta do this ele pode ser acessado fora da função)
    this.acelerar = function () {
        if(velocidadeAtual + delta >=velocidadeAtual){
            velocidadeAtual +=delta
        }else {
            velocidadeAtual = velocidadeMax
        }
    }
// metodo publico
this.getVelocidadeAtual =function(){
    return velocidadeAtual
}
}

const uno = new carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new carro (350, 20)

ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())