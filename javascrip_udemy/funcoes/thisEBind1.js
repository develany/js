const pessoa ={
    saudacao: 'Bom dia',
    falar (){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcinal e 00
const falarDePessoa = pessoa.falar.bind(pessoa) //bind escolhe onde this vai agir
falarDePessoa()

