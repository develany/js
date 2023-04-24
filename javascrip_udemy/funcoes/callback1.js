const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir (nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // forEach é uma função que vai chamar cada item do arrey, sedo o 1 o proprio elemento e o segundo o indice
fabricantes.forEach(fabricante => console.log(fabricante))
