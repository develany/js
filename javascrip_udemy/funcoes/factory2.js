function criaProduto(nome, valor){
    return{
        nome,
        valor,
        desconto: 0.1
    }
}
console.log(criaProduto('tv',1500))