const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

const notasBaixas = notas.filter(nota => nota <7) // filter vai retornar true ou false e ele inclui no novo arrey os resutados trues

console.log(notasBaixas)