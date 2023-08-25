const valores = [4.5, 8.7, 5.9, 9.7]
console.log(valores[5], valores[2])
console.log(valores[7])

valores[5] = 10
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste')
console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)
