//funcao sem retorno
function imprimirSoma(a, b){
  console.log(a + b)
} 

 ImprimirSoma(2, 3)
 imprimirSoma(2)
 imprimirSoma(2, 10, 4, 5, 6, 7, 8)
 imprimirSoma()

 function soma(a, b = 0){
   return a + b

 }

  console.log(soma(2, 3))
  console.log(soma(2))
  console.log(soma())
