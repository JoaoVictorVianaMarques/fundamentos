let valor // não inicializada
console.log(valor)

valor = null
console.log(valor)
//console.log(valor.toString()) // erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.54
console.log(produto)

produto.preco =  undefined //evite atribuir undefined
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)