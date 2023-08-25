const peso1 = 2.0
const peso2 = Number('4.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 400
const avaliacao2 = 700

const total = avaliacao1 * peso1 + peso2 * avaliacao2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2))
console.log(typeof media)
console.log()