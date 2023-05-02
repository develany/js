//Cadeia de protótipos (prototype chain)
Object.prototype.attr0='0'
const avo={attr1:'a'}
const pai={__proto__:avo, attr2:'b', attr3:'3'}
const filho={__proto__:pai, attr3:'c'}
console.log(filho.attr0, filho.attr1,filho.attr2, filho.attr3, filho.attr4)// aq o sistema vai buscando debaixo pra cima e o primeiro q encotra é o q vale

const carro= {
    velAtual:0,
    velMax:200,
    acelera(delta){
        if (this.velAtual+delta<=this.velMax) {
            this.velAtual=+delta
        } else {
            this.velAtual=this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo:'F40',
    velMax:324,
}
const volvo = {
    modelo:'V40',
    status(){
        return `${this.modelo}:${super.status()}`// super vai procura essa função no protótipo
    }
}
Object.setPrototypeOf(ferrari,carro) // essa funcao define que carro é o protótipo de ferrari
Object.setPrototypeOf(volvo,carro) 

console.log(ferrari)
console.log(volvo)

volvo.acelera(100)
console.log(volvo.status())