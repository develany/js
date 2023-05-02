const sequencia ={
    _valor, //Conveção de isso é um atributo escondido
    get valor(){return this._valor++},
    set valor(valor) {
        if(valor> this._valor){
            this._valor=valor
        }
    }
}
console.log(sequencia.valor,sequencia.valor)
