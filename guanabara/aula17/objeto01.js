let amigo = {
    nome: 'Jose',
    sexo: 'M',
    peso: 58.6,
    engordar(p=0){
        console.log('Engorgou')
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
//console.log(amigo)

