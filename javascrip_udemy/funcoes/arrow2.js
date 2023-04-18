function pessoa () {
    this.idade = 0
//setInterval é uma função que fica chamando uma outra função dentro de um intervalo de tempo que vc define
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    })
}

new pessoa // chamando a funçao