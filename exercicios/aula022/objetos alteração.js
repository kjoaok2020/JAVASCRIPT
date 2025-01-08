let personagem = {
    nome: 'João Paulo',
    idade: 26,
    beleza:'Lindo',
    situacao:'namorando',
    profisão: ['apiclador', 'desenvolvedor'],
    pais:{
        pai:'vicente',
        mae:'lilian'
    }

}

personagem.nome = 'Juão Paulo'
personagem.idade += 2
personagem.profisão.push('desingner')


console.log(personagem.nome)
console.log(personagem.idade)
console.log(personagem.profisão)