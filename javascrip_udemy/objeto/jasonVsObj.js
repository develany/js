const obj = {a:1, b:2, c:3, soma (){return a+b+c}}
console.log(JSON.stringify(obj))// converte para o formato JSON

console.log(JSON.parse('{"a":1, "b":2, "c":3}')) //converte para o formato obj
console.log(JSON.parse('{"a":1.7, "b":"string", "c":true, "d":{}, "e":[]}'))

//proxima aula 129