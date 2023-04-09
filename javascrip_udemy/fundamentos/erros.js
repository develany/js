function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}
// abaixo testa o try, se der erro entra no catch (aqui vc pode relançar o erro usando o throw)e independe dos dois ocorre o finally
function imprimiNomeGritando (obj){
    try{
        console.log (obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally{
        console.log('fina')
    }
}
const obj = { nome: 'Roberto'}
imprimiNomeGritando(obj)