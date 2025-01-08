let cores = [
     {nome:'branco',qt:10},
     {nome:'azul',qt:5},
     {nome:'preto',qt:4},
     {nome:'vermelho',qt:3}
]

for(let i in cores){
    cores[i].nome 
}
console.log(cores)

for (let cor of cores){
    console.log(`Nome: ${cor.nome} - ${cor.qt}`)
}