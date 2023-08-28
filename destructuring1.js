// novo recurso ES2015
 const pessoa = {
    nome: 'Ana',
    idade: 14,
    endereco: {
        logradouro:'Rua 23',
        numero:145

    }
 }
 const {nome, idade} = pessoa
 console.log(nome, idade)

 const{nome: n, idade: i } = pessoa
 console.log(n, 1)

 const {sobrenome, bemHumorada = true} = pessoa
 console.log(sobrenome, bemHumorada)

 const {endereco: {logradouro, numero, cep} } = pessoa
 console.log(logradouro, numero, cep)

 const{conta: { ag, num } } = pessoa
 console.log(ag, num)