let personagem = {
    nome: 'João Paulo',
    idade: 26,
    sobrenome:'Lindo',
    nomecompleto: function () {
        return `${this.nome} ${this.sobrenome} `
    }

}
console.log(personagem.nomecompleto())
